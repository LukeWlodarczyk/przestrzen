import { useMemo, useState } from "react";

import { getRequiredCssVariable, isBrowser } from "@utils/index";

import useMapViewState, { type MapViewState } from "./useMapViewState";
import useImportMapLibreStyles from "./useImportMapLibreStyles";

export const OPEN_FREE_MAP_STYLE_URL =
  "https://tiles.openfreemap.org/styles/bright";

const getMarkerColor = () =>
  isBrowser() ? getRequiredCssVariable("--color-deep-green") : "";

const DEFAULT_ZOOM = 14;

const useMap = ({
  longitude,
  latitude,
}: Pick<MapViewState, "latitude" | "longitude">) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { state, onMove } = useMapViewState({
    longitude,
    latitude,
    zoom: DEFAULT_ZOOM,
  });

  useImportMapLibreStyles();

  const markerColor = useMemo(getMarkerColor, []);

  return {
    loading: { isLoaded, setLoaded: () => setIsLoaded(true) },
    view: {
      state,
      onMove,
    },
    markerColor,
  };
};

export default useMap;
