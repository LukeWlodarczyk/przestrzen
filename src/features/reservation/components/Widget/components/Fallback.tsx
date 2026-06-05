import type { FC } from "react";

import { tw } from "@utils/index";

type Props = {
  className?: string;
  url: string;
};

const baseClasses = tw(
  "absolute inset-0 z-1 flex items-center justify-center rounded-2xl bg-deep-green p-(--space-3xs) delay-300 duration-300 ease-out @min-[380px]:p-(--space-s)",
);

const Fallback: FC<Props> = ({ className, url }) => (
  <div className={tw(baseClasses, className)}>
    <div className="flex h-full w-full flex-col justify-center rounded-2xl border border-warm-yellow p-(--space-xs) text-warm-yellow @min-[380px]:p-(--space-s)">
      <a
        className="text-md arrow-right-3xs text-center hover:shine hover:arrow-right-animate focus-visible:shine focus-visible:arrow-right-animate"
        href={url}
        target="_blank"
      >
        Otwórz kalendarz wizyt
      </a>
      <p className="mt-(--space-s-m) text-center text-sm">
        Terminy są obsługiwane przez zewnętrzny system rezerwacji.
      </p>
    </div>
  </div>
);

export default Fallback;
