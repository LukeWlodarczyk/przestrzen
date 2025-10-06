import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { isBrowser } from "@utils/index";

if (isBrowser()) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
