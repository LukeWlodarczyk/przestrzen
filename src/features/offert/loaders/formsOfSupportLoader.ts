import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

interface FormOfSupport {
  contentTypeId: "formOfSupport";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
}

interface FormsOfSupportList {
  contentTypeId: "formsOfSupportList";
  fields: {
    listInOrder: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FormOfSupport>
    >;
  };
}

const loadDataOrdered = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<FormsOfSupportList>(
      {
        content_type: "formsOfSupportList",
        limit: 1,
      },
    );

  const [data] = entries.items;

  return data.fields.listInOrder
    .map((item) => item?.fields)
    .filter((item) => !!item);
};

export default loadDataOrdered;
