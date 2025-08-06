import { getRequiredCssVariable } from "@utils/index";
import { gsap } from "@utils/gsap";

function createCarouselAnimation(
  slides: HTMLElement[],
  video: HTMLElement,
  indicators: HTMLElement[],
) {
  const animateSlides = (prevIndex: number, currentIndex: number) => {
    const prevSlide = slides[prevIndex];
    const currentSlide = slides[currentIndex];

    gsap.to(prevSlide, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.5,
      onComplete: () => prevSlide.setAttribute("aria-hidden", "true"),
    });

    gsap.fromTo(
      currentSlide,
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        onComplete: () => currentSlide.setAttribute("aria-hidden", "false"),
      },
    );
  };

  const inactiveIndicatorColor = getRequiredCssVariable("--color-warm-white");
  const activeIndicatorColor = getRequiredCssVariable("--color-warm-yellow");

  const animateIndicators = (prevIndex: number, currentIndex: number) => {
    const prevIndicator = indicators[prevIndex];
    const currentIndicator = indicators[currentIndex];

    gsap.to(prevIndicator, {
      color: inactiveIndicatorColor,
      duration: 0.3,
    });

    gsap.to(currentIndicator, {
      color: activeIndicatorColor,
      duration: 0.3,
    });
  };

  const animateVideo = (currentIndex: number) => {
    const currentSlide = slides[currentIndex];
    gsap.to(video, JSON.parse(currentSlide.dataset.videoTransform as string));
  };

  const animate = (prevIndex: number, currentIndex: number) => {
    animateSlides(prevIndex, currentIndex);

    animateIndicators(prevIndex, currentIndex);

    animateVideo(currentIndex);
  };

  animateVideo(0);

  return { animate };
}

export default createCarouselAnimation;
