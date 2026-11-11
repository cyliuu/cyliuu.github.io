const projectRoles = [
  '搭建 C++ 工程与启动画面',
  '接收指令并呈现车辆状态',
  '控制启动、模式选择和驾驶循环',
  '读取场景并组织感知数据',
  '把车辆和场景信息转为驾驶决策',
  '提供车辆状态和对象接口',
  '统一传感器接口，优化感知数据处理',
  '集成仿真后端与 CLI、GUI 前端',
];

const learningPhases = [
  { title: '程序设计基础', range: '项目 1–3', projects: [1, 2, 3] },
  { title: '结构化程序', range: '项目 4–5', projects: [4, 5] },
  { title: '面向对象程序', range: '项目 6–8', projects: [6, 7, 8] },
];

function mapNode(tag, className, label) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (label) node.textContent = label;
  return node;
}

function projectMapLink(number) {
  const project = courseProjects[number - 1];
  const anchor = mapNode('a', 'map-project');
  anchor.href = '#' + project.id;
  const label = mapNode('span', 'map-project-number', String(number).padStart(2, '0'));
  label.setAttribute('aria-hidden', 'true');
  const copy = mapNode('span', 'map-project-copy');
  copy.append(mapNode('strong', '', project.title), mapNode('span', '', projectRoles[number - 1]));
  const arrow = mapNode('span', 'map-project-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  anchor.append(label, copy, arrow);
  anchor.setAttribute('aria-label', '项目 ' + number + ' · ' + project.title);
  return anchor;
}

function renderProjectMap() {
  const learning = document.querySelector('#map-learning');
  const system = document.querySelector('#map-system');
  for (const phase of learningPhases) {
    const card = mapNode('section', 'learning-phase');
    const head = mapNode('header', 'phase-heading');
    head.append(mapNode('p', 'eyebrow', phase.range), mapNode('h3', '', phase.title));
    const list = mapNode('ol', 'phase-projects');
    list.start = phase.projects[0];
    for (const number of phase.projects) {
      const item = mapNode('li');
      item.append(projectMapLink(number));
      list.append(item);
    }
    card.append(head, list);
    learning.append(card);
  }

  const diagramFrame = document.querySelector('#system-diagram');
  const diagram = createSystemDiagram(diagramFrame);
  const zoom = document.querySelector('#diagram-zoom');
  const panHint = document.querySelector('#diagram-pan-hint');
  zoom.addEventListener('click', () => {
    const enlarged = diagramFrame.classList.toggle('is-enlarged');
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = enlarged ? '查看全图' : '放大地图';
    panHint.hidden = !enlarged;
    if (enlarged) diagramFrame.tabIndex = 0;
    else {
      diagramFrame.removeAttribute('tabindex');
      diagramFrame.scrollLeft = 0;
    }
  });
  const mode = document.querySelector('#flow-mode');
  const modeControl = mode.parentElement;
  const modeOptions = document.querySelector('#flow-mode-options');
  const modeButtons = [...modeOptions.querySelectorAll('button')];
  const progress = document.querySelector('#flow-progress');
  const stage = document.querySelector('#flow-stage');
  const description = document.querySelector('#flow-description');
  const play = document.querySelector('#flow-play');
  const next = document.querySelector('#flow-next');
  const stages = {
    setup: ['准备与启动', '搭建环境，处理指令与车辆状态。'],
    auto: ['自动驾驶', '感知结果与车辆状态进入驾驶决策。'],
    manual: ['手动驾驶', '控制模块按驾驶指令更新车辆行为。'],
    output: ['系统输出', '通过驾驶行为和仿真前端呈现结果。'],
  };
  let step = -1;
  let timer;
  let drivingMode = 'auto';

  function pause() {
    clearInterval(timer);
    timer = undefined;
  }

  function showStep() {
    const path = ['setup', drivingMode, 'output'];
    const current = path[step];
    const [title, copy] = stages[current] || ['运行路径', '播放演示，或逐步查看。'];
    diagram.trace(current, drivingMode, Boolean(timer));
    progress.textContent = current ? (step + 1) + ' / ' + path.length : '共 ' + path.length + ' 步';
    progress.setAttribute('aria-label', current ? '第 ' + (step + 1) + ' 步，共 ' + path.length + ' 步' : progress.textContent);
    stage.textContent = title;
    description.textContent = copy;
    play.textContent = timer ? '暂停' : step === path.length - 1 ? '重新播放' : '播放路径';
    next.textContent = step === path.length - 1 ? '回到首步' : '下一步';
  }

  function advance() {
    step = (step + 1) % 3;
    showStep();
  }

  play.addEventListener('click', () => {
    if (timer) {
      pause();
      showStep();
      return;
    }
    timer = setInterval(() => {
      if (step === 2) {
        pause();
        showStep();
      } else advance();
    }, 3200);
    if (step === -1 || step === 2) advance();
    else showStep();
  });
  next.addEventListener('click', () => {
    pause();
    advance();
  });
  function setModeMenu(open) {
    modeOptions.hidden = !open;
    mode.setAttribute('aria-expanded', String(open));
  }

  mode.addEventListener('click', (event) => {
    setModeMenu(modeOptions.hidden);
    if (!modeOptions.hidden && event.detail === 0) {
      modeOptions.querySelector('[aria-pressed="true"]').focus({preventScroll: true});
    }
  });
  modeControl.addEventListener('keydown', (event) => {
    if (modeOptions.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setModeMenu(false);
      mode.focus({preventScroll: true});
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const current = modeButtons.indexOf(document.activeElement);
      modeButtons[(current + 1) % modeButtons.length].focus({preventScroll: true});
    }
  });
  function closeModeMenuOutside(event) {
    if (!modeOptions.hidden && !modeControl.contains(event.target)) setModeMenu(false);
  }
  document.addEventListener('pointerdown', closeModeMenuOutside);
  document.addEventListener('focusin', closeModeMenuOutside);
  for (const button of modeButtons) {
    button.addEventListener('click', () => {
      const previousMode = drivingMode;
      drivingMode = button.dataset.drivingMode;
      mode.textContent = button.textContent;
      mode.setAttribute('aria-label', '驾驶模式：' + button.textContent);
      for (const option of modeButtons) option.setAttribute('aria-pressed', String(option === button));
      setModeMenu(false);
      mode.focus({preventScroll: true});
      if (previousMode !== drivingMode) {
        pause();
        step = -1;
        showStep();
      }
    });
  }

  const controls = document.querySelectorAll('[data-map-mode]');
  for (const button of controls) {
    button.addEventListener('click', () => {
      const showSystem = button.dataset.mapMode === 'system';
      learning.hidden = showSystem;
      system.hidden = !showSystem;
      if (showSystem) diagram.align();
      for (const control of controls) control.setAttribute('aria-pressed', String(control === button));
      if (!showSystem) {
        pause();
        showStep();
      }
    });
  }
  window.addEventListener('pagehide', () => {
    pause();
    showStep();
  });
}

function renderProjectEntry(entry) {
  const project = courseProjects.find((item) => item.id === location.hash.slice(1)) || courseProjects[1];
  document.title = project.title + ' · C++ 课程门户';
  const head = mapNode('header', 'section-heading');
  const intro = mapNode('div');
  const title = mapNode('h1', '', project.title);
  intro.append(mapNode('p', 'eyebrow', '项目 ' + project.number), title, mapNode('p', '', projectRoles[project.number - 1] + '。'));
  head.append(intro, mapNode('span', 'badge', project.tasks.length + ' 个任务'));

  const list = mapNode('ol', 'entry-tasks');
  for (const task of project.tasks) {
    const item = mapNode('li');
    const anchor = mapNode('a', 'entry-task');
    anchor.href = 'index.html#' + task.id;
    anchor.append(mapNode('span', 'eyebrow', task.kind), mapNode('strong', '', task.title));
    item.append(anchor);
    list.append(item);
  }
  entry.replaceChildren(head, list);
}

function renderHomeEntries() {
  const otherProjects = document.querySelector('#other-projects');
  const sample = document.querySelector('#task');
  for (const project of courseProjects) {
    const isFirst = project.number === 1;
    const description = project.number === 2
      ? '从车辆信息命名到批量验证，建立仿真系统的信息交互流程。'
      : projectRoles[project.number - 1] + '。';
    const section = isFirst ? document.querySelector('#project') : renderProjectGuide(project, description);
    if (!isFirst) otherProjects.append(section);
    if (project.materials) section.append(projectOverview(project));
    const tasks = mapNode('div', 'map-task-list');
    for (const task of project.tasks) {
      if (task.id === sampleTaskId) {
        tasks.append(sample);
        continue;
      }
      if (Object.hasOwn(taskSamples, task.id)) {
        tasks.append(createTaskSample(project, task, taskSamples[task.id]));
        continue;
      }
      const article = mapNode('article', 'map-task-preview');
      article.id = task.id;
      article.append(mapNode('p', 'eyebrow', task.kind), mapNode('h3', '', task.title), mapNode('p', '', task.description));
      tasks.append(article);
    }
    section.append(tasks);
    if (project.materials) {
      const summary = mapNode('section', 'project-material');
      summary.append(mapNode('h3', '', '项目总结'),
        ...project.materials.summary.map((paragraph) => mapNode('p', '', paragraph)));
      section.append(summary);
    }
  }
}

function projectOverview(project) {
  const overview = mapNode('section', 'project-material');
  overview.append(mapNode('h3', '', '项目描述'), mapNode('p', '', project.materials.overview));
  return overview;
}

function renderProjectDirectory() {
  courseNavigation.attachDirectory({
    directory: document.querySelector('.project-directory'),
    projectRail: document.querySelector('#directory-projects'),
    taskRail: document.querySelector('#directory-tasks'),
    projects: courseProjects,
    taskId: task => task.id === sampleTaskId ? 'task' : task.id,
  });
}

const mapEntry = document.querySelector('#map-project-entry');
if (document.querySelector('#project-map')) {
  renderHomeEntries();
  markTaskSections();
  renderProjectMap();
  renderProjectDirectory();

}
if (mapEntry) {
  renderProjectEntry(mapEntry);
  window.addEventListener('hashchange', () => renderProjectEntry(mapEntry));
}
