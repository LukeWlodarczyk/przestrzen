const ROUTES = {
  home: "/",
  aboutMe: "/o-mnie",
  offert: "/oferta",
  blog: "/blog",
  contact: "/kontakt",
  contactSuccess: "/kontakt/sukces",
  reservation: "/rezerwacja",
  notFound: "/404",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES];

export interface RouteLink {
  label: string;
  href: RouteValue;
}

export default ROUTES;
