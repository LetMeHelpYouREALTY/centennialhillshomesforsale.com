import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("GoogleReviewsCta", () => {
  it("pairs the reviews heading with a matched section photo", () => {
    const src = readFileSync(resolve(here, "GoogleReviewsCta.tsx"), "utf8");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("Read the Google reviews");
    expect(src).toContain("id={headingId}");
    expect(src).toContain("aria-labelledby={headingId}");
  });
});
