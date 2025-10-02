import type { EntryFieldTypes } from "contentful";

import loadFormsOfSupport from "./loaders/formsOfSupportLoader";
import loadAreasOfSupport from "./loaders/areasOfSupportLoader";

export interface OffertPreviewSkeleton {
  contentTypeId: "offertPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    areasOfSupportDescription: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    formsOfSupportDescription: EntryFieldTypes.RichText;
  };
}

export interface FormOfSupportSkeleton {
  contentTypeId: "formOfSupport";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    relatedAreasOfSupport: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupportSkeleton>
    >;
  };
}

export interface FormsOfSupportListSkeleton {
  contentTypeId: "formsOfSupportList";
  fields: {
    label: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FormOfSupportSkeleton>
    >;
  };
}

export type FormOfSupport = Awaited<
  ReturnType<typeof loadFormsOfSupport>
>["list"][number];

export interface AreaOfSupportSkeleton {
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

export interface AreasOfSupportListSkeleton {
  contentTypeId: "areasOfSupportList";
  fields: {
    label: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupportSkeleton>
    >;
  };
}

export type AreaOfSupport = Awaited<
  ReturnType<typeof loadAreasOfSupport>
>["list"][number];

export interface OffertMainSkeleton {
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
