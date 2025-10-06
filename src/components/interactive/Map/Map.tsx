import { type FC } from "react";

import { Map as MapLibre, Marker } from "@vis.gl/react-maplibre";

import { tw } from "@utils/index";

import useMap, { OPEN_FREE_MAP_STYLE_URL } from "./hooks/useMap";

export type Coordinates = { lat: number; lon: number };

interface MapProps {
  className?: string;
  coordinates: Coordinates;
}

const MAPLIBRE_CANVAS_CLASS = ".maplibregl-canvas";

const baseClasses = tw(
  "relative h-full w-full overflow-hidden rounded-2xl border border-warm-yellow outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-warm-yellow",
  `[&_${MAPLIBRE_CANVAS_CLASS}]:outline-none`,
);

const markerClasses = {
  base: tw(
    "[&>svg]:origin-[bottom_center] [&>svg]:transition-all [&>svg]:delay-300 [&>svg]:ease-out",
    "[&>svg]:starting:translate-y-[-10px] [&>svg]:starting:scale-0 [&>svg]:starting:opacity-0",
  ),
  fadeIn: tw("[&>svg]:translate-y-0 [&>svg]:scale-100 [&>svg]:opacity-100"),
};

const Map: FC<MapProps> = ({ className, coordinates }) => {
  const { view, loading, markerColor } = useMap({
    longitude: coordinates.lon,
    latitude: coordinates.lat,
  });

  return (
    <div className={tw(baseClasses, className)}>
      {/* z-100000 is applied because .maplibregl-cooperative-gesture-screen has z-index: 99999;  */}
      <div
        aria-hidden="true"
        className={tw(
          "noise-15 absolute inset-0 z-100000 rounded-2xl bg-warm-yellow duration-500 ease-out",
          loading.isLoaded && "invisible opacity-0",
        )}
      />

      <MapLibre
        cooperativeGestures
        mapStyle={OPEN_FREE_MAP_STYLE_URL}
        onLoad={loading.setLoaded}
        onMove={view.onMove}
        {...view.state}
      >
        <Marker
          className={tw(
            markerClasses.base,
            loading.isLoaded && markerClasses.fadeIn,
          )}
          color={markerColor}
          longitude={coordinates.lon}
          latitude={coordinates.lat}
        />
      </MapLibre>
    </div>
  );
};

export default Map;
