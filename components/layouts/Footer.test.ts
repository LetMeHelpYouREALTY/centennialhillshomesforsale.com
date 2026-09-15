import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("site footer", () => {
  it("names 89138 and Siena in the brokerage blurb", () => {
    const src = readFileSync(resolve(here, "Footer.tsx"), "utf8");
    expect(src).toContain("89138");
    expect(src).toContain("Siena");
    expect(src).toContain("/55-plus-communities/siena");
  });
});
