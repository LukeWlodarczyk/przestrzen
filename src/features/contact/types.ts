import type { EntryFieldTypes } from "contentful";

import type { Office } from "@features/reservation/types";

import type loadCompanyDetailsData from "@features/contact/loaders/companyDetailsLoader";

export interface ContactPreviewSkeleton {
  contentTypeId: "contactPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

export interface CompanyDetailsSkeleton {
  contentTypeId: "companyDetails";
  fields: {
    label: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    therapistId: EntryFieldTypes.Text;
    office: EntryFieldTypes.EntryLink<Office>;
  };
}

export type CompanyDetails = Awaited<
  ReturnType<typeof loadCompanyDetailsData>
>["office"];

export interface ContactSuccessSkeleton {
  contentTypeId: "contactSuccessPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

export interface ContactMainSkeleton {
  contentTypeId: "contactMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
  };
}
