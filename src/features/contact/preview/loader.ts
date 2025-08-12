import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface ContactPreview {
  contentTypeId: "contactPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<ContactPreview>({
      content_type: "contactPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
