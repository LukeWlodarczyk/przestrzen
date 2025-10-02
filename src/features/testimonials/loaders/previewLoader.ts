import contentfulClient, { withCache } from "@lib/contentful";

import type { TestimonialsPreviewSkeleton } from "@features/testimonials/types";

import isDefined from "@utils/isDefined";

const loadPreviewData = async () => {
  const entries =
    await contentfulClient.getEntries<TestimonialsPreviewSkeleton>({
      content_type: "testimonialsPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return {
    ...data.fields,
    testimonials: data.fields.testimonials
      .filter(isDefined)
      .map((testimonial) => ({
        ...testimonial.fields,
        id: testimonial.sys.id,
      })),
  };
};

export default withCache(loadPreviewData);
