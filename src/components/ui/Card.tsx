import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

/** Base refined card surface. */
export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface shadow-card",
        className,
      )}
      {...rest}
    />
  );
}