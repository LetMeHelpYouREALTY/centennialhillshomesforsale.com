import { describe, expect, it } from "vitest";
import { mergeGuideFaqs, mergeGuideRelated } from "./guide-related";

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

describe("guide FAQ merge", () => {
  it("appends a CMA email FAQ when the page omitted the office email", () => {
    const merged = mergeGuideFaqs(
      [
        {
          question: "Is 89138 in Henderson?",
          answer: "No. It is Summerlin West.",
        },
      ],
      "89138",
    );
    expect(merged).toHaveLength(2);
    expect(merged[1].answer).toContain("homes@heyberkshire.com");
    expect(merged[1].answer).toContain("(702) 222-1964");
  });

  it("does not duplicate a CMA FAQ when the page already names the office email", () => {
    const merged = mergeGuideFaqs(
      [
        {
          question: "Can I email a CMA request?",
          answer: "Yes. Email homes@heyberkshire.com with the address.",
        },
      ],
      "Green Valley",
    );
    expect(merged).toHaveLength(1);
  });
});
