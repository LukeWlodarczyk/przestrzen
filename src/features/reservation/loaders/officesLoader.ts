import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

export interface Office {
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

interface OfficesList {
  contentTypeId: "officesList";
  fields: {
    label: EntryFieldTypes.Text;
    listInOrder: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Office>>;
  };
}

const loadDataOrdered = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<OfficesList>({
      content_type: "officesList",
      limit: 1,
    });

  const [data] = entries.items;

  return {
    label: data.fields.label,
    list: data.fields.listInOrder
      .map((item) => item?.fields)
      .filter((item) => !!item),
  };
};

export default loadDataOrdered;
