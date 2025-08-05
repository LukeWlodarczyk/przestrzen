import { useEffect } from "react";

const WIDGET_SCRIPT_URL =
  "https://twojpsycholog.pl/static/widget/static/js/twoj-psycholog-widget.js";

const useWidgetScript = () => {
  useEffect(() => {
    const exists = document.querySelector(`script[src="${WIDGET_SCRIPT_URL}"]`);

    if (exists) {
      throw new Error(
        `An instance of the TwójPsycholog widget (loaded from ${WIDGET_SCRIPT_URL}) already exists on this page. This widget only supports one instance per page.`,
      );
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};

export default useWidgetScript;
