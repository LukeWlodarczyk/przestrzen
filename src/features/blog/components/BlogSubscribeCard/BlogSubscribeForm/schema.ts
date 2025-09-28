import { z } from "zod/v4";

export const SubscribeFormSchema = z.object({
  email: z
    .string()
    .nonempty("Email jest wymagany")
    .email("Niepoprawny format email."),
});

export type SubscribeFormFields = z.infer<typeof SubscribeFormSchema>;
