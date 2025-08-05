import { getRequiredElement, initSwipe } from "@utils/index";

import selectors from "./selectors";

const initSwipeWidget = (wrapper: HTMLElement) =>
  initSwipe(
    wrapper,
    {
      swipeLeft: () => {
        const btn = getRequiredElement(selectors.BTN_LEFT);
        btn.click();
      },
      swipeRight: () => {
        const btn = getRequiredElement(selectors.BTN_RIGHT);
        btn.click();
      },
    },
    { mouse: false },
  );

export default initSwipeWidget;
