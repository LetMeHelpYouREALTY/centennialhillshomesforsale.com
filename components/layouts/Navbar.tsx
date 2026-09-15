"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import { CTA_PHONE, CTA_TEL } from "@/lib/contact";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    { href: "/listings", label: "Properties", external: false },
    { href: "/neighborhoods", label: "Neighborhoods", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Home Buying" },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/home-valuation", label: "Home Valuation" },
    { href: "/relocation", label: "Relocation" },
    { href: "/investment-properties", label: "Investment" },
    { href: "/market-report", label: "Market Report" },
    { href: "/market-insights", label: "Market Insights" },
  ];

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-[padding,box-shadow] duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Dr. Jan Duffy, Berkshire Hathaway HomeServices — home"
          >
            <AgentPhoto variant="navbar" priority className="shrink-0" />
            <span className="flex min-w-0 flex-col">
              <span className="text-lg font-bold leading-tight text-slate-900 transition-colors hover:text-blue-600 md:text-xl lg:text-2xl">
                Berkshire Hathaway
                <span className="text-blue-600"> HomeServices</span>
              </span>
              <span className="hidden text-xs text-slate-500 sm:block">
                Dr. Jan Duffy · Nevada Properties
              </span>
            </span>
          </Link>

          <div className="hidden items-center space-x-5 lg:flex">
            {mainNavLinks.map((link) => {
              const isCurrent =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-md px-1 py-1 text-sm font-medium no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                    isCurrent
                      ? "text-blue-700"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className="flex min-h-11 items-center rounded-md px-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                onClick={() => setIsServicesOpen((open) => !open)}
                onMouseEnter={() => setIsServicesOpen(true)}
                aria-expanded={isServicesOpen}
                aria-controls="services-menu"
                aria-label="Services"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>

              {isServicesOpen && (
                <ul
                  id="services-menu"
                  className="absolute left-0 top-full z-50 mt-2 w-52 list-none rounded-lg bg-white py-2 shadow-lg"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block min-h-11 px-4 py-2 text-sm text-slate-700 no-underline hover:bg-blue-50 hover:text-blue-600 focus-visible:bg-blue-50 focus-visible:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Button asChild className="min-h-11 bg-blue-600 hover:bg-blue-700">
              <a
                href={CTA_TEL}
                className="flex items-center gap-2 no-underline"
                aria-label={`Call Dr. Jan Duffy at ${CTA_PHONE}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{CTA_PHONE}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Button
              asChild
              size="sm"
              className="min-h-11 min-w-11 bg-blue-600 hover:bg-blue-700"
            >
              <a
                href={CTA_TEL}
                aria-label={`Call Dr. Jan Duffy at ${CTA_PHONE}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-1 text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="mt-4 overscroll-contain border-t border-slate-200 pb-4 lg:hidden"
          >
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) => {
                const isCurrent =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded px-3 py-2 font-medium no-underline transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isCurrent ? "bg-blue-50 text-blue-700" : "text-slate-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-2 border-t border-slate-200 pt-2">
                <span className="px-3 text-xs font-semibold uppercase text-slate-500">
                  Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex min-h-11 items-center rounded px-3 py-2 font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <a
                    href={CTA_TEL}
                    className="flex items-center justify-center gap-2 no-underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Dr. Jan: {CTA_PHONE}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
