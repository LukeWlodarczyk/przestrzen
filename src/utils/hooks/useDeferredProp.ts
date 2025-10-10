import { useEffect, useRef } from "react";

type PropValue = string;

interface WithSrc {
  src: PropValue;
}

interface WithHref {
  href: PropValue;
}

type SupportedElement = HTMLElement & (WithSrc | WithHref);

type PropKey<T> = keyof T & (keyof WithSrc | keyof WithHref);

const useDeferredProp = <T extends SupportedElement>(prop: PropKey<T>) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const lazyProp = el.getAttribute(`data-${prop}`);

    if (!lazyProp)
      throw new Error(
        `useDeferredProp: ${el.localName} element requires data-${prop} attribute`,
      );

    (el[prop] as PropValue) = lazyProp;
  }, []);

  return { ref };
};

export default useDeferredProp;
