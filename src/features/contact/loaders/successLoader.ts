import contentfulClient, { withCache } from "@lib/contentful";

import type { ContactSuccessSkeleton } from "@features/contact/types";

const loadSuccessData = async () => {
  const entries = await contentfulClient.getEntries<ContactSuccessSkeleton>({
    content_type: "contactSuccessPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadSuccessData);
