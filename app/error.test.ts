import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("error recovery screen", () => {
  it("keeps NAP, email, and a live MLS search on the failure path", () => {
    const src = readFileSync(resolve(here, "error.tsx"), "utf8");
    expect(src).toContain("MlsSearchForm");
    expect(src).toContain('inputId="mls-q-error"');
    expect(src).toContain("AGENT_EMAIL");
    expect(src).toContain("CTA_PHONE");
    expect(src).toContain("OFFICE_NAP");
    expect(src).toContain("text-pretty");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("call {CTA_PHONE}");
    expect(src).toContain("TEXT_LINK_CLASS");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("VisitOffice");
  });
});
