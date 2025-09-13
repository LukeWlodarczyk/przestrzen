import { STATIC_ROUTES } from "@routes";

export const redirectToSuccessPage = () =>
  (window.location.href = STATIC_ROUTES.contactSuccess);

export const setContactRootErrorMessage = (error: unknown) =>
  error instanceof Error
    ? error.message
    : "Wystąpił nieoczekiwany błąd podczas wysyłania";
