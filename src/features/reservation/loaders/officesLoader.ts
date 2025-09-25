import contentfulClient, { withCache } from "@lib/contentful";

import type { OfficesList } from "@features/reservation/types";

const loadDataOrdered = async () => {
  const entries = await contentfulClient.getEntries<OfficesList>({
    content_type: "officesList",
    limit: 1,
  });

  const [data] = entries.items;

  return {
    label: data.fields.label,
    list: data.fields.listInOrder
      .map((item) => item?.fields)
      .filter((item) => !!item),
  };
};

export default withCache(loadDataOrdered);
