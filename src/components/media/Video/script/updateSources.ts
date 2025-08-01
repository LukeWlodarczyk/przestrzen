const updateSources = (
  video: HTMLVideoElement,
  sources: HTMLSourceElement[],
) => {
  if (sources.length === 0) return;

  video.prepend(...sources);

  sources.find((source) => {
    const match = window.matchMedia(source.media).matches;
    if (match) video.load();
    return match;
  });
};

export default updateSources;
