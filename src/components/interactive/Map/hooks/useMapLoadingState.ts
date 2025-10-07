import { useState } from "react";

const useMapLoadingState = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return { isLoaded, handleOnLoad: () => setIsLoaded(true) };
};

export default useMapLoadingState;
