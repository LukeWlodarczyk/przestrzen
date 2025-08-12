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
  className?: string;
  variant: Variant;
  size: Size;
}

const SubmitButton: FC<Props> = ({ children, className, variant, size }) => (
  <button
    type="submit"
    className={tw(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
  >
    {variant === "primary" ? (
      <span className="group-hover:shine group-focus:shine">{children}</span>
    ) : (
      children
    )}
  </button>
);

export default SubmitButton;
