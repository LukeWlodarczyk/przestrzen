import contentfulClient, {
  extractEntryFields,
  withCache,
} from "@lib/contentful";

import { isDefined } from "@utils/index";

import type { MethodologyPreview } from "@features/methodology/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<MethodologyPreview>({
    content_type: "methodologyPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return {
    ...data.fields,
    items: data.fields.items.filter(isDefined).map(extractEntryFields),
  };
};

export default withCache(loadPreviewData);
