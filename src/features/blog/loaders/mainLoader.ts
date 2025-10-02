import contentfulClient, { withCache } from "@lib/contentful";

import type { BlogMainSkeleton } from "@features/blog/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<BlogMainSkeleton>({
    content_type: "blogMainPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
