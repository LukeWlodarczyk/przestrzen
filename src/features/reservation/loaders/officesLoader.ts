import contentfulClient, {
  extractEntryFields,
  withCache,
} from "@lib/contentful";

import { isDefined } from "@utils/index";

import type { OfficesListSkeleton } from "@features/reservation/types";

const loadOfficesDataOrdered = async () => {
  const entries = await contentfulClient.getEntries<OfficesListSkeleton>({
    content_type: "officesList",
    limit: 1,
    include: 2,
  });

  const [data] = entries.items;

  return {
    label: data.fields.label,
    list: data.fields.listInOrder
      .filter(isDefined)
      .map(extractEntryFields)
      .map((office) => ({
        ...office,
        availableFormsOfSupport: office.availableFormsOfSupport
          .filter(isDefined)
          .map(extractEntryFields),
      })),
  };
};

export default withCache(loadOfficesDataOrdered);
