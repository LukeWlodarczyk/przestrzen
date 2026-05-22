import { type FC, type RefObject } from "react";

import { tw } from "@utils/index";

interface WidgetProps {
  className?: string;
  id: string;
  therapistId: string;
  retrunUrl: string;
  ref: RefObject<HTMLDivElement | null>;
}

const baseClasses = tw(
  "noise-6 h-full w-full rounded-2xl bg-deep-green p-(--space-3xs) @min-[380px]:p-(--space-s)",
  "outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-deep-green",
);

const WidgetInternal: FC<WidgetProps> = ({
  className,
  therapistId,
  id,
  ref,
  retrunUrl,
}) => (
  <div
    className={tw(baseClasses, className)}
    id={id}
    data-twoj-psycholog-therapist-id={therapistId}
    data-twoj-psycholog-variant="full"
    data-twoj-psycholog-return-url={retrunUrl}
    ref={ref}
  ></div>
);

export default WidgetInternal;
