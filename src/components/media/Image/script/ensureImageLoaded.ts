function ensureImageLoaded(image: HTMLImageElement, cb: () => void) {
  if (image.complete) cb();
  else image.addEventListener("load", cb, { once: true });
}

export default ensureImageLoaded;
