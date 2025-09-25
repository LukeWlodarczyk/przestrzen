import contentfulClient, { withCache } from "@lib/contentful";

import type { NotFoundPage } from "@features/notFound/types";

// 🚧 Contentful loader (currently unused).
// Page content is hardcoded directly in the view for now.
// This loader is intentionally kept for potential future use
// if we move to a higher Contentful plan and want to manage this content in the CMS.

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<NotFoundPage>({
    content_type: "notFoundPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
