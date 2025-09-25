import { useEffect, useState, type FC } from "react";
import Sticky, { type StickyBoxCompProps } from "react-sticky-box";

import { selectors } from "@components/layout/header/script/config";

import { tw, getRequiredElement } from "@utils/index";

const baseClasses = tw("h-fit w-full");

const StickyBox: FC<StickyBoxCompProps> = ({
  children,
  offsetTop = 0,
  offsetBottom = 0,
  className,
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = getRequiredElement(selectors.header);

    setHeaderHeight(header.offsetHeight);

    const handleResize = () => setHeaderHeight(header.offsetHeight);

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const finalOffsetTop = headerHeight + offsetTop;

  const classList = tw(baseClasses, className);

  return (
    <Sticky
      offsetTop={finalOffsetTop}
      offsetBottom={offsetBottom}
      className={classList}
    >
      {children}
    </Sticky>
  );
};

export default StickyBox;
