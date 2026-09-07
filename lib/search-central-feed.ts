/**
 * Google Search Central blog RSS.
 * Headlines + excerpts only — we do not host third-party articles
 * (site reputation policy, updated 2026-08-28, still enforced for US search).
 */

export const SEARCH_CENTRAL_FEED_URL =
  "https://developers.google.com/search/blog/feed.xml";

/** Official Search Central social image when an item has no inline photo. */
export const SEARCH_CENTRAL_FALLBACK_IMAGE =
  "https://developers.google.com/static/search/blog/images/social-share-blog.png";

export type SearchCentralItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string;
};

function decodeEntities(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(value: string): string {
  return decodeEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tagContent(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match ? decodeEntities(match[1]).trim() : "";
}

function extractImage(
  block: string,
  rawDescription: string,
): string | undefined {
  const enclosure = block.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enclosure?.[1]) {
    return enclosure[1].trim();
  }
  const media = block.match(
    /<(?:media:content|media:thumbnail)[^>]+url=["']([^"']+)["']/i,
  );
  if (media?.[1]) {
    return media[1].trim();
  }
  const imgMatch = rawDescription.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch?.[1]?.trim();
}

export function parseSearchCentralRss(
  xml: string,
  limit = 10,
): SearchCentralItem[] {
  const items: SearchCentralItem[] = [];
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  for (const block of itemBlocks) {
    if (items.length >= limit) {
      break;
    }
    const title = stripHtml(tagContent(block, "title"));
    const link = stripHtml(tagContent(block, "link"));
    const rawDescription = tagContent(block, "description");
    const description = stripHtml(rawDescription);
    const pubDate = stripHtml(tagContent(block, "pubDate"));
    if (!title || !link) {
      continue;
    }
    const image = extractImage(block, rawDescription);
    items.push({
      title,
      link,
      description,
      pubDate,
      image,
    });
  }

  return items;
}

export async function getSearchCentralPosts(
  limit = 6,
): Promise<SearchCentralItem[]> {
  try {
    const response = await fetch(SEARCH_CENTRAL_FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) {
      return [];
    }
    const xml = await response.text();
    return parseSearchCentralRss(xml, limit);
  } catch {
    return [];
  }
}
