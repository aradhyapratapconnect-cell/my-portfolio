import type { ITUnit } from "../../types";
import { cn } from "../../lib/cn";

interface SessionNavProps {
  unit: ITUnit;
  selectedId: string;
  onSelect: (sessionId: string) => void;
}

/**
 * Session list for the selected unit.
 * Horizontal scrollable chips on mobile, vertical list on large screens.
 */
export function SessionNav({ unit, selectedId, onSelect }: SessionNavProps) {
  return (
    <nav
      aria-label={`${unit.shortTitle} sessions`}
      className="no-scrollbar flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:p-0 print-hidden"
    >
      {unit.sessions.map((session, index) => {
        const selected = session.id === selectedId;
        return (
          <button
            key={session.id}
            type="button"
            onClick={() => onSelect(session.id)}
            aria-current={selected ? "true" : undefined}
            className={cn(
              "flex shrink-0 items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors duration-200 lg:w-full",
              selected
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full font-mono text-[10px]",
                selected ? "bg-white/15 text-white" : "bg-surface-muted text-ink-muted",
              )}
            >
              {index + 1}
            </span>
            <span className="whitespace-nowrap lg:whitespace-normal">{session.title}</span>
          </button>
        );
      })}
    </nav>
  );
}