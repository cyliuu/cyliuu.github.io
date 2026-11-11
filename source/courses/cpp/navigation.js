/* Shared navigation state for the portal, project and task rows. */
(() => {
  const header = document.querySelector('.topbar');
  const nav = header?.querySelector('nav');
  if (!nav) return;
  const root = document.documentElement;
  const slot = document.createElement('div');
  slot.className = 'portal-topbar-slot';
  header.before(slot);
  slot.append(header);
  header.classList.add('portal-topbar-ready');
  nav.id = 'portal-navigation';
  const toggle = document.createElement('button');
  toggle.className = 'portal-menu-toggle';
  toggle.type = 'button';
  toggle.textContent = '课程导航';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');
  nav.before(toggle);

  const listeners = new Set();
  const mobile = matchMedia('(max-width: 660px)');
  const brand = header.querySelector('.brand');
  const brandHome = brand?.dataset.homeHref || brand?.getAttribute('href');
  function syncBrandLink() {
    if (!brand) return;
    if (mobile.matches && brandHome) brand.setAttribute('href', brandHome);
    else brand.removeAttribute('href');
    const mark = brand.querySelector('.mark');
    if (mobile.matches) mark?.setAttribute('aria-hidden', 'true');
    else mark?.removeAttribute('aria-hidden');
  }
  syncBrandLink();
  const storageKey = 'cpp-portal-navigation-intent';
  let expanded = false, shown = false, floating = false;
  let height = header.getBoundingClientRect().height, baseHeight = height;
  let lastY = Math.max(0, scrollY), direction = 0, distance = 0;
  let framePending = false, generation = 0, jump = null;
  let selectionTarget = null, portalTarget = null, ready = false;
  let incoming = null;
  try {
    incoming = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
    sessionStorage.removeItem(storageKey);
    sessionStorage.removeItem('cpp-portal-navigation-reveal');
    if (incoming?.href !== location.href) incoming = null;
  } catch {}

  function layout() {
    height = header.getBoundingClientRect().height;
    if (!expanded) baseHeight = height;
    floating = Math.max(0, scrollY) > baseHeight;
    header.classList.toggle('portal-header-floating', floating);
    header.classList.toggle('portal-header-revealed', shown);
    const slotHeight = !floating && expanded ? height : baseHeight;
    slot.style.height = slotHeight + 'px';
    root.style.setProperty('--portal-header-offset', floating && shown ? height + 'px' : '0px');
  }
  function menu(open) {
    expanded = open;
    header.classList.toggle('portal-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    layout();
  }
  function markPortal(key) {
    for (const anchor of nav.querySelectorAll('a[href]')) {
      const url = new URL(anchor.getAttribute('href'), location.href);
      const active = key === 'cases' ? url.pathname.endsWith('/reading.html')
        : key === 'classroom' ? url.pathname.endsWith('/classroom.html')
        : anchor.dataset.portal === key || ({home:'#top', map:'#project-map', tasks:'#project'}[key] === url.hash);
      if (active) anchor.setAttribute('aria-current', key === 'cases' || key === 'classroom' ? 'page' : 'location');
      else anchor.removeAttribute('aria-current');
    }
  }
  function portalFromTarget(id) {
    if (!document.querySelector('#overview')) return null;
    const node = document.getElementById(id);
    if (id === 'top' || id === 'overview') return 'home';
    if (node?.closest('#project-map')) return 'map';
    if (node?.closest('.project')) return 'tasks';
    return null;
  }
  function notify() {
    if (document.querySelector('#overview')) {
      let key = portalTarget;
      if (!key) {
        const boundary = (document.querySelector('.project-directory')?.getBoundingClientRect().bottom || header.getBoundingClientRect().bottom) + 35;
        key = 'home';
        for (const [id, candidate] of [['project-map','map'],['project','tasks']]) {
          if (document.getElementById(id)?.getBoundingClientRect().top <= boundary) key = candidate;
        }
      }
      markPortal(key);
    } else markPortal(document.querySelector('#reading-preview') ? 'cases' : 'classroom');
    listeners.forEach(callback => callback(selectionTarget));
  }
  function sameDocument(url) {
    if (url.protocol !== location.protocol || url.host !== location.host) return false;
    return url.pathname === location.pathname || (document.querySelector('#overview') && location.pathname.endsWith('/') && url.pathname === location.pathname + 'index.html');
  }
  function readingBoundary() {
    const directory = document.querySelector('.project-directory');
    let bottom = directory?.getBoundingClientRect().bottom || header.getBoundingClientRect().bottom;
    for (const row of document.querySelectorAll('.case-jump-row')) {
      const box = row.getBoundingClientRect();
      if (box.top <= bottom + 1 && box.bottom > bottom) bottom = box.bottom;
    }
    return bottom;
  }
  function destination(id) {
    const node = document.getElementById(id);
    if (!node) return null;
    if (id === 'top') return 0;
    const directoryHeight = document.querySelector('.project-directory')?.getBoundingClientRect().height || 0;
    const task = node.closest('.catalogue-task');
    const toolbar = task?.querySelector(':scope > .case-jump-row');
    const toolbarHeight = toolbar && task !== node && !node.closest('.catalogue-task-heading') && !toolbar.contains(node) ? toolbar.getBoundingClientRect().height : 0;
    const taskTabs = node.closest('.task')?.querySelector(':scope > .section-tabs');
    const taskTabsHeight = taskTabs && node.classList.contains('task-section') ? taskTabs.getBoundingClientRect().height : 0;
    const landmark = node.classList.contains('classroom-stage') ? node.querySelector('.classroom-stage-heading') || node : node.matches('.project, .catalogue-project, .task, .catalogue-task, #project-map') ? node.querySelector('.section-heading, .catalogue-task-heading') || node : node;
    const gap = parseFloat(getComputedStyle(root).getPropertyValue('--content-start-gap')) || 24;
    return Math.max(0, Math.min(document.documentElement.scrollHeight - innerHeight,
      scrollY + landmark.getBoundingClientRect().top - directoryHeight - (shown ? height : 0) - toolbarHeight - taskTabsHeight - gap));
  }
  function navigate(id, options = {}) {
    if (!document.getElementById(id)) return false;
    const token = ++generation;
    menu(false);
    shown = Boolean(options.portal);
    selectionTarget = id;
    portalTarget = portalFromTarget(id);
    jump = {id, token};
    direction = 0; distance = 0;
    layout();
    if (options.history !== false) {
      const url = new URL(location.href);
      url.hash = id;
      if (url.href !== location.href) history.pushState(null, '', url);
    }
    let stable = 0, attempts = 0;
    function align() {
      if (jump?.token !== token) return;
      layout();
      const y = destination(id);
      if (y === null) {jump = null; return;}
      if (Math.abs(scrollY - y) > 1) {scrollTo({top:y, behavior:'instant'}); stable = 0;}
      else stable++;
      lastY = Math.max(0, scrollY);
      layout(); notify();
      if (stable >= 2 || ++attempts >= 8) {jump = null; lastY = Math.max(0, scrollY); return;}
      requestAnimationFrame(align);
    }
    align();
    document.dispatchEvent(new CustomEvent('course:navigate', {detail:{id}}));
    return true;
  }
  function cancelJump() {
    generation++;
    jump = null;
    selectionTarget = portalTarget = null;
  }
  function scrollFrame() {
    framePending = false;
    const y = Math.max(0, scrollY), delta = y - lastY;
    if (!jump && Math.abs(delta) > .5) {
      selectionTarget = portalTarget = null;
      const next = Math.sign(delta);
      if (next !== direction) {direction = next; distance = 0;}
      distance += Math.abs(delta);
      if (distance >= 12) {shown = next < 0; if (!shown) menu(false);}
    }
    lastY = y;
    layout(); notify();
  }
  function schedule() {
    if (!framePending) {framePending = true; requestAnimationFrame(scrollFrame);}
  }
  toggle.addEventListener('click', () => {shown = true; menu(!expanded); notify();});
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && expanded) {menu(false); toggle.focus();}
  });
  header.addEventListener('focusin', event => {
    if (event.target.matches(':focus-visible')) {shown = true; layout();}
  });
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest('a[href]');
    if (!header.contains(event.target)) menu(false);
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
    const url = new URL(anchor.getAttribute('href'), location.href);
    const isPortal = nav.contains(anchor) || anchor.classList.contains('brand') || url.hash === '#top';
    if (sameDocument(url) && (url.hash || isPortal)) {
      let id;
      try {id = decodeURIComponent(url.hash.slice(1)) || 'top';} catch {return;}
      if (!document.getElementById(id)) return;
      event.preventDefault();
      navigate(id, {portal:isPortal});
    } else if (url.protocol === location.protocol && url.host === location.host && /\.html$/.test(url.pathname)) {
      menu(false);
      try {sessionStorage.setItem(storageKey, JSON.stringify({href:url.href, portal:isPortal}));} catch {}
    }
  });
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('wheel', cancelJump, {passive:true});
  window.addEventListener('touchstart', cancelJump, {passive:true});
  document.addEventListener('keydown', event => {
    if (['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key) && !event.target.closest('input, textarea, select, button')) cancelJump();
  });
  mobile.addEventListener('change', () => {syncBrandLink(); menu(false); schedule();});
  new ResizeObserver(() => {layout(); schedule();}).observe(header);
  window.addEventListener('resize', () => {cancelJump(); layout(); schedule();});
  let restoreScheduled = false;
  function restore() {
    if (restoreScheduled) return;
    restoreScheduled = true;
    requestAnimationFrame(() => {
      restoreScheduled = false;
      let id;
      try {id = decodeURIComponent(location.hash.slice(1));} catch {return;}
      if (id) navigate(id, {history:false, portal:Boolean(incoming?.portal)});
      else {selectionTarget = portalTarget = null; notify();}
      incoming = null;
    });
  }
  window.addEventListener('popstate', restore);
  window.addEventListener('hashchange', restore);

  function attachDirectory({directory, projectRail, taskRail, projects, taskId, projectOpensFirstTask = false}) {
    const sections = projects.map(project => ({project, node:document.getElementById(project.id), tasks:project.tasks.map(task => ({task, node:document.getElementById(taskId(task))}))}));
    let selectedProject;
    function anchor(text, id) {
      const node = document.createElement('a'); node.textContent = text; node.href = '#' + id; return node;
    }
    projectRail.replaceChildren(...projects.map(p => {const a = anchor('项目 ' + p.number, p.id); a.title = p.title; return a;}));
    function mark(rail, id) {
      for (const a of rail.children) {
        if (id && a.hash === '#' + id) {
          if (!a.hasAttribute('aria-current')) {
            a.setAttribute('aria-current','location');
            const box = rail.getBoundingClientRect(), item = a.getBoundingClientRect();
            if (item.left < box.left || item.right > box.right) rail.scrollLeft += item.left - box.left - 4;
          }
        } else a.removeAttribute('aria-current');
      }
    }
    function refresh() {
      const target = selectionTarget && document.getElementById(selectionTarget);
      let section = target && sections.find(p => p.node === target || p.node?.contains(target));
      let task = section && section.node !== target ? section.tasks.find(t => t.node === target || t.node?.contains(target)) : null;
      if (section && section.node === target && projectOpensFirstTask) task = section.tasks[0];
      if (!section) {
        const boundary = readingBoundary() + 35;
        for (const entry of sections) {
          if (entry.node?.getBoundingClientRect().top <= boundary) section = entry;
          else break;
        }
        if (!section && projectOpensFirstTask) section = sections[0];
        if (section && (!target || (projectOpensFirstTask && selectionTarget === 'top'))) {
          task = null;
          for (const entry of section.tasks) {
            if (entry.node?.getBoundingClientRect().top <= boundary) task = entry;
            else break;
          }
        }
      }
      const project = section?.project || projects[0];
      if (selectedProject !== project) {
        selectedProject = project;
        taskRail.replaceChildren(...project.tasks.map(t => {const a = anchor(t.title, taskId(t)); a.title = t.kind + ' · ' + t.title; return a;}));
        taskRail.scrollLeft = 0;
      }
      if (!section && projectRail.querySelector('a[aria-current]')) projectRail.scrollLeft = 0;
      mark(projectRail, section?.project.id);
      mark(taskRail, task ? taskId(task.task) : null);
    }
    const observer = new ResizeObserver(() => {
      root.style.setProperty('--project-directory-height',directory.getBoundingClientRect().height + 'px');
      schedule();
    });
    observer.observe(directory);
    root.style.setProperty('--project-directory-height',directory.getBoundingClientRect().height + 'px');
    listeners.add(refresh); refresh();
    return {refresh, destroy(){listeners.delete(refresh); observer.disconnect();}};
  }
  function watch(callback) {listeners.add(callback); callback(selectionTarget); return () => listeners.delete(callback);}
  window.courseNavigation = {navigate, attachDirectory, watch, readingBoundary, refresh:notify};
  function start() {
    if (ready) return;
    ready = true;
    layout(); notify(); restore();
  }
  layout();
  if (document.readyState === 'complete') start();
  else document.addEventListener('DOMContentLoaded', start, {once:true});
})();
