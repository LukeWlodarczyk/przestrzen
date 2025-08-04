import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface HomePage {
  contentTypeId: "homePage";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    ctaLabel: EntryFieldTypes.Text;
  };
}

const loadData = async () => {
  const entries = await contentfulClient.getEntries<HomePage>({
    content_type: "homePage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
