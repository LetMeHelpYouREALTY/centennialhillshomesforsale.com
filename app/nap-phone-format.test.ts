import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function walkPageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkPageFiles(full));
    } else if (entry.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

const pages = walkPageFiles(join(process.cwd(), "app"));

describe("NAP phone formatting on pages", () => {
  it("loads site pages", () => {
    expect(pages.length).toBeGreaterThan(40);
  });

  it.each(pages)(
    "%s uses parenthetical (702) 222-1964, not 702-222-1964",
    (file) => {
      const src = readFileSync(file, "utf8");
      expect(src).not.toContain("702-222-1964");
    },
  );
});
