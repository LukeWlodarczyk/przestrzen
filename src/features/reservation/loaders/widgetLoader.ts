import contentfulClient from "@lib/contentful";

import type { Widget } from "@features/reservation/types";

const loadWidgetData = async () => {
  const entries = await contentfulClient.getEntries<Widget>({
    content_type: "widget",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default loadWidgetData;
