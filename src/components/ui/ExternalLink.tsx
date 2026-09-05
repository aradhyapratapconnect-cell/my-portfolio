import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** Show a small arrow-up-right icon after the label. */
  withIcon?: boolean;
  iconClassName?: string;
}

/**
 * Safe external link — opens in a new tab with noopener noreferrer.
 * `aria-label` appends "(opens in a new tab)" unless a label is provided.
 */
export function ExternalLink({
  children,
  className,
  withIcon = false,
  iconClassName,
  "aria-label": ariaLabel,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (typeof children === "string" ? `${children} (opens in a new tab)` : undefined)}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-strong hover:underline",
        className,
      )}
      {...rest}
    >
      {children}
      {withIcon && <ArrowUpRight size={15} className={cn("shrink-0", iconClassName)} aria-hidden="true" />}
    </a>
  );
}