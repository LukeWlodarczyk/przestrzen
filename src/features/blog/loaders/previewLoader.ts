import contentfulClient, { timeToRead, withCache } from "@lib/contentful";

import type { BlogPreview } from "@features/blog/types";

const loadPreviewData = async () => {
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

export default withCache(loadPreviewData);
