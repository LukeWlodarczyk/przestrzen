import type { FC } from "react";

import { Marker as MapLibreMarker } from "@vis.gl/react-maplibre";

import { tw } from "@utils/index";

import type { Coordinates } from "../Map";

import { MARKER_COLOR } from "../config";

type MarkerProps = {
  coordinates: Coordinates;
  isVisible: boolean;
};

const markerClasses = {
  base: tw(
    "[&>svg]:origin-[bottom_center] [&>svg]:transition-all [&>svg]:delay-300 [&>svg]:ease-out",
    "[&>svg]:starting:translate-y-[-10px] [&>svg]:starting:scale-0 [&>svg]:starting:opacity-0",
  ),
  fadeIn: tw("[&>svg]:translate-y-0 [&>svg]:scale-100 [&>svg]:opacity-100"),
};

const Marker: FC<MarkerProps> = ({ coordinates, isVisible }) => (
  <MapLibreMarker
    className={tw(markerClasses.base, isVisible && markerClasses.fadeIn)}
    color={MARKER_COLOR}
    longitude={coordinates.lon}
    latitude={coordinates.lat}
  />
);

export default Marker;
