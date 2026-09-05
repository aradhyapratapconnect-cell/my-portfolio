import { cn } from "../../lib/cn";

interface SubSectionHeaderProps {
  title: string;
  description?: string;
}

/** Compact heading used inside larger sections. */
export function SubSectionHeader({ title, description }: SubSectionHeaderProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{title}</h3>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}

/** Row of chips used for the portfolio sub-navigation. */
export function ChipRow({
  items,
  activeSection,
}: {
  items: { id: string; label: string }[];
  activeSection: string;
}) {
  return (
    <nav aria-label="Portfolio sections" className="no-scrollbar mb-10 flex gap-2 overflow-x-auto print-hidden">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeSection === item.id ? "true" : undefined}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
            activeSection === item.id
              ? "border-ink bg-ink text-white"
              : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}