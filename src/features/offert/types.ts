import type { EntryFieldTypes } from "contentful";

export interface OffertPreview {
  contentTypeId: "offertPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    areasOfSupportDescription: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    formsOfSupportDescription: EntryFieldTypes.RichText;
  };
}

export interface FormOfSupport {
  contentTypeId: "formOfSupport";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

export interface FormsOfSupportList {
  contentTypeId: "formsOfSupportList";
  fields: {
    label: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FormOfSupport>
    >;
  };
}

export interface AreaOfSupport {
  contentTypeId: "areaOfSupport";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

export interface AreasOfSupportList {
  contentTypeId: "areasOfSupportList";
  fields: {
    label: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupport>
    >;
  };
}

export interface OffertMain {
  contentTypeId: "offertMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    formsOfSupportDescription: EntryFieldTypes.RichText;
    ctaLabel: EntryFieldTypes.Text;
    areasOfSupportDescription: EntryFieldTypes.RichText;
  };
}
