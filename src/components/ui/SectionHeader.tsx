import { cn } from "../../lib/cn";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Editorial section heading: index · eyebrow · large title · description. */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        {index && (
          <span className="text-xs font-semibold tracking-widest text-accent" aria-hidden="true">
            {index}
          </span>
        )}
        {index && <span aria-hidden="true" className="h-px w-8 bg-line-strong" />}
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-5 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.08]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}