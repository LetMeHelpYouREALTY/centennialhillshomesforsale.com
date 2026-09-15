import { describe, expect, it } from "vitest";
import { gbpPostTemplates } from "./gbp-posts";
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
});
