import contentfulClient from "@lib/contentful";

import type { Office } from "@features/reservation/loaders/officesLoader";

const loadData = async () => {
  const entries = await contentfulClient.getEntries<Office>({
    content_type: "office",
    limit: 1,
    "fields.main": true,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadData;
