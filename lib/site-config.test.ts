import { describe, expect, it } from "vitest";
import {
  commonFAQs,
  expertQuotes,
  neighborhoods,
  services,
  valuePropositions,
} from "./site-config";
import { defaultFaqs } from "./default-faqs";

describe("site copy does not sell ranking slogans", () => {
  const blob = JSON.stringify({
    services,
    commonFAQs,
    expertQuotes,
    defaultFaqs,
    valuePropositions,
  });

  it("does not advertise free buyer representation or expert ranking", () => {
    expect(blob).not.toMatch(/Free buyer representation/i);
    expect(blob).not.toMatch(/Expert guidance/i);
    expect(blob).not.toMatch(/trusted local lenders/i);
    expect(blob).not.toMatch(/We specialize/i);
    expect(blob).not.toMatch(/flawless execution/i);
    expect(blob).not.toMatch(/deep local market knowledge/i);
    expect(blob).not.toMatch(/resources of a global brand/i);
    expect(blob).not.toMatch(/no-obligation/i);
    expect(blob).not.toMatch(/highest-ROI/i);
    expect(JSON.stringify(neighborhoods)).not.toMatch(/150\+ parks/i);
    expect(JSON.stringify(neighborhoods)).not.toMatch(/Established Henderson/i);
    expect(JSON.stringify(defaultFaqs)).toContain("89138");
    expect(JSON.stringify(defaultFaqs)).toContain("Siena");
    expect(JSON.stringify(defaultFaqs)).toContain("homes@heyberkshire.com");
    expect(JSON.stringify(commonFAQs)).toContain("89138");
    expect(JSON.stringify(commonFAQs)).toContain("Siena");
    expect(JSON.stringify(commonFAQs)).toContain("how I am paid");
    expect(JSON.stringify(commonFAQs)).not.toMatch(/how she is paid/);
  });
});
