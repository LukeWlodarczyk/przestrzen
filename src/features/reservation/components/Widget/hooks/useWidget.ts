import { useRef } from "react";

import { useDeferredProp } from "@utils/hooks";

import useWidgetCalendarSlotsReady from "./useWidgetCalendarSlotsReady";

const useWidget = () => {
  const { ref: scriptRef } = useDeferredProp<HTMLScriptElement>("src");

  const widgetRef = useRef<HTMLDivElement>(null);

  const isReady = useWidgetCalendarSlotsReady(widgetRef);

  return { isReady, scriptRef, widgetRef };
};

export default useWidget;
