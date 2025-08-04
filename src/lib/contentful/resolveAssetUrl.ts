import type { Asset } from "contentful";

const protocol = new URL(import.meta.env.PUBLIC_SITE_URL).protocol;

const resolveAssetWithUrl = (asset?: Asset) => {
  if (!asset) return "";

  if ("fields" in asset && asset.fields?.file?.url) {
    const url = asset.fields.file.url as string;

    return url.startsWith("//") ? `${protocol}${url}` : url;
  }

  return "";
};

export default resolveAssetWithUrl;
