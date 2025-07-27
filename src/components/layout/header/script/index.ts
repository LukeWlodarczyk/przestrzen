import { getRequiredElement } from "@utils/index";

import initMobileMenu from "./mobileMenu";
import initAnimation from "./animation";

import {
  combineTraps,
  createAriaTrap,
  createScrollLock,
  createFocusTrap,
} from "@utils/traps";

const config = {
  BREAKPOINT_LG: 1024,
  FIRST_HIDE_DELAY: 600,
} as const;

const initHeader = () => {
  const header = getRequiredElement("#header");
  const topbar = getRequiredElement("#top-bar");
  const nav = getRequiredElement("#nav-bar");
  const mobileMenuBtn = getRequiredElement("#mobile-menu-button");

  const navFocusTrap = createFocusTrap(nav);
  const ariaNavTrap = createAriaTrap(nav);
  const scrollLock = createScrollLock();

  const mobileMenu = initMobileMenu(
    mobileMenuBtn,
    combineTraps(navFocusTrap, ariaNavTrap, scrollLock),
  );

  const headerAnimation = initAnimation(header);

  setInitialState();

  const firstMainSection = getRequiredElement("#main > section");

  headerAnimation.setupScrollTrigger({
    initialDelay: config.FIRST_HIDE_DELAY,
    threshold: firstMainSection.offsetHeight / 2,
  });

  window.addEventListener("resize", setInitialState, { passive: true });

  mobileMenuBtn.addEventListener("click", mobileMenu.toggle);

  header.addEventListener("focusin", handleHeaderFocusIn);

  function setInitialState() {
    headerAnimation.setState({
      lastDirection: null,
      hideOffset: isDesktop() ? -topbar.clientHeight : -header.clientHeight,
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
    return config.BREAKPOINT_LG <= document.body.clientWidth;
  }
};

export default initHeader;
