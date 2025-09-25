import type { EntryFieldTypes } from "contentful";

import loadBlogPostsData from "@features/blog/loaders/blogPosts";

export interface BlogPost {
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

export interface BlogPreview {
  contentTypeId: "blogPreview";
  fields: {
    heading: EntryFieldTypes.Text;
    headline: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
    recomendedBlogPostsLabel: EntryFieldTypes.Text;
    recomendedBlogPosts: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<BlogPost>
    >;
    ctaLabel: EntryFieldTypes.Text;
  };
}

export type BlogPostFields = Awaited<
  ReturnType<typeof loadBlogPostsData>
>[number];

export interface BlogMain {
  contentTypeId: "blogMainPage";
  fields: {
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    heading: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    listLabel: EntryFieldTypes.Text;
  };
}
