import BASE_URL from ".";

type VideoQuality = "auto" | "low" | "eco" | "good" | "best";

const VIDEO_BASE_URL = `${BASE_URL}/video/upload`;

const buildRawVideoUrl = (publicId: string) => {
  return `${VIDEO_BASE_URL}/${publicId}.mp4`;
};

const buildPosterImageUrl = (publicId: string, startOffset: number) => {
  const transformations = `q_auto,f_auto,so_${startOffset}`;

  return `${VIDEO_BASE_URL}/${transformations}/${publicId}.jpeg`;
};

const buildSnapshotClipUrl = (publicId: string, startOffset: number) => {
  const transformations = `q_auto,f_auto,du_0.01,so_${startOffset}`;

  return `${VIDEO_BASE_URL}/${transformations}/${publicId}.mp4`;
};

const buildOptimizedVideoUrl = (publicId: string, quality: VideoQuality) => {
  const isAuto = quality === "auto";
  const qualityTransformation = `q_auto${isAuto ? "" : `:${quality}`}`;

  const transformations = `${qualityTransformation},f_auto`;

  return `${VIDEO_BASE_URL}/${transformations}/${publicId}.mp4`;
};

export default {
  buildRawVideoUrl,
  buildPosterImageUrl,
  buildSnapshotClipUrl,
  buildOptimizedVideoUrl,
};
