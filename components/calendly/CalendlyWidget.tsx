"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import "./types";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url = CALENDLY_SHOWING_URL,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const initWidget = () => {
      if (cancelled || !widgetRef.current || !window.Calendly) {
        return;
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
    };

    if (window.Calendly) {
      initWidget();
    } else {
      intervalId = setInterval(() => {
        if (window.Calendly) {
          if (intervalId) clearInterval(intervalId);
          initWidget();
        }
      }, 100);
      timeoutId = setTimeout(() => {
        if (intervalId) clearInterval(intervalId);
      }, 10000);
    }

    return () => {
      cancelled = true;
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [url, minWidth, height]);

  return (
    <div
      ref={widgetRef}
      style={{ minWidth, height, width: "100%" }}
      aria-busy="true"
      aria-label="Schedule a showing with Dr. Jan Duffy"
    />
  );
}
