import type { Metadata } from "next";
import type { SiteImage } from "./site-images";

function resolveTitle(title: Metadata["title"]): string | undefined {
  if (typeof title === "string") return title;
  if (
    title &&
    typeof title === "object" &&
    "absolute" in title &&
    typeof title.absolute === "string"
  ) {
    return title.absolute;
  }
  return undefined;
}

/**
 * Attach a page-specific share image so Google, Maps, and social
 * previews do not fall back to the generic agent headshot.
 */
export function withShareImage(metadata: Metadata, image: SiteImage): Metadata {
  const title = resolveTitle(metadata.title);
  const description =
    typeof metadata.description === "string" ? metadata.description : undefined;

  return {
    ...metadata,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      ...metadata.openGraph,
      images: [
        {
          url: image.src,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...metadata.twitter,
      images: [image.src],
    },
  };
}
