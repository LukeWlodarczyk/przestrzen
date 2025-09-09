import type { FC } from "react";

import { tw } from "@utils/index";

import Input from "@components/form/Input";
import Textarea from "@components/form/Textarea";
import SubmitButton from "@components/form/SubmitButton";

import { FORM_NAME, NETLIFY_HONEYPOT_KEY } from "./consts";

import useContactForm from "./useContactForm";

interface ContactFormProps {
  className?: string;
}

const baseClasses = tw("@container w-full max-w-prose");

const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const {
    register,
    formState: { errors, isValidFilled, isSubmitting },
    handleSubmit,
  } = useContactForm();

  return (
    <form
      className={tw(baseClasses, className)}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate={true}
      data-netlify="true"
      netlify-honeypot={NETLIFY_HONEYPOT_KEY}
      name={FORM_NAME}
    >
      <fieldset className="flex flex-wrap gap-(--space-m)">
        <legend className="sr-only">Formularz kontaktowy</legend>
        <div className="flex w-full flex-col gap-(--space-m) @xl:flex-row">
          <input className="hidden" name="subject" />
          <input className="hidden" {...register(NETLIFY_HONEYPOT_KEY)} />
          <Input
            aria-required
            hint="Wprowadź imię o długości od 3 do 16 znaków."
            id="name"
            label="Imię"
            placeholder="Mateusz"
            type="text"
            error={errors.name?.message}
            isValidFilled={isValidFilled("name")}
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
            isValidFilled={isValidFilled("email")}
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
          isValidFilled={isValidFilled("message")}
          {...register("message")}
        />
      </fieldset>

      <SubmitButton
        disabled={isSubmitting}
        variant="secondary"
        size="large"
        className={tw(
          "mt-(--space-l) ml-auto min-w-[180px]",
          isSubmitting && "cursor-wait",
        )}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
      </SubmitButton>

      <span
        className={tw(
          "pointer-events-none absolute right-0 -bottom-(--space-xl) text-right text-sm font-light text-earth-red opacity-0 transition-opacity duration-300",
          errors.root && "opacity-100",
        )}
        role="alert"
        aria-live="polite"
      >
        {errors.root?.message}
      </span>
    </form>
  );
};

export default ContactForm;
