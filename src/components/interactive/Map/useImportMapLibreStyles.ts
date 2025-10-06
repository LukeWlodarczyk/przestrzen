import { useEffect } from "react";

const useLoadMapLibreStyles = () => {
  useEffect(() => {
    import("maplibre-gl/dist/maplibre-gl.css");
  }, []);
};

export default useLoadMapLibreStyles;
