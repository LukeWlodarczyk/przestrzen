import type { Trap } from ".";

const createAriaTrap = (activeElement: HTMLElement): Trap => {
  const originalStates = new Map<HTMLElement, string | null>();

  const activate = () => {
    let currentElement: HTMLElement | null = activeElement;

    while (currentElement && currentElement !== document.body) {
      const parent = currentElement.parentElement as HTMLElement | null;

      if (parent) {
        Array.from(parent.children).forEach((sibling) => {
          const siblingElement = sibling as HTMLElement;

          if (siblingElement !== currentElement) {
            if (!originalStates.has(siblingElement)) {
              originalStates.set(
                siblingElement,
                siblingElement.getAttribute("aria-hidden"),
              );
            }
            siblingElement.setAttribute("aria-hidden", "true");
          }
        });
      }

      currentElement = parent;
    }
  };

  const deactivate = () => {
    originalStates.forEach((original, el) => {
      if (original === null) {
        el.removeAttribute("aria-hidden");
      } else {
        el.setAttribute("aria-hidden", original);
      }
    });
    originalStates.clear();
  };

  return { activate, deactivate };
};

export default createAriaTrap;
