import {
  getRequiredElement,
  getRequiredElements,
  whenHighBandwidth,
  hideAndRemove,
} from "@utils/index";

import reloadVideoOnSourceMediaChange from "./reloadVideoOnSourceMediaChange";
import ensureVideoState from "./ensureVideoState";
import updateSources from "./updateSources";

const initVideo = () => {
  const videoElements = getRequiredElements<HTMLVideoElement>("video[data-id]");

  videoElements.forEach((video) => {
    const id = video.dataset.id as string;

    const placeholder = getRequiredElement(`div[data-placeholder-id="${id}"]`);

    const sources = getRequiredElement(
      `div[data-high-bandwidth-sources='${id}']`,
    ).querySelectorAll("source");

    whenHighBandwidth(() => updateSources(video, [...sources]));

    ensureVideoState(video, "canplay", () => hideAndRemove(placeholder));

    reloadVideoOnSourceMediaChange(video);
  });
};

export default initVideo;
