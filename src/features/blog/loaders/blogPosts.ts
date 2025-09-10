import contentfulClient, { timeToRead, withCache } from "@lib/contentful";

import type { BlogPost } from "@features/blog/types";

const loadData = async () => {
  const entries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPost>({
      content_type: "blogPost",
    });

  const data = entries.items;

  return data
    .map((post) => post?.fields)
    .filter((post) => !!post)
    .map((post) => ({ ...post, timeToRead: timeToRead(post.body) }));
};

export default withCache(loadData);
