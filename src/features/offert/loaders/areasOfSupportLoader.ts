import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface AreaOfSupport {
  contentTypeId: "areaOfSupport";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

interface AreasOfSupportList {
  contentTypeId: "areasOfSupportList";
  fields: {
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AreaOfSupport>
    >;
  };
}

const loadDataOrdered = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<AreasOfSupportList>(
      {
        content_type: "areasOfSupportList",
        limit: 1,
      },
    );

  const [data] = entries.items;

  return data.fields.listInOrder
    .map((item) => item?.fields)
    .filter((item) => !!item);
};

export default loadDataOrdered;
