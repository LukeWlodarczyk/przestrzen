import contentfulClient, {
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

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPost>({
      content_type: "blogPost",
      order: ["-fields.date"],
    });

  return entries.items.map((entry) => entry.fields).map(enhanceBlogPost);
};

export default withCache(loadData);
