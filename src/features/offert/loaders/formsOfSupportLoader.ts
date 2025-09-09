import contentfulClient, { withCache } from "@lib/contentful";

import type { FormsOfSupportList } from "@features/offert/types";

const loadDataOrdered = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<FormsOfSupportList>(
      {
        content_type: "formsOfSupportList",
        limit: 1,
      },
    );

  const [data] = entries.items;

  return {
    label: data.fields.label,
    list: data.fields.listInOrder
      .map((item) => item?.fields)
      .filter((item) => !!item),
  };
};

export default withCache(loadDataOrdered);
