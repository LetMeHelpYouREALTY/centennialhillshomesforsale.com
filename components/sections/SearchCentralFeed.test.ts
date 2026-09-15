import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("Search Central feed chrome", () => {
  it("uses next/image for allowed Google hosts instead of a raw img tag", () => {
    const src = readFileSync(resolve(here, "SearchCentralFeed.tsx"), "utf8");
    expect(src).toContain('from "next/image"');
    expect(src).toContain("ALLOWED_FEED_IMAGE_HOSTS");
    expect(src).toContain("developers.google.com");
    expect(src).not.toContain("<img");
    expect(src).toContain("text-slate-600");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("SEARCH_CENTRAL_HEADING");
    expect(src).toContain("Google Search Central, Las Vegas SEO");
    expect(src).not.toContain("text-slate-500");
  });
});
