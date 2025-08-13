import contentfulClient from "@lib/contentful";

import type { AreasOfSupportList } from "@features/offert/types";

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
