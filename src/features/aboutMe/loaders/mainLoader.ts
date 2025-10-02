import contentfulClient, { withCache } from "@lib/contentful";

import type { AboutMeMainSkeleton } from "@features/aboutMe/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<AboutMeMainSkeleton>({
    content_type: "aboutMeMainPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
