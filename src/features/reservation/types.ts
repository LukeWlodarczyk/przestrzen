import type { EntryFieldTypes } from "contentful";

import loadOffices from "@features/reservation/loaders/officesLoader";

export interface ReservationPreviewSkeleton {
  contentTypeId: "reservationPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

export interface OfficeSkeleton {
  contentTypeId: "office";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    name: EntryFieldTypes.Text;
    fullName: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    telephone: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    website: EntryFieldTypes.Text;
    coordinates: EntryFieldTypes.Location;
    streetAddress: EntryFieldTypes.Text;
    postalCode: EntryFieldTypes.Text;
    addressLocality: EntryFieldTypes.Text;
    taxId: EntryFieldTypes.Text;
  };
}

export interface OfficesListSkeleton {
  contentTypeId: "officesList";
  fields: {
    label: EntryFieldTypes.Text;
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<OfficeSkeleton>
    >;
  };
}

export type Office = Awaited<ReturnType<typeof loadOffices>>["list"][number];

export interface ReservationSuccessSkeleton {
  contentTypeId: "reservationSuccessPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    descriptionOne: EntryFieldTypes.RichText;
    descriptionTwo: EntryFieldTypes.RichText;
  };
}

export interface ReservationMainSkeleton {
  contentTypeId: "reservationMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
  };
}
