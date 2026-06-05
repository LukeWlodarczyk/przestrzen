import { type FC } from "react";

import { tw } from "@utils/index";

import {
  SUCCESS_RESERVATION_RETURN_URL,
  TWOJ_PSYCHOLOG_WIDGET_ID,
  TWOJ_PSYCHOLOG_SCRIPT_URL,
} from "../config";

import Placeholder from "./Placeholder";
import useWidget from "../hooks/useWidget";

interface WidgetProps {
  className?: string;
  therapistId: string;
}

const baseClasses = tw(
  "noise-6 h-full w-full rounded-2xl bg-deep-green p-(--space-3xs) @min-[380px]:p-(--space-s)",
  "outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-deep-green",
);

const InternalWidget: FC<WidgetProps> = ({ className, therapistId }) => {
  const { isReady, scriptRef, widgetRef } = useWidget();

  return (
    <>
      <script async data-src={TWOJ_PSYCHOLOG_SCRIPT_URL} ref={scriptRef} />
      <div
        className={tw(baseClasses, className)}
        id={TWOJ_PSYCHOLOG_WIDGET_ID}
        data-twoj-psycholog-therapist-id={therapistId}
        data-twoj-psycholog-variant="full"
        data-twoj-psycholog-return-url={SUCCESS_RESERVATION_RETURN_URL}
        ref={widgetRef}
      ></div>
      <Placeholder isHidden={isReady} />
    </>
  );
};

export default InternalWidget;
