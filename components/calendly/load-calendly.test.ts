import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("Calendly script loading", () => {
  it("loads widget.js once without a shared Next Script id", () => {
    const loader = readFileSync(resolve(here, "load-calendly.ts"), "utf8");
    const widget = readFileSync(resolve(here, "CalendlyWidget.tsx"), "utf8");
    const button = readFileSync(resolve(here, "CalendlyButton.tsx"), "utf8");
    const badge = readFileSync(resolve(here, "CalendlyBadge.tsx"), "utf8");
    expect(loader).toContain("ensureCalendlyScript");
    expect(loader).toContain("data-calendly-js");
    expect(widget).toContain("ensureCalendlyScript");
    expect(widget).toContain("CalendlyContactFallback");
    expect(widget).not.toContain("next/script");
    expect(button).not.toContain("next/script");
    expect(badge).not.toContain("next/script");
    expect(`${widget}\n${button}\n${badge}`).not.toContain(
      'id="calendly-widget-js"',
    );
    expect(button).toContain("Opens a scheduling popup");
    expect(button).toContain("or a new tab if the widget does not load");
  });
});
