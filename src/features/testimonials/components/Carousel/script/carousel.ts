import {
  getRequiredElement,
  getRequiredElements,
  initSwipe,
  initKeyboardArrows,
} from "@utils/index";

import createIndexController from "./indexController";
import createCarouselAnimator from "./carouselAnimator";

import { selectors } from "./config";

const initCarousel = (carouselClass: string) => {
  const carousel = getRequiredElement(carouselClass);

  const elements = {
    carousel,
    video: getRequiredElement(selectors.video, carousel),
    videoPlayer: getRequiredElement<HTMLVideoElement>(
      `${selectors.video} video`,
    ),
    slides: getRequiredElements(selectors.slide, carousel),
    indicators: getRequiredElements(selectors.indicator, carousel),
    prevButton: getRequiredElement(selectors.prevButton, carousel),
    nextButton: getRequiredElement(selectors.nextButton, carousel),
  };

  elements.videoPlayer.autoplay = true;
  elements.videoPlayer.play();

  const carouselAnimator = createCarouselAnimator(
    elements.slides,
    elements.video,
    elements.indicators,
  );

  const loop = (index: number) =>
    (index + elements.slides.length) % elements.slides.length;

  const indexController = createIndexController(
    loop,
    ({ prevIndex, currentIndex }) =>
      carouselAnimator.animate(prevIndex, currentIndex),
  );

  elements.prevButton.addEventListener("click", indexController.prev);
  elements.nextButton.addEventListener("click", indexController.next);

  initKeyboardArrows(carousel, {
    arrowLeft: indexController.prev,
    arrowRight: indexController.next,
  });

  initSwipe(carousel, {
    swipeLeft: indexController.prev,
    swipeRight: indexController.next,
  });
};

export default initCarousel;
