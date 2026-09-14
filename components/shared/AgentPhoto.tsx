import Image from "next/image";
import { AGENT_PHOTO_ALT, AGENT_PHOTO_PATH } from "@/lib/brand-assets";

type AgentPhotoVariant = "navbar" | "footer" | "profile" | "card";

type AgentPhotoProps = {
  variant?: AgentPhotoVariant;
  priority?: boolean;
  className?: string;
};

const VARIANT: Record<
  AgentPhotoVariant,
  { width: number; height: number; className: string; sizes: string }
> = {
  navbar: {
    width: 48,
    height: 48,
    className: "h-10 w-10 md:h-12 md:w-12",
    sizes: "48px",
  },
  footer: {
    width: 80,
    height: 80,
    className: "h-20 w-20",
    sizes: "80px",
  },
  card: {
    width: 280,
    height: 280,
    className: "h-44 w-44 md:h-56 md:w-56",
    sizes: "(max-width: 768px) 176px, 224px",
  },
  profile: {
    width: 800,
    height: 800,
    className: "mx-auto h-auto w-full max-w-md",
    sizes: "(max-width: 768px) 100vw, 448px",
  },
};

export function AgentPhoto({
  variant = "profile",
  priority = false,
  className = "",
}: AgentPhotoProps) {
  const spec = VARIANT[variant];

  return (
    <Image
      src={AGENT_PHOTO_PATH}
      alt={AGENT_PHOTO_ALT}
      width={spec.width}
      height={spec.height}
      sizes={spec.sizes}
      priority={priority}
      className={`${spec.className} ${className}`.trim()}
    />
  );
}
