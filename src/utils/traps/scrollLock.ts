import type { Trap } from ".";

function createScrollLock(): Trap {
  let originalOverflow: string;

  const activate = () => {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  };

  const deactivate = () => {
    document.body.style.overflow = originalOverflow || "";
  };

  return { activate, deactivate };
}

export default createScrollLock;
