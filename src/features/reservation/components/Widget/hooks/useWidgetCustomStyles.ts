import { useEffect, type RefObject } from "react";

const useWidgetCustomStyles = (
  rawCss: string,
  widgetRef: RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!widgetRef.current) return;

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(rawCss));

    widgetRef.current.parentElement?.prepend(style);

    return () => {
      widgetRef.current?.parentElement?.removeChild(style);
    };
  }, []);
};

export default useWidgetCustomStyles;
