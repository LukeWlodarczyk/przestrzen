import type { FC } from "react";

import { tw } from "@utils/index";

type Props = {
  isHidden: boolean;
  hasCoordinates: boolean;
};

const placeholderClasses = {
  base: tw(
    /* z-100000 is applied because .maplibregl-cooperative-gesture-screen has z-index: 99999;  */
    "noise-15 absolute inset-0 z-100000 grid scale-[1.01] place-items-center rounded-2xl bg-warm-yellow duration-500 ease-out",
  ),
  fadeOut: tw("invisible opacity-0"),
  grid: tw(
    "absolute top-0 left-0 h-full w-full",
    "[background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:40px_40px]",
    "[mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_100%)]",
    "scale-100 duration-500 ease-out starting:scale-80",
  ),
};

const Placeholder: FC<Props> = ({ isHidden, hasCoordinates }) => (
  <div
    aria-hidden="true"
    className={tw(
      placeholderClasses.base,
      isHidden && placeholderClasses.fadeOut,
    )}
  >
    <div className={placeholderClasses.grid}></div>
    {!hasCoordinates && (
      <p className="text-lg font-extralight text-charcoal/80">
        Adres niedostępny
      </p>
    )}
  </div>
);

export default Placeholder;
