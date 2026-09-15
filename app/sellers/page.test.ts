import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("sellers hub", () => {
  it("names email on the CMA CTA and links 89138 plus Siena", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("Call or email Dr. Jan Duffy");
  });
});
