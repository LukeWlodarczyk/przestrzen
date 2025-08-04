import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface HomePage {
  contentTypeId: "aboutMePreview";
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
    content_type: "aboutMePreview",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
