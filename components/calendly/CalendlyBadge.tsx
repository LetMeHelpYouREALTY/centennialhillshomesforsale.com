"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import { CALENDLY_WIDGET_JS, ensureCalendlyStylesheet } from "./load-calendly";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

export default function CalendlyBadge({
  url = CALENDLY_SHOWING_URL,
  text = "Schedule time with me",
  color = "#0069ff",
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    ensureCalendlyStylesheet();
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initBadge();
    } else {
      // Wait for script to load
      window.addEventListener("calendly-loaded", initBadge);
    }

    return () => {
      window.removeEventListener("calendly-loaded", initBadge);
    };
  }, [url, text, color, textColor, branding]);

  return (
    <>
      <Script
        id="calendly-widget-js"
        src={CALENDLY_WIDGET_JS}
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url,
              text,
              color,
              textColor,
              branding,
            });
          }
        }}
      />
    </>
  );
}
