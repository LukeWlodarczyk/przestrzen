import { getRequiredCssVariable, getRequiredElement } from "@utils/index";

import ensureVideoState from "@components/media/Video/script/ensureVideoState";

import initScrollTrigger from "./aboutMeScrollTrigger";

const initAboutMe = () => {
  const BREAKPOINT_SM = getRequiredCssVariable("--breakpoint-sm");

  const elements = {
    video: getRequiredElement<HTMLVideoElement>(
      "section#about-me video[data-id='about-me']",
    ),
  };
  const videoScrollTrigger = initScrollTrigger(elements.video);

  const mql = window.matchMedia(
    `(min-width: ${BREAKPOINT_SM}) and (prefers-reduced-motion: no-preference)`,
  );

  ensureVideoState(
    elements.video,
    "loadedmetadata",
    () => mql.matches && videoScrollTrigger.enable(),
  );

  mql.addEventListener("change", (e) => {
    ensureVideoState(elements.video, "loadedmetadata", () =>
      e.matches ? videoScrollTrigger.enable() : videoScrollTrigger.disable(),
    );
  });
};

export default initAboutMe;
