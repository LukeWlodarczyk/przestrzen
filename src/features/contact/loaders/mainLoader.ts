import contentfulClient, { withCache } from "@lib/contentful";

import type { ContactMainSkeleton } from "@features/contact/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<ContactMainSkeleton>({
    content_type: "contactMainPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
