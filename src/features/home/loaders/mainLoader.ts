import contentfulClient, { withCache } from "@lib/contentful";

import type { HomePageSkeleton } from "@features/home/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<HomePageSkeleton>({
    content_type: "homePage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
