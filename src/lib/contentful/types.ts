import type { Entry, EntrySkeletonType } from "contentful";

export type ExtractEntryFields<T extends EntrySkeletonType> = Entry<
  T,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>["fields"];
