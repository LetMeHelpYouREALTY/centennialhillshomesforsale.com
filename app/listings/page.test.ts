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
    expect(src).toContain('name: "Siena 55+"');
    expect(src).toContain('source="listings-hub-mid"');
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).not.toContain("text-slate-400");
  });
});
