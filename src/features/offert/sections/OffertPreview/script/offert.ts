import { getRequiredCssVariable, getRequiredElement } from "@utils/index";

import ensureVideoState from "@components/media/Video/script/ensureVideoState";

import initScrollTrigger from "./offertScrollTrigger";

const initOffert = () => {
  const BREAKPOINT_SM = getRequiredCssVariable("--breakpoint-sm");

  const video = getRequiredElement<HTMLVideoElement>(
    "section#offert video[data-id='offert']",
  );

  const videoScrollTrigger = initScrollTrigger(video);

  const mql = window.matchMedia(
    `(min-width: ${BREAKPOINT_SM}) and (prefers-reduced-motion: no-preference)`,
  );

  ensureVideoState(
    video,
    "loadedmetadata",
    () => mql.matches && videoScrollTrigger.enable(),
  );

  mql.addEventListener("change", (e) => {
    ensureVideoState(video, "loadedmetadata", () =>
      e.matches ? videoScrollTrigger.enable() : videoScrollTrigger.disable(),
    );
  });
};

export default initOffert;
