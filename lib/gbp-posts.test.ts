import { describe, expect, it } from "vitest";
import { gbpPostTemplates, reviewResponseTemplates } from "./gbp-posts";
import { formatUsd, LISTING_MEDIANS_USD } from "./market-snapshots";

describe("GBP post templates", () => {
  const joined = gbpPostTemplates.map((post) => post.content).join("\n");

  it("does not invent appreciation, DOM, or list-to-sale ratios", () => {
    expect(joined).not.toMatch(/4\.2%/);
    expect(joined).not.toMatch(/98\.5%/);
    expect(joined).not.toMatch(/28 days average/);
    expect(joined).not.toMatch(/37%/);
    expect(joined).not.toMatch(/perfect fit/);
    expect(joined).not.toMatch(/world-class/i);
    expect(joined).not.toMatch(/Free consultation/i);
    expect(joined).not.toMatch(/4-hour drive/i);
    expect(joined).not.toMatch(/homeownership journey/i);
  });

  it("does not use luxury-living slogans in titles", () => {
    const titles = gbpPostTemplates.map((post) => post.title).join("\n");
    expect(titles).not.toMatch(/Luxury Living/i);
  });

  it("uses Request a CMA instead of a free-analysis CTA", () => {
    const ctas = gbpPostTemplates
      .map((post) => post.cta?.text ?? "")
      .join("\n");
    expect(ctas).not.toMatch(/Get Free/i);
    expect(ctas).not.toMatch(/Free consultation/i);
  });

  it("uses sourced listing medians for first-time buyer ZIPs", () => {
    const firstTime = gbpPostTemplates.find(
      (post) => post.id === "first-time-buyer",
    );
    expect(firstTime?.content).toContain(
      formatUsd(LISTING_MEDIANS_USD.northLasVegas),
    );
    expect(firstTime?.content).toContain(
      formatUsd(LISTING_MEDIANS_USD.mountainsEdge),
    );
    expect(firstTime?.content).toContain(
      formatUsd(LISTING_MEDIANS_USD.centennialHills),
    );
  });

  it("does not use perfect-home slogans in review replies", () => {
    const replies = Object.values(reviewResponseTemplates)
      .map((fn) => fn("Alex", "Summerlin", "details"))
      .join("\n");
    expect(replies).not.toMatch(/perfect home/i);
    expect(replies).not.toMatch(/next chapter/i);
    expect(replies).toContain("homes@heyberkshire.com");
  });
});
