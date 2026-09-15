import { describe, expect, it } from "vitest";
import { mergeGuideRelated } from "./guide-related";

describe("guide related links", () => {
  it("appends listings and contact when the page omitted them", () => {
    const merged = mergeGuideRelated([
      { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
    ]);
    expect(merged.map((item) => item.href)).toEqual([
      "/neighborhoods/summerlin",
      "/listings",
      "/contact",
    ]);
  });

  it("does not duplicate a listings or contact href the page already set", () => {
    const merged = mergeGuideRelated([
      { href: "/listings", label: "Current 89138 listings" },
      { href: "/contact", label: "Office" },
    ]);
    expect(merged).toHaveLength(2);
    expect(merged[0].label).toBe("Current 89138 listings");
  });
});
