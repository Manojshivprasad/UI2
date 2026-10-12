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
      src="/thoughtscrest-logo.png"
      alt="ThoughtsCrest"
      width={1200}
      height={187}
      priority={priority}
      className={cn("h-8 w-auto", className)}
    />
  );
}
