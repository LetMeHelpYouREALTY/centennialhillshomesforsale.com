import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("lead capture form chrome", () => {
  it("uses street-address autocomplete on CMA notes and numeric price inputs", () => {
    const src = readFileSync(resolve(here, "LeadCaptureForm.tsx"), "utf8");
    expect(src).toContain('formType === "home-valuation" ? "street-address"');
    expect(src).toContain('inputMode="numeric"');
    expect(src).toContain('inputMode="decimal"');
    expect(src).toContain('inputMode="tel"');
  });
});
