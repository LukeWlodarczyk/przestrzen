import contentfulClient, { withCache } from "@lib/contentful";

import type { CompanyDetails } from "@features/contact/types";

const loadCompanyDetailsData = async () => {
  const entries = await contentfulClient.getEntries<CompanyDetails>({
    content_type: "companyDetails",
    limit: 1,
  });

  const [data] = entries.items;

  if (!data.fields.office) throw new Error("The main Office is required");

  return {
    label: data.fields.label,
    headline: data.fields.headline,
    therapistId: data.fields.therapistId,
    office: data.fields.office.fields,
  };
};

export default withCache(loadCompanyDetailsData);
