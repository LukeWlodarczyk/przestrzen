import type { FC, Ref } from "react";

interface PlaceholderProps {
  ref: Ref<HTMLDivElement>;
}

const Placeholder: FC<PlaceholderProps> = ({ ref }) => (
  <div
    ref={ref}
    className="absolute z-1 flex h-full w-full items-center justify-center rounded-2xl bg-deep-green p-(--space-3xs) @min-[380px]:p-(--space-s)"
  >
    <div className="flex h-full w-full shine items-center justify-center rounded-2xl border border-warm-yellow p-(--space-xs) text-2xl text-warm-yellow @min-[380px]:p-(--space-s)">
      Ładowanie...
    </div>
  </div>
);

export default Placeholder;
