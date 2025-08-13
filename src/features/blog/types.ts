import type { EntryFieldTypes } from "contentful";

import loadPreviewData from "@features/blog/loaders/previewLoader";

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

export interface BlogPreview {
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

export type BlogPostFields = Awaited<
  ReturnType<typeof loadPreviewData>
>["recomendedBlogPosts"][number];
