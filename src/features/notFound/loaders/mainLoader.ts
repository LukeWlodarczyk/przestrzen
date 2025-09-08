import contentfulClient, { withCache } from "@lib/contentful";

import type { NotFoundPage } from "@features/notFound/types";

const loadMainData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<NotFoundPage>({
      content_type: "notFoundPage",
      limit: 1,
    });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
