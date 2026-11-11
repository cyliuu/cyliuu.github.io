const manualRoute = {x: 955, startY: 121, endY: 427};

const wideDiagramLayout = {
  width: 1050, height: 556,
  zone: [12, 44, 805, 369],
  zoneTitle: [35, 390], manualTitle: [manualRoute.x + 24, (manualRoute.startY + manualRoute.endY) / 2],
  scene: [34, 66, 321, 103],
  sceneGroup: [24, 55, 341, 180],
  simulationGroup: 'M312 351 H656 V413 H366 V481 H670 V549 H20 V445 H198 V414 H312 Z',
  projects: {
    1: {badge: [969, 24]},
    2: {box: [851, 68, 179, 53]},
    3: {box: [408, 427, 622, 44]},
    4: {box: [78, 183, 230, 42]},
    5: {box: [375, 276, 206, 58]},
    6: {box: [565, 190, 200, 54]},
    7: {box: [31, 264, 200, 42]},
    8: {box: [329, 359, 315, 40]},
  },
  context: [
    [663, 101, 135, 38, '主车', '车辆状态', 'auto'],
    [694, 278, 91, 50, '地图', '场景配置', 'output'],
    [211, 424, 90, 52, 'CLI', '控制台', 'output', 8],
    [33, 457, 95, 55, 'GUI', '图形界面', 'output', 8],
    [386, 490, 271, 52, '仿真前端', '显示车辆状态与场景', 'output', 8],
    [886, 491, 138, 52, '使用者', '观察与操作', 'output'],
  ],
  edges: [
    ['setup', 'M851 83 H355', 'auto'],
    ['auto', 'M193 169 V183'],
    ['auto', 'M133 225 V264'],
    ['auto', 'M289 225 V292 H375'],
    ['auto', 'M231 286 H252 V310 H375'],
    ['auto', 'M729 139 V190'],
    ['auto', 'M660 244 V300 H581'],
    ['auto', 'M478 334 V359'],
    ['output', 'M738 328 V379 H644', 'auto'],
    ['output', 'M486 399 V427', 'auto'],
    ['manual', `M${manualRoute.x} ${manualRoute.startY} V${manualRoute.endY}`],
    ['output', 'M256 476 V503 H386'],
    ['output', 'M128 483 H151 V524 H386'],
    ['output', 'M955 471 V491'],
    ['output', 'M657 517 H886'],
    ['setup', 'M940.5 44 V68'],
  ],
};

function sceneCardMetrics(amount) {
  const titleHeight = 22 + 4 * amount;
  const titleGap = 6;
  const chipHeight = 31 + 4 * amount;
  const gap = 6;
  return {titleHeight, titleGap, chipHeight, gap, contentHeight: titleHeight + titleGap + chipHeight * 2 + gap};
}

function fitWideDiagram(viewportWidth) {
  const layout = wideDiagramLayout;
  const amount = Math.max(0, Math.min(1, (1280 - viewportWidth) / 880));
  const scaleX = 1 - amount * .21;
  const scaleY = 1 + amount * .43;
  const x = (value) => Math.round(value * scaleX * 10) / 10;
  const y = (value) => Math.round(value * scaleY * 10) / 10;
  const point = ([left, top]) => [x(left), y(top)];
  const box = ([left, top, width, height]) => [x(left), y(top), x(width), y(height)];
  const path = (value) => value.replace(/M([\d.]+) ([\d.]+)|([HV])([\d.]+)/g, (_, left, top, command, coordinate) => {
    if (command) return command + (command === 'H' ? x(coordinate) : y(coordinate));
    return 'M' + x(left) + ' ' + y(top);
  });
  const projects = Object.fromEntries(Object.entries(layout.projects).map(([number, project]) => [
    number, project.box ? {box: box(project.box)} : {badge: point(project.badge)},
  ]));
  const scene = box(layout.scene);
  const sceneHeight = sceneCardMetrics(amount).contentHeight + 19 - Math.round(5 * amount);
  const savedHeight = scene[3] - sceneHeight;
  scene[3] = sceneHeight;
  const perception = projects[4].box;
  const fusion = projects[7].box;
  const sceneCenter = scene[0] + scene[2] / 2;
  perception[0] = sceneCenter - perception[2] / 2;
  perception[1] -= savedHeight;
  perception[3] += y(8 * amount);
  fusion[1] -= savedHeight / 2;
  fusion[3] += y(8 * amount);
  const perceptionEnd = perception[1] + perception[3];
  const sceneGroup = box(layout.sceneGroup);
  sceneGroup[3] = perceptionEnd + y(10) - sceneGroup[1];
  return {
    ...layout, projects, amount, wrapStartupTitle: viewportWidth < 500, width: x(layout.width), height: y(layout.height),
    zone: box(layout.zone), zoneTitle: point(layout.zoneTitle), manualTitle: point(layout.manualTitle),
    scene, sceneGroup, simulationGroup: path(layout.simulationGroup),
    context: layout.context.map((item) => [...box(item), ...item.slice(4)]),
    edges: [
      ['setup', path(layout.edges[0][1]), 'auto'],
      ['auto', `M${sceneCenter} ${scene[1] + scene[3]} V${perception[1]}`],
      ['auto', `M${x(133)} ${perceptionEnd} V${fusion[1]}`],
      ['auto', `M${x(289)} ${perceptionEnd} V${y(292)} H${x(375)}`],
      ['auto', `M${x(231)} ${fusion[1] + fusion[3] / 2} H${x(252)} V${y(310)} H${x(375)}`],
      ...layout.edges.slice(5).map(([kind, route, mode]) => [kind, path(route), mode]),
    ],
  };
}

const diagramColors = {
  setup: '#416d7b',
  auto: '#257469',
  manual: '#775879',
  output: '#547450',
};

const flowProjects = {
  setup: [1, 2],
  auto: [4, 5, 6, 7, 8],
  manual: [2, 3],
  output: [3, 8],
};

const diagramProjectDetails = [
  '开发准备与启动', '车辆启动画面', '驾驶行为模拟', '环境感知模块',
  '驾驶决策模块', '车辆对象模块', '感知融合模块', '自动驾驶仿真后端',
];

const projectGlyphs = [
  'M10.2 2.2a4.3 4.3 0 0 0-5.1 5.1l-3.3 3.3a1.8 1.8 0 1 0 2.6 2.6l3.3-3.3a4.3 4.3 0 0 0 5.1-5.1l-2.3 2.3-1.9-.5-.5-1.9z',
  'M2 4h12v8H2z M5 9l2-2 2 2 2-3 1 1',
  'M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z M3 7h10M8 7v6',
  'M2 12a7 7 0 0 1 7-7m-7 4a10 10 0 0 1 10-7m-7 10a4 4 0 0 1 4-4m-2 4h.01',
  'M8 2v3m0 0L4 9m4-4 4 4M4 9v4m8-4v4 M2 13h4m4 0h4',
  'M4 2h8l1 1v10l-1 1H4l-1-1V3z M1 5h2m-2 6h2m10-6h2m-2 6h2 M5 9l1-2h4l1 2v2H5z',
  'M3 3h3v3H3zm7 0h3v3h-3zM6 10h4v4H6zM5 6l2 4m4-4-2 4',
  'M3 2h10v5H3zm0 7h10v5H3z M5 4h.01M5 11h.01m3-7h3m-3 7h3',
];

const contextGlyphs = {
  主车: 'M2 10l2-5h8l2 5v3H2z M4 13v2m8-2v2m-8-5h1m6 0h1',
  地图: 'M2 4l4-2 4 2 4-2v10l-4 2-4-2-4 2z M6 2v10m4-8v10',
  CLI: 'M2 3h12v10H2z M4 6l2 2-2 2m4 0h4',
  GUI: 'M2 3h12v10H2z M2 6h12m-8 0v7m2-4h4',
  仿真前端: 'M2 3h12v9H2z M5 14h6m-3-2v2M4 9l3-2 2 2 3-3',
  使用者: 'M8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M3 14v-1a5 5 0 0 1 10 0v1',
};

function svgNode(tag, attributes, text) {
  const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
  if (text) node.textContent = text;
  return node;
}

function diagramPlate(x, y, width, height, className) {
  return svgNode('rect', {x, y, width, height, rx: 9, class: className});
}

function diagramText(x, y, value, className, centered = false) {
  return svgNode('text', {x, y, class: className, 'text-anchor': centered ? 'middle' : 'start'}, value);
}

function diagramIcon(d, x, y, scale = 1) {
  return svgNode('path', {
    d, class: 'diagram-scene-icon', 'aria-hidden': 'true',
    transform: 'translate(' + x + ' ' + y + ') scale(' + scale + ')',
  });
}

function renderDiagramScene(svg, bounds, amount) {
  const [x, y, width, height] = bounds;
  const columns = 3;
  const {gap, titleHeight, chipHeight, titleGap, contentHeight} = sceneCardMetrics(amount);
  const blockTop = y + (height - contentHeight) / 2;
  const chipWidth = (width - 24 - gap * (columns - 1)) / columns;
  const titleGroup = svgNode('g', {'data-scene-center-x': x + width / 2, 'data-scene-center-y': blockTop + titleHeight / 2});
  titleGroup.append(diagramText(0, 0, '场景要素', 'diagram-context-title diagram-centered-text', true));
  svg.append(diagramPlate(x, y, width, height, 'diagram-scene'), titleGroup);
  const labels = ['路标', '红绿灯', '障碍物', '行人', '车辆', '车道线'];
  const icons = [
    'M8 7v8m-5-8h10l-2-5H5z M6 5h4',
    'M5 2h6v10H5z M8 12v3m0-11h.01m0 3h.01m0 3h.01',
    'M8 2l5 12H3z M5 9h6m-7 3h8',
    'M8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4 M8 7v4m0-3-3 2m3-2 3 2m-3 1-3 4m3-4 3 4',
    'M2 10 4 5h8l2 5v3H2z M4 13v2m8-2v2m-8-5h1m6 0h1',
    'M4 2 2 15m10-13 2 13M8 3v3m0 3v2m0 3v1',
  ];
  labels.forEach((label, index) => {
    const left = x + 12 + (index % columns) * (chipWidth + gap);
    const top = blockTop + titleHeight + titleGap + Math.floor(index / columns) * (chipHeight + gap);
    const iconSize = 14;
    const iconGap = 4;
    const content = svgNode('g', {'data-scene-center-x': left + chipWidth / 2, 'data-scene-center-y': top + chipHeight / 2});
    content.append(diagramIcon(icons[index], 0, -iconSize / 2, iconSize / 16),
      diagramText(iconSize + iconGap, 0, label, 'diagram-scene-label diagram-centered-text'));
    svg.append(svgNode('rect', {x: left, y: top, width: chipWidth, height: chipHeight, rx: 5, class: 'diagram-scene-chip'}), content);
  });
}

function renderDiagramContext(container, [x, y, width, height, title, detail, kind], amount) {
  const box = diagramPlate(x, y, width, height, 'diagram-context');
  box.style.stroke = diagramColors[kind];
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const stacked = width < 100;
  const iconScale = stacked ? .75 : 1;
  const iconX = stacked ? centerX - 8 * iconScale : x + 6;
  const spacing = 16 + 4 * amount;
  const iconY = stacked ? Math.max(y + 4, centerY - 23 - 5 * amount) : centerY - 8;
  const titleY = centerY + (stacked ? 1 : -spacing / 2);
  const detailY = titleY + spacing;
  const icon = diagramIcon(contextGlyphs[title], iconX, iconY, iconScale);
  const copy = svgNode('g', {class: 'diagram-card-copy'});
  if (stacked) copy.append(icon);
  copy.append(diagramText(centerX, titleY, title, 'diagram-context-title diagram-centered-text', true),
    diagramText(centerX, detailY, detail, 'diagram-node-detail diagram-centered-text', true));
  container.append(box, copy);
  if (!stacked) {
    const inlineIcon = svgNode('g', {class: 'diagram-context-inline-icon'});
    inlineIcon.append(icon);
    container.append(inlineIcon);
  }
}

function renderDiagramProject(svg, number, card, layout) {
  const {box, badge} = card;
  const project = courseProjects[number - 1];
  const label = '项目 ' + number + ' · ' + project.title;
  const anchor = svgNode('a', {href: '#' + project.id, class: 'diagram-link', 'aria-label': label, 'data-project': number});
  anchor.append(svgNode('title', {}, label));
  const radius = 16 + layout.amount;
  const [badgeX, badgeY] = box ? [box[0] + 3, box[1] - 4] : badge;
  if (number === 1) {
    const ribbonTip = Math.min(layout.width - 3, badgeX + 66);
    const ribbon = `M${badgeX - 5} ${badgeY - 8} L${badgeX + 17} ${Math.max(2, badgeY - 23)} L${ribbonTip} ${badgeY + 42} L${badgeX + 43} ${badgeY + 32} L${badgeX + 48} ${badgeY + 48} L${badgeX + 8} ${badgeY + 24} Z`;
    const titleSize = 19 + 5 * layout.amount;
    const textWidth = project.title.length * titleSize;
    const labelPadding = 16 - 5 * layout.amount;
    const iconSlot = 20;
    const badgeOverlap = 5;
    const labelWidth = textWidth + iconSlot + 2 * labelPadding + badgeOverlap;
    const labelHeight = titleSize + 20;
    const labelX = badgeX - radius - labelWidth + badgeOverlap;
    const iconX = labelX + labelPadding;
    const copy = svgNode('g', {class: 'diagram-card-copy'});
    copy.append(diagramText(iconX + iconSlot + textWidth / 2, badgeY, project.title, 'diagram-node-title diagram-start-title diagram-centered-text', true));
    anchor.append(svgNode('path', {d: ribbon, class: 'diagram-start-ribbon', 'aria-hidden': 'true'}),
      diagramPlate(labelX, badgeY - labelHeight / 2, labelWidth, labelHeight, 'diagram-node-bg'),
      copy,
      diagramIcon(projectGlyphs[0], iconX, badgeY - 6, .75));
  }
  if (number === 4) renderDiagramScene(anchor, layout.scene, layout.amount);
  if (number === 8) {
    for (const item of layout.context.filter((item) => item[7] === number)) renderDiagramContext(anchor, item, layout.amount);
  }
  if (box) {
    const [x, y, width, height] = box;
    const titleX = x + width / 2;
    const spacing = 17 + 4 * layout.amount;
    const lines = number === 2 && layout.wrapStartupTitle ? ['信息交互', '设计'] : [project.title];
    const titleY = y + height / 2 - lines.length * spacing / 2;
    const detailY = titleY + lines.length * spacing;
    const copy = svgNode('g', {class: 'diagram-card-copy'});
    lines.forEach((line, index) => copy.append(
      diagramText(titleX, titleY + index * spacing, line, 'diagram-node-title diagram-centered-text', true),
    ));
    copy.append(diagramText(titleX, detailY, diagramProjectDetails[number - 1], 'diagram-node-detail diagram-centered-text', true));
    anchor.append(diagramPlate(x, y, width, height, 'diagram-node-bg'), copy);
    const icon = svgNode('g', {class: 'diagram-project-icon'});
    icon.append(diagramIcon(projectGlyphs[number - 1], x + width - 22, detailY - 6, .75));
    anchor.append(icon);
  }
  anchor.append(svgNode('circle', {cx: badgeX, cy: badgeY, r: radius, class: 'diagram-node-badge'}),
    diagramText(badgeX, badgeY, String(number), 'diagram-node-number diagram-centered-text', true));
  svg.append(anchor);
}

function renderDiagramBackground(svg, layout) {
  const {width, height, zone: [x, y, zoneWidth, zoneHeight]} = layout;
  const dots = svgNode('pattern', {id: 'diagram-grid-dots', width: 17, height: 17, patternUnits: 'userSpaceOnUse'});
  dots.append(svgNode('circle', {cx: 2, cy: 2, r: 1, fill: '#7eaaa1', opacity: .32}));
  svg.querySelector('defs').append(dots);
  svg.append(svgNode('rect', {width, height, class: 'diagram-background'}),
    svgNode('rect', {x, y, width: zoneWidth, height: zoneHeight, rx: 22, class: 'diagram-auto-zone'}),
    svgNode('path', {d: layout.simulationGroup, class: 'diagram-simulation-group'}),
    svgNode('rect', {width, height, fill: 'url(#diagram-grid-dots)', 'aria-hidden': 'true', 'pointer-events': 'none'}));
  renderDiagramScanning(svg, layout);
  renderDiagramDataFlow(svg, layout);
}

function renderDiagramScanning(svg, {width, height}) {
  const scaleX = width / wideDiagramLayout.width;
  const scaleY = height / wideDiagramLayout.height;
  const signals = svgNode('g', {class: 'diagram-scanning', 'aria-hidden': 'true'});
  const bus = svgNode('g', {transform: `translate(${37 * scaleX} ${23 * scaleY}) scale(${scaleX} 1)`});
  const route = 'M0 0H168l12 -7h97l12 7h373';
  bus.append(
    svgNode('path', {d: route, class: 'diagram-scan-line'}),
    svgNode('path', {d: 'M48 7h216l12 7h146l12 -7h173', class: 'diagram-scan-line diagram-scan-secondary'}),
    svgNode('path', {d: route, pathLength: 100, class: 'diagram-scan-runner'}),
  );
  for (const cx of [0, 125, 332, 510, 662]) {
    bus.append(svgNode('circle', {cx, cy: 0, r: 2.5, class: 'diagram-scan-point'}));
  }
  signals.append(bus);

  const radar = svgNode('g', {transform: `translate(${465 * scaleX} ${171 * scaleY}) scale(${scaleX})`});
  radar.append(svgNode('circle', {r: 73, class: 'diagram-radar-field'}),
    svgNode('path', {d: 'M-73 0H73 M0 -73V73', class: 'diagram-scan-line diagram-scan-secondary'}));
  for (const radius of [24, 47, 65]) {
    radar.append(svgNode('circle', {r: radius, class: 'diagram-radar-ring'}));
  }
  const sweep = svgNode('g', {class: 'diagram-radar-sweep'});
  sweep.append(
    svgNode('path', {d: 'M0 0L-64 -10A65 65 0 0 1 0 -65Z', class: 'diagram-radar-sector'}),
    svgNode('path', {d: 'M0 0V-65', class: 'diagram-radar-beam'}),
  );
  radar.append(sweep);
  for (const [cx, cy, r] of [[0, 0, 4], [-33, -23, 3], [18, -37, 3], [36, 27, 4], [-21, 35, 2]]) {
    radar.append(svgNode('circle', {cx, cy, r, class: 'diagram-scan-point'}));
  }
  signals.append(radar);

  const telemetry = svgNode('g', {transform: `translate(${57 * scaleX} ${351 * scaleY}) scale(${scaleX})`});
  const wave = 'M0 0h40l10 -9h26l12 17h32l13 -21h28l8 13h66';
  telemetry.append(
    svgNode('path', {d: 'M0 -19H235 M0 0H235 M0 19H235', class: 'diagram-scan-line diagram-scan-secondary'}),
    svgNode('path', {d: wave, class: 'diagram-scan-line'}),
    svgNode('path', {d: wave, pathLength: 100, class: 'diagram-scan-runner diagram-scan-wave'}),
  );
  signals.append(telemetry);

  const output = svgNode('g', {class: 'diagram-output-signals', transform: `scale(${scaleX} ${scaleY})`});
  const outputWave = 'M42 533h20l6 -5 8 9 8 -10 7 6h43';
  output.append(
    svgNode('path', {d: 'M42 525H134 M42 541H134', class: 'diagram-scan-line diagram-scan-secondary'}),
    svgNode('path', {d: outputWave, class: 'diagram-scan-line'}),
    svgNode('path', {d: outputWave, pathLength: 100, class: 'diagram-scan-runner diagram-scan-wave'}),
    svgNode('rect', {x: 153, y: 452, width: 38, height: 24, rx: 4, class: 'diagram-output-tile'}),
    svgNode('path', {d: 'M161 459l5 4-5 4m9 0h10', class: 'diagram-output-icon'}),
    svgNode('rect', {x: 315, y: 438, width: 36, height: 28, rx: 4, class: 'diagram-output-tile'}),
    svgNode('path', {d: 'M320 445h25v14h-25z M320 455l7-5 6 3 5-4 7 6', class: 'diagram-output-icon'}),
  );
  signals.append(output);
  svg.append(signals);
}

function renderDiagramDataFlow(svg, {width, height}) {
  const scaleY = height / wideDiagramLayout.height;
  const railX = 860 * width / wideDiagramLayout.width;
  const length = 235 * scaleY;
  const flow = svgNode('g', {class: 'diagram-data-flow', 'aria-hidden': 'true', transform: `translate(${railX} ${158 * scaleY})`});
  flow.style.setProperty('--data-travel', `${length - 28}px`);
  flow.append(
    svgNode('path', {class: 'diagram-data-rail', d: `M0 14 V${length} M8 24 V${length - 10}`}),
    svgNode('circle', {class: 'diagram-data-terminal', cx: 0, cy: length, r: 2.8}),
    svgNode('rect', {class: 'diagram-data-tile', x: -11, y: -11, width: 22, height: 22, rx: 5}),
    svgNode('path', {class: 'diagram-data-icon', d: 'M-4 -4h8v8h-8z M-5 -11v-4m10 4v-4m-10 26v4m10 -4v4 M-11 -5h-4m4 10h-4m26 -10h4m-4 10h4'}),
  );

  const applications = [
    [85, '场景合成', 'M-4 -10l-8 20 M4 -10l8 20 M0 -10v4m0 12v4 M-4 -3h8v8h-8z'],
    [165, '脚本生成', 'M-4 -6l-5 5 5 5 M4 -6l5 5-5 5 M2 -8l-4 14 M-8 9H8'],
  ];
  for (const [position, label, glyph] of applications) {
    const application = svgNode('g', {transform: `translate(0 ${position * scaleY})`});
    application.append(
      svgNode('path', {class: 'diagram-data-rail', d: 'M8 0h8l8 -8h3'}),
      svgNode('rect', {class: 'diagram-data-tile', x: 27, y: -19, width: 32, height: 32, rx: 7}),
      svgNode('path', {class: 'diagram-data-icon', d: glyph, transform: 'translate(43 -3)'}),
      diagramText(43, 24, label, 'diagram-data-caption diagram-centered-text', true),
    );
    flow.append(application);
  }
  for (const [index, label] of ['0101', '1010'].entries()) {
    const packet = svgNode('g', {class: 'diagram-data-packet', transform: 'translate(0 27)'});
    const trail = svgNode('g', {class: 'diagram-data-trail'});
    trail.style.setProperty('--data-rest', `${length * (.25 + .42 * index)}px`);
    trail.style.animationDelay = `${-1.1 - 2.2 * index}s`;
    trail.append(
      svgNode('path', {class: 'diagram-data-tail', d: 'M0 -24v5m0 2v4'}),
      svgNode('circle', {cx: 0, cy: 0, r: 3.2}),
      diagramText(-5, 0, label, 'diagram-data-bits diagram-centered-text'),
    );
    packet.append(trail);
    flow.append(packet);
  }
  svg.append(flow);
}

function createSystemDiagram(container) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let svg;
  let paths = [];
  let active;
  let mode;
  let playing = false;
  let previousWidth;
  let frameRequest;

  function updateTrace() {
    svg.classList.toggle('has-flow', Boolean(active));
    const projects = flowProjects[active] || [];
    for (const link of svg.querySelectorAll('.diagram-link')) {
      link.classList.toggle('is-flow-node', projects.includes(Number(link.dataset.project)));
    }
    for (const path of paths) {
      const selected = path.kind === active && (!path.mode || path.mode === mode);
      path.line.classList.toggle('is-tracing', selected);
      const moving = selected && playing && !reduced.matches;
      path.dot.setAttribute('visibility', moving ? 'visible' : 'hidden');
      if (moving) path.motion.beginElement?.();
    }
  }

  function alignContents() {
    if (!container.clientWidth) return;
    const padding = 8;
    for (const group of svg.querySelectorAll('[data-scene-center-x]')) {
      const bounds = group.getBBox();
      const x = Number(group.dataset.sceneCenterX) - bounds.x - bounds.width / 2;
      const centerY = Number(group.dataset.sceneCenterY);
      const y = centerY - bounds.y - bounds.height / 2;
      group.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
      const chip = group.previousElementSibling;
      if (chip.classList.contains('diagram-scene-chip')) {
        chip.setAttribute('y', centerY - bounds.height / 2 - padding);
        chip.setAttribute('height', bounds.height + 2 * padding);
      }
    }
    const scene = svg.querySelector('.diagram-scene');
    const sceneTitle = scene.nextElementSibling;
    const sceneTop = Number(sceneTitle.dataset.sceneCenterY) - sceneTitle.getBBox().height / 2 - padding;
    const sceneBottom = Math.max(...Array.from(svg.querySelectorAll('.diagram-scene-chip'), (chip) =>
      chip.y.baseVal.value + chip.height.baseVal.value));
    scene.setAttribute('y', sceneTop);
    scene.setAttribute('height', sceneBottom + padding - sceneTop);
    for (const copy of svg.querySelectorAll('.diagram-card-copy')) {
      const rect = copy.previousElementSibling;
      const frame = rect.getBBox();
      const bounds = copy.getBBox();
      const height = bounds.height + 2 * padding;
      const top = frame.y + (frame.height - height) / 2;
      rect.setAttribute('y', top);
      rect.setAttribute('height', height);
      const project = copy.parentElement;
      if (rect.classList.contains('diagram-node-bg') && project.dataset.project !== '1') {
        project.querySelector('.diagram-node-badge').setAttribute('cy', top - 4);
        project.querySelector('.diagram-node-number').setAttribute('y', top - 4);
      }
      const icon = copy.nextElementSibling;
      let offsetX = 0;
      if (icon?.classList.contains('diagram-context-inline-icon')) {
        const iconBounds = icon.getBBox();
        offsetX = Math.max(0, iconBounds.x + iconBounds.width + 5 - bounds.x);
      }
      const offsetY = frame.y + frame.height / 2 - bounds.y - bounds.height / 2;
      copy.setAttribute('transform', 'translate(' + offsetX + ' ' + offsetY + ')');
    }
    for (const icon of svg.querySelectorAll('.diagram-project-icon')) {
      const copy = icon.previousElementSibling;
      const frame = copy.previousElementSibling.getBBox();
      const bounds = icon.getBBox();
      const centerTop = frame.y + (frame.height - bounds.height) / 2;
      const copyOffset = copy.transform.baseVal.getItem(0).matrix.f;
      const gap = 2;
      const overlaps = Array.from(copy.children).some((label) => {
        const text = label.getBBox();
        const textTop = text.y + copyOffset;
        return bounds.x < text.x + text.width + gap && bounds.x + bounds.width + gap > text.x &&
          centerTop < textTop + text.height + gap && centerTop + bounds.height + gap > textTop;
      });
      const offset = overlaps ? copyOffset : centerTop - bounds.y;
      icon.setAttribute('transform', 'translate(0 ' + offset + ')');
    }
    alignRoutes();
  }

  function alignRoutes() {
    const projectBox = (number) => svg.querySelector('[data-project="' + number + '"] .diagram-node-bg').getBBox();
    const contextBox = (title) => {
      const label = [...svg.querySelectorAll('.diagram-card-copy .diagram-context-title')].find((item) => item.textContent === title);
      return label.parentElement.previousElementSibling.getBBox();
    };
    const bottom = (box) => box.y + box.height;
    const scene = svg.querySelector('.diagram-scene').getBBox();
    const perception = projectBox(4);
    const group = svg.querySelector('.diagram-scene-group');
    group.setAttribute('y', scene.y - 10);
    group.setAttribute('height', bottom(perception) - scene.y + 20);
    // The first and last coordinates of vertical connections follow their cards.
    const anchors = {
      1: [bottom(scene), perception.y],
      2: [bottom(perception), projectBox(7).y],
      3: [bottom(perception)],
      5: [bottom(contextBox('主车')), projectBox(6).y],
      6: [bottom(projectBox(6))],
      7: [bottom(projectBox(5)), projectBox(8).y],
      8: [bottom(contextBox('地图'))],
      9: [bottom(projectBox(8)), projectBox(3).y],
      10: [bottom(projectBox(2)), projectBox(3).y],
      11: [bottom(contextBox('CLI'))],
      13: [bottom(projectBox(3)), contextBox('使用者').y],
      15: [bottom(projectBox(1)), projectBox(2).y],
    };
    for (const [index, [start, end]] of Object.entries(anchors)) {
      const {line, motion, route} = paths[index];
      let d = route.replace(/^(M[\d.]+ )[\d.]+/, (_, prefix) => prefix + start);
      if (end !== undefined) d = d.replace(/V[\d.]+$/, 'V' + end);
      line.setAttribute('d', d);
      motion.setAttribute('path', d);
    }
    const manual = anchors[10];
    svg.querySelector('.diagram-manual-title').setAttribute('y', (manual[0] + manual[1]) / 2);
  }

  function render() {
    const width = Math.max(400, Math.min(window.innerWidth, 1280));
    if (width === previousWidth) return;
    previousWidth = width;
    const layout = fitWideDiagram(width);
    container.parentElement.style.setProperty('--diagram-ratio', layout.width / layout.height);
    container.style.setProperty('--diagram-density', layout.amount);
    svg = svgNode('svg', {
      viewBox: '0 0 ' + layout.width + ' ' + layout.height,
      class: 'system-diagram',
      role: 'group', 'aria-label': '自动驾驶仿真系统图，含八个可点击项目',
    });
    const defs = svgNode('defs', {});
    for (const [kind, color] of Object.entries(diagramColors)) {
      const marker = svgNode('marker', {id: 'diagram-arrow-' + kind, viewBox: '0 0 10 10', markerUnits: 'userSpaceOnUse',
        markerWidth: 9, markerHeight: 9, refX: 9.3, refY: 5, orient: 'auto'});
      marker.append(svgNode('path', {d: 'M0 0 10 5 0 10z', fill: color}));
      defs.append(marker);
    }
    svg.append(defs);
    renderDiagramBackground(svg, layout);
    svg.append(diagramText(...layout.zoneTitle, '自动驾驶模式', 'diagram-zone-title'),
      diagramText(...layout.manualTitle, '手动驾驶模式', 'diagram-manual-title', true));
    const [sceneX, sceneY, sceneWidth, sceneHeight] = layout.sceneGroup;
    svg.append(svgNode('rect', {x: sceneX, y: sceneY, width: sceneWidth, height: sceneHeight, rx: 11, class: 'diagram-scene-group'}));

    paths = layout.edges.map(([kind, d, mode]) => {
      const color = diagramColors[kind];
      const line = svgNode('path', {d, stroke: color, class: 'diagram-edge diagram-edge-' + kind, 'marker-end': 'url(#diagram-arrow-' + kind + ')'});
      const dot = svgNode('circle', {r: 4, fill: '#fff', stroke: color, 'stroke-width': 1.8, visibility: 'hidden'});
      const motion = svgNode('animateMotion', {path: d, dur: '1.4s', begin: 'indefinite', repeatCount: 'indefinite'});
      dot.append(motion);
      svg.append(line, dot);
      return {kind, mode, line, dot, motion, route: d};
    });

    for (const item of layout.context.filter((item) => !item[7])) renderDiagramContext(svg, item, layout.amount);
    for (const [number, bounds] of Object.entries(layout.projects)) renderDiagramProject(svg, Number(number), bounds, layout);
    container.replaceChildren(svg);
    alignContents();
    updateTrace();
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(frameRequest);
    frameRequest = requestAnimationFrame(render);
  });
  reduced.addEventListener('change', updateTrace);
  render();
  return {
    align: alignContents,
    trace(kind, drivingMode, run) {
      active = kind;
      mode = drivingMode;
      playing = run;
      updateTrace();
    },
  };
}
