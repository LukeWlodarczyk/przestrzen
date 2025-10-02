import contentfulClient, { withCache } from "@lib/contentful";

import type { AboutMePreviewSkeleton } from "@features/aboutMe/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<AboutMePreviewSkeleton>({
    content_type: "aboutMePreview",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
