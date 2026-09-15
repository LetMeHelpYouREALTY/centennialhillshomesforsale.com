import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("global error recovery screen", () => {
  it("renders its own html shell with NAP, call, and email", () => {
    const src = readFileSync(resolve(here, "global-error.tsx"), "utf8");
    expect(src).toContain('<html lang="en">');
    expect(src).toContain("./globals.css");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("CTA_PHONE");
    expect(src).toContain("OFFICE_NAP");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("/home-valuation");
    expect(src).toContain("/relocation");
    expect(src).toContain("/buyers/first-time-buyers");
    expect(src).toContain("/buyers/california-relocator");
    expect(src).toContain("<main");
    expect(src).toContain('id="main-content"');
    expect(src).toContain("SkipLink");
    expect(src).toContain("call {CTA_PHONE}");
    expect(src).toContain("TEXT_LINK_CLASS");
    expect(src).toContain("MlsSearchForm");
    expect(src).toContain('inputId="mls-q-global-error"');
    expect(src).toContain("SectionHeading");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("VisitOffice");
  });
});
