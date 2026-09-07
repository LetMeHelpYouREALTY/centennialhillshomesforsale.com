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
  { width: number; height: number; className: string }
> = {
  navbar: { width: 48, height: 48, className: "h-10 w-10 md:h-12 md:w-12" },
  footer: { width: 80, height: 80, className: "h-20 w-20" },
  card: {
    width: 280,
    height: 280,
    className: "h-44 w-44 md:h-56 md:w-56",
  },
  profile: {
    width: 800,
    height: 800,
    className: "mx-auto h-auto w-full max-w-md",
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
      priority={priority}
      className={`${spec.className} ${className}`.trim()}
    />
  );
}
