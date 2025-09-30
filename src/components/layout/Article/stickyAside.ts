import type { ClientDirectives, Subset } from "@utils/types";

export type AsideDirectives = Subset<
  "client:media" | "client:idle",
  ClientDirectives
>;
