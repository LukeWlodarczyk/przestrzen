import type { EntryFieldTypes } from "contentful";

export interface OffertPreview {
  contentTypeId: "offertPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    areasOfSupportHeading: EntryFieldTypes.Text;
    areasOfSupportDescription: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    formsOfSupportHeading: EntryFieldTypes.Text;
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
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupport>
    >;
  };
}
