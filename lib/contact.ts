/** Client-facing CTA phone. Do not swap with the FUB/professional line. */
export const CTA_PHONE = "(702) 222-1964";
export const CTA_TEL = "tel:+17022221964";
export const CTA_PHONE_DIGITS = "7022221964";
export const CTA_PHONE_E164 = "+17022221964";

/** Follow Up Boss / professional line — never use as a client CTA. */
export const FUB_PHONE = "(702) 500-1942";
export const FUB_TEL = "tel:+17025001942";

export const AGENT_EMAIL = "homes@heyberkshire.com";
export const AGENT_EMAIL_MAILTO = "mailto:homes@heyberkshire.com";
export const AGENT_LICENSE = "S.0197614.LLC";

/** Inline tel/mailto/external text links — 44px target + visible focus. */
export const TEXT_LINK_CLASS =
  "inline-flex min-h-11 items-center font-semibold text-blue-700 underline decoration-blue-700/40 underline-offset-2 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";

/** Inline links on dark NAP / hero cards. */
export const TEXT_LINK_ON_DARK_CLASS =
  "inline-flex min-h-11 items-center font-medium text-white hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export const REALSCOUT_SEARCH_URL = "https://drjanduffy.realscout.com/";
export const CALENDLY_SHOWING_URL = "https://calendly.com/drjanduffy/showing";

export const OFFICE_HOURS = {
  weekday: "Monday–Friday 9:00 AM – 6:00 PM",
  saturday: "Saturday 10:00 AM – 4:00 PM",
  sunday: "Sunday by appointment",
  display: "Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment",
} as const;

export const OPENING_HOURS_SPEC = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as const,
    opens: "09:00",
    closes: "18:00",
  },
  {
    dayOfWeek: ["Saturday"] as const,
    opens: "10:00",
    closes: "16:00",
  },
];

export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy",
  linkedin: "https://www.linkedin.com/in/drjanduffy",
} as const;

export const OFFICE_NAP = {
  name: "Dr. Jan Duffy — Berkshire Hathaway HomeServices Nevada Properties",
  street: "9406 W Lake Mead Blvd, Suite 100",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Berkshire+Hathaway+HomeServices+Nevada+Properties+Las+Vegas",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

/** Schema.org PostalAddress that matches OFFICE_NAP / GBP. */
export const OFFICE_POSTAL_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: OFFICE_NAP.street,
  addressLocality: OFFICE_NAP.city,
  addressRegion: OFFICE_NAP.state,
  postalCode: OFFICE_NAP.zip,
  addressCountry: "US" as const,
};
