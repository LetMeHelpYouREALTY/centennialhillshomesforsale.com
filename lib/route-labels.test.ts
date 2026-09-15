import { describe, expect, it } from "vitest";
import { INDEXABLE_PATHS } from "./indexable-paths";
import { breadcrumbsForPath } from "./route-labels";

describe("breadcrumbsForPath", () => {
  it("returns nothing on the homepage", () => {
    expect(breadcrumbsForPath("/")).toEqual([]);
  });

  it("labels nested neighborhood and 55+ routes", () => {
    expect(breadcrumbsForPath("/neighborhoods/centennial-hills")).toEqual([
      { name: "Home", href: "/" },
      { name: "Neighborhoods", href: "/neighborhoods" },
      { name: "Centennial Hills", href: "/neighborhoods/centennial-hills" },
    ]);
    expect(
      breadcrumbsForPath("/55-plus-communities/sun-city-summerlin"),
    ).toEqual([
      { name: "Home", href: "/" },
      { name: "55+ Communities", href: "/55-plus-communities" },
      {
        name: "Sun City Summerlin",
        href: "/55-plus-communities/sun-city-summerlin",
      },
    ]);
  });

  it("covers every indexable path with a Home crumb", () => {
    for (const { path } of INDEXABLE_PATHS) {
      const crumbs = breadcrumbsForPath(path);
      if (path === "/") {
        expect(crumbs).toEqual([]);
        continue;
      }
      expect(crumbs[0]).toEqual({ name: "Home", href: "/" });
      expect(crumbs.at(-1)?.href).toBe(path);
    }
  });

  it("humanizes unknown listing ids without dropping Home", () => {
    expect(breadcrumbsForPath("/listings/abc123")).toEqual([
      { name: "Home", href: "/" },
      { name: "Properties", href: "/listings" },
      { name: "Abc123", href: "/listings/abc123" },
    ]);
  });
});
