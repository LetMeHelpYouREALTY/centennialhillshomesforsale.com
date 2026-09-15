import type { Metadata } from "next";
import { AGENT_EMAIL, CTA_PHONE } from "./contact";
import type { SiteImage } from "./site-images";

/** Keep SERP snippets on the client line, not phone-only. */
export function withClientEmail(description: string): string {
  if (description.includes(AGENT_EMAIL)) {
    return description;
  }
  if (description.includes(`Call ${CTA_PHONE}`)) {
    return `${description.replace(/\.$/, "")} or email ${AGENT_EMAIL}.`;
  }
  const trimmed = description.trim().replace(/\.$/, "");
  return `${trimmed}. Call ${CTA_PHONE} or email ${AGENT_EMAIL}.`;
}

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
    typeof metadata.description === "string"
      ? withClientEmail(metadata.description)
      : undefined;

  return {
    ...metadata,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      ...metadata.openGraph,
      title,
      description,
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
      ...metadata.twitter,
      title,
      description,
      images: [image.src],
    },
  };
}
