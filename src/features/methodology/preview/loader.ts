import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface MethodologyItem {
  contentTypeId: "methodologyItem";
  fields: {
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

interface HomePage {
  contentTypeId: "methodologyPreview";
  fields: {
    headerImage: EntryFieldTypes.AssetLink;
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    headingDescription: EntryFieldTypes.RichText;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<MethodologyItem>>;
    footerDescription: EntryFieldTypes.RichText;
    footerImage: EntryFieldTypes.AssetLink;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<HomePage>({
      content_type: "methodologyPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return {
    ...data.fields,
    items: data.fields.items
      .map((item) => item?.fields)
      .filter((item) => !!item),
  };
};

export default loadData;
