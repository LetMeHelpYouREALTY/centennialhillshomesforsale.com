import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("FAQ accordion keyboard", () => {
  it("moves focus between questions with arrow keys", () => {
    const src = readFileSync(resolve(here, "FAQSection.tsx"), "utf8");
    expect(src).toContain("onFaqKeyDown");
    expect(src).toContain("ArrowDown");
    expect(src).toContain("ArrowUp");
    expect(src).toContain('"Home"');
    expect(src).toContain('"End"');
    expect(src).toContain("text-slate-500");
    expect(src).not.toContain("text-slate-400");
  });
});
