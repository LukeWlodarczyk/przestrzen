import { useState } from "react";

import useMapLibreStylesheet from "./useMapLibreStylesheet";

const useMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const stylesheet = useMapLibreStylesheet();

  return {
    isLoaded: isLoaded && stylesheet.isLoaded,
    onLoad: () => setIsLoaded(true),
  };
};

export default useMap;
