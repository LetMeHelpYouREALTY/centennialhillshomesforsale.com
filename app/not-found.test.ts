import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("404 recovery screen", () => {
  it("links 89138, the 55+ hub, and Siena so a bad URL still converts", () => {
    const src = readFileSync(resolve(here, "not-found.tsx"), "utf8");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("/home-valuation");
    expect(src).toContain("/relocation");
    expect(src).toContain("/buyers/first-time-buyers");
    expect(src).toContain("AGENT_EMAIL");
    expect(src).toContain("flex-wrap");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("VisitOffice");
    expect(src).toContain("SectionHeading");
    expect(src).toContain('inputId="mls-q-404"');
  });
});
