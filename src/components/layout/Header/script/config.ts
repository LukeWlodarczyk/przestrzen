export const ids = {
  header: "header",
  topBar: "top-bar",
  navBar: "nav-bar",
  mobileMenuButton: "mobile-menu-button",
} as const;

export const selectors = {
  header: `#${ids.header}`,
  topBar: `#${ids.topBar}`,
  navBar: `#${ids.navBar}`,
  mobileMenuButton: `#${ids.mobileMenuButton}`,
} as const;
