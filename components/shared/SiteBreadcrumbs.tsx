import { headers } from "next/headers";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { breadcrumbsForPath } from "@/lib/route-labels";

export function SiteBreadcrumbs() {
  const pathname = headers().get("x-pathname") || "/";
  const items = breadcrumbsForPath(pathname);
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      id="site-breadcrumbs"
      className="border-b border-slate-100 bg-white pt-24"
    >
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs items={items} />
      </div>
    </div>
  );
}
