import type { Trap } from "@utils/traps";

const mobileMenuAriaLabel = {
  open: "Otwórz menu nawigacyjne",
  close: "Zamknij menu nawigacyjne",
};

function initMobileMenu(mobileMenuBtn: HTMLElement, trap: Trap) {
  function toggleMobileMenu() {
    if (getMobileMenuState()) closeMobileMenu();
    else openMobileMenu();
  }

  function openMobileMenu() {
    setMobileMenuState(true);
  }

  function closeMobileMenu() {
    setMobileMenuState(false);
  }

  function getMobileMenuState() {
    return mobileMenuBtn.getAttribute("aria-expanded") === "true";
  }

  function setMobileMenuState(isOpen: boolean) {
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    mobileMenuBtn.setAttribute(
      "aria-label",
      isOpen ? mobileMenuAriaLabel.close : mobileMenuAriaLabel.open,
    );

    if (isOpen) trap.activate();
    else trap.deactivate();
  }

  return {
    toggle: toggleMobileMenu,
    open: openMobileMenu,
    close: closeMobileMenu,
    isOpen: getMobileMenuState,
  };
}

export default initMobileMenu;
