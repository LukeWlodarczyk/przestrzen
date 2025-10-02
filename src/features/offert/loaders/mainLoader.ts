import contentfulClient, { withCache } from "@lib/contentful";

import type { OffertMainSkeleton } from "@features/offert/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<OffertMainSkeleton>({
    content_type: "offertMainPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
