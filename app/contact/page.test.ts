import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("contact hub", () => {
  it("puts email on JSON-LD, the hero, and the response FAQ", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("AGENT_EMAIL");
    expect(src).toContain("email homes@heyberkshire.com");
    expect(src).toContain("or email ${AGENT_EMAIL}");
    expect(src).toContain("text-pretty");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).not.toContain("Whether you're buying");
  });
});
