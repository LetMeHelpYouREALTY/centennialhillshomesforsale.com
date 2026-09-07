import { describe, expect, it } from "vitest";
import { parseSearchCentralRss } from "./search-central-feed";

const SAMPLE_RSS = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Google Search Central Blog</title>
  <item>
    <title>Update to the Site Reputation Policy</title>
    <link>https://developers.google.com/search/blog/2026/08/update-site-reputation-policy</link>
    <description>
      <![CDATA[<p>Third-party content on a trusted website. <img src="https://developers.google.com/static/search/blog/images/social-share-blog.png" alt="Search Central"></p>]]>
    </description>
    <pubDate>Fri, 28 Aug 2026 00:00:00 +0000</pubDate>
  </item>
  <item>
    <title>Introducing Search Generative AI performance reports in Search Console</title>
    <link>https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports</link>
    <description><![CDATA[<p>New Search Generative AI performance reports.</p>]]></description>
    <pubDate>Wed, 03 Jun 2026 00:00:00 +0000</pubDate>
  </item>
</channel>
</rss>`;

describe("parseSearchCentralRss", () => {
  it("extracts title, link, text, and the first image URL", () => {
    const items = parseSearchCentralRss(SAMPLE_RSS, 6);
    expect(items).toHaveLength(2);
    expect(items[0].title).toBe("Update to the Site Reputation Policy");
    expect(items[0].link).toContain("update-site-reputation-policy");
    expect(items[0].description).toContain("Third-party content");
    expect(items[0].image).toBe(
      "https://developers.google.com/static/search/blog/images/social-share-blog.png",
    );
    expect(items[1].image).toBeUndefined();
  });

  it("respects the item limit", () => {
    expect(parseSearchCentralRss(SAMPLE_RSS, 1)).toHaveLength(1);
  });
});
