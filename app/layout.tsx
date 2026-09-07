import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { getCanonicalUrl, getRequestOrigin } from "@/lib/site-url";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      url: canonical,
      siteName: `${config.neighborhood} Homes for Sale`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
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
