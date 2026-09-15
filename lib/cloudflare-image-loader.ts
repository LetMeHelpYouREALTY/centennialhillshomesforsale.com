/**
 * Cloudflare Images loader for Next.js.
 *
 * Git files in /public/images are the backup source of truth.
 * When NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true and
 * NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH is set, delivery uses
 * imagedelivery.net with custom ids matching the git path
 * (slashes → hyphens, no extension).
 *
 * @see https://developers.cloudflare.com/images/transform-images/transform-via-url/
 */

import { cloudflareImageId } from "./site-images";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const useCloudflareImages =
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";
  const accountHash = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;

  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  if (useCloudflareImages && accountHash) {
    const imageId = cloudflareImageId(src);
    const q = quality ?? 85;
    return `https://imagedelivery.net/${accountHash}/${imageId}/w=${width},q=${q},fit=cover,format=auto`;
  }

  return src;
}
