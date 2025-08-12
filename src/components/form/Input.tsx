import type { FC, InputHTMLAttributes } from "react";

import { tw } from "@utils/index.ts";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
  label: string;
  hint: string;
  error?: string;
  isValidFilled: boolean;
}

const baseClasses = tw("relative w-full");

const Input: FC<Props> = ({
  className,
  id,
  label,
  type,
  placeholder,
  hint,
  error,
  isValidFilled,
  ...attrs
}) => {
  const errorMessageId = `${id}-error-message`;
  const hintMessageId = `${id}-hint-message`;

  const errorClasses = error
    ? "border-earth-red text-earth-red placeholder:text-earth-red/50 focus:border-earth-red"
    : "";

  const validFilledClasses = isValidFilled
    ? "border-forest-green/50 focus:border-forest-green/50 text-forest-green/90"
    : "";

  return (
    <div className={tw(baseClasses, className)}>
      <label
        className="relative left-1 mb-(--space-3xs-2xs) block text-sm font-light text-charcoal"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="noise-30">
        <input
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${hintMessageId} ${error ? `${errorMessageId}` : ""}`}
          className={tw(
            "block w-full rounded-xl border border-charcoal/10 bg-sand-beige/40 px-(--space-xs-s) py-(--space-2xs-xs) font-sans text-base font-extralight text-charcoal transition-colors duration-300 outline-none focus:border-charcoal/40",
            errorClasses,
            validFilledClasses,
          )}
          id={id}
          placeholder={placeholder}
          type={type}
          {...attrs}
        />
      </div>
      <span
        className={tw(
          "pointer-events-none absolute right-[8px] bottom-[-25px] text-sm font-light text-earth-red opacity-0 transition-opacity duration-300",
          error ? "opacity-100" : "",
        )}
        role="alert"
        aria-live="polite"
        id={errorMessageId}
      >
        {error}
      </span>
      <span className="sr-only" hidden id={hintMessageId}>
        {hint}
      </span>
    </div>
  );
};

export default Input;
