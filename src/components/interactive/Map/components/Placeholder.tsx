import type { FC } from "react";

import { tw } from "@utils/index";

type Props = {
  isHidden: boolean;
};

const placeholderClasses = {
  base: tw(
    /* z-100000 is applied because .maplibregl-cooperative-gesture-screen has z-index: 99999;  */
    "noise-15 absolute inset-0 z-100000 rounded-2xl bg-warm-yellow duration-500 ease-out",
  ),
  fadeOut: tw("invisible opacity-0"),
};

const Placeholder: FC<Props> = ({ isHidden }) => (
  <div
    aria-hidden="true"
    className={tw(
      placeholderClasses.base,
      isHidden && placeholderClasses.fadeOut,
    )}
  />
);

export default Placeholder;
