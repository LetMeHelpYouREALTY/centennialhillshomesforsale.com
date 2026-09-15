import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("navbar keyboard", () => {
  it("focuses the first mobile link on open and restores focus on Escape", () => {
    const src = readFileSync(resolve(here, "Navbar.tsx"), "utf8");
    expect(src).toContain("menuButtonRef.current?.focus()");
    expect(src).toContain('querySelector("a")');
    expect(src).toContain("firstLink.focus()");
    expect(src).toContain('aria-haspopup="true"');
    expect(src).toContain('aria-controls="mobile-nav"');
  });
});
