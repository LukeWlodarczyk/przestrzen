import contentfulClient, {
  extractEntryFields,
  withCache,
} from "@lib/contentful";

import { isDefined } from "@utils/index";

import type { FormsOfSupportList } from "@features/offert/types";

const loadDataOrdered = async () => {
  const entries = await contentfulClient.getEntries<FormsOfSupportList>({
    content_type: "formsOfSupportList",
    limit: 1,
    include: 2,
  });

  const [data] = entries.items;

  return {
    label: data.fields.label,
    image: data.fields.image,
    list: data.fields.listInOrder
      .filter(isDefined)
      .map(extractEntryFields)
      .map((form) => ({
        ...form,
        relatedAreasOfSupport: form.relatedAreasOfSupport
          .filter(isDefined)
          .map(extractEntryFields),
      })),
  };
};

export default withCache(loadDataOrdered);
