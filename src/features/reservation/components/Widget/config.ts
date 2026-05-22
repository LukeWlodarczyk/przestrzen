import { STATIC_ROUTES } from "@routes";

// Don't change it. TwojPsycholog script requires this specific id to render widget
export const TWOJ_PSYCHOLOG_WIDGET_ID = "twoj-psycholog-widget" as const;

export const TWOJ_PSYCHOLOG_STYLESHEET_URL =
  "https://twojpsycholog.pl/static/widget/static/css/twoj-psycholog-styles.css" as const;

export const TWOJ_PSYCHOLOG_SCRIPT_URL =
  "https://twojpsycholog.pl/static/widget/static/js/twoj-psycholog-widget.js" as const;

export const SUCCESS_RESERVATION_RETURN_URL = `${import.meta.env.PUBLIC_SITE_URL}${STATIC_ROUTES.reservationSuccess}`;
