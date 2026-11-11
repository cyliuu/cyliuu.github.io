#!/usr/bin/env python3
"""Copy a course dist into the blog; never edit the original or version archives.

The visual draft (dist) is strictly read-only. Knowledge figures inside it are
referenced with machine-local iCloud relative URLs so ``file://`` previews keep
working. Those references are NEVER rewritten in the original: only the copied
destination files are converted to portable site-relative paths, and the real
image files are copied into the destination as well.
"""
import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path
from urllib.parse import unquote, urlsplit

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('dist', type=Path, help='Source website dist directory for the intended release')
parser.add_argument('--check', action='store_true', help='Report changes without writing')
parser.add_argument('--target', type=Path, required=True, help='Explicit destination directory')
parser.add_argument('--preserve', action='append', default=[], help='Relative path to protect; repeat as needed')
parser.add_argument('--delete-obsolete', action='store_true', help='Delete destination files absent from source, except protected paths')
parser.add_argument('--figures-only', action='store_true', help='Refresh only knowledge figures and their inline references (for the trimmed release copy)')
args = parser.parse_args()
src = args.dist.expanduser().resolve(strict=True)
dst = args.target.expanduser().absolute()
if dst.is_symlink() or any(p.is_symlink() for p in dst.parents):
    parser.error('Destination must not use symbolic links')
dst = dst.resolve(strict=True)
protected = []
for name in args.preserve:
    path = Path(name)
    if path.is_absolute() or not path.parts or '..' in path.parts or path == Path('.'):
        parser.error('Protected paths must be nonempty relative paths without ..')
    protected.append(path.as_posix().rstrip('/'))
def is_protected(name):
    return any(name == p or name.startswith(p + '/') for p in protected)
if not (src / 'index.html').is_file() or not dst.is_dir():
    parser.error('Source index.html or destination course directory is missing')
if src == dst or src in dst.parents or dst in src.parents:
    parser.error('Source and destination must be separate directories')

files = {}
resolved = {}

def inventory(folder, ancestors=()):
    real = folder.resolve(strict=True)
    if real in ancestors:
        raise ValueError('Circular symlink: ' + str(folder))
    for p in sorted(folder.iterdir()):
        rel = p.relative_to(src)
        if p.name == '.DS_Store':
            continue
        if is_protected(rel.as_posix()):
            raise ValueError('Source overlaps a protected path: ' + rel.as_posix())
        resolved[str(p.resolve(strict=True))] = rel.as_posix()
        if p.is_dir():
            inventory(p, ancestors + (real,))
        elif p.is_file():
            files[rel.as_posix()] = p
        else:
            raise ValueError('Unsupported file: ' + str(p))

inventory(src)
rendered = {}

# Knowledge figures: the ORIGINAL dist keeps machine-local iCloud relative
# <img> URLs for file:// previews. Only the destination copies are rewritten
# to portable site-relative paths; the real PNGs are copied alongside them.
FIGURE_PREFIX = 'assets/knowledge-figures/'
figure_files = {}
source_digests = {}
for name in ('knowledge-content.js', 'reading-data.js'):
    if name not in files:
        continue
    origin = files[name]
    source_digests[name] = hashlib.sha256(origin.read_bytes()).digest()
    text = origin.read_text()

    def portable_figure(match):
        encoded = match.group(1)
        if not encoded.startswith('../'):
            return match.group(0)
        filename = unquote(encoded.rsplit('/', 1)[-1])
        real = (src / unquote(encoded)).resolve()
        if not real.is_file():
            raise ValueError('Missing local knowledge figure: ' + str(real))
        figure_files[FIGURE_PREFIX + filename] = real
        return 'src=\\"' + FIGURE_PREFIX + filename + '\\"'

    rendered[name] = re.sub(r'src=\\"((?:\.\./)+[^"\\]+?)\\"', portable_figure, text).encode()

files.update(figure_files)

# Rewrite offline fallback mappings to the copied, portable relative URLs.
name = 'effect-media-data.js'
if name in files:
    text = files[name].read_text()
    text = re.sub(r'"((?:assets|downloads)/[^"\n]+)": "file:[^"\n]+"',
                  lambda m: json.dumps(m[1]) + ': ' + json.dumps(m[1]), text)
    rendered[name] = text.encode()

name = 'classroom-data.js'
if name in files:
    text = files[name].read_text()
    data = json.loads(text[text.index('{'):].rstrip().removesuffix(';'))
    keys = set()

    def collect(x):
        if isinstance(x, dict):
            key = x.get('key')
            if isinstance(key, str) and key.startswith(('assets/', 'downloads/')):
                keys.add(key)
                for field in ('source', 'url'):
                    value = x.get(field, '')
                    if isinstance(value, str) and value.startswith(('/Users/', 'file:')):
                        resolved[unquote(urlsplit(value).path)] = key
            for value in x.values():
                collect(value)
        elif isinstance(x, list):
            for value in x:
                collect(value)

    collect(data)
    for key in keys:
        if not (src / key).exists():
            raise ValueError('Missing course resource: ' + key)

    def local_url(match):
        path = unquote(urlsplit(match.group()).path)
        if path not in resolved:
            raise ValueError('Unmapped local resource: ' + path)
        return resolved[path]

    def rewrite(x):
        if isinstance(x, str):
            return re.sub(r'''file://[^\s"'<>]+''', local_url, x)
        if isinstance(x, list):
            return [rewrite(v) for v in x]
        if isinstance(x, dict):
            key = x.get('key')
            if isinstance(key, str) and key.startswith(('assets/', 'downloads/')):
                x = dict(x)
                for field in ('source', 'url'):
                    if field in x:
                        x[field] = key
            return {k: rewrite(v) for k, v in x.items()}
        return x

    rendered[name] = ('const classroomData = ' + json.dumps(rewrite(data), ensure_ascii=False, indent=2) + ';\n').encode()

if args.figures_only:
    # Trimmed release copy: keep its own data files as-is and rewrite only the
    # figure references that actually appear there. This avoids pulling in the
    # full draft's project 2-8 figures, which are not used by the trimmed copy.
    full_figure_map = dict(figure_files)
    trimmed = {}
    local_files = {}
    for name in ('knowledge-content.js', 'reading-data.js'):
        target = dst / name
        if not target.is_file():
            raise ValueError('Missing trimmed data file: ' + str(target))
        text = target.read_text()

        def portable_trimmed(match):
            encoded = match.group(1)
            if not encoded.startswith('../'):
                return match.group(0)
            filename = unquote(encoded.rsplit('/', 1)[-1])
            real = (src / unquote(encoded)).resolve()
            if not real.is_file():
                raise ValueError('Missing local knowledge figure: ' + str(real))
            local_files[FIGURE_PREFIX + filename] = real
            return 'src=\\"' + FIGURE_PREFIX + filename + '\\"'

        converted = re.sub(r'src=\\"((?:\.\./)+[^"\\]+?)\\"', portable_trimmed, text)
        trimmed[name] = converted.encode()
        # Already-converted references keep their source mapping, so a missing
        # figure is restored on later runs instead of being silently skipped.
        for match in re.finditer(r'src=\\"(assets/knowledge-figures/[^"\\]+)\\"', converted):
            key = match.group(1)
            if key in full_figure_map:
                local_files[key] = full_figure_map[key]
            elif not (dst / key).is_file():
                raise ValueError('Cannot locate source for figure: ' + key)
    figure_files = local_files
    files = dict(figure_files)
    files.update({name: src / name for name in trimmed})
    rendered = trimmed

# Validate and prepare every change before modifying any destination file.
def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').digest()

# Fail before writing if any destination ancestor is a link or conflicts with a directory.
for rel in files:
    target = dst / rel
    for parent in target.parents:
        if parent == dst:
            break
        if parent.is_symlink() or (parent.exists() and not parent.is_dir()):
            raise ValueError('Unsafe destination ancestor: ' + str(parent))
    if target.is_dir():
        raise ValueError('Destination directory conflicts with a source file: ' + str(target))
changed = []
for rel, origin in files.items():
    target = dst / rel
    data = rendered.get(rel)
    same = target.is_file() and not target.is_symlink()
    if same:
        same = (target.read_bytes() == data) if data is not None else (digest(target) == digest(origin))
    if not same:
        changed.append(rel)
if args.figures_only:
    figure_paths = set(figure_files) | {'knowledge-content.js', 'reading-data.js'}
    changed = [rel for rel in changed if rel in figure_paths]
protected_conflicts = [p for p in protected if p in files or any(p.startswith(n + '/') for n in files)]
if protected_conflicts:
    raise ValueError('Source would overwrite protected paths: ' + repr(protected_conflicts))

obsolete = [p for p in dst.rglob('*') if (p.is_file() or p.is_symlink())
            and not is_protected(p.relative_to(dst).as_posix())
            and p.relative_to(dst).as_posix() not in files] if args.delete_obsolete and not args.figures_only else []
for rel in changed:
    print('UPDATE', rel)
for p in obsolete:
    print('REMOVE', p.relative_to(dst))

if not args.check:
    for rel in changed:
        target = dst / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.is_symlink():
            target.unlink()
        temporary = target.with_name(target.name + '.sync-tmp')
        if rel in rendered:
            temporary.write_bytes(rendered[rel])
        else:
            shutil.copyfile(files[rel], temporary)
        temporary.replace(target)
    for p in obsolete:
        assert dst.resolve() in p.absolute().parents
        p.unlink()
    for p in sorted(dst.rglob('*'), key=lambda p: len(p.parts), reverse=True):
        if args.delete_obsolete and p.is_dir() and not p.is_symlink() and not is_protected(p.relative_to(dst).as_posix()) and not any(p.iterdir()):
            p.rmdir()
    # Guard: the visual draft and its local figure references must never change.
    for name, before in source_digests.items():
        if hashlib.sha256(files[name].read_bytes()).digest() != before:
            raise RuntimeError('Original dist was modified: ' + name)
print(f'{len(files)} source files; {len(changed)} updates; {len(obsolete)} removals' + (' (dry run)' if args.check else ''))
