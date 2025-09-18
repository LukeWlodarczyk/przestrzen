export const classes = {
  video: "video",
  slide: "carousel-slide",
  indicator: "carousel-indicator-icon",
  button: "carousel-control",
  prev: "prev",
  next: "next",
} as const;

export const selectors = {
  video: `.${classes.video}`,
  slide: `.${classes.slide}`,
  indicator: `.${classes.indicator}`,
  prevButton: `.${classes.button}.${classes.prev}`,
  nextButton: `.${classes.button}.${classes.next}`,
} as const;
