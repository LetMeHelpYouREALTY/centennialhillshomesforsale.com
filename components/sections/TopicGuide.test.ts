import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("TopicGuide conversion chrome", () => {
  it("keeps MLS search, CMA FAQs, and readable intro copy", () => {
    const src = readFileSync(resolve(here, "TopicGuide.tsx"), "utf8");
    expect(src).toContain("MlsSearchForm");
    expect(src).toContain("mergeGuideFaqs");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("DEFAULT_GUIDE_RELATED");
    expect(src).toContain("text-pretty");
    expect(src).not.toContain("<main");
    expect(src).toContain('variant="onBrand"');
    expect(src).toContain("text-blue-50");
    expect(src).toContain("-guide-mid");
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).toContain("text-slate-300");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("Search live MLS");
    expect(src).toContain("avoidSrc={heroSrc}");
    expect(src).not.toContain("text-blue-200");
    expect(src).not.toContain("text-slate-500");
  });
});
