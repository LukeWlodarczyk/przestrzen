import type { AreaOfSupport, FormOfSupport } from "@features/offert/types";

export const getRecommendedFormsOfSupport = (
  area: AreaOfSupport,
  forms: FormOfSupport[],
) =>
  forms.filter((form) =>
    form.relatedAreasOfSupport.some((a) => a.slug === area.slug),
  );
