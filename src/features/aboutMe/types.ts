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

export interface AboutMeMain {
  contentTypeId: "aboutMeMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    intro: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
  };
}
