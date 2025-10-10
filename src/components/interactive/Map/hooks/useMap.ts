import { useState } from "react";

import { useDeferredProp } from "@utils/hooks";

const useMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref: linkRef } = useDeferredProp<HTMLLinkElement>("href");

  return { linkRef, isLoaded, onLoad: () => setIsLoaded(true) };
};

export default useMap;
