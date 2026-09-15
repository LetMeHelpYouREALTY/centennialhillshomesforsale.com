import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { PAGE_HERO_IMAGES, resolveSectionImage } from "@/lib/site-images";

type SectionPhotoProps = {
  heading: string;
  neighborhoodName?: string;
  neighborhoodSlug?: string;
  fallbackSrc?: string;
  avoidSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function SectionPhoto({
  heading,
  neighborhoodName,
  neighborhoodSlug,
  fallbackSrc,
  avoidSrc,
  imageSrc,
  imageAlt,
  className = "mx-auto max-w-5xl mb-8",
}: SectionPhotoProps) {
  const normalizedHeading = heading.trim().replace(/\s+/g, " ");
  const resolved = resolveSectionImage({
    heading: normalizedHeading,
    neighborhoodName,
    neighborhoodSlug,
    fallbackSrc: fallbackSrc ?? PAGE_HERO_IMAGES.listings.src,
    avoidSrc,
  });

  return (
    <PageHeroImage
      src={imageSrc ?? resolved.src}
      alt={imageAlt ?? resolved.alt}
      size="section"
      priority={false}
      className={className}
    />
  );
}

type SectionHeadingProps = {
  children: string;
  className?: string;
  id?: string;
  neighborhoodName?: string;
  neighborhoodSlug?: string;
  fallbackSrc?: string;
  avoidSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  photoHeading?: string;
  photoClassName?: string;
};

export function SectionHeading({
  children,
  className,
  id,
  neighborhoodName,
  neighborhoodSlug,
  fallbackSrc,
  avoidSrc,
  imageSrc,
  imageAlt,
  photoHeading,
  photoClassName,
}: SectionHeadingProps) {
  return (
    <>
      <h2 id={id} className={className}>
        {children}
      </h2>
      <SectionPhoto
        heading={photoHeading ?? children}
        neighborhoodName={neighborhoodName}
        neighborhoodSlug={neighborhoodSlug}
        fallbackSrc={fallbackSrc}
        avoidSrc={avoidSrc}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className={photoClassName}
      />
    </>
  );
}
