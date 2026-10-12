import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/thoughtscrest-logo.svg"
      alt="ThoughtsCrest"
      width={272}
      height={50}
      priority={priority}
      unoptimized
      className={cn("h-8 w-auto", className)}
    />
  );
}
