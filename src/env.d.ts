interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;

  readonly CLOUDINARY_CLOUD_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
