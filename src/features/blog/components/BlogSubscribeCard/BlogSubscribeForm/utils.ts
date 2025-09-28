export const setSubscribeRootErrorMessage = (error: unknown) =>
  error instanceof Error
    ? error.message
    : "Wystąpił nieoczekiwany błąd podczas wysyłania";
