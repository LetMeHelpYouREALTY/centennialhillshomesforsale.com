import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("market insights report schema", () => {
  it("date-stamps the report to the sourced snapshot ISO date", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("MARKET_SNAPSHOT_ISO");
    expect(src).not.toContain('datePublished: "2026-09-07"');
    expect(src).toContain("mls-q-market-insights");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("Call (702) 222-1964");
    expect(src).toContain("homes@heyberkshire.com");
  });
});
