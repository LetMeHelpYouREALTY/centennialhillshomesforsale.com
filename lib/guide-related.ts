export type GuideRelatedLink = {
  href: string;
  label: string;
};

export const DEFAULT_GUIDE_RELATED: GuideRelatedLink[] = [
  { href: "/listings", label: "Search live MLS listings" },
  { href: "/contact", label: "Call or email the office" },
];

export function mergeGuideRelated(
  related: GuideRelatedLink[],
  extras: GuideRelatedLink[] = DEFAULT_GUIDE_RELATED,
): GuideRelatedLink[] {
  const hrefs = new Set(related.map((item) => item.href));
  return [...related, ...extras.filter((item) => !hrefs.has(item.href))];
}
