import { ScrollTrigger } from "@utils/gsap";

const initScrollTrigger = (video: HTMLVideoElement) => {
  let videoScrollTrigger: globalThis.ScrollTrigger | null = null;

  const create = () =>
    ScrollTrigger.create({
      trigger: video,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (Number.isNaN(video.duration)) return;

        video.currentTime = self.progress * video.duration;
      },
    });

  const enable = () => {
    if (!videoScrollTrigger) videoScrollTrigger = create();

    videoScrollTrigger.enable();
  };

  const disable = () => {
    if (videoScrollTrigger) videoScrollTrigger.disable();
  };

  return { enable, disable };
};

export default initScrollTrigger;
