import maplibregl, { type LngLatLike } from "maplibre-gl";

import { getRequiredCssVariable } from "@utils/index";
import { gsap } from "@utils/gsap";

interface AddMarkerParams {
  location: LngLatLike;
  map: maplibregl.Map;
}

function addMarker({ location, map }: AddMarkerParams) {
  const markerColor = getRequiredCssVariable("--color-deep-green");

  const marker = new maplibregl.Marker({ color: markerColor })
    .setLngLat(location)
    .addTo(map);

  gsap.fromTo(
    marker.getElement().firstChild,
    { opacity: 0, y: -10, scale: 0, transformOrigin: "bottom center" },
    { opacity: 1, y: 0, scale: 1, delay: 0.3, duration: 0.3 },
  );
}

export default addMarker;
