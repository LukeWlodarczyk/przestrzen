import ROUTES from "@routes";

export const redirectToSuccessPage = () =>
  (window.location.href = ROUTES.contactSuccess);

export const setContactRootErrorMessage = (error: unknown) =>
  error instanceof Error
    ? error.message
    : "Wystąpił nieoczekiwany błąd podczas wysyłania";
