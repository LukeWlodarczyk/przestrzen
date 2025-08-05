import { useEffect, type RefObject } from "react";

import { initWidgetObserver, selectors } from "../utils";

const useWidgetReady = (
  widgetRef: RefObject<HTMLElement | null>,
  cb: (element: HTMLElement) => void,
) => {
  useEffect(() => {
    if (!widgetRef.current) return;

    const calendarSlots = widgetRef.current.querySelector(
      selectors.CALENDAR_SLOTS,
    ) as HTMLElement | null;

    let observer = null;

    if (calendarSlots) cb(widgetRef.current);
    else observer = initWidgetObserver(widgetRef.current, cb);

    return () => observer?.disconnect();
  }, []);
};

export default useWidgetReady;
