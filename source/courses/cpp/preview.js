const sampleTaskId = 't-p01-b01';
const projectList = document.querySelector('#project-list');
const readingPreview = document.querySelector('#reading-preview');
const readingSamples = document.querySelector('#reading-samples')?.content;
const tasksById = new Map();
const readingsById = new Map();
const notesById = {
  'v-002': {knowledge: 'k-004', label: '思政故事 2 · 冯·诺依曼的远见'},
  'm-twos-complement': {knowledge: 'k-007', label: '机制 · 补码表示'},
  ...(typeof readingNotes === 'undefined' ? {} : readingNotes),
};

for (const project of courseProjects) {
  for (const task of project.tasks) {
    const entry = {project, task};
    tasksById.set(task.id, entry);
    for (const lessonCase of task.cases) {
      readingsById.set(lessonCase.id, entry);
      for (const knowledge of lessonCase.knowledge) readingsById.set(knowledge.id, entry);
    }
  }
}

function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.textContent = content;
  return node;
}

function link(label, href, className) {
  const node = element('a', className, label);
  node.href = href;
  return node;
}

function responsiveAction(label, shortLabel, href, className = 'row-action') {
  const node = link('', href, className);
  node.setAttribute('aria-label', label);
  const short = element('span', 'action-label-short', shortLabel);
  short.setAttribute('aria-hidden', 'true');
  node.append(element('span', 'action-label-full', label), short);
  return node;
}

function setEffectImageSource(image, key) {
  image.dataset.displayCropKey = key;
  const external = typeof effectMediaSources === 'undefined' ? null : effectMediaSources[key];
  image.src = location.protocol === 'file:' && external ? external : key;
}

function taskHref(task) {
  return 'index.html#' + (task.id === sampleTaskId ? 'task' : task.id);
}

function projectHref(project) {
  return 'index.html#' + project.id;
}

function readingHref(task, id) {
  return 'reading.html#' + id;
}

function inlineText(node, text, references = new Map()) {
  const tokens = /\x60([^\x60]+)\x60|\*\*([^*]+)\*\*|(?:拓展)?案例\s*(?:[A-H]\d*|\d+)|知识点\s*\d+|(?:拓展)?任务\s*(?:[A-H]|\d+)(?:[“「][^”」]+[”」])?/g;
  let cursor = 0;
  for (const match of text.matchAll(tokens)) {
    node.append(text.slice(cursor, match.index));
    const reference = references.get(match[0].split(/[“「]/, 1)[0].replace(/\s/g, ''));
    node.append(match[1] ? element('code', '', match[1]) : match[2] ? inlineText(element('strong'), match[2], references) : reference ? link(reference.label, reference.href) : match[0]);
    cursor = match.index + match[0].length;
  }
  node.append(text.slice(cursor));
  return node;
}

function createTaskSample(project, task, sample) {
  const article = element('article', 'task task-sample');
  article.id = task.id;
  const heading = element('div', 'section-heading');
  const intro = element('div');
  const title = element('h2', 'task-sample-title', task.title);
  title.id = task.id + '-title';
  article.setAttribute('aria-labelledby', title.id);
  intro.append(element('p', 'eyebrow', '项目 ' + project.number + ' · ' + task.kind), title);
  heading.append(intro, element('span', 'badge', '任务页'));
  const tabs = element('nav', 'section-tabs');
  tabs.setAttribute('aria-label', task.title + '栏目');
  article.append(heading, tabs);

  function section(key, label, className = 'task-section') {
    const block = element('section', className);
    block.id = task.id + '-' + key;
    tabs.append(link(label, '#' + block.id));
    article.append(block);
    return block;
  }

  function list(items, references) {
    const node = element('ol');
    node.append(...items.map((item) => inlineText(element('li'), item, references)));
    return node;
  }

  const knowledge = task.cases.flatMap((lessonCase) => lessonCase.knowledge);
  const references = new Map([...task.cases, ...knowledge].map((item) => [
    item.label.replace(/\s/g, ''), {label: item.label, href: readingHref(task, item.id)},
  ]));
  section('description', '任务描述').append(element('h3', '', '任务描述'),
    inlineText(element('p'), task.description));

  const goals = element('dl', 'goal-list');
  for (const [name, items] of sample.goals) {
    const group = element('div');
    const detail = element('dd');
    detail.append(list(items));
    group.append(element('dt', '', name + '：'), detail);
    goals.append(group);
  }
  section('goals', '任务目标').append(element('h3', '', '任务目标'), goals);
  section('analysis', '任务分析').append(element('h3', '', '任务分析'),
    inlineText(element('p'), sample.analysis.lead, references), list(sample.analysis.items, references),
    inlineText(element('p'), sample.analysis.close, new Map([
      [sample.label.replace(/\s/g, ''), {label: sample.label, href: '#' + task.id + '-practice'}],
    ])));

  const practice = section('practice', '任务实施');
  practice.append(element('h3', '', '任务实施'), inlineText(element('h4'), sample.label + ' · ' + sample.practiceTitle));
  const practiceReferences = new Map();
  if (sample.prerequisite) {
    const [label, id] = sample.prerequisite;
    const prerequisite = taskSamples[id];
    practiceReferences.set(label, {
      label: prerequisite.label + '「' + prerequisite.practiceTitle + '」',
      href: taskHref(tasksById.get(id).task),
    });
  }
  for (const [label, id] of Object.entries(sample.dependencies || {})) {
    const dependency = taskSamples[id];
    practiceReferences.set(label, {
      label: dependency.label + '「' + dependency.practiceTitle + '」',
      href: taskHref(tasksById.get(id).task),
    });
  }
  const requirement = element('div', 'reading-card');
  requirement.append(element('h5', '', '1. 任务要求'));
  if (sample.requirementIntro) {
    requirement.append(inlineText(element('p', 'requirement-intro'), sample.requirementIntro, practiceReferences));
  }
  const steps = element('div', 'task-requirements');
  for (const [label, text] of sample.requirements) {
    const step = element('p');
    if (label) step.append(element('strong', '', label));
    step.append(inlineText(element('span'), text, practiceReferences));
    steps.append(step);
  }
  requirement.append(steps);
  const implementation = element('div', 'teaching-grid');
  implementation.append(requirement);
  if (sample.report) {
    implementation.append(taskReport(sample.report));
  } else {
    const effect = element('details', 'task-effect');
    effect.append(element('summary', '', '2. 任务效果'));
    for (const paragraph of sample.effect.split(/\n\s*\n/)) effect.append(inlineText(element('p'), paragraph));
    if (sample.output) {
      const terminal = element('figure', 'case-terminal');
      const terminalHeading = element('figcaption', 'case-terminal-heading');
      terminalHeading.append(element('span', '', '终端'));
      const panel = element('div', 'code-panel');
      const output = element('pre');
      output.tabIndex = 0;
      output.append(element('code', '', sample.output.replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, '')));
      panel.append(output);
      terminal.append(terminalHeading, panel);
      effect.append(terminal);
      effect.addEventListener('toggle', () => {
        if (effect.open) output.scrollTop = output.scrollHeight;
      });
    }
    for (const media of (Array.isArray(sample.effectMedia) ? sample.effectMedia : sample.effectMedia ? [sample.effectMedia] : [])) {
      const figure = element('figure', 'task-effect-media');
      const picture = element('img');
      setEffectImageSource(picture, media.src);
      picture.alt = media.alt;
      picture.loading = 'lazy';
      figure.append(picture);
      const outputDetails = element('details', 'task-output');
      outputDetails.append(element('summary', '', media.label ? '查看 ' + media.label : '查看效果示意'));
      outputDetails.append(figure);
      effect.append(outputDetails);
    }
    implementation.append(effect);
  }
  practice.append(implementation);
  for (const lessonCase of task.cases) {
    // E2 library resources belong to its case and classroom pages.
    if (lessonCase.id === 'c-ext-e2') continue;
    for (const archive of (lessonCase.downloads || [])) {
      const resource = element('p', 'task-case-download');
      const download = link(archive.label, archive.href, 'row-action case-download');
      download.download = archive.filename;
      download.dataset.archive = 'true';
      resource.append(element('span', '', lessonCase.label + ' 配套下载：'), download);
      practice.append(resource);
    }
    for (const library of (lessonCase.libraries || [])) {
      const resource = element('p', 'task-case-library');
      const folder = link(library.label, library.href, 'row-action case-library');
      folder.dataset.library = 'true';
      resource.append(element('span', '', lessonCase.label + ' 配套源码：'), folder);
      practice.append(resource);
    }
  }

  section('summary', '任务总结').append(element('h3', '', '任务总结'), inlineText(element('p'), sample.summary));
  const exercise = section('exercises', '思考练习', 'task-section exercise-card');
  const exerciseHeading = element('div', 'exercise-heading');
  const exerciseIntro = element('div');
  exerciseIntro.append(element('h3', '', '思考练习'), element('p', '', '点选后即时反馈，可以随时调整答案。'));
  const exerciseCount = sample.exercises.map((group) => group.questions.length + ' 道' + group.title.replace(/题$/, '')).join(' · ');
  exerciseHeading.append(exerciseIntro, element('span', 'badge', exerciseCount));
  const questions = element('div', 'exercise-questions');
  exercise.append(exerciseHeading, questions);
  renderExercises(questions, sample.exercises, task.id);

  const knowledgeList = element('ol', 'knowledge-list');
  knowledgeList.start = Number(knowledge[0].id.slice(2));
  for (const item of knowledge) {
    const row = element('li');
    row.append(link(item.title, readingHref(task, item.id)));
    knowledgeList.append(row);
  }
  section('knowledge', '知识清单').append(element('h3', '', '知识清单'), knowledgeList);
  return article;
}

function taskReport(markdown) {
  const [heading, , , , , ...fields] = markdown.split('\n');
  const report = element('details', 'worksheet');
  report.append(element('summary', '', '2. 报告模板'));
  const sheet = element('div', 'report-sheet');
  sheet.append(element('p', 'report-title', heading.slice(2)));
  const identity = element('dl', 'report-identity');
  for (const label of ['姓名', '学号']) {
    const item = element('div');
    item.append(element('dt', '', label), element('dd', '', '待填写'));
    identity.append(item);
  }
  sheet.append(identity);
  const body = element('div', 'report-fields');
  let index = 0;
  while (index < fields.length) {
    const line = fields[index++].trim();
    if (!line) continue;
    if (!line.startsWith('|')) {
      const heading = /^#{1,6}\s+/.test(line);
      body.append(inlineText(element('p', heading ? 'report-field-heading' : ''), line.replace(/^#{1,6}\s+|^\*\s+/, '')));
      continue;
    }
    const tableLines = [line];
    while (index < fields.length && fields[index].trim().startsWith('|')) tableLines.push(fields[index++].trim());
    const rows = tableLines.map((line) => line.slice(1, -1).split('|').map((cell) => cell.trim()));
    const [columns, , ...values] = rows;
    const table = element('table', 'report-table');
    const head = table.createTHead().insertRow();
    for (const column of columns) {
      const cell = element('th', '', column);
      cell.scope = 'col';
      head.append(cell);
    }
    const tableBody = table.createTBody();
    for (const valuesRow of values) {
      const row = tableBody.insertRow();
      for (const value of valuesRow) inlineText(row.insertCell(), value);
    }
    const scroll = element('div', 'report-table-scroll');
    scroll.tabIndex = 0;
    scroll.setAttribute('role', 'region');
    scroll.setAttribute('aria-label', '报告设计表');
    scroll.append(table);
    body.append(scroll);
  }
  sheet.append(body);
  const source = element('details', 'report-source');
  const pre = element('pre', 'text-sample');
  pre.append(element('code', '', markdown));
  source.append(element('summary', '', '查看 Markdown 原模板'), pre);
  report.append(sheet, source);
  return report;
}

function guideRow(number, label, content) {
  const row = element('div', 'framework-row');
  const heading = element('div', 'row-name');
  heading.append(element('span', '', number), label);
  row.append(heading, content);
  return row;
}

function optionItems(records, label, selected, choose) {
  return records.map((item) => {
    const button = element('button', 'item', label(item));
    button.type = 'button';
    button.setAttribute('aria-pressed', String(item === selected));
    button.addEventListener('click', () => {
      if (item === selected) return;
      const group = button.parentElement;
      choose(item);
      group.querySelector('[aria-pressed="true"]')?.focus({preventScroll: true});
    });
    return button;
  });
}

function renderProjectGuide(project, description) {
  const section = element('section', 'project');
  section.id = project.id;
  const title = element('h2', '', project.title);
  title.id = project.id + '-title';
  section.setAttribute('aria-labelledby', title.id);
  const heading = element('div', 'section-heading');
  const headingCopy = element('div');
  const number = String(project.number).padStart(2, '0');
  headingCopy.append(element('p', 'eyebrow', 'PROJECT ' + number + ' / 项目 ' + project.number), title,
    element('p', '', description));
  heading.append(headingCopy, element('span', 'badge', '项目 ' + project.number + ' · 学习导览'));

  const framework = element('div', 'framework');
  const taskItems = element('div', 'items');
  const caseItems = element('div', 'items');
  const knowledgeGroup = element('div');
  const knowledgeItems = element('div', 'items');
  const related = element('div', 'items knowledge-related');
  knowledgeGroup.append(knowledgeItems, related);
  framework.append(guideRow('01', '任务', taskItems), guideRow('02', '案例', caseItems), guideRow('03', '知识', knowledgeGroup));
  section.append(heading, framework);

  const isFirst = project.number === 1;
  const storageKey = isFirst ? 'cpp-preview-selection' : 'cpp-preview-selection-' + project.id;
  let saved;
  try {
    saved = JSON.parse(sessionStorage.getItem(storageKey));
  } catch {
    saved = null;
  }
  let task = project.tasks.find((item) => item.id === saved?.task) || project.tasks[0];
  let lessonCase = task.cases.find((item) => item.id === saved?.lessonCase) || task.cases[0];
  // Some consecutive cases share a task-level knowledge section after the last case.
  const availableKnowledge = () => lessonCase.knowledge.length ? lessonCase.knowledge
    : [...new Map(task.cases.flatMap((item) => item.knowledge).map((item) => [item.id, item])).values()];
  let knowledge = availableKnowledge().find((item) => item.id === saved?.knowledge) || availableKnowledge()[0];

  function renderSelection() {
    taskItems.replaceChildren(
      ...optionItems(project.tasks, (item) => item.kind + ' · ' + item.title, task, (item) => {
        task = item;
        lessonCase = task.cases[0];
        knowledge = availableKnowledge()[0];
        renderSelection();
      }),
      link('前往任务 ↓', taskHref(task), 'row-action'),
    );
    caseItems.replaceChildren(
      ...optionItems(task.cases, (item) => item.label + ' · ' + item.title, lessonCase, (item) => {
        lessonCase = item;
        knowledge = availableKnowledge()[0];
        renderSelection();
      }),
      link('阅读案例 ↗', readingHref(task, lessonCase.id), 'row-action'),
    );
    knowledgeItems.replaceChildren(
      ...optionItems(availableKnowledge(), (item) => item.label + ' · ' + item.title, knowledge, (item) => {
        knowledge = item;
        renderSelection();
      }),
    );
    if (knowledge) knowledgeItems.append(link('查看知识 ↗', readingHref(task, knowledge.id), 'row-action'));
    related.replaceChildren(...Object.entries(notesById)
      .filter(([, note]) => note.knowledge === knowledge?.id)
      .map(([id, note]) => link(note.label + ' ↗', readingHref(task, id), 'item')));
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({task: task.id, lessonCase: lessonCase.id, knowledge: knowledge?.id}));
    } catch {
      // The directory also works without browser storage.
    }
  }

  renderSelection();
  return section;
}

function renderProject() {
  const legacyTask = tasksById.get(location.hash.slice(1));
  if (legacyTask?.task.id === sampleTaskId) history.replaceState(history.state, '', '#task');
  projectList.append(renderProjectGuide(courseProjects[0], '从通信数据解析到车载启动画面，建立仿真项目的开发基础。'));
}

function readingArticle(item) {
  const sample = readingSamples.querySelector('[data-reading-sample="' + item.id + '"]');
  if (sample) {
    const article = sample.cloneNode(true);
    const files = [...article.querySelectorAll('[data-code-language]')];
    for (const download of article.querySelectorAll('.case-download[download]:not([data-archive])')) {
      const key = download.getAttribute('href');
      const source = typeof caseMaterialSources === 'undefined' ? null : caseMaterialSources[key];
      download.dataset.materialSourceKey = key;
      if (location.protocol === 'file:' && source) {
        download.href = source;
        download.removeAttribute('download');
        download.target = '_blank';
        download.rel = 'noopener';
        download.textContent = download.textContent.replace(/^下载/, '打开').replace('↓', '↗');
      }
    }
    for (const panel of files) formatCodePanel(panel);
    const fileGroups = new Map();
    for (const file of files) {
      const group = file.closest('.case-code-files') || article;
      if (!fileGroups.has(group)) fileGroups.set(group, []);
      fileGroups.get(group).push(file);
    }
    let groupIndex = 0;
    for (const group of fileGroups.values()) {
      const groupId = fileGroups.size > 1 ? article.id + '-group-' + groupIndex : article.id;
      if (group.length > 1) addCodeTabs(groupId, group);
      groupIndex++;
    }
    for (const [index, output] of [...article.querySelectorAll('.case-run-outputs')].entries()) {
      const panels = [...output.querySelectorAll(':scope > figure')];
      if (panels.length > 1 && panels.every(panel => /_variant_\d+/.test(panel.querySelector('figcaption')?.textContent || ''))) {
        output.classList.add('case-run-tabs');
        for (const panel of panels) {
          const caption = panel.querySelector('figcaption > :first-child');
          const original = caption.textContent;
          const version = original.match(/_variant_(\d+)/)[1];
          const source = article.querySelector('[data-source-file^="variant_' + version + '/"]');
          const label = source?.dataset.codeLabel?.split(' · ')[0] || '版本 ' + version;
          panel.dataset.runTarget = original;
          panel.dataset.outputLabel = label;
          caption.textContent = label + (original.includes('过程截取') ? ' · 过程截取' : '');
        }
        addCodeTabs(article.id + '-output-' + index, panels, {
          ariaLabel: '运行结果版本',
          label: panel => panel.dataset.outputLabel,
        });
      }
    }
    addCaseEffects(article, item.id);
    addKnowledgeNotes(article, item.id);
    return article;
  }
  const article = element('article', 'case-article reading-entry');
  article.id = item.id;
  article.append(element('p', 'eyebrow', item.label), element('h2', '', item.title), inlineText(element('p'), item.summary));
  addKnowledgeNotes(article, item.id);
  return article;
}

function addCaseEffects(article, id) {
  const media = typeof caseEffectMedia === 'undefined' ? null : caseEffectMedia[id];
  const result = article.querySelector('.case-result');
  if (!media?.length || !result) return;
  const details = element('details', 'case-output task-output');
  details.append(element('summary', '', '查看效果示意'));
  for (const item of media) {
    const figure = element('figure', 'task-effect-media');
    const picture = element('img');
    setEffectImageSource(picture, item.src);
    picture.alt = item.alt;
    picture.loading = 'lazy';
    figure.append(picture);
    details.append(figure);
  }
  result.append(details);
}

function addKnowledgeNotes(article, id) {
  for (const [noteId, note] of Object.entries(notesById)) {
    if (note.knowledge !== id || !note.body || article.querySelector('[id="' + noteId + '"]')) continue;
    const section = element('section', 'knowledge-note');
    section.id = noteId;
    section.append(element('h4', '', note.label));
    const content = document.createElement('template');
    content.innerHTML = note.body;
    section.append(content.content.cloneNode(true));
    article.append(section);
  }
}

function addCodeTabs(caseId, files, options = {}) {
  const tablist = element('div', 'case-code-tabs');
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', options.ariaLabel || '案例源码文件');

  const tabs = files.map((panel, index) => {
    const tab = element('button', 'case-code-tab', options.label ? options.label(panel, index) : panel.dataset.codeLabel || panel.querySelector('figcaption > :first-child').textContent);
    tab.title = panel.querySelector('figcaption > :first-child').textContent;
    tab.type = 'button';
    tab.id = caseId + '-file-tab-' + index;
    tab.setAttribute('role', 'tab');
    panel.id = caseId + '-file-panel-' + index;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    tab.setAttribute('aria-controls', panel.id);
    tab.addEventListener('click', () => selectFile(index));
    tab.addEventListener('keydown', (event) => {
      const positions = {
        ArrowLeft: (index + files.length - 1) % files.length,
        ArrowRight: (index + 1) % files.length,
        Home: 0,
        End: files.length - 1,
      };
      if (!Object.hasOwn(positions, event.key)) return;
      event.preventDefault();
      const next = positions[event.key];
      selectFile(next);
      tabs[next].focus();
    });
    return tab;
  });

  function selectFile(selected) {
    tabs.forEach((tab, index) => {
      const active = index === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      files[index].hidden = !active;
    });
  }

  tablist.append(...tabs);
  files[0].before(tablist);
  selectFile(0);
}

function formatCodePanel(panel) {
  const code = panel.querySelector('code');
  const source = code.textContent;
  const lines = source.split('\n');
  const tokens = {
    cmake: /(?<comment>#.*)|(?<string>"(?:\\.|[^"\\])*")|(?<keyword>\b(?:cmake_minimum_required|project|set|find_package|add_executable|add_library|target_link_libraries|target_include_directories|target_compile_definitions|VERSION|PRIVATE|PUBLIC|REQUIRED)\b)|(?<number>\b\d+(?:\.\d+)*\b)/g,
    cpp: /(?<comment>\/\/.*)|(?<string>"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<iostream>)|(?<keyword>^\s*#\s*\w+|\b(?:alignas|alignof|auto|bool|break|case|catch|char|class|const|constexpr|continue|default|delete|do|double|else|enum|explicit|extern|false|float|for|friend|if|inline|int|long|namespace|new|noexcept|nullptr|operator|override|private|protected|public|return|short|signed|sizeof|static|struct|switch|template|this|thread_local|throw|true|try|typedef|typename|union|unsigned|using|virtual|void|volatile|while|std|cin|cout|endl)\b)|(?<number>\b\d+(?:\.\d+)?\b)/g,
    bash: /(?<comment>(?:^|\s)#.*)|(?<string>"(?:\\.|[^"\\])*"|'[^']*')|(?<keyword>\b(?:git|cd|ls|echo|if|then|fi|exit)\b)/g,
    text: /(?<number>-?\d+(?:\.\d+)?)/g,
  }[panel.dataset.codeLanguage];
  code.replaceChildren();
  lines.forEach((line, index) => {
    const hasNewline = index < lines.length - 1;
    if (!line && !hasNewline) return;
    const row = element('span', 'code-line');
    let cursor = 0;
    for (const token of line.matchAll(tokens)) {
      const kind = Object.keys(token.groups).find((name) => token.groups[name] !== undefined);
      row.append(line.slice(cursor, token.index), element('span', 'code-' + kind, token[0]));
      cursor = token.index + token[0].length;
    }
    row.append(line.slice(cursor));
    code.append(row);
    if (hasNewline) code.append('\n');
  });

  const copy = element('button', 'code-copy', '复制代码');
  copy.type = 'button';
  const status = element('span', 'code-copy-status');
  status.setAttribute('role', 'status');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(source);
      status.textContent = '已复制';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = '已选中，请使用系统复制';
    }
  });
  panel.querySelector('figcaption').append(status, copy);
}

let readerMode;
let stopReadingDirectory = () => {};
let updateReadingDirectory = () => {};

function renderCaseCatalogue() {
  document.title = '案例门户';
  document.body.classList.add('case-catalogue-page');
  document.documentElement.classList.add('has-project-directory');
  document.querySelector('#reader-directory').hidden = false;
  const seenKnowledge = new Set();
  const projects = courseProjects.map(project => {
    const section = element('section', 'catalogue-project');
    section.id = project.id;
    section.setAttribute('aria-label', '项目 ' + project.number + ' · ' + project.title);
    for (const task of project.tasks) {
      const taskSection = element('section', 'catalogue-task');
      taskSection.id = task.id;
      const taskHeading = element('header', 'section-heading catalogue-task-heading');
      const title = element('div');
      title.append(element('p', 'eyebrow', '项目 ' + project.number + ' · ' + project.title + ' · ' + task.kind), element('h2', 'task-sample-title', task.title));
      const taskActions = element('div', 'catalogue-task-actions');
      taskActions.append(responsiveAction('← 返回项目导览', '← 项目', projectHref(project), 'row-action catalogue-project-return'), responsiveAction('查看任务 ↗', '任务 ↗', taskHref(task)));
      taskHeading.append(title, element('span', 'badge case-page-badge', '案例页'));
      taskSection.append(taskHeading);
      const caseTags = element('nav', 'items catalogue-case-tags');
      caseTags.setAttribute('aria-label', task.title + '案例定位');
      for (const item of task.cases) {
        const anchor = link(item.label, '#' + item.id, 'item');
        anchor.title = item.title;
        caseTags.append(anchor);
      }
      const caseJump = element('div', 'case-jump-row');
      caseJump.append(caseTags, taskActions);
      taskSection.append(caseJump);
      for (const lessonCase of task.cases) {
        const group = element('div', 'reader-case-group');
        const article = readingArticle(lessonCase);
        article.querySelector('.case-title h2')?.setAttribute('aria-level', '3');
        for (const anchor of article.querySelectorAll('a[href]')) {
          const url = new URL(anchor.getAttribute('href'), location.href);
          if (url.pathname.endsWith('/reading.html') && url.hash) anchor.setAttribute('href', url.hash);
        }
        group.append(article);
        if (lessonCase.knowledge.length) {
          const points = element('div', 'reader-knowledge');
          points.append(element('p', 'eyebrow', '关联知识'));
          for (const point of lessonCase.knowledge) {
            if (seenKnowledge.has(point.id)) continue;
            seenKnowledge.add(point.id);
            const entry = readingArticle(point);
            entry.querySelector('h2')?.setAttribute('aria-level', '4');
            for (const anchor of entry.querySelectorAll('a[href]')) {
              const url = new URL(anchor.getAttribute('href'), location.href);
              if (url.pathname.endsWith('/reading.html') && url.hash) anchor.setAttribute('href', url.hash);
            }
            points.append(entry);
          }
          group.append(points);
        }
        taskSection.append(group);
      }
      section.append(taskSection);
    }
    return section;
  });
  readingPreview.replaceChildren(...projects);
  setupReadingDirectory();
}

function setupReadingDirectory() {
  stopReadingDirectory();
  const controller = courseNavigation.attachDirectory({
    directory: document.querySelector('#reader-directory'),
    projectRail: document.querySelector('#reader-directory-projects'),
    taskRail: document.querySelector('#reader-directory-tasks'),
    projects: courseProjects,
    taskId: task => task.id,
    projectOpensFirstTask: true,
  });
  updateReadingDirectory = controller.refresh;
  const tabGroups = [...document.querySelectorAll('.catalogue-task')].map(task => ({
    task,
    nav: task.querySelector('.catalogue-case-tags'),
    cases: [...task.querySelectorAll(':scope > .reader-case-group')],
  }));
  for (const {nav} of tabGroups) {
    const minimum = Math.ceil(Math.max(...[...nav.children].map(anchor => anchor.getBoundingClientRect().width))) + 4;
    nav.style.setProperty('--case-label-min-width', minimum + 'px');
  }
  const stopTabs = courseNavigation.watch(targetId => {
    const target = targetId && document.getElementById(targetId);
    const boundary = courseNavigation.readingBoundary() + 35;
    for (const group of tabGroups) {
      let active = target && group.cases.find(entry => entry === target || entry.contains(target));
      if (!active) {
        active = group.cases[0];
        for (const entry of group.cases) {
          if (entry.getBoundingClientRect().top <= boundary) active = entry;
          else break;
        }
      }
      const id = active.querySelector('.case-article').id;
      for (const anchor of group.nav.children) {
        if (anchor.hash === '#' + id) {
          if (!anchor.hasAttribute('aria-current')) {
            anchor.setAttribute('aria-current', 'location');
            const box = group.nav.getBoundingClientRect(), rect = anchor.getBoundingClientRect();
            if (rect.left < box.left || rect.right > box.right) group.nav.scrollLeft += rect.left - box.left - 7;
          }
        } else anchor.removeAttribute('aria-current');
      }
    }
  });
  stopReadingDirectory = () => {controller.destroy(); stopTabs();};
}

function renderReadingPage() {
  const id = location.hash.slice(1);
  const query = new URLSearchParams(location.search);
  if (readerMode === 'catalogue') {updateReadingDirectory(); return;}
  readerMode = 'catalogue';
  readingPreview.dataset.view = 'catalogue';
  renderCaseCatalogue();
  const target = id || query.get('task');
  if (target && !location.hash) requestAnimationFrame(() => courseNavigation.navigate(target, {history:false}));
}

function markTaskSections() {
  const groups = [...document.querySelectorAll('.task > .section-tabs')].map(menu => {
    const tabs = [...menu.querySelectorAll('a')].map(anchor => ({
      anchor,
      section: document.getElementById(anchor.hash.slice(1)),
    }));
    tabs[0].anchor.setAttribute('aria-current', 'location');
    return {menu, task: menu.parentElement, tabs, selected: tabs[0]};
  });

  courseNavigation.watch(targetId => {
    const target = targetId && document.getElementById(targetId);
    const directoryBottom = courseNavigation.readingBoundary();
    const group = target
      ? groups.find(({task}) => task.contains(target))
      : groups.find(({task}) => {
        const rect = task.getBoundingClientRect();
        return rect.top <= directoryBottom && rect.bottom > directoryBottom;
      });
    if (!group) return;

    const {menu, tabs} = group;
    let selected = tabs[0];
    if (target) {
      selected = tabs.find(({section}) => section.contains(target)) || selected;
    } else {
      const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--content-start-gap')) || 0;
      const boundary = Math.max(directoryBottom, menu.getBoundingClientRect().bottom) + gap + 1;
      for (const tab of tabs) {
        if (tab.section.getBoundingClientRect().top > boundary) break;
        selected = tab;
      }
    }
    if (selected === group.selected) return;

    group.selected.anchor.removeAttribute('aria-current');
    group.selected = selected;
    selected.anchor.setAttribute('aria-current', 'location');
    const rail = menu.getBoundingClientRect(), item = selected.anchor.getBoundingClientRect();
    if (item.left < rail.left + 6) menu.scrollLeft += item.left - rail.left - 6;
    else if (item.right > rail.right - 6) menu.scrollLeft += item.right - rail.right + 6;
  });
}

if (projectList) renderProject();
else if (readingPreview) {
  renderReadingPage();
  window.addEventListener('hashchange', renderReadingPage);
}
