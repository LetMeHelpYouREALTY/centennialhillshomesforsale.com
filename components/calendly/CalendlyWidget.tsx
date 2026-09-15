"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import { CALENDLY_WIDGET_JS, ensureCalendlyStylesheet } from "./load-calendly";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

/**
 * Inline Calendly embed. The iframe is third-party, so we wait until it is
 * near the viewport (same IntersectionObserver pattern as RealScoutListings)
 * before loading widget.js and calling initInlineWidget — that keeps the
 * contact page LCP on our own content. The reserved height stays in the
 * first paint so the layout does not jump when the widget mounts.
 */
export default function CalendlyWidget({
  url = CALENDLY_SHOWING_URL,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [loadWidget, setLoadWidget] = useState(false);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    const node = widgetRef.current;
    if (!node) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setLoadWidget(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadWidget(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadWidget) {
      return;
    }

    ensureCalendlyStylesheet();
    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !widgetRef.current || !window.Calendly) {
        return false;
      }
      if (initializedRef.current) {
        setBusy(false);
        return true;
      }

      widgetRef.current.innerHTML = "";

      const widgetDiv = document.createElement("div");
      widgetDiv.className = "calendly-inline-widget";
      widgetDiv.setAttribute("data-url", url);
      widgetDiv.style.minWidth = minWidth;
      widgetDiv.style.height = height;
      widgetDiv.style.width = "100%";
      widgetRef.current.appendChild(widgetDiv);

      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetDiv,
      });
      initializedRef.current = true;
      setBusy(false);
      return true;
    };

    if (initWidget()) {
      return;
    }

    const intervalId = setInterval(() => {
      if (initWidget()) {
        clearInterval(intervalId);
      }
    }, 100);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [loadWidget, url, minWidth, height]);

  return (
    <>
      {loadWidget ? (
        <Script
          id="calendly-widget-js"
          src={CALENDLY_WIDGET_JS}
          strategy="lazyOnload"
        />
      ) : null}
      <div
        ref={widgetRef}
        className="min-h-[400px]"
        style={{ minWidth, height, width: "100%" }}
        aria-busy={busy}
        aria-label="Schedule a showing with Dr. Jan Duffy"
      />
    </>
  );
}
