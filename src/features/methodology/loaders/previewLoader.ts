import contentfulClient, { withCache } from "@lib/contentful";

import type { MethodologyPreview } from "@features/methodology/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<MethodologyPreview>({
    content_type: "methodologyPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return {
    ...data.fields,
    items: data.fields.items
      .map((item) => item?.fields)
      .filter((item) => !!item),
  };
};

export default withCache(loadPreviewData);
