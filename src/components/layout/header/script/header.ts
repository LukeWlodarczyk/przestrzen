import { getRequiredCssVariable, getRequiredElement } from "@utils/index";

import { selectors } from "@components/layout/header/script/config";

import {
  combineTraps,
  createAriaTrap,
  createScrollLock,
  createFocusTrap,
} from "@utils/traps";

import initMobileMenu from "./mobileMenu";
import initHeaderAnimator from "./headerAnimator";

const BREAKPOINT_LG = getRequiredCssVariable("--breakpoint-lg");

const FIRST_HIDE_DELAY = 600 as const;

const initHeader = () => {
  const header = getRequiredElement(selectors.header);

  const elements = {
    header,
    topbar: getRequiredElement(selectors.topBar, header),
    nav: getRequiredElement(selectors.navBar, header),
    mobileMenuBtn: getRequiredElement(selectors.mobileMenuButton, header),
  };

  const mobileMenu = initMobileMenu(
    elements.mobileMenuBtn,
    combineTraps(
      createFocusTrap(elements.nav),
      createAriaTrap(elements.nav),
      createScrollLock(),
    ),
  );

  const headerAnimator = initHeaderAnimator(elements.header);

  setInitialState();

  const firstMainSection = getRequiredElement("#main > section");

  headerAnimator.setupScrollTrigger({
    initialDelay: FIRST_HIDE_DELAY,
    threshold: firstMainSection.offsetHeight / 2,
  });

  window.addEventListener("resize", setInitialState, { passive: true });

  elements.mobileMenuBtn.addEventListener("click", mobileMenu.toggle);

  elements.header.addEventListener("focusin", handleHeaderFocusIn);

  function setInitialState() {
    headerAnimator.setState({
      lastDirection: null,
      hideOffset: isDesktop()
        ? -elements.topbar.clientHeight
        : -elements.header.clientHeight,
    });

    if (isDesktop()) mobileMenu.close();

    headerAnimator.animateIn();
  }

  function handleHeaderFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement;

    const isMobileFocus = !isDesktop();
    const isDesktopFocusInsideTopBar =
      isDesktop() && target.closest(selectors.topBar);

    if (isDesktopFocusInsideTopBar || isMobileFocus) {
      headerAnimator.setState({ lastDirection: null });
      headerAnimator.animateIn();
    }
  }

  function isDesktop() {
    return window.matchMedia(`(min-width: ${BREAKPOINT_LG})`).matches;
  }
};

export default initHeader;
