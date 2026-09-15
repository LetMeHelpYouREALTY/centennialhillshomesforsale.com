import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("listings hub FAQs", () => {
  it("does not sell a best-time or expensive-HOA ranking question", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).not.toMatch(/best time of year/i);
    expect(src).not.toMatch(/HOA fees expensive/i);
    expect(src).toContain("Does Las Vegas have a seasonal buying calendar?");
    expect(src).toContain("How do I confirm HOA dues on a Las Vegas listing?");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("/neighborhoods/centennial-hills");
    expect(src).toContain("HubConversionLinks");
    expect(src).toContain('name: "Siena 55+"');
    expect(src).toContain('source="listings-hub-mid"');
    expect(src).toContain("listings-mls-heading");
    expect(src).toContain("Search live MLS");
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).not.toContain("text-slate-400");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).not.toContain("you'll have time for home inspections");
    expect(src).not.toContain("She will send matching listings");
    expect(src).not.toContain("Dr. Jan can introduce");
    expect(src).not.toContain("text-slate-500");
    expect(src).toContain("I match those facts");
    expect(src).toContain("bring Berkshire Hathaway HomeServices marketing");
    expect(src).toContain("I remain available after closing");
    expect(src).toContain("I help you match ZIP");
    expect(src).toContain("I write an offer");
    expect(src).not.toContain("Dr. Jan Duffy matches those facts");
    expect(src).not.toContain("Dr. Jan Duffy brings");
    expect(src).not.toContain("Dr. Jan Duffy remains");
    expect(src).not.toContain("Dr. Jan helps you match");
    expect(src).not.toContain("Dr. Jan writes an offer");
  });
});
