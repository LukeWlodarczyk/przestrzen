import { useRef, type FC } from "react";

import { getRequiredElement, hideAndRemove, tw } from "@utils/index";

import useWidgetScript from "./hooks/useWidgetScript";
import useWidgetReady from "./hooks/useWidgetReady";
import useWidgetCustomStyles from "./hooks/useWidgetCustomStyles";
import useRemoveExternalStylesheet from "./hooks/useRemoveExternalStylesheet";

import { initSwipeWidget, selectors } from "./utils";

import Placeholder from "./Placeholder";

import externalStyles from "./externalStyles.css?raw";
import customStyles from "./customStyles.css?raw";

interface WidgetProps {
  className?: string;
  therapistId: string;
}

const baseClasses = tw("@container relative");

const SUCCESS_RESERVATION_RETURN_URL = `${import.meta.env.PUBLIC_SITE_URL}/rezerwacja/sukces`;

const Widget: FC<WidgetProps> = ({ className, therapistId }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // ------------------------------------------------------------
  // This script removes the widget's default CSS file.
  // The file's use of tailwind classes with `!important` was conflicting with our
  // classes. We use a modified version of the widget's stylesheet that does not
  // include the conflicting classes. If the widget is updated and no longer uses
  // conflicting classes, this script can be safely removed, and the new, original
  // stylesheet can be included.
  //
  useWidgetCustomStyles(externalStyles);
  useRemoveExternalStylesheet(
    "https://twojpsycholog.pl/static/widget/static/css/twoj-psycholog-styles.css",
  );
  // ------------------------------------------------------------

  useWidgetScript();
  useWidgetCustomStyles(customStyles);
  useWidgetReady(widgetRef, () => {
    initSwipeWidget(getRequiredElement(selectors.CALENDAR_SLOTS));
    hideAndRemove(placeholderRef.current as HTMLElement);
  });

  return (
    <div className={tw(baseClasses, className)}>
      <Placeholder ref={placeholderRef} />
      <div
        className="noise-6 h-full w-full rounded-2xl bg-deep-green p-(--space-3xs) outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-deep-green @min-[380px]:p-(--space-s)"
        id="twoj-psycholog-widget"
        data-twoj-psycholog-therapist-id={therapistId}
        data-twoj-psycholog-variant="full"
        data-twoj-psycholog-top-background="var(--color-deep-green)"
        data-twoj-psycholog-top-text-color="var(--color-bright-yellow)"
        data-twoj-psycholog-button-background="var(--color-deep-green)"
        data-twoj-psycholog-button-text-color="var(--color-bright-yellow)"
        data-twoj-psycholog-return-url={SUCCESS_RESERVATION_RETURN_URL}
        ref={widgetRef}
      ></div>
    </div>
  );
};

export default Widget;
