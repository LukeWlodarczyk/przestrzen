import contentfulClient, { withCache } from "@lib/contentful";

import type { ContactPreviewSkeleton } from "@features/contact/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<ContactPreviewSkeleton>({
    content_type: "contactPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
