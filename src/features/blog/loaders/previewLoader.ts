import contentfulClient, {
  extractEntryFields,
  withCache,
} from "@lib/contentful";

import { isDefined } from "@utils/index";

import { enhanceBlogPost } from "@features/blog/loaders/blogPosts";

import type { BlogPreviewSkeleton } from "@features/blog/types";

const loadPreviewData = async () => {
  const entries = await contentfulClient.getEntries<BlogPreviewSkeleton>({
    content_type: "blogPreview",
    limit: 1,
  });

  const [data] = entries.items;

  return {
    ...data.fields,
    recommendedBlogPosts: data.fields.recommendedBlogPosts
      .filter(isDefined)
      .map(extractEntryFields)
      .map(enhanceBlogPost),
  };
};

export default withCache(loadPreviewData);
