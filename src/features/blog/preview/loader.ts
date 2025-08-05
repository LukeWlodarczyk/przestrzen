import type { EntryFieldTypes } from "contentful";
import contentfulClient, { timeToRead } from "@lib/contentful";

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
  };
}

interface BlogPreview {
  contentTypeId: "blogPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    recomendedBlogPosts: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogPost>
    >;
    ctaLabel: EntryFieldTypes.Text;
  };
}

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPreview>({
      content_type: "blogPreview",
      limit: 1,
    });

  const [data] = entries.items;

  return {
    ...data.fields,
    recomendedBlogPosts: data.fields.recomendedBlogPosts
      .map((post) => post?.fields)
      .filter((post) => !!post)
      .map((post) => ({ ...post, timeToRead: timeToRead(post.body) })),
  };
};

export default loadData;
