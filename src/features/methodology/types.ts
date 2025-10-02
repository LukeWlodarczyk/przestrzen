import type { EntryFieldTypes } from "contentful";

interface MethodologyItemSkeleton {
  contentTypeId: "methodologyItem";
  fields: {
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

export interface MethodologyPreviewSkeleton {
  contentTypeId: "methodologyPreview";
  fields: {
    headerImage: EntryFieldTypes.AssetLink;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    headingDescription: EntryFieldTypes.RichText;
    items: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<MethodologyItemSkeleton>
    >;
    footerDescription: EntryFieldTypes.RichText;
    footerImage: EntryFieldTypes.AssetLink;
  };
}
