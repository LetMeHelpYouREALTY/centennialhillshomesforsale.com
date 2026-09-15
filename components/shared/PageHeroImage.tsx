import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  caption?: string;
  size?: "hero" | "section";
};

export function PageHeroImage({
  src,
  alt,
  className = "",
  priority,
  caption,
  size = "hero",
}: PageHeroImageProps) {
  const isHero = size === "hero";
  const heightClass = isHero ? "h-56 md:h-80" : "h-40 md:h-52";
  const imagePriority = priority ?? isHero;

  return (
    <figure className={`mb-10 ${className}`.trim()}>
      <div className={`relative overflow-hidden rounded-2xl ${heightClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
          priority={imagePriority}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-slate-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
