export const redirectToSuccessPage = () =>
  (window.location.href = "/kontakt/sukces");

export const setContactRootErrorMessage = (error: unknown) =>
  error instanceof Error
    ? error.message
    : "Wystąpił nieoczekiwany błąd podczas wysyłania";
