import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("buyers hub", () => {
  it("links Centennial Hills, 89138, Siena, and the 55+ hub", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain('slug: "centennial-hills"');
    expect(src).toContain('slug: "89138"');
    expect(src).toContain('href: "/55-plus-communities/siena"');
    expect(src).toContain('href="/55-plus-communities"');
    expect(src).toContain("homes@heyberkshire.com");
  });
});
