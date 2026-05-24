export const SEGMENTS = {
  aboutMe: "o-mnie",
  offer: "oferta",
  formOfSupport: "formy-wsparcia",
  areaOfSupport: "obszary-wsparcia",
  blog: "blog",
  contact: "kontakt",
  reservation: "rezerwacja",
  office: "gabinet",
  success: "sukces",
  notFound: "404",
} as const;

export const STATIC_ROUTES = {
  home: "/",
  aboutMe: `/${SEGMENTS.aboutMe}/`,
  offert: `/${SEGMENTS.offer}/`,
  formOfSupport: `/${SEGMENTS.offer}/#${SEGMENTS.formOfSupport}`,
  areaOfSupport: `/${SEGMENTS.offer}/#${SEGMENTS.areaOfSupport}`,
  blog: `/${SEGMENTS.blog}/`,
  contact: `/${SEGMENTS.contact}/`,
  contactSuccess: `/${SEGMENTS.contact}/${SEGMENTS.success}/`,
  reservation: `/${SEGMENTS.reservation}/`,
  reservationSuccess: `/${SEGMENTS.reservation}/${SEGMENTS.success}/`,
  notFound: `/${SEGMENTS.notFound}/`,
} as const;

export const DYNAMIC_ROUTES = {
  formOfSupport: (slug: string) =>
    `/${SEGMENTS.offer}/${SEGMENTS.formOfSupport}/${slug}/` as const,
  areaOfSupport: (slug: string) =>
    `/${SEGMENTS.offer}/${SEGMENTS.areaOfSupport}/${slug}/` as const,
  office: (slug: string) =>
    `/${SEGMENTS.reservation}/${SEGMENTS.office}/${slug}/` as const,
  blogPost: (slug: string) => `/${SEGMENTS.blog}/${slug}/` as const,
} as const;

export type StaticRouteKey = keyof typeof STATIC_ROUTES;
export type StaticRouteValue = (typeof STATIC_ROUTES)[StaticRouteKey];

export interface StaticRouteLink {
  label: string;
  href: StaticRouteValue;
}
