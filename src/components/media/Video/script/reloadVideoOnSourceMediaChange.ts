const reloadVideoOnSourceMediaChange = (video: HTMLVideoElement) => {
  const sources = [
    ...video.querySelectorAll<HTMLSourceElement>("source[media]"),
  ];

  if (sources.length === 0) return;

  const combinedQuery = sources.reduce(
    (acc, source) =>
      acc ? `${acc} or (${source.media})` : `(${source.media})`,
    "",
  );

  // reload to default when no source medias matches
  window
    .matchMedia(combinedQuery)
    .addEventListener("change", (e) => !e.matches && video.load());

  // reload when higher source media matches
  sources.forEach((source) => {
    window
      .matchMedia(source.media)
      .addEventListener("change", (e) => e.matches && video.load());
  });
};

export default reloadVideoOnSourceMediaChange;
