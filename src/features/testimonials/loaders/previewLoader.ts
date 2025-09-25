import contentfulClient, { withCache } from "@lib/contentful";

import type { TestimonialsPreview } from "@features/testimonials/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<TestimonialsPreview>({
    content_type: "testimonialsPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return {
    ...data.fields,
    testimonials: data.fields.testimonials
      .filter((testimonial) => !!testimonial)
      .map((testimonial) => ({
        ...testimonial.fields,
        id: testimonial.sys.id,
      })),
  };
};

export default withCache(loadPreviewData);
