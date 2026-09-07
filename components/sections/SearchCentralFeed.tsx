import { CTA_PHONE, CTA_TEL } from "@/lib/contact";
import {
  SEARCH_CENTRAL_FALLBACK_IMAGE,
  type SearchCentralItem,
} from "@/lib/search-central-feed";

type SearchCentralFeedProps = {
  items: SearchCentralItem[];
};

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
    return null;
  }

  return (
    <section className="mb-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Google Search Central, applied to this site
      </h2>
      <p className="text-slate-700 mb-4">
        The August 28, 2026{" "}
        <a
          href="https://developers.google.com/search/blog/2026/08/update-site-reputation-policy"
          className="text-blue-700 underline"
        >
          site reputation policy update
        </a>{" "}
        still changes results for people searching in the United States. EEA
        results are treated differently. This Las Vegas site writes first-party
        copy. We do not rent the domain to third-party advertorials.
      </p>
      <p className="text-slate-700 mb-8">
        Search Console platform properties (July 2026) track Instagram, TikTok,
        X, and YouTube inside Google — that is not a page we need to build.
        Generative AI reports launched June 3, 2026. Call{" "}
        <a href={CTA_TEL} className="font-semibold text-blue-700">
          {CTA_PHONE}
        </a>{" "}
        for a Centennial Hills listing, not a syndicated dump.
      </p>
      <ul className="grid md:grid-cols-2 gap-6">
        {items.map((item) => {
          const image = item.image || SEARCH_CENTRAL_FALLBACK_IMAGE;
          return (
            <li
              key={item.link}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <a href={item.link} rel="noopener noreferrer" className="block">
                <img
                  src={image}
                  alt={item.title}
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="w-full h-40 object-cover bg-slate-100"
                />
              </a>
              <div className="p-5">
                <p className="text-xs text-slate-500 mb-2">
                  {formatPubDate(item.pubDate)}
                </p>
                <h3 className="font-bold text-slate-900 mb-2">
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                  >
                    {item.title}
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
      <p className="text-xs text-slate-500 mt-4">
        Headlines and excerpts from the official{" "}
        <a
          href="https://developers.google.com/search/blog/feed.xml"
          className="underline"
        >
          Google Search Central Blog RSS
        </a>
        . Full posts stay on developers.google.com.
      </p>
    </section>
  );
}
