import type { AreaOfSupport, FormOfSupport } from "@features/offert/types";
import type { Office } from "@features/reservation/types";

export const getRecommendedFormsOfSupport = (
  area: AreaOfSupport,
  forms: FormOfSupport[],
) =>
  forms.filter((form) =>
    form.relatedAreasOfSupport.some((a) => a.slug === area.slug),
  );

export const getAvailableOfficesByFormOfSupport = (
  form: FormOfSupport,
  offices: Office[],
) =>
  offices.filter((office) =>
    office.availableFormsOfSupport.some((f) => f.slug === form.slug),
  );
