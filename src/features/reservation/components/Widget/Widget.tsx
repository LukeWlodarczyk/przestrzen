import { type FC } from "react";

import { tw } from "@utils/index";

import InternalWidget from "./components/InternalWidget";
import Fallback from "./components/Fallback";

interface WidgetProps {
  className?: string;
  therapistId: string;
  externalReservationUrl?: string;
}

const baseClasses = tw("@container relative");

const Widget: FC<WidgetProps> = ({
  className,
  therapistId,
  externalReservationUrl,
}) => {
  const isInternalReservation = !externalReservationUrl;

  return (
    <div className={tw(baseClasses, className)}>
      {isInternalReservation && <InternalWidget therapistId={therapistId} />}
      {!isInternalReservation && <Fallback url={externalReservationUrl} />}
    </div>
  );
};

export default Widget;
