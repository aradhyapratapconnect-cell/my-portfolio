import { ArrowUpRight, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "../ui/Card";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
  href: string;
  /** Opens in a new tab when true (mailto links stay in the same tab). */
  external: boolean;
}

/** Clean contact links card with icon, value and external arrow. */
export function ContactCard({ icon: Icon, label, value, description, href, external }: ContactCardProps) {
  const isEmail = href.startsWith("mailto:");
  const a11yLabel = external
    ? `${label}: ${value} (opens in a new tab)`
    : `${label}: ${value}`;

  return (
    <Card className="group relative flex h-full flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover md:p-7">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-subtle text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent"
      >
        <Icon size={20} strokeWidth={1.9} />
      </span>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">{label}</p>
      <p className="mt-2 text-[15px] font-medium leading-snug break-all text-ink">{value}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>

      <a
        href={href}
        aria-label={a11yLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
      >
        {isEmail ? (
          <>
            Send an email
            <Mail size={15} aria-hidden="true" />
          </>
        ) : (
          <>
            Visit profile
            <ArrowUpRight size={15} aria-hidden="true" />
          </>
        )}
      </a>
    </Card>
  );
}