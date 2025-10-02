import contentfulClient, {
  extractEntryFields,
  timeToRead,
  withCache,
  type ExtractEntryFields,
} from "@lib/contentful";

import type { BlogPostSkeleton } from "@features/blog/types";

export const enhanceBlogPost = (
  rawBlogPost: ExtractEntryFields<BlogPostSkeleton>,
) => ({
  ...rawBlogPost,
  date: new Date(rawBlogPost.date),
  timeToRead: timeToRead(rawBlogPost.body),
});

const loadBlogPostsData = async () => {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-fields.date"],
  });

  return entries.items.map(extractEntryFields).map(enhanceBlogPost);
};

export default withCache(loadBlogPostsData);
