import { cn } from "../../lib/cn";

interface SkillChipProps {
  children: string;
  className?: string;
}

/** Compact technology/language chip used in skill and project areas. */
export function SkillChip({ children, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface-subtle px-3 py-1 text-[13px] font-medium text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}