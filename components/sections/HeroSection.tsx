"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CTA_PHONE, CTA_TEL } from "@/lib/contact";

const images = [
  {
    src: "/images/neighborhoods/centennial-hills.png",
    alt: "Centennial Hills Las Vegas homes with northwest desert mountain views",
  },
  {
    src: "/images/neighborhoods/henderson.png",
    alt: "Henderson Nevada residential street with McCullough Range views",
  },
  {
    src: "/images/neighborhoods/summerlin-west.png",
    alt: "Summerlin West homes near Red Rock Canyon, Las Vegas",
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 ${
              prefersReducedMotion ? "" : "transition-opacity duration-1000"
            } ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-6xl">
          Las Vegas &amp; Henderson Homes
          <br />
          <span className="text-blue-400">with Dr. Jan Duffy</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Berkshire Hathaway HomeServices Nevada Properties. Search current
          listings, then call the client line for a live pull.
        </p>

        <div className="realscout-wrapper mb-4">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>`,
            }}
          />
        </div>

        <a
          href={CTA_TEL}
          className="mt-4 inline-flex min-h-11 items-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call {CTA_PHONE}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Clients represented</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Las Vegas closings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4.9★</span>
            <span>Client rating</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 z-20 -translate-x-1/2 ${
          prefersReducedMotion ? "" : "animate-bounce"
        }`}
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-3 w-1 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
