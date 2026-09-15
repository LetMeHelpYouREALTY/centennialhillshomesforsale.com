import type { Metadata } from "next";
import { AGENT_EMAIL, CTA_PHONE } from "./contact";
import { siteConfig } from "./site-config";
import type { SiteImage } from "./site-images";
import { getCanonicalUrl } from "./site-url";

/** Google SERP snippets typically display ~155–160 characters. */
export const SERP_DESCRIPTION_MAX = 160;

const SERP_TITLE_SUFFIX = " | Dr. Jan Duffy";
const SERP_NAP = ` Call ${CTA_PHONE} or email ${AGENT_EMAIL}.`;

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

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const DANGLING_LAST_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "by",
  "for",
  "from",
  "get",
  "in",
  "into",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
  "your",
]);

function dropDanglingLastWords(text: string): string {
  const words = text.split(/\s+/).filter(Boolean);
  while (words.length > 1) {
    const last = words[words.length - 1]?.replace(/[^\w]/g, "").toLowerCase();
    if (!last || !DANGLING_LAST_WORDS.has(last)) break;
    words.pop();
  }
  return words.join(" ").replace(/[\s.,;:–—-]+$/, "");
}

function clipAtWord(text: string, max: number): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const cut =
    lastSpace >= Math.floor(max * 0.6) ? slice.slice(0, lastSpace) : slice;
  return dropDanglingLastWords(cut.replace(/[\s.,;:–—-]+$/, ""));
}

const BROKERAGE_NAME = "Berkshire Hathaway HomeServices Nevada Properties";

function finishClippedLead(lead: string, original: string): string {
  let next = lead.replace(/[.,;:]+$/, "");
  if (
    original.includes(BROKERAGE_NAME) &&
    !next.includes(BROKERAGE_NAME) &&
    /\bBerkshire\b/.test(next)
  ) {
    const idx = next.lastIndexOf("Berkshire");
    if (idx > 0) {
      next = dropDanglingLastWords(next.slice(0, idx).replace(/[\s,;:]+$/, ""));
    }
  }
  const lastPeriod = next.lastIndexOf(". ");
  if (lastPeriod > 0) {
    const tail = next.slice(lastPeriod + 2).trim();
    const tailWords = tail.split(/\s+/).filter(Boolean);
    if (tailWords.length > 0 && tailWords.length < 3) {
      next = next.slice(0, lastPeriod);
    }
  }
  return next.replace(/[.,;:]+$/, "");
}

/**
 * Clip a meta description to SERP length while keeping the client phone
 * and email when they were in the original copy.
 */
export function clipSerpDescription(
  description: string,
  max = SERP_DESCRIPTION_MAX,
): string {
  const text = description.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;

  const keepPhone = text.includes(CTA_PHONE);
  const keepEmail = text.includes(AGENT_EMAIL);
  if (keepPhone && keepEmail) {
    if (SERP_NAP.length >= max) {
      return `Call ${CTA_PHONE} or email ${AGENT_EMAIL}.`;
    }
    const uniqueMax = max - SERP_NAP.length;
    const unique = text
      .replace(new RegExp(escapeRegExp(AGENT_EMAIL), "g"), " ")
      .replace(new RegExp(escapeRegExp(CTA_PHONE), "g"), " ")
      .replace(/,?\s*(?:or\s+)?email\s*[.,]?/gi, " ")
      .replace(
        /,?\s*call(?:\s+Dr\.?\s+Jan(?:\s+Duffy)?)?(?:\s+at)?\s*[.,]?/gi,
        " ",
      )
      .replace(/\s+/g, " ")
      .replace(/\s+([.,;:])/g, "$1")
      .replace(/^[.\s,]+/, "")
      .replace(/[.\s,]+$/, "")
      .trim();
    if (!unique || uniqueMax < 24) {
      return `Call ${CTA_PHONE} or email ${AGENT_EMAIL}.`;
    }
    const lead = finishClippedLead(clipAtWord(unique, uniqueMax), unique);
    return `${lead}.${SERP_NAP}`.replace(/\s+/g, " ").trim();
  }

  const clipped = clipAtWord(text, max);
  return /[.!?]$/.test(clipped) ? clipped : `${clipped}.`;
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
 * Open Graph / Twitter titles do not use the layout `title.template`, so
 * unbranded string titles need the same " | Dr. Jan Duffy" suffix the
 * document title gets from the root layout.
 */
function shareCardTitle(title: Metadata["title"]): string | undefined {
  if (typeof title === "string") {
    return title.includes("Dr. Jan Duffy")
      ? title
      : `${title}${SERP_TITLE_SUFFIX}`;
  }
  return resolveTitle(title);
}

/**
 * Root layout uses `title.template = "%s | Dr. Jan Duffy"`. Child titles that
 * already name Dr. Jan Duffy must be absolute so SERP titles do not read
 * "… | Dr. Jan Duffy | Dr. Jan Duffy".
 */
export function titleWithoutLayoutSuffix(
  title: Metadata["title"],
): Metadata["title"] {
  if (typeof title === "string" && title.includes("Dr. Jan Duffy")) {
    return { absolute: title };
  }
  return title;
}

/**
 * Attach a page-specific share image so Google, Maps, and social
 * previews do not fall back to the generic agent headshot.
 *
 * Child `openGraph` objects replace the layout object in Next.js 14, so this
 * must set `url` and `siteName` or `og:url` / `og:site_name` never emit.
 * Call from `generateMetadata` (not a static `metadata` export) so
 * `getCanonicalUrl()` can read `x-pathname`.
 */
export function withShareImage(metadata: Metadata, image: SiteImage): Metadata {
  const cardTitle =
    typeof metadata.openGraph?.title === "string"
      ? metadata.openGraph.title
      : shareCardTitle(metadata.title);
  const description =
    typeof metadata.description === "string"
      ? clipSerpDescription(withClientEmail(metadata.description))
      : undefined;
  const canonical = getCanonicalUrl();

  return {
    ...metadata,
    title: titleWithoutLayoutSuffix(metadata.title),
    description,
    alternates: {
      canonical,
      ...metadata.alternates,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.fullName,
      ...metadata.openGraph,
      url: metadata.openGraph?.url ?? canonical,
      title: cardTitle,
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
      title: cardTitle,
      description,
      images: [image.src],
    },
  };
}
