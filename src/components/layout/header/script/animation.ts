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
      overwrite: true,
    });
  };

  const animateOut = (offset: number) => {
    gsap.to(element, {
      y: offset,
      ease: "power4.out",
      overwrite: true,
    });
  };

  const setupScrollTrigger = ({ initialDelay = 0 } = {}) => {
    setTimeout(() => {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const direction = self.direction;

          if (direction !== state.lastDirection) {
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
