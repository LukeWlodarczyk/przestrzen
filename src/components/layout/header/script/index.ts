import { getRequiredCssVariable, getRequiredElement } from "@utils/index";

import initMobileMenu from "./mobileMenu";
import initAnimation from "./animation";

import {
  combineTraps,
  createAriaTrap,
  createScrollLock,
  createFocusTrap,
} from "@utils/traps";

const BREAKPOINT_LG = getRequiredCssVariable("--breakpoint-lg");

const config = {
  FIRST_HIDE_DELAY: 600,
} as const;

const initHeader = () => {
  const header = getRequiredElement("#header");

  const elements = {
    header,
    topbar: getRequiredElement("#top-bar", header),
    nav: getRequiredElement("#nav-bar", header),
    mobileMenuBtn: getRequiredElement("#mobile-menu-button", header),
  };

  const mobileMenu = initMobileMenu(
    elements.mobileMenuBtn,
    combineTraps(
      createFocusTrap(elements.nav),
      createAriaTrap(elements.nav),
      createScrollLock(),
    ),
  );

  const headerAnimation = initAnimation(elements.header);

  setInitialState();

  const firstMainSection = getRequiredElement("#main > section");

  headerAnimation.setupScrollTrigger({
    initialDelay: config.FIRST_HIDE_DELAY,
    threshold: firstMainSection.offsetHeight / 2,
  });

  window.addEventListener("resize", setInitialState, { passive: true });

  elements.mobileMenuBtn.addEventListener("click", mobileMenu.toggle);

  elements.header.addEventListener("focusin", handleHeaderFocusIn);

  function setInitialState() {
    headerAnimation.setState({
      lastDirection: null,
      hideOffset: isDesktop()
        ? -elements.topbar.clientHeight
        : -elements.header.clientHeight,
    });

    if (isDesktop()) mobileMenu.close();

    headerAnimation.animateIn();
  }

  function handleHeaderFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement;

    const isMobileFocus = !isDesktop();
    const isDesktopFocusInsideTopBar =
      isDesktop() && target.closest("#top-bar");

    if (isDesktopFocusInsideTopBar || isMobileFocus) {
      headerAnimation.setState({ lastDirection: null });
      headerAnimation.animateIn();
    }
  }

  function isDesktop() {
    return window.matchMedia(`(min-width: ${BREAKPOINT_LG})`).matches;
  }
};

export default initHeader;
