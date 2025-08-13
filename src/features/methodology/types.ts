import type { EntryFieldTypes } from "contentful";

interface MethodologyItem {
  contentTypeId: "methodologyItem";
  fields: {
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

export interface MethodologyPreview {
  contentTypeId: "methodologyPreview";
  fields: {
    headerImage: EntryFieldTypes.AssetLink;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    headingDescription: EntryFieldTypes.RichText;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<MethodologyItem>>;
    footerDescription: EntryFieldTypes.RichText;
    footerImage: EntryFieldTypes.AssetLink;
  };
}
