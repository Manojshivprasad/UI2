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
      src="/thoughtscrest-wordmark.png"
      alt="ThoughtsCrest"
      width={419}
      height={66}
      priority={priority}
      className={cn("h-8 w-auto", className)}
    />
  );
}
