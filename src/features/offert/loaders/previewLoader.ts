import contentfulClient, { withCache } from "@lib/contentful";

import type { OffertPreview } from "@features/offert/types";

const loadPreviewData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<OffertPreview>({
      content_type: "offertPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
