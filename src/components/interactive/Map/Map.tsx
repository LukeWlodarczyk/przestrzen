import { type FC } from "react";

import { Map as MapLibre } from "@vis.gl/react-maplibre";

import { tw } from "@utils/index";

import useMap from "./hooks/useMap";

import Placeholder from "./components/Placeholder";
import Marker from "./components/Marker";

import {
  DEFAULT_ZOOM,
  MAPLIBRE_CANVAS_CLASS,
  OPEN_FREE_MAP_STYLE_URL,
} from "./config";

export type Coordinates = { lat: number; lon: number };

interface MapProps {
  className?: string;
  coordinates?: Coordinates;
}

const baseClasses = tw(
  "relative h-full w-full overflow-hidden rounded-2xl border border-warm-yellow",
  "outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-warm-yellow",
  `[&_${MAPLIBRE_CANVAS_CLASS}]:outline-none`,
);

const Map: FC<MapProps> = ({ className, coordinates }) => {
  const { onLoad, isLoaded } = useMap();

  const hasCoordinates = coordinates !== undefined;

  return (
    <div className={tw(baseClasses, className)}>
      {hasCoordinates && (
        <MapLibre
          cooperativeGestures
          mapStyle={OPEN_FREE_MAP_STYLE_URL}
          onLoad={onLoad}
          initialViewState={{
            longitude: coordinates.lon,
            latitude: coordinates.lat,
            zoom: DEFAULT_ZOOM,
          }}
        >
          <Marker coordinates={coordinates} isVisible={isLoaded} />
        </MapLibre>
      )}

      <Placeholder hasCoordinates={hasCoordinates} isHidden={isLoaded} />
    </div>
  );
};

export default Map;
