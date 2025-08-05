import selectors from "./selectors";

const initWidgetObserver = (
  element: HTMLElement,
  cb: (element: HTMLElement) => void,
) => {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (const addedNode of mutation.addedNodes) {
          const calendarSlots = (
            addedNode as HTMLElement
          ).querySelector<HTMLElement>(selectors.CALENDAR_SLOTS);

          if (!calendarSlots) return;

          cb(element);
          observer.disconnect();
        }
      }
    }
  });

  observer.observe(element, {
    childList: true,
    subtree: true,
  });

  return observer;
};

export default initWidgetObserver;
