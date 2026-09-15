import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("lead capture form chrome", () => {
  it("uses street-address autocomplete on CMA notes and numeric price inputs", () => {
    const src = readFileSync(resolve(here, "LeadCaptureForm.tsx"), "utf8");
    expect(src).toContain('formType === "home-valuation" ? "street-address"');
    expect(src).toContain("useId");
    expect(src).toContain("ids.firstName");
    expect(src).not.toContain('id="firstName"');
    expect(src).toContain('inputMode="numeric"');
    expect(src).toContain('inputMode="decimal"');
    expect(src).toContain('inputMode="tel"');
    expect(src).toContain('enterKeyHint="next"');
    expect(src).toContain('inputMode="email"');
    expect(src).toContain('name="timeline"');
    expect(src).toContain('autoComplete="off"');
    expect(src).toContain("focus-visible:ring-offset-2");
    expect(src).toContain("focus-visible:ring-blue-600");
    expect(src).not.toContain("ring-zinc-950");
    expect(src).toContain("Ask about listings");
    expect(src).toContain("Send to Dr. Jan Duffy");
    expect(src).toContain("text-slate-600");
    expect(src).not.toContain("text-gray-500");
    expect(src).toContain("I will call or email during posted office hours");
    expect(src).not.toContain("text-slate-500");
  });
});
