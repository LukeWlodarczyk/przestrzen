import { tw } from "@utils/index";

export const baseClasses = tw(
  "block w-fit cursor-pointer rounded-2xl text-center select-none",
);

export const sizeClasses = {
  medium: tw("px-(--space-m) py-(--space-2xs)"),
  large: tw("px-(--space-l-xl) py-(--space-2xs)"),
};

export const variantClasses = {
  primary: tw(
    "group noise-10 bg-deep-green tracking-widest text-bright-yellow outline-offset-2 outline-deep-green disabled:bg-deep-green/80",
  ),
  secondary: tw(
    "noise-10 bg-dark-beige/60 font-light tracking-wide text-charcoal/80 outline-offset-2 outline-dark-beige/80 not-disabled:hover:bg-dark-beige/80 focus:bg-dark-beige/80 disabled:bg-dark-beige/40 disabled:text-charcoal/60",
  ),
  tertiary: tw(
    "tracking-widest text-deep-green outline-offset-2 outline-forest-green not-disabled:hover:text-forest-green not-disabled:hover:underline focus:text-forest-green focus:underline disabled:text-deep-green/60",
  ),
  nav: tw(
    "w-full px-0 py-(--space-m-l) tracking-wider text-deep-green duration-300 outline-none not-disabled:hover:text-warm-yellow focus:text-warm-yellow lg:py-(--space-2xs)",
  ),
};
