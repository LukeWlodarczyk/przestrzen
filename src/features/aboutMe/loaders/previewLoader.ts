import contentfulClient, { withCache } from "@lib/contentful";

import type { AboutMePreview } from "@features/aboutMe/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<AboutMePreview>({
    content_type: "aboutMePreview",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
