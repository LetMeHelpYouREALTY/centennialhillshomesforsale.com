import type { MetadataRoute } from "next";
import {
  APPLE_ICON_PATH,
  ICON_192_PATH,
  ICON_512_PATH,
} from "@/lib/brand-assets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    short_name: "Dr. Jan Duffy",
    description:
      "Centennial Hills and Las Vegas homes with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    icons: [
      {
        src: ICON_192_PATH,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: ICON_512_PATH,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: APPLE_ICON_PATH,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
