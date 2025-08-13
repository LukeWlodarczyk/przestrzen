import type { EntryFieldTypes } from "contentful";

import loadOffices from "@features/reservation/loaders/officesLoader";

export interface ReservationPreview {
  contentTypeId: "reservationPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

interface Office {
  contentTypeId: "office";
  fields: {
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

export interface OfficesList {
  contentTypeId: "officesList";
  fields: {
    label: EntryFieldTypes.Text;
    listInOrder: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Office>>;
  };
}

export type OfficeFields = Awaited<
  ReturnType<typeof loadOffices>
>["list"][number];

export interface Widget {
  contentTypeId: "widget";
  fields: {
    therapistId: EntryFieldTypes.Text;
  };
}
