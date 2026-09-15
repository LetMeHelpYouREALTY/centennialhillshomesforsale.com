import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("listing placeholder page", () => {
  it("sends Google reviews and first-person MLS copy", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("I pull the live file, not a placeholder");
    expect(src).toContain("generateWebPageSchema");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("listing-placeholder-mls-heading");
    expect(src).toContain("/home-valuation");
    expect(src).toContain("/relocation");
    expect(src).not.toContain("She will pull");
  });
});
