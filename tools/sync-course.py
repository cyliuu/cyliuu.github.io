#!/usr/bin/env python3
"""Copy a course dist into the blog; never edit the original or V1.01 archive."""
import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path
from urllib.parse import unquote, urlsplit

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('dist', type=Path, help='V1.02 visual draft dist directory')
parser.add_argument('--check', action='store_true', help='Report changes without writing')
args = parser.parse_args()
src = args.dist.expanduser().resolve(strict=True)
dst = Path(__file__).resolve().parents[1] / 'source/courses/cpp'
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
        if rel.parts[0] == 'V1.01':
            raise ValueError('Source must not contain reserved V1.01 archive')
        resolved[str(p.resolve(strict=True))] = rel.as_posix()
        if p.is_dir():
            inventory(p, ancestors + (real,))
        elif p.is_file():
            files[rel.as_posix()] = p
        else:
            raise ValueError('Unsupported file: ' + str(p))

inventory(src)
rendered = {}
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

# Validate and prepare every change before modifying any destination file.
def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').digest()

changed = []
for rel, origin in files.items():
    target = dst / rel
    data = rendered.get(rel)
    same = target.is_file() and not target.is_symlink()
    if same:
        same = (target.read_bytes() == data) if data is not None else (digest(target) == digest(origin))
    if not same:
        changed.append(rel)

obsolete = [p for p in dst.rglob('*') if p.is_file() and p.relative_to(dst).parts[0] != 'V1.01'
            and p.relative_to(dst).as_posix() not in files]
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
        if p.is_dir() and p.relative_to(dst).parts[0] != 'V1.01' and not any(p.iterdir()):
            p.rmdir()
print(f'{len(files)} source files; {len(changed)} updates; {len(obsolete)} removals' + (' (dry run)' if args.check else ''))
