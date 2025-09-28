import type { FC } from "react";

import { tw } from "@utils/index";

import Input from "@components/form/Input";

import SubmitButton from "@components/form/SubmitButton";

import useBlogSubscribeForm from "./useBlogSubscribeForm";

interface BlogSubscribeFormProps {
  className?: string;
}

const baseClasses = tw("w-full");

const BlogSubscribeForm: FC<BlogSubscribeFormProps> = ({ className }) => {
  const {
    register,
    formState: { errors, isValidFilled, isSubmitting },
    handleSubmit,
  } = useBlogSubscribeForm();

  return (
    <form
      className={tw(baseClasses, className)}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate={true}
    >
      <fieldset>
        <legend className="sr-only">Subskrypcja bloga</legend>

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
      </fieldset>

      <SubmitButton
        disabled={isSubmitting}
        variant="secondary"
        size="medium"
        className={tw("mt-(--space-l) w-full", isSubmitting && "cursor-wait")}
      >
        {isSubmitting ? "Wysyłanie..." : "Chcę być na bieżąco"}
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

export default BlogSubscribeForm;
