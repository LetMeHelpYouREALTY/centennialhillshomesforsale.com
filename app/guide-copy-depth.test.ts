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

const guidePages = walkPageFiles(join(process.cwd(), "app")).filter((file) => {
  const src = readFileSync(file, "utf8");
  return src.includes("NeighborhoodGuide") || src.includes("TopicGuide");
});

describe("NeighborhoodGuide and TopicGuide copy depth", () => {
  it("loads at least one guide page", () => {
    expect(guidePages.length).toBeGreaterThan(20);
  });

  it.each(guidePages)(
    "%s has at least five unique section headings",
    (file) => {
      const src = readFileSync(file, "utf8");
      const headings = src.match(/heading:\s*["'`]/g) ?? [];
      expect(headings.length).toBeGreaterThanOrEqual(5);
    },
  );
});
