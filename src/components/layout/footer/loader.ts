import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface Footer {
  contentTypeId: "footer";
  fields: {
    headline: EntryFieldTypes.RichText;
  };
}

const loadData = async () => {
  const entries = await contentfulClient.getEntries<Footer>({
    content_type: "footer",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
