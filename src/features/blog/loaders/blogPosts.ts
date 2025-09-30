import contentfulClient, {
  extractEntryFields,
  timeToRead,
  withCache,
  type ExtractEntryFields,
} from "@lib/contentful";

import type { BlogPost } from "@features/blog/types";

export const enhanceBlogPost = (blogPost: ExtractEntryFields<BlogPost>) => ({
  ...blogPost,
  date: new Date(blogPost.date),
  timeToRead: timeToRead(blogPost.body),
});

const loadBlogPostsData = async () => {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blogPost",
    order: ["-fields.date"],
  });

  return entries.items.map(extractEntryFields).map(enhanceBlogPost);
};

export default withCache(loadBlogPostsData);
