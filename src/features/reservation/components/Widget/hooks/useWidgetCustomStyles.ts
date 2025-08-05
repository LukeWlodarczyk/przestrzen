import { useEffect } from "react";

const useWidgetCustomStyles = (rawCss: string) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(rawCss));
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

export default useWidgetCustomStyles;
