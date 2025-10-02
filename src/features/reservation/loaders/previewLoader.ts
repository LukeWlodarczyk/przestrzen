import contentfulClient, { withCache } from "@lib/contentful";

import type { ReservationPreviewSkeleton } from "@features/reservation/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<ReservationPreviewSkeleton>(
    {
      content_type: "reservationPreview",
      limit: 1,
    },
  );

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadPreviewData);
