const hideAndRemove = (element: HTMLElement, duration = 500) => {
  element.style.transition = `opacity ${duration / 1000}s ease-out`;
  element.style.opacity = "0";

  const handleTransitionEnd = () => {
    element.remove();
    element.removeEventListener("transitionend", handleTransitionEnd);
  };

  element.addEventListener("transitionend", handleTransitionEnd);
};

export default hideAndRemove;
