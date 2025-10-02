interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;

  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;

  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
