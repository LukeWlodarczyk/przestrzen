import type { EntryFieldTypes } from "contentful";

export interface NotFoundPageSkeleton {
  contentTypeId: "notFoundPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
  };
}
