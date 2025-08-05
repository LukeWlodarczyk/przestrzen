interface SwipeCallbacks {
  swipeLeft: () => void;
  swipeRight: () => void;
}

interface InputOptions {
  touch?: boolean;
  mouse?: boolean;
}

type InitSwipe = (
  wrapper: HTMLElement,
  callbacks: SwipeCallbacks,
  inputOptions?: InputOptions,
) => void;

const initSwipe: InitSwipe = (
  wrapper,
  { swipeLeft, swipeRight },
  { touch = true, mouse = true } = {},
) => {
  if (touch) initTouchSwipe(wrapper, { swipeLeft, swipeRight });
  if (mouse) initMouseSwipe(wrapper, { swipeLeft, swipeRight });
};

function initTouchSwipe(
  wrapper: HTMLElement,
  { swipeLeft, swipeRight }: SwipeCallbacks,
): void {
  let touchStartX: number | null = null;
  let touchEndX: number | null = null;

  wrapper.addEventListener(
    "touchstart",
    (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );

  wrapper.addEventListener(
    "touchmove",
    (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    },
    { passive: true },
  );

  wrapper.addEventListener("touchend", () => {
    if (touchStartX === null || touchEndX === null) return;

    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) swipeRight();
      else swipeLeft();
    }

    touchStartX = null;
    touchEndX = null;
  });
}

function initMouseSwipe(
  wrapper: HTMLElement,
  { swipeLeft, swipeRight }: SwipeCallbacks,
): void {
  let isDragging = false;
  let mouseStartX: number | null = null;
  let mouseEndX: number | null = null;

  wrapper.addEventListener("mousedown", (e: MouseEvent) => {
    isDragging = true;
    mouseStartX = e.clientX;
  });

  wrapper.addEventListener("mousemove", (e: MouseEvent) => {
    if (!isDragging) return;
    mouseEndX = e.clientX;
  });

  wrapper.addEventListener("mouseup", () => {
    if (!isDragging || mouseStartX === null || mouseEndX === null) return;

    const deltaX = mouseEndX - mouseStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) swipeRight();
      else swipeLeft();
    }

    isDragging = false;
    mouseStartX = null;
    mouseEndX = null;
  });

  wrapper.addEventListener("mouseleave", () => {
    isDragging = false;
    mouseStartX = null;
    mouseEndX = null;
  });
}

export default initSwipe;
