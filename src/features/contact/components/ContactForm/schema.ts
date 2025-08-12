import { z } from "zod/v4";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Imię jest wymagane")
    .min(3, "Imię: 3 - 16 znaków.")
    .max(16, "Imię: 3 - 16 znaków."),
  email: z
    .string()
    .nonempty("Email jest wymagany")
    .email("Niepoprawny format email."),
  message: z
    .string()
    .nonempty("Wiadomość jest wymagana")
    .min(10, "Wiadomość: 10 - 200 znaków.")
    .max(200, "Wiadomość: 10 - 200 znaków."),
});

export type ContactFormFields = z.infer<typeof ContactFormSchema>;
