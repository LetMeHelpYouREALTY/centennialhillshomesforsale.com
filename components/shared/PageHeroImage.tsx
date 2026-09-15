import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  caption?: string;
};

export function PageHeroImage({
  src,
  alt,
  className = "",
  priority = true,
  caption,
}: PageHeroImageProps) {
  return (
    <figure className={`mb-10 ${className}`.trim()}>
      <div className="relative h-56 overflow-hidden rounded-2xl md:h-80">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
          priority={priority}
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
