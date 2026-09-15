import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("MlsSearchForm", () => {
  it("posts a GET search to /listings and can prefill a ZIP", () => {
    const src = readFileSync(resolve(here, "MlsSearchForm.tsx"), "utf8");
    expect(src).toContain('action="/listings"');
    expect(src).toContain('method="get"');
    expect(src).toContain('name="q"');
    expect(src).toContain("defaultQuery");
    expect(src).toContain("min-h-11");
    expect(src).toContain("ring-blue-600");
    expect(src).toContain("AGENT_EMAIL");
  });
});
