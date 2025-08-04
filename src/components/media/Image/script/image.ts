import {
  getRequiredElement,
  getRequiredElements,
  hideAndRemove,
} from "@utils/index";

import ensureImageLoaded from "./ensureImageLoaded";

const initImage = () => {
  const imageElements = getRequiredElements<HTMLImageElement>("img[data-id]");

  imageElements.forEach((image: HTMLImageElement) => {
    const id = image.dataset.id as string;

    const placeholder = getRequiredElement(`div[data-placeholder-id="${id}"]`);

    ensureImageLoaded(image, () => hideAndRemove(placeholder));
  });
};

export default initImage;
