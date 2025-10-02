import type { EntryFieldTypes } from "contentful";

import loadFormsOfSupport from "./loaders/formsOfSupportLoader";

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
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    recommendedAreasOfSupport: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupport>
    >;
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

export type FormOfSupportFields = Awaited<
  ReturnType<typeof loadFormsOfSupport>
>["list"][number];

export interface AreaOfSupport {
  contentTypeId: "areaOfSupport";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
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
