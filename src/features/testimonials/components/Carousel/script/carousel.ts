import {
  getRequiredElement,
  getRequiredElements,
  initSwipe,
  initKeyboardArrows,
} from "@utils/index";

import createIndexController from "./indexController";
import createCarouselAnimator from "./carouselAnimator";

const initCarousel = (carouselClass: string) => {
  const carousel = getRequiredElement(carouselClass);

  const elements = {
    carousel,
    video: getRequiredElement(".video", carousel),
    videoPlayer: getRequiredElement<HTMLVideoElement>(".video video"),
    slides: getRequiredElements(".carousel-slide", carousel),
    indicators: getRequiredElements(".carousel-indicator-icon", carousel),
    prevButton: getRequiredElement(".carousel-control.prev", carousel),
    nextButton: getRequiredElement(".carousel-control.next", carousel),
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
