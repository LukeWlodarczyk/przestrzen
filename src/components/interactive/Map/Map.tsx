import { useRef, type FC } from "react";
import { type LngLatLike } from "maplibre-gl";

import { tw } from "@utils/index";

import useMapLibreStyles from "./hooks/useMapLibreStyles";
import useMapLibre from "./hooks/useMapLibre";

import rawStyles from "./styles.css?raw";

const baseClasses = tw(
  "relative h-full w-full overflow-hidden rounded-2xl border border-warm-yellow outline-offset-2 has-focus-visible:outline-2 has-focus-visible:outline-warm-yellow",
);

interface MapProps {
  className?: string;
  location: LngLatLike;
}

const Map: FC<MapProps> = ({ className, location }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useMapLibreStyles();
  useMapLibre({ containerRef: mapContainerRef, placeholderRef, location });

  return (
    <>
      <style>{rawStyles}</style>
      <div className={tw(baseClasses, className)}>
        {/* z-100000 is applied because .maplibregl-cooperative-gesture-screen has z-index: 99999;  */}
        <div
          ref={placeholderRef}
          className="noise-15 absolute inset-0 z-100000 rounded-2xl bg-warm-yellow"
          aria-hidden="true"
        />

        <div ref={mapContainerRef} className="h-full w-full rounded-2xl" />
      </div>
    </>
  );
};

export default Map;
