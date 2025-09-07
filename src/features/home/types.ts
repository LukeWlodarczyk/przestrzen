import type { EntryFieldTypes } from "contentful";

export interface HomePage {
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
