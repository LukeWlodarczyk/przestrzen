import type { EntryFieldTypes } from "contentful";
import contentfulClient from "@lib/contentful";

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

interface TestimonialsPreview {
  contentTypeId: "testimonialsPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    carouselLabel: EntryFieldTypes.Text;
    cldVideoPublicId: EntryFieldTypes.Text;
    testimonials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Testimonial>>;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<TestimonialsPreview>(
      {
        content_type: "testimonialsPreview",
        limit: 1,
      },
    );

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

export default loadData;
