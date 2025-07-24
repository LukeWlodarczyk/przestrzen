import { useEffect, type RefObject } from "react";
import maplibregl, { type LngLatLike } from "maplibre-gl";

import { addMarker, removePlaceholder } from "../utils";

const OPEN_FREE_MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/bright";

interface UseMapLibreParams {
  containerRef: RefObject<HTMLDivElement | null>;
  placeholderRef: RefObject<HTMLDivElement | null>;
  location: LngLatLike;
}

const useMapLibre = ({
  containerRef,
  placeholderRef,
  location,
}: UseMapLibreParams) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: OPEN_FREE_MAP_STYLE_URL,
      center: location,
      zoom: 14,
      cooperativeGestures: true,
    });

    map.on("load", () => {
      if (placeholderRef.current) removePlaceholder(placeholderRef.current);
      addMarker({ location, map });
    });

    return () => map.remove();
  }, []);
};

export default useMapLibre;
