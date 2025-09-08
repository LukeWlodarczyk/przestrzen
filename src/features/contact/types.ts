import type { EntryFieldTypes } from "contentful";

import type { Office } from "@features/reservation/types";

import type loadCompanyDetailsData from "@features/contact/loaders/companyDetailsLoader";

export interface ContactPreview {
  contentTypeId: "contactPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

export interface CompanyDetails {
  contentTypeId: "companyDetails";
  fields: {
    label: EntryFieldTypes.Text;
    office: EntryFieldTypes.EntryLink<Office>;
  };
}

export type CompanyDetailsFields = Awaited<
  ReturnType<typeof loadCompanyDetailsData>
>["office"];

export interface ContactSuccess {
  contentTypeId: "contactSuccessPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}
