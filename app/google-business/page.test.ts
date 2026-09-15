import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("google-business hub", () => {
  it("uses the shared mailto constant and links 89138 plus Siena", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).not.toContain("mailto:${businessInfo.email}");
    expect(src).toContain('href: "/neighborhoods/89138"');
    expect(src).toContain('href: "/55-plus-communities/siena"');
    expect(src).toContain("Call or email with the address you want on a CMA");
    expect(src).toContain("gbpPostTemplates");
    expect(src).toContain("Google Business Profile posts");
    expect(src).toContain('source="google-business-mid"');
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).not.toContain("text-blue-300");
    expect(src).not.toContain("text-blue-200");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("If I helped you buy or sell");
    expect(src).not.toContain("If Dr. Jan helped you");
    expect(src).not.toContain("Call or email Dr. Jan Duffy with the address");
  });
});
