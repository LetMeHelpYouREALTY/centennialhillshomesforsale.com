import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { getCanonicalUrl, getRequestOrigin } from "@/lib/site-url";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import {
  AGENT_PHOTO_ALT,
  APPLE_ICON_PATH,
  FAVICON_32_PATH,
  FAVICON_PATH,
  ICON_192_PATH,
  OG_IMAGE_PATH,
} from "@/lib/brand-assets";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { SiteJsonLd } from "@/components/shared/SiteJsonLd";
import { SiteBreadcrumbs } from "@/components/shared/SiteBreadcrumbs";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a8a",
};

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  const origin = getRequestOrigin();
  const canonical = getCanonicalUrl();

  return {
    metadataBase: new URL(origin),
    title: {
      default: `${config.heroHeadline} | Dr. Jan Duffy, REALTOR®`,
      template: "%s | Dr. Jan Duffy",
    },
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    icons: {
      icon: [
        { url: FAVICON_PATH, sizes: "48x48" },
        { url: FAVICON_32_PATH, sizes: "32x32", type: "image/png" },
        { url: ICON_192_PATH, sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: APPLE_ICON_PATH, sizes: "180x180" }],
      shortcut: FAVICON_PATH,
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      url: canonical,
      siteName: `${config.neighborhood} Homes for Sale`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: AGENT_PHOTO_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: [OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="overflow-x-hidden bg-white text-slate-900 antialiased">
        <SkipLink />
        <SiteJsonLd />
        <Navbar />
        <SiteBreadcrumbs />
        <div id="main-content">{children}</div>
        <Footer />
        <Analytics />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.js"
          strategy="afterInteractive"
        />
        <Script id="widget-tracker" strategy="lazyOnload">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </body>
    </html>
  );
}
