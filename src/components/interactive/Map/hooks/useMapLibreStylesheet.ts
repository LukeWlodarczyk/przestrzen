import { useEffect, useState } from "react";

import { MAP_LIBRE_LOCAL_STYLE_URL } from "../config";

const useMapLibreStylesheet = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoaded = () => setIsLoaded(true);

  useEffect(() => {
    const exists = document.querySelector(
      `link[href="${MAP_LIBRE_LOCAL_STYLE_URL}"]`,
    );

    if (exists) {
      setLoaded();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = MAP_LIBRE_LOCAL_STYLE_URL;

    link.addEventListener("load", setLoaded);
    document.head.appendChild(link);

    return () => {
      link.removeEventListener("load", setLoaded);
      document.head.removeChild(link);
    };
  }, []);

  return { isLoaded };
};

export default useMapLibreStylesheet;
