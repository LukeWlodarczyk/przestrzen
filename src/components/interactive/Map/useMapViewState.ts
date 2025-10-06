import { useEffect, useState } from "react";

import type { ViewState, ViewStateChangeEvent } from "@vis.gl/react-maplibre";

export type MapViewState = Pick<ViewState, "latitude" | "longitude" | "zoom">;

const useMapViewState = ({ longitude, latitude, zoom }: MapViewState) => {
  const [state, setState] = useState<MapViewState>({
    longitude,
    latitude,
    zoom,
  });

  useEffect(() => {
    setState((state) => ({ ...state, longitude, latitude }));
  }, [longitude, latitude]);

  const onMove = ({ viewState }: ViewStateChangeEvent) =>
    setState({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
    });

  return { state, onMove };
};

export default useMapViewState;
