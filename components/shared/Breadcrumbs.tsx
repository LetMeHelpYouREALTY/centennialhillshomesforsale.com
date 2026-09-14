import Link from "next/link";
import { BreadcrumbSchema } from "@/components/SchemaScript";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <BreadcrumbSchema
        items={items.map((item) => ({ name: item.name, url: item.href }))}
      />
      <nav
        className={`max-w-5xl text-sm text-slate-500 ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.href}-${item.name}`}
                className="flex items-center gap-1"
              >
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isLast ? (
                  <span className="text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 no-underline hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
