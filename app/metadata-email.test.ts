import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const appDir = resolve(dirname(fileURLToPath(import.meta.url)));

function pageFiles(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...pageFiles(full));
    } else if (entry.name === "page.tsx") {
      files.push(full);
    }
  }
  return files;
}

describe("page metadata source copy", () => {
  it("does not leave a Call sentence without the client email", () => {
    const files = pageFiles(appDir);
    expect(files.length).toBeGreaterThan(40);
    for (const file of files) {
      const src = readFileSync(file, "utf8");
      if (src.includes("Call (702) 222-1964")) {
        expect(src, file).toContain("homes@heyberkshire.com");
      }
    }
  });

  it("routes branded string titles through withShareImage so the layout template cannot duplicate", () => {
    const files = pageFiles(appDir);
    for (const file of files) {
      const src = readFileSync(file, "utf8");
      if (/title:\s*(?:\n\s*)?"[^"]*Dr\. Jan Duffy/.test(src)) {
        expect(src, file).toContain("withShareImage");
      }
    }
  });
});
