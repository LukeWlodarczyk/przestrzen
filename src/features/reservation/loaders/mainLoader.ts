import contentfulClient, { withCache } from "@lib/contentful";

import type { ReservationMain } from "@features/reservation/types";

const loadMainData = async () => {
  const entries = await contentfulClient.getEntries<ReservationMain>({
    content_type: "reservationMainPage",
    limit: 1,
  });

  const [data] = entries.items;

  return data.fields;
};

export default withCache(loadMainData);
