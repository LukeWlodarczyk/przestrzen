import contentfulClient, { withCache } from "@lib/contentful";

import type { OffertMain } from "@features/offert/types";

const loadPreviewData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<OffertMain>({
      content_type: "offertMainPage",
      limit: 1,
    });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
