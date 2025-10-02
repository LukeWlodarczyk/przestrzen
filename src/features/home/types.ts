import type { EntryFieldTypes } from "contentful";

export interface HomePageSkeleton {
  contentTypeId: "homePage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    ctaLabel: EntryFieldTypes.Text;
  };
}
