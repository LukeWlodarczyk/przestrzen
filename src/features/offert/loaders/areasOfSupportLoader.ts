import contentfulClient, {
  extractEntryFields,
  withCache,
} from "@lib/contentful";

import { isDefined } from "@utils/index";

import type { AreasOfSupportListSkeleton } from "@features/offert/types";

const loadDataOrdered = async () => {
  const entries = await contentfulClient.getEntries<AreasOfSupportListSkeleton>(
    {
      content_type: "areasOfSupportList",
      limit: 1,
    },
  );

  const [data] = entries.items;

  return {
    label: data.fields.label,
    image: data.fields.image,
    list: data.fields.listInOrder.filter(isDefined).map(extractEntryFields),
  };
};

export default withCache(loadDataOrdered);
