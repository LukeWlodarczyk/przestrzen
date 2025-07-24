import { useEffect } from "react";

const MAPLIBRE_STYLESHEET_URL =
  "https://unpkg.com/maplibre-gl@^5.6.1/dist/maplibre-gl.css";

const useMapLibreStyles = () => {
  useEffect(() => {
    const exists = document.querySelector(
      `link[href="${MAPLIBRE_STYLESHEET_URL}"]`,
    );

    if (exists) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = MAPLIBRE_STYLESHEET_URL;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
};

export default useMapLibreStyles;
