import { useRef } from "react";

import { useDeferredProp } from "@utils/hooks";

import useWidgetCalendarSlotsReady from "./useWidgetCalendarSlotsReady";
import useWidgetStyles from "./useWidgetStyles";

const useWidget = () => {
  const { ref: scriptRef } = useDeferredProp<HTMLScriptElement>("src");

  const widgetRef = useRef<HTMLDivElement>(null);

  const isReady = useWidgetCalendarSlotsReady(widgetRef);

  useWidgetStyles(widgetRef);

  return { isReady, scriptRef, widgetRef };
};

export default useWidget;
