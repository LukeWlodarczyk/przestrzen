import { useState, useEffect, type RefObject } from "react";

import { initWidgetObserver, initSwipeWidget, selectors } from "../utils";

const useWidgetReady = (widgetRef: RefObject<HTMLElement | null>) => {
  const [isReady, setIsReady] = useState(false);

  const handleOnReady = (calendarSlots: HTMLElement) => {
    setIsReady(true);
    initSwipeWidget(calendarSlots);
  };

  useEffect(() => {
    if (!widgetRef.current) return;

    const calendarSlots = widgetRef.current.querySelector<HTMLElement>(
      selectors.CALENDAR_SLOTS,
    );

    let observer = null;

    if (calendarSlots) handleOnReady(calendarSlots);
    else observer = initWidgetObserver(widgetRef.current, handleOnReady);

    return () => observer?.disconnect();
  }, []);

  return isReady;
};

export default useWidgetReady;
