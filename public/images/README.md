# Image Assets Guide

Git under `public/images/` is the backup source of truth. Cloudflare Images is
the optional CDN: set `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`,
`NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true`, and
`NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH`, then run `npm run cloudflare:images`.

Custom Cloudflare ids match the git path with slashes turned into hyphens
(`images/hero/buyers.png` → `images-hero-buyers`).

## Folder Structure

```
images/
├── hero/           # Topic and hub H1 heroes
├── gbp/            # Office photos that support Google Business / Maps
├── agent/          # Dr. Jan Duffy photos
├── properties/     # Listing photos
├── neighborhoods/  # Area/community photos (H1/H2 cards)
├── testimonials/   # Client headshots
└── logos/          # Brand assets
```

## Recommended Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | PNG, WebP | 16:9, heading-matched |
| gbp/ | 1600x900+ | PNG, WebP | Office / Maps support |
| agent/ | 400x400+ | WebP, JPG | Square, professional headshot |
| properties/ | 1200x800+ | WebP, JPG | Landscape, MLS-quality |
| neighborhoods/ | 1200x800+ | PNG, WebP | Unique to the H1 community |
| testimonials/ | 200x200 | WebP, JPG | Square, optional |
| logos/ | Various | PNG, SVG | Transparent background |

## Naming Conventions

- Use lowercase with hyphens: `summerlin.png`
- Match the page H1 (community, service, or office)
- Do not reuse one neighborhood photo for a different city

## Usage in Code

```tsx
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { PAGE_HERO_IMAGES, getNeighborhoodImage } from "@/lib/site-images";

<PageHeroImage
  src={PAGE_HERO_IMAGES.buyers.src}
  alt={PAGE_HERO_IMAGES.buyers.alt}
/>
```

Alt text must name the place or service in the H1 (location + property type).
