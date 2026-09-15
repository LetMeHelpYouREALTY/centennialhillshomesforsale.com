import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("homepage MLS search", () => {
  it("uses a unique MLS input id so it does not collide with other pages", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain('inputId="mls-q-home"');
    expect(src).toContain("MlsSearchForm");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("Siena");
    expect(src).not.toContain("text-white/80");
  });
});
