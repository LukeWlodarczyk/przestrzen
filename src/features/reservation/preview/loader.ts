import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface ReservationPreview {
  contentTypeId: "reservationPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

const loadData = async () => {
  const entries = await contentfulClient.getEntries<ReservationPreview>({
    content_type: "reservationPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
