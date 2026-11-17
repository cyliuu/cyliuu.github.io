const root = document.documentElement;
const header = document.querySelector('.site-header');
const directory = document.querySelector('.directory');
const headerSlot = header.parentElement;
const brand = header.querySelector('.brand');
const brandHome = brand.getAttribute('href');
const menuToggle = header.querySelector('.site-menu-toggle');
const mobile = matchMedia('(max-width: 660px)');
const siteLinks = [...document.querySelectorAll('.site-nav a')];
const homeSections = siteLinks.map(link => targetFromHash(link.hash)).filter(Boolean);
const taskPortal = document.querySelector('.task-portal');
const taskProjects = [...document.querySelectorAll('.task-portal .task-project')];
const taskProjectLinks = [...document.querySelectorAll('.task-portal .route-link')];
const projects = [...document.querySelectorAll('.class-project')];
const projectLinks = [...document.querySelectorAll('.project-rail a')];
const taskRails = [...document.querySelectorAll('.task-rail')];
const taskLinks = new Map(taskRails.map(rail => [rail, [...rail.querySelectorAll('a')]]));
const stageLinks = new Map([...document.querySelectorAll('.lesson')].map(lesson =>
  [lesson, [...lesson.querySelectorAll('.stage-rail a')]]));
let currentTask;
let currentTaskProject;
let navigationTarget;
let scheduled = false;
let menuOpen = false;
let headerRevealed = false;
let headerBaseHeight = header.offsetHeight;
let previousScrollY = Math.max(0, scrollY);
let scrollDirection = 0;
let scrollDistance = 0;
const mapViews = [...document.querySelectorAll('.map-switch button')].map(button => ({
  button, panel: document.getElementById(button.getAttribute('aria-controls')),
}));

function setCurrent(links, hash, keepVisible = false) {
  for (const link of links) {
    const active = link.hash === hash;
    if (active === link.hasAttribute('aria-current')) continue;
    if (!active) {
      link.removeAttribute('aria-current');
      continue;
    }
    link.setAttribute('aria-current', 'location');
    if (!keepVisible) continue;
    const rail = link.parentElement;
    const bounds = rail.getBoundingClientRect();
    const item = link.getBoundingClientRect();
    if (item.left < bounds.left) rail.scrollLeft += item.left - bounds.left - 3;
    else if (item.right > bounds.right) rail.scrollLeft += item.right - bounds.right + 3;
  }
}

function targetFromHash(hash) {
  return hash ? document.getElementById(hash.slice(1)) : null;
}

function activeAt(nodes, edge) {
  let current;
  for (const node of nodes) {
    if (node.getBoundingClientRect().top > edge) break;
    current = node;
  }
  return current;
}

function taskProjectAt(edge) {
  const selected = navigationTarget?.closest('.task-project');
  if (selected) return selected;
  const project = activeAt(taskProjects, edge);
  if (!project) return;
  // Cards in the same desktop row share a reading position. Keep the selected card in that row.
  const top = project.getBoundingClientRect().top;
  const inRow = card => Math.abs(card.getBoundingClientRect().top - top) < 1;
  return currentTaskProject && inRow(currentTaskProject) ? currentTaskProject : taskProjects.find(inRow);
}

function updateNavigation() {
  scheduled = false;
  if (!directory) {
    if (!homeSections.length) return;
    const entryGap = parseFloat(getComputedStyle(root).getPropertyValue('--portal-entry-gap'));
    const edge = Math.max(0, header.getBoundingClientRect().bottom) + entryGap + 2;
    const atBottom = scrollY + innerHeight >= root.scrollHeight - 1;
    const selected = navigationTarget && homeSections.find(item => item.contains(navigationTarget));
    const section = selected || (atBottom && scrollY > 0
      ? homeSections.at(-1)
      : activeAt(homeSections, edge) || homeSections[0]);
    setCurrent(siteLinks, '#' + section.id);
    currentTaskProject = section === taskPortal ? taskProjectAt(edge) : undefined;
    setCurrent(taskProjectLinks, currentTaskProject && '#' + currentTaskProject.id);
    return;
  }

  const edge = directory.getBoundingClientRect().bottom + 35;
  const project = activeAt(projects, edge) || projects[0];
  const rail = taskRails[projects.indexOf(project)];
  for (const item of taskRails) item.hidden = item !== rail;
  setCurrent(projectLinks, '#' + project.id, true);
  const links = taskLinks.get(rail);
  const task = activeAt(links.map(link => targetFromHash(link.hash)), edge);
  setCurrent(links, task && '#' + task.id, true);
  if (task !== currentTask) {
    if (currentTask) setCurrent(stageLinks.get(currentTask));
    currentTask = task;
  }
  if (task) {
    const stages = stageLinks.get(task);
    const stageEdge = edge + task.querySelector('.lesson-stage-jump').offsetHeight;
    const stage = activeAt(stages.map(link => targetFromHash(link.hash)), stageEdge);
    setCurrent(stages, stage && '#' + stage.id, stages.length > 1);
  }
}

function scheduleNavigation() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateNavigation);
}

function updateOffsets() {
  const height = header.offsetHeight;
  if (!menuOpen) headerBaseHeight = height;
  const floating = mobile.matches && scrollY > headerBaseHeight;
  header.classList.toggle('site-header--floating', floating);
  header.classList.toggle('site-header--revealed', floating && headerRevealed);
  headerSlot.style.height = mobile.matches ? (floating ? headerBaseHeight : height) + 'px' : '';

  const headerOffset = mobile.matches ? (floating && headerRevealed ? height : 0) : height;
  root.style.setProperty('--header-height', headerOffset + 'px');
  root.style.setProperty('--sticky-height', headerOffset + (directory?.offsetHeight || 0) + 'px');
  scheduleNavigation();
  return headerOffset;
}

function setMenuOpen(open) {
  menuOpen = open;
  header.classList.toggle('site-menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

function syncMobileHeader() {
  if (mobile.matches) brand.setAttribute('href', brandHome);
  else brand.removeAttribute('href');
  setMenuOpen(false);
  updateOffsets();
}

function followScroll() {
  const currentY = Math.max(0, scrollY);
  const delta = currentY - previousScrollY;
  previousScrollY = currentY;
  if (Math.abs(delta) > 1) navigationTarget = null;
  if (mobile.matches && Math.abs(delta) > .5) {
    const direction = Math.sign(delta);
    if (scrollDirection !== direction) scrollDistance = 0;
    scrollDirection = direction;
    scrollDistance += Math.abs(delta);
    if (scrollDistance >= 12) {
      headerRevealed = direction < 0;
      if (!headerRevealed && menuOpen) setMenuOpen(false);
    }
    updateOffsets();
  } else {
    scheduleNavigation();
  }
}

function openTargetDetails(target) {
  for (let node = target; node; node = node.parentElement) {
    if (node instanceof HTMLDetailsElement) node.open = true;
  }
}

function selectMapView(panel) {
  for (const view of mapViews) {
    const active = view.panel === panel;
    view.panel.hidden = !active;
    view.button.setAttribute('aria-pressed', String(active));
  }
}

for (const {button, panel} of mapViews) {
  button.addEventListener('click', () => {
    if (!panel.hidden) return;
    selectMapView(panel);
    if (location.hash === '#project-map') restoreTarget(location.hash, headerRevealed);
    else scheduleNavigation();
  });
}

function restoreTarget(hash = location.hash, revealHeader = false) {
  const target = targetFromHash(hash);
  navigationTarget = target;
  const hiddenMap = mapViews.find(({panel}) => panel.hidden && panel.contains(target));
  if (hiddenMap) selectMapView(hiddenMap.panel);
  openTargetDetails(target);
  if (!target) return;

  headerRevealed = revealHeader;
  setMenuOpen(false);
  const initialOffset = updateOffsets();
  const align = () => {
    if (target.id === 'home') window.scrollTo(0, 0);
    else target.scrollIntoView({block: 'start'});
  };
  align();
  if (updateOffsets() !== initialOffset) align();
  previousScrollY = Math.max(0, scrollY);
  scrollDirection = 0;
  scrollDistance = 0;
  updateOffsets();
}

menuToggle.hidden = false;
header.classList.add('site-menu-ready');
menuToggle.addEventListener('click', () => {
  headerRevealed = true;
  setMenuOpen(!menuOpen);
  updateOffsets();
});
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuOpen) {
    setMenuOpen(false);
    updateOffsets();
    menuToggle.focus();
  }
});
header.addEventListener('focusin', event => {
  if (mobile.matches && event.target.matches(':focus-visible') && !headerRevealed) {
    headerRevealed = true;
    updateOffsets();
  }
});
mobile.addEventListener('change', syncMobileHeader);

const resize = new ResizeObserver(updateOffsets);
resize.observe(header);
if (directory) resize.observe(directory);
syncMobileHeader();
window.addEventListener('scroll', followScroll, {passive: true});
window.addEventListener('hashchange', () => restoreTarget());
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
  const url = new URL(link.href);
  const sameDocument = url.protocol === location.protocol && url.host === location.host &&
    (url.pathname === location.pathname ||
      (location.pathname.endsWith('/') && url.pathname === location.pathname + 'index.html'));
  if (!sameDocument || !targetFromHash(url.hash)) return;
  event.preventDefault();
  if (location.hash !== url.hash) history.pushState(null, '', url.hash);
  restoreTarget(url.hash, header.contains(link));
});
requestAnimationFrame(() => restoreTarget(location.hash,
  homeSections.slice(1).some(section => location.hash === '#' + section.id)));
