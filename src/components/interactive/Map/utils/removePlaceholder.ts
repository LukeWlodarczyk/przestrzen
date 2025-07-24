import { gsap } from "@utils/gsap";

function removePlaceholder(element: HTMLDivElement) {
  gsap.to(element, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => element.remove(),
  });
}

export default removePlaceholder;
