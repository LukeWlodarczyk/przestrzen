import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface Widget {
  contentTypeId: "widget";
  fields: {
    therapistId: EntryFieldTypes.Text;
  };
}

const loadData = async () => {
  const entries = await contentfulClient.getEntries<Widget>({
    content_type: "widget",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
