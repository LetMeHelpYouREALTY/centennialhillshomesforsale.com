import Image from "next/image";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import {
  SEARCH_CENTRAL_FALLBACK_IMAGE,
  type SearchCentralItem,
} from "@/lib/search-central-feed";

const SEARCH_CENTRAL_HEADING = "Google Search Central, applied to this site";

type SearchCentralFeedProps = {
  items: SearchCentralItem[];
};

const ALLOWED_FEED_IMAGE_HOSTS = new Set([
  "developers.google.com",
  "www.google.com",
  "files.keepingcurrentmatters.com",
]);

function feedImageSrc(src: string | undefined): string {
  if (!src) {
    return SEARCH_CENTRAL_FALLBACK_IMAGE;
  }
  try {
    const host = new URL(src).hostname;
    return ALLOWED_FEED_IMAGE_HOSTS.has(host)
      ? src
      : SEARCH_CENTRAL_FALLBACK_IMAGE;
  } catch {
    return SEARCH_CENTRAL_FALLBACK_IMAGE;
  }
}

function formatPubDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function SearchCentralFeed({ items }: SearchCentralFeedProps) {
  if (items.length === 0) {
    return (
      <section className="mb-16 max-w-5xl mx-auto">
        <SectionHeading
          className="mb-4 text-3xl font-bold text-slate-900"
          fallbackSrc={PAGE_HERO_IMAGES.googleBusiness.src}
          avoidSrc={PAGE_HERO_IMAGES.market.src}
        >
          {SEARCH_CENTRAL_HEADING}
        </SectionHeading>
        <p className="text-pretty text-slate-700">
          The Search Central feed is unavailable right now. Call{" "}
          <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
            {CTA_PHONE}
          </a>{" "}
          or email{" "}
          <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
            {AGENT_EMAIL}
          </a>{" "}
          for a live Centennial Hills listing pull.
        </p>
      </section>
    );
  }

  return (
    <section className="mb-16 max-w-5xl mx-auto">
      <SectionHeading
        className="mb-4 text-3xl font-bold text-slate-900"
        fallbackSrc={PAGE_HERO_IMAGES.googleBusiness.src}
        avoidSrc={PAGE_HERO_IMAGES.market.src}
      >
        {SEARCH_CENTRAL_HEADING}
      </SectionHeading>
      <p className="text-pretty text-slate-700 mb-4">
        The August 28, 2026{" "}
        <a
          href="https://developers.google.com/search/blog/2026/08/update-site-reputation-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={TEXT_LINK_CLASS}
        >
          site reputation policy update
          <span className="sr-only"> (opens in a new tab)</span>
        </a>{" "}
        still changes results for people searching in the United States. EEA
        results are treated differently. This Las Vegas site writes first-party
        copy. I do not rent the domain to third-party advertorials.
      </p>
      <p className="text-pretty text-slate-700 mb-8">
        Search Console platform properties (July 2026) track Instagram, TikTok,
        X, and YouTube inside Google — that is not a page I need to build.
        Generative AI reports launched June 3, 2026. Call{" "}
        <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
          {CTA_PHONE}
        </a>{" "}
        or email{" "}
        <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
          {AGENT_EMAIL}
        </a>{" "}
        for a Centennial Hills listing, not a syndicated dump.
      </p>
      <ul className="grid md:grid-cols-2 gap-6">
        {items.map((item) => {
          const image = feedImageSrc(item.image);
          return (
            <li
              key={item.link}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <a
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600"
              >
                <span className="relative block h-40 w-full bg-slate-100">
                  <Image
                    src={image}
                    alt={`${item.title} — Google Search Central, Las Vegas SEO`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <div className="p-5">
                <p className="text-xs text-slate-600 mb-2">
                  {formatPubDate(item.pubDate)}
                </p>
                <h3 className="font-bold text-slate-900 mb-2">
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex min-h-11 items-center hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {item.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-slate-600 mt-4">
        Headlines and excerpts from the official{" "}
        <a
          href="https://developers.google.com/search/blog/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className={TEXT_LINK_CLASS}
        >
          Google Search Central Blog RSS
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Full posts stay on developers.google.com.
      </p>
    </section>
  );
}
