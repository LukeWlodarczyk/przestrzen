import type { EntryFieldTypes } from "contentful";

import loadPreviewData from "@features/testimonials/loaders/previewLoader";

interface Testimonial {
  contentTypeId: "testimonialsPreview";
  fields: {
    author: EntryFieldTypes.Text;
    body: EntryFieldTypes.Text;
    videoTransform: EntryFieldTypes.Object<{
      x: number;
      y: number;
      scale: number;
    }>;
  };
}

export interface TestimonialsPreview {
  contentTypeId: "testimonialsPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    carouselLabel: EntryFieldTypes.Text;
    cldVideoPublicId: EntryFieldTypes.Text;
    testimonials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Testimonial>>;
  };
}

export type TestimonailFields = Awaited<
  ReturnType<typeof loadPreviewData>
>["testimonials"][number];
