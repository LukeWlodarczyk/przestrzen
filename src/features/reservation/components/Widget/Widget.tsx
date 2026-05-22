import { type FC } from "react";

import { tw } from "@utils/index";

import WidgetInternal from "./components/WidgetInternal";
import Placeholder from "./components/Placeholder";

import useWidget from "./hooks/useWidget";
import useWidgetStyles from "./hooks/useWidgetStyles";

import {
  SUCCESS_RESERVATION_RETURN_URL,
  TWOJ_PSYCHOLOG_WIDGET_ID,
  TWOJ_PSYCHOLOG_SCRIPT_URL,
} from "./config";

interface WidgetProps {
  className?: string;
  therapistId: string;
}

const baseClasses = tw("@container relative");

const Widget: FC<WidgetProps> = ({ className, therapistId }) => {
  const { isReady, scriptRef, widgetRef } = useWidget();

  useWidgetStyles(widgetRef);

  return (
    <div className={tw(baseClasses, className)}>
      <script async data-src={TWOJ_PSYCHOLOG_SCRIPT_URL} ref={scriptRef} />

      <WidgetInternal
        ref={widgetRef}
        id={TWOJ_PSYCHOLOG_WIDGET_ID}
        therapistId={therapistId}
        retrunUrl={SUCCESS_RESERVATION_RETURN_URL}
      />

      <Placeholder isHidden={isReady} />
    </div>
  );
};

export default Widget;
