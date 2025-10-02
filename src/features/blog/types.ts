import type { EntryFieldTypes } from "contentful";

import loadBlogPostsData from "@features/blog/loaders/blogPosts";

export interface BlogPostSkeleton {
  contentTypeId: "blogPost";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
  };
}

export interface BlogPreviewSkeleton {
  contentTypeId: "blogPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    recommendedBlogPostsLabel: EntryFieldTypes.Text;
    recommendedBlogPosts: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogPostSkeleton>
    >;
    ctaLabel: EntryFieldTypes.Text;
  };
}

export type BlogPost = Awaited<ReturnType<typeof loadBlogPostsData>>[number];

export interface BlogMainSkeleton {
  contentTypeId: "blogMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    listLabel: EntryFieldTypes.Text;
  };
}
