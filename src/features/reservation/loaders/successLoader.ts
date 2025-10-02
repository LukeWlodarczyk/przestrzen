import contentfulClient, { withCache } from "@lib/contentful";

import type { ReservationSuccessSkeleton } from "@features/reservation/types";

const loadSuccessData = async () => {
  const entries = await contentfulClient.getEntries<ReservationSuccessSkeleton>(
    {
      content_type: "reservationSuccessPage",
      limit: 1,
    },
  );

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadSuccessData);
