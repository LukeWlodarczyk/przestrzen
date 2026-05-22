import { getRequiredElement, initSwipe } from "@utils/index";

import selectors from "./selectors";

const initSwipeWidget = (wrapper: HTMLElement) =>
  initSwipe(
    wrapper,
    {
      swipeLeft: () => getRequiredElement(selectors.BTN_LEFT).click(),
      swipeRight: () => getRequiredElement(selectors.BTN_RIGHT).click(),
    },
    { mouse: false },
  );

export default initSwipeWidget;
