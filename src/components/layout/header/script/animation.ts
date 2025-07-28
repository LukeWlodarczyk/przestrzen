import { gsap, ScrollTrigger } from "@utils/gsap";

interface State {
  lastDirection: null | number;
  hideOffset: number;
}

function initAnimation(element: HTMLElement) {
  let state: State = {
    lastDirection: null,
    hideOffset: 0,
  };

  const setState = (newState: Partial<State>) => {
    state = { ...state, ...newState };
  };

  const animateIn = () => {
    gsap.to(element, {
      y: 0,
      ease: "power4.out",
    });
  };

  const animateOut = (offset: number) => {
    gsap.to(element, {
      y: offset,
      ease: "power4.out",
    });
  };

  const setupScrollTrigger = ({ initialDelay = 0, threshold = 0 } = {}) => {
    setTimeout(() => {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const direction = self.direction;
          const scrollY = self.scroll();

          if (direction !== state.lastDirection && scrollY > threshold) {
            if (direction === 1) animateOut(state.hideOffset);
            else animateIn();

            state.lastDirection = direction;
          }
        },
      });
    }, initialDelay);
  };

  return {
    setState,
    animateIn,
    animateOut,
    setupScrollTrigger,
  };
}

export default initAnimation;
