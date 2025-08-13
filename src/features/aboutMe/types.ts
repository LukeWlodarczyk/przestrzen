import type { EntryFieldTypes } from "contentful";

export interface AboutMePreview {
  contentTypeId: "aboutMePreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    ctaLabel: EntryFieldTypes.Text;
  };
}
