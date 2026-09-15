import { describe, expect, it } from "vitest";
import {
  customerSupportTemplate,
  homeValuationTemplate,
  neighborhoodExpertTemplate,
  propertySearchTemplate,
  realEstateAgentTemplate,
} from "./prompt-templates";

const allTemplates = [
  realEstateAgentTemplate,
  propertySearchTemplate,
  homeValuationTemplate,
  neighborhoodExpertTemplate,
  customerSupportTemplate,
]
  .map((template) => template.system)
  .join("\n");

describe("Claude prompt templates", () => {
  it("does not sell a free valuation or a buyer-does-not-pay slogan", () => {
    expect(allTemplates).not.toMatch(/free, no-obligation/i);
    expect(allTemplates).not.toMatch(/typically don't pay agent fees/i);
    expect(allTemplates).not.toMatch(/typically 5-6%/);
    expect(allTemplates).not.toMatch(/30-60 days/);
    expect(allTemplates).not.toMatch(/strong rental demand/i);
    expect(allTemplates).not.toMatch(/Inventory levels are healthy/i);
  });

  it("names email, 89138, and Siena", () => {
    expect(allTemplates).toContain("homes@heyberkshire.com");
    expect(allTemplates).toContain("89138");
    expect(allTemplates).toContain("Siena");
  });

  it("puts the client email on the customer-support template", () => {
    expect(customerSupportTemplate.system).toContain("homes@heyberkshire.com");
    expect(customerSupportTemplate.system).toMatch(/written buyer agreement/i);
  });
});
