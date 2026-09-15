"use client";

import { useEffect } from "react";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import {
  ensureCalendlyScript,
  ensureCalendlyStylesheet,
} from "./load-calendly";
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

    if (window.Calendly) {
      initBadge();
      return;
    }

    ensureCalendlyScript({ onLoad: initBadge });
  }, [url, text, color, textColor, branding]);

  return null;
}
