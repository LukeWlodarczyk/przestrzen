export const IDS = {
  formOfSupport: "formy-wsparcia",
  areaOfSupport: "obszary-wsparcia",
} as const;

export const STATIC_ROUTES = {
  home: "/",
  aboutMe: "/o-mnie",
  offert: "/oferta",
  formOfSupport: `/oferta#${IDS.formOfSupport}`,
  areaOfSupport: `/oferta#${IDS.areaOfSupport}`,
  blog: "/blog",
  contact: "/kontakt",
  contactSuccess: "/kontakt/sukces",
  reservation: "/rezerwacja",
  notFound: "/404",
} as const;

export const DYNAMIC_ROUTES = {
  formOfSupport: (slug: string) =>
    `${STATIC_ROUTES.offert}/formy-wsparcia/${slug}`,
  areaOfSupport: (slug: string) =>
    `${STATIC_ROUTES.offert}/obszary-wsparcia/${slug}`,
  office: (slug: string) => `${STATIC_ROUTES.reservation}/gabinet/${slug}`,
  blogPost: (slug: string) => `${STATIC_ROUTES.blog}/${slug}`,
} as const;

export type StaticRouteKey = keyof typeof STATIC_ROUTES;
export type StaticRouteValue =
  (typeof STATIC_ROUTES)[keyof typeof STATIC_ROUTES];

export interface StaticRouteLink {
  label: string;
  href: StaticRouteValue;
}
