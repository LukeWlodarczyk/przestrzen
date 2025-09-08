import contentfulClient, { withCache } from "@lib/contentful";

import type { ContactSuccess } from "@features/contact/types";

const loadSuccessData = async () => {
  const entries = await contentfulClient.getEntries<ContactSuccess>({
    content_type: "contactSuccessPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadSuccessData);
