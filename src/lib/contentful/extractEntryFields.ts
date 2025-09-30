import type { Entry, EntrySkeletonType } from "contentful";

import type { ExtractEntryFields } from "./types";

const extractEntryFields = <T extends EntrySkeletonType>(
  entry: Entry<T, "WITHOUT_UNRESOLVABLE_LINKS", string>,
): ExtractEntryFields<T> => entry.fields;

export default extractEntryFields;
