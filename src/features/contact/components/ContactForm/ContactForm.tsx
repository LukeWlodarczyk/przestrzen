import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { tw } from "@utils/index";

import Input from "@components/form/Input";
import Textarea from "@components/form/Textarea";
import SubmitButton from "@components/form/SubmitButton";

import { ContactFormSchema, type ContactFormFields } from "./schema";

interface ContactFormProps {
  className?: string;
}

const baseClasses = tw("@container w-full max-w-prose");

const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<ContactFormFields>({
    mode: "onTouched",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
    console.log("Success: ", data);
  };

  return (
    <form
      className={tw(baseClasses, className)}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate={true}
    >
      <fieldset className="flex flex-wrap gap-(--space-m)">
        <legend className="sr-only">Formularz kontaktowy</legend>
        <div className="flex w-full flex-col gap-(--space-m) @xl:flex-row">
          <Input
            aria-required
            hint="Wprowadź imię o długości od 3 do 16 znaków."
            id="name"
            label="Imię"
            placeholder="Mateusz"
            type="text"
            error={errors.name?.message}
            isValidFilled={Boolean(touchedFields.name && !errors.name)}
            {...register("name")}
          />
          <Input
            aria-required
            hint="Wprowadź adres e-mail w poprawnym formacie, np. nazwisko@domena.pl."
            id="email"
            label="Email"
            placeholder="kowalski@domena.com"
            type="email"
            error={errors.email?.message}
            isValidFilled={Boolean(touchedFields.email && !errors.email)}
            {...register("email")}
          />
        </div>
        <Textarea
          aria-required
          className="min-h-[200px]"
          hint="Wprowadź wiadomość o długości od 10 do 200 znaków."
          id="message"
          label="Wiadomość"
          placeholder="Wpisz tutaj swoje pytanie lub zostaw wiadomość..."
          error={errors.message?.message}
          isValidFilled={Boolean(touchedFields.message && !errors.message)}
          {...register("message")}
        />
      </fieldset>

      <SubmitButton
        variant="secondary"
        size="large"
        className="mt-(--space-l) ml-auto"
      >
        Wyślij
      </SubmitButton>
    </form>
  );
};

export default ContactForm;
