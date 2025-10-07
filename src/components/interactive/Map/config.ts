import { getRequiredCssVariable, isBrowser } from "@utils/index";

export const MARKER_COLOR = isBrowser()
  ? getRequiredCssVariable("--color-deep-green")
  : "";

export const OPEN_FREE_MAP_STYLE_URL =
  "https://tiles.openfreemap.org/styles/bright";

export const DEFAULT_ZOOM = 14;

export const MAPLIBRE_CANVAS_CLASS = ".maplibregl-canvas";
