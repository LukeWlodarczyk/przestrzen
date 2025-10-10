import { getRequiredCssVariable, isBrowser } from "@utils/index";

export const MARKER_COLOR = isBrowser()
  ? getRequiredCssVariable("--color-deep-green")
  : "";

export const MAP_LIBRE_REMOTE_STYLE_URL =
  "https://unpkg.com/maplibre-gl@5.8.0/dist/maplibre-gl.css" as const;

export const OPEN_FREE_MAP_STYLE_URL =
  "https://tiles.openfreemap.org/styles/bright" as const;

export const DEFAULT_ZOOM = 14 as const;

export const MAPLIBRE_CANVAS_CLASS = ".maplibregl-canvas" as const;
