import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("route loading skeleton", () => {
  it("pulses only when motion is allowed", () => {
    const src = readFileSync(resolve(here, "loading.tsx"), "utf8");
    const pulses = src.match(/animate-pulse/g) ?? [];
    const motionSafe = src.match(/motion-safe:animate-pulse/g) ?? [];
    expect(motionSafe.length).toBeGreaterThan(0);
    expect(pulses.length).toBe(motionSafe.length);
    expect(src).toContain('role="status"');
  });
});
