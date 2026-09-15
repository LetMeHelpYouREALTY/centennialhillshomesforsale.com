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

  it("puts the client email on every GBP post", () => {
    for (const post of gbpPostTemplates) {
      expect(post.content).toContain("homes@heyberkshire.com");
      expect(post.content).not.toMatch(
        /Call \(702\) 222-1964\.(?!\s*or email)/,
      );
    }
  });

  it("names Siena on the 55+ spotlight post", () => {
    const fiftyFive = gbpPostTemplates.find(
      (post) => post.id === "55-plus-spotlight",
    );
    expect(fiftyFive?.content).toContain("Siena");
    expect(fiftyFive?.content).toContain("89135");
    expect(fiftyFive?.content).toContain("I work 55+ HOPA files");
    expect(fiftyFive?.content).not.toContain("Dr. Jan Duffy works 55+");
  });

  it("does not use perfect-home slogans in review replies", () => {
    const replies = Object.values(reviewResponseTemplates)
      .map((fn) => fn("Alex", "Summerlin", "details"))
      .join("\n");
    expect(replies).not.toMatch(/perfect home/i);
    expect(replies).not.toMatch(/next chapter/i);
  });

  it("puts the client email on every review reply template", () => {
    for (const template of Object.values(reviewResponseTemplates)) {
      expect(template("Alex", "Summerlin", "details")).toContain(
        "homes@heyberkshire.com",
      );
    }
  });
});
