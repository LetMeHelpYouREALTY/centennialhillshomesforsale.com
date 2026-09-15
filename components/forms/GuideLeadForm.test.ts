import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("guide lead form", () => {
  it("names the client phone and email on every guide CMA form", () => {
    const src = readFileSync(resolve(here, "GuideLeadForm.tsx"), "utf8");
    expect(src).toContain("CTA_PHONE");
    expect(src).toContain("AGENT_EMAIL");
    expect(src).toContain("email {AGENT_EMAIL}");
    expect(src).toContain("CTA_TEL");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("TEXT_LINK_CLASS");
  });
});
