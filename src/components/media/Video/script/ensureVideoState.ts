const VIDEO_EVENT_READY_STATE_MAP = {
  loadedmetadata: HTMLMediaElement.HAVE_METADATA,
  loadeddata: HTMLMediaElement.HAVE_CURRENT_DATA,
  canplay: HTMLMediaElement.HAVE_FUTURE_DATA,
  canplaythrough: HTMLMediaElement.HAVE_ENOUGH_DATA,
} as const;

type VideoEventType = keyof typeof VIDEO_EVENT_READY_STATE_MAP;

function ensureVideoState(
  video: HTMLVideoElement,
  eventType: VideoEventType,
  cb: () => void,
) {
  const requiredState = VIDEO_EVENT_READY_STATE_MAP[eventType];

  if (video.readyState >= requiredState) cb();
  else video.addEventListener(eventType, cb, { once: true });
}

export default ensureVideoState;
