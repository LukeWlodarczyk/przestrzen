import { useEffect, useState } from "react";

const useMapStylesLoadingState = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    import("maplibre-gl/dist/maplibre-gl.css").then(() => setIsLoaded(true));
  }, []);

  return { isLoaded };
};

export default useMapStylesLoadingState;
