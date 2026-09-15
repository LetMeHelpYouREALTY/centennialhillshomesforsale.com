"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
} from "@/lib/contact";

function isDisplayed(el: HTMLElement): boolean {
  return el.getClientRects().length > 0;
}

function focusableIn(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
  ).filter(isDisplayed);
}

function setChromeInert(inert: boolean) {
  for (const id of ["main-content", "site-breadcrumbs"]) {
    const node = document.getElementById(id);
    if (node instanceof HTMLElement) {
      node.inert = inert;
    }
  }
  const footer = document.querySelector("footer");
  if (footer instanceof HTMLElement) {
    footer.inert = inert;
  }
}

function listServiceLinks(root: HTMLElement | null): HTMLAnchorElement[] {
  if (!root) {
    return [];
  }
  return Array.from(
    root.querySelectorAll<HTMLAnchorElement>("#services-menu a"),
  ).filter(isDisplayed);
}

function focusServiceLink(
  links: HTMLAnchorElement[],
  current: Element | null,
  delta: number,
) {
  if (links.length === 0) {
    return;
  }
  const index = links.findIndex((link) => link === current);
  const next =
    index === -1
      ? delta > 0
        ? 0
        : links.length - 1
      : (index + delta + links.length) % links.length;
  links[next].focus();
}

function isCurrentHref(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesMenuFocusRef = useRef<"first" | "last" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      setIsServicesOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

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
    if (!isServicesOpen || !servicesMenuFocusRef.current) {
      return;
    }
    const links = listServiceLinks(servicesRef.current);
    if (links.length === 0) {
      return;
    }
    const target =
      servicesMenuFocusRef.current === "last"
        ? links[links.length - 1]
        : links[0];
    target.focus();
    servicesMenuFocusRef.current = null;
  }, [isServicesOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const { overflow, position, top, width } = document.body.style;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    setChromeInert(true);

    const firstLink = mobileNavRef.current?.querySelector("a");
    if (firstLink instanceof HTMLElement) {
      firstLink.focus();
    }

    const onTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }
      const root = navRef.current;
      if (!root) {
        return;
      }
      const focusable = focusableIn(root);
      if (focusable.length === 0) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
        return;
      }
      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);

    return () => {
      document.removeEventListener("keydown", onTab);
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      setChromeInert(false);
      window.scrollTo(0, scrollY);
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
    {
      href: "/buyers/first-time-buyers",
      label: "First-Time Buyers",
    },
    {
      href: "/buyers/california-relocator",
      label: "California Relocators",
    },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/home-valuation", label: "Home Valuation" },
    { href: "/relocation", label: "Relocation" },
    { href: "/investment-properties", label: "Investment" },
    { href: "/market-report", label: "Market Report" },
    { href: "/market-insights", label: "Market Insights" },
    { href: "/market-update", label: "Market Update" },
  ];

  const isServicesSectionCurrent = serviceLinks.some((link) =>
    isCurrentHref(pathname, link.href),
  );

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-[padding,box-shadow] duration-300 ${
        isScrolled
          ? "pb-2 pt-[max(0.5rem,env(safe-area-inset-top,0px))] shadow-lg"
          : "pb-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Dr. Jan Duffy, Berkshire Hathaway HomeServices — home"
          >
            <AgentPhoto variant="navbar" className="shrink-0" />
            <span className="flex min-w-0 flex-col">
              <span className="text-lg font-bold leading-tight text-slate-900 transition-colors hover:text-blue-600 md:text-xl lg:text-2xl">
                Berkshire Hathaway
                <span className="text-blue-600"> HomeServices</span>
              </span>
              <span className="hidden text-xs text-slate-600 sm:block">
                Dr. Jan Duffy · Nevada Properties
              </span>
            </span>
          </Link>

          <div className="hidden items-center space-x-5 lg:flex">
            {mainNavLinks.map((link) => {
              const isCurrent = isCurrentHref(pathname, link.href);
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
                className={`flex min-h-11 items-center rounded-md px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                  isServicesSectionCurrent
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-600"
                }`}
                onClick={() => setIsServicesOpen((open) => !open)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
                    return;
                  }
                  event.preventDefault();
                  servicesMenuFocusRef.current =
                    event.key === "ArrowUp" ? "last" : "first";
                  setIsServicesOpen(true);
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
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
                  onKeyDown={(event) => {
                    const links = listServiceLinks(servicesRef.current);
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      focusServiceLink(links, event.target as Element, 1);
                      return;
                    }
                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      focusServiceLink(links, event.target as Element, -1);
                      return;
                    }
                    if (event.key === "Home") {
                      event.preventDefault();
                      links[0]?.focus();
                      return;
                    }
                    if (event.key === "End") {
                      event.preventDefault();
                      links[links.length - 1]?.focus();
                    }
                  }}
                >
                  {serviceLinks.map((link) => {
                    const isCurrent = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`block min-h-11 px-4 py-2 text-sm no-underline hover:bg-blue-50 hover:text-blue-600 focus-visible:bg-blue-50 focus-visible:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                            isCurrent
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700"
                          }`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
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
            <Button
              asChild
              variant="outline"
              className="min-h-11 border-slate-300"
            >
              <a
                href={AGENT_EMAIL_MAILTO}
                className="flex items-center gap-2 no-underline"
                aria-label={`Email Dr. Jan Duffy at ${AGENT_EMAIL}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{AGENT_EMAIL}</span>
                <span className="xl:hidden">Email</span>
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
            <Button
              asChild
              size="sm"
              variant="outline"
              className="min-h-11 min-w-11 border-slate-300"
            >
              <a
                href={AGENT_EMAIL_MAILTO}
                aria-label={`Email Dr. Jan Duffy at ${AGENT_EMAIL}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <button
              ref={menuButtonRef}
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
            ref={mobileNavRef}
            id="mobile-nav"
            aria-label="Site menu"
            className="mt-4 overscroll-contain border-t border-slate-200 pb-4 lg:hidden"
          >
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) => {
                const isCurrent = isCurrentHref(pathname, link.href);
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
                <span className="px-3 text-xs font-semibold uppercase text-slate-600">
                  Services
                </span>
                {serviceLinks.map((link) => {
                  const isCurrent = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex min-h-11 items-center rounded px-3 py-2 font-medium no-underline transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        isCurrent
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Button
                  asChild
                  className="min-h-11 w-full bg-blue-600 hover:bg-blue-700"
                >
                  <a
                    href={CTA_TEL}
                    className="flex items-center justify-center gap-2 no-underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Dr. Jan: {CTA_PHONE}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-11 w-full border-slate-300"
                >
                  <a
                    href={AGENT_EMAIL_MAILTO}
                    className="flex items-center justify-center gap-2 no-underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {AGENT_EMAIL}
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
