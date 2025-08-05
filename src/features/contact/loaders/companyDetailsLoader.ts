import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

import type { Office } from "@features/reservation/loaders/officesLoader";

interface CompanyDetails {
  contentTypeId: "companyDetails";
  fields: {
    label: EntryFieldTypes.Text;
    office: EntryFieldTypes.EntryLink<Office>;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<CompanyDetails>({
      content_type: "companyDetails",
      limit: 1,
    });

  const [data] = entries.items;

  if (!data.fields.office) throw new Error("The main Office is required");

  return {
    label: data.fields.label,
    office: data.fields.office.fields,
  };
};

export default loadData;
