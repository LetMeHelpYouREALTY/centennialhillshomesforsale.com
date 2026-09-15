import { AGENT_EMAIL, CTA_PHONE, OFFICE_NAP } from "@/lib/contact";

export type GuideRelatedLink = {
  href: string;
  label: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export const DEFAULT_GUIDE_RELATED: GuideRelatedLink[] = [
  { href: "/listings", label: "Search live MLS listings" },
  { href: "/neighborhoods/89138", label: "89138 Summerlin West homes" },
  { href: "/55-plus-communities/siena", label: "Siena 55+ Summerlin" },
  { href: "/home-valuation", label: "Request a Las Vegas CMA" },
  { href: "/relocation", label: "Las Vegas relocation" },
  {
    href: "/buyers/first-time-buyers",
    label: "First-Time Las Vegas Buyers",
  },
  { href: "/contact", label: "Call or email the office" },
];

function normalizeRelatedPath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }
  return pathname.replace(/\/+$/, "") || "/";
}

export function mergeGuideRelated(
  related: GuideRelatedLink[],
  extras: GuideRelatedLink[] = DEFAULT_GUIDE_RELATED,
  currentPath?: string,
): GuideRelatedLink[] {
  const hrefs = new Set(related.map((item) => item.href));
  const merged = [
    ...related,
    ...extras.filter((item) => !hrefs.has(item.href)),
  ];
  const current = currentPath ? normalizeRelatedPath(currentPath) : "";
  if (!current || current === "/") {
    return merged;
  }
  return merged.filter((item) => item.href !== current);
}

export function defaultGuideCmaFaq(name: string): GuideFaq {
  return {
    question: `How do I get a live CMA or current listings for ${name}?`,
    answer: `Call ${CTA_PHONE} or email ${AGENT_EMAIL} with the address, beds, and ZIP. I send live MLS — not a blog sample. Office: ${OFFICE_NAP.full}.`,
  };
}

export function mergeGuideFaqs(faqs: GuideFaq[], name: string): GuideFaq[] {
  const hasEmail = faqs.some((faq) => faq.answer.includes(AGENT_EMAIL));
  if (hasEmail) {
    return faqs;
  }
  return [...faqs, defaultGuideCmaFaq(name)];
}
