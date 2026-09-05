import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  /** Optionally render a status dot before the label. */
  dot?: boolean;
  className?: string;
}

const styles: Record<BadgeVariant, string> = {
  neutral: "border-line bg-surface-subtle text-ink-soft",
  accent: "border-accent/20 bg-accent-soft text-accent",
  success: "border-green-200 bg-green-50 text-green-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  danger: "border-red-200 bg-red-50 text-red-700",
};

const dotStyles: Record<BadgeVariant, string> = {
  neutral: "bg-ink-muted",
  accent: "bg-accent",
  success: "bg-green-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};

export function Badge({ children, variant = "neutral", dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        styles[variant],
        className,
      )}
    >
      {dot && <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", dotStyles[variant])} />}
      {children}
    </span>
  );
}