(() => {
  const crops = typeof imageDisplayCrops === 'undefined' ? {} : imageDisplayCrops;
  // Only supplied task illustrations and case results use display cropping.
  const selector = '.task-effect .task-output .task-effect-media img, .case-result .case-output .task-effect-media img';
  const registered = new WeakSet();
  const windowWidths = new WeakMap();
  const resize = new ResizeObserver(entries => entries.forEach(entry => {
    const sourceWidth = windowWidths.get(entry.target);
    entry.target.style.setProperty('--display-window-radius', (20 * entry.contentRect.width / sourceWidth) + 'px');
  }));

  function register(image) {
    if (registered.has(image)) return;
    registered.add(image);
    function apply() {
      let key;
      try { key = image.dataset.displayCropKey || decodeURIComponent((image.getAttribute('src') || '').split(/[?#]/, 1)[0]); }
      catch { return; }
      const crop = crops[key];
      if (!crop?.cropped || crop.mode !== 'standard-window' || image.naturalWidth !== crop.size[0] || image.naturalHeight !== crop.size[1]) return;
      if (image.parentElement.classList.contains('image-display-crop')) return;
      const [left, top, right, bottom] = crop.box;
      const width = right - left, height = bottom - top;
      const wrapper = document.createElement('span');
      wrapper.className = 'image-display-crop';
      wrapper.style.setProperty('--display-crop-ratio', String(width / height));
      wrapper.style.setProperty('--display-crop-width', (100 * crop.size[0] / width) + '%');
      wrapper.style.setProperty('--display-crop-left', (-100 * left / width) + '%');
      wrapper.style.setProperty('--display-crop-top', (-100 * top / height) + '%');
      wrapper.dataset.originalSrc = key;
      wrapper.dataset.windowWidth = String(width);
      image.before(wrapper);
      wrapper.append(image);
      windowWidths.set(wrapper, width);
      resize.observe(wrapper);
    }
    image.addEventListener('load', apply);
    if (image.complete && image.naturalWidth) apply();
  }

  function scan(root) {
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.matches?.(selector)) register(root);
    root.querySelectorAll(selector).forEach(register);
  }

  scan(document);
  new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(scan)))
    .observe(document.documentElement, {childList: true, subtree: true});
})();
