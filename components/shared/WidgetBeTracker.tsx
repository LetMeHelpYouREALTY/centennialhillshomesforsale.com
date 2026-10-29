import Script from "next/script";

/** Homepage-only third-party tracker. Keep off inner pages for TBT. */
export function WidgetBeTracker() {
  // Production only: keeps Vercel preview URLs out of the FUB Pixel install list
  if (process.env.VERCEL_ENV !== "production") return null;

  return (
    <Script id="widget-tracker" strategy="lazyOnload">{`
      (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
      {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
      (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
      e.parentNode.insertBefore(t,e);})
      (window,"https://widgetbe.com/agent",document,"widgetTracker");
      window.widgetTracker("create","WT-XQHVYQWW");
      window.widgetTracker("send","pageview");
    `}</Script>
  );
}
