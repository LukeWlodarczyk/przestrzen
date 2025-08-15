import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { tw } from "@utils/index";

import Input from "@components/form/Input";
import Textarea from "@components/form/Textarea";
import SubmitButton from "@components/form/SubmitButton";

import submitContactForm from "./api";

import { ContactFormSchema, type ContactFormFields } from "./schema";

import { redirectToSuccessPage, setContactRootErrorMessage } from "./utils";

interface ContactFormProps {
  className?: string;
}

const FORM_NAME = "contact";

const baseClasses = tw("@container w-full max-w-prose");

const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, touchedFields },
  } = useForm<ContactFormFields>({
    mode: "onTouched",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      clearErrors("root");

      await submitContactForm({
        ...data,
        "form-name": FORM_NAME,
        subject: `Nowa wiadomość od ${data.name}`,
      });

      reset();

      redirectToSuccessPage();
    } catch (error) {
      setError(`root`, {
        message: setContactRootErrorMessage(error),
      });
    }
  };

  return (
    <form
      className={tw(baseClasses, className)}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate={true}
      data-netlify="true"
      netlify-honeypot="botTrap"
      name={FORM_NAME}
    >
      <fieldset className="flex flex-wrap gap-(--space-m)">
        <legend className="sr-only">Formularz kontaktowy</legend>
        <div className="flex w-full flex-col gap-(--space-m) @xl:flex-row">
          <input className="hidden" name="subject" />
          <input className="hidden" {...register("botTrap")} />
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

      <span
        className={tw(
          "pointer-events-none absolute right-0 -bottom-(--space-xl) text-right text-sm font-light text-earth-red opacity-0 transition-opacity duration-300",
          errors.root ? "opacity-100" : "",
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
