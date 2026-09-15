import { describe, expect, it } from "vitest";
import { commonFAQs, expertQuotes, services } from "./site-config";
import { defaultFaqs } from "./default-faqs";

describe("site copy does not sell ranking slogans", () => {
  const blob = JSON.stringify({
    services,
    commonFAQs,
    expertQuotes,
    defaultFaqs,
  });

  it("does not advertise free buyer representation or expert ranking", () => {
    expect(blob).not.toMatch(/Free buyer representation/i);
    expect(blob).not.toMatch(/Expert guidance/i);
    expect(blob).not.toMatch(/trusted local lenders/i);
    expect(blob).not.toMatch(/We specialize/i);
    expect(blob).not.toMatch(/flawless execution/i);
  });
});
