import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface HomePage {
  contentTypeId: "offertPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    areasOfSupportHeading: EntryFieldTypes.Text;
    areasOfSupportDescription: EntryFieldTypes.RichText;
    cldVideoPublicId: EntryFieldTypes.Text;
    formsOfSupportHeading: EntryFieldTypes.Text;
    formsOfSupportDescription: EntryFieldTypes.RichText;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<HomePage>({
      content_type: "offertPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
