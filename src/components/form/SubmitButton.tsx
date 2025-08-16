import type { FC, ReactNode } from "react";

import { tw } from "@utils/index";

import {
  sizeClasses,
  variantClasses,
  baseClasses,
  type Variant,
  type Size,
} from "@components/interactive/Button.astro";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant: Variant;
  size: Size;
}

const SubmitButton: FC<Props> = ({
  children,
  className,
  variant,
  size,
  disabled,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className={tw(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
  >
    {variant === "primary" ? (
      <span className="group-focus:shine group-[&:not(:disabled)]:group-hover:shine">
        {children}
      </span>
    ) : (
      children
    )}
  </button>
);

export default SubmitButton;
