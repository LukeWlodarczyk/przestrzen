interface Callbacks {
  arrowLeft: () => void;
  arrowRight: () => void;
}

type InitKeyboardArrows = (
  wrapper: HTMLElement,
  { arrowLeft, arrowRight }: Callbacks,
) => void;

const initKeyboardArrows: InitKeyboardArrows = (
  wrapper,
  { arrowLeft, arrowRight },
) => {
  document.addEventListener("keydown", (event) => {
    if (document.activeElement && wrapper.contains(document.activeElement)) {
      if (event.key === "ArrowLeft") arrowLeft();
      else if (event.key === "ArrowRight") arrowRight();
    }
  });
};

export default initKeyboardArrows;
