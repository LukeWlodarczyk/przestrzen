import type { FC } from "react";

import { tw } from "@utils/index";

type Props = {
  className?: string;
  isHidden: boolean;
};

const placeholderClasses = {
  base: tw(
    "absolute inset-0 z-1 flex items-center justify-center rounded-2xl bg-deep-green p-(--space-3xs) delay-300 duration-300 ease-out @min-[380px]:p-(--space-s)",
  ),
  fadeOut: tw("invisible opacity-0"),
};

const Placeholder: FC<Props> = ({ className, isHidden }) => (
  <div
    className={tw(
      placeholderClasses.base,
      isHidden && placeholderClasses.fadeOut,
      className,
    )}
  >
    <div className="grid h-full w-full shine place-items-center rounded-2xl border border-warm-yellow p-(--space-xs) text-2xl text-warm-yellow @min-[380px]:p-(--space-s)">
      Ładowanie...
    </div>
  </div>
);

export default Placeholder;
