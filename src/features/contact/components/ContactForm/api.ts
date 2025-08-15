import type { ContactFormFields } from "./schema";

type ContactFormSubmitFields = ContactFormFields & {
  "form-name": string;
  subject: string;
};

const submitContactForm = (data: ContactFormSubmitFields) =>
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  }).then((response) => {
    if (!response.ok)
      throw new Error("Nie udało się wysłać formularza. Spróbuj ponownie");

    return response;
  });

export default submitContactForm;
