import type { ITUnit } from "../../types";
import { cn } from "../../lib/cn";

interface UnitTabsProps {
  units: ITUnit[];
  selectedId: string;
  onSelect: (unitId: string) => void;
}

/** Horizontal unit selector for the Class 10 IT curriculum. */
export function UnitTabs({ units, selectedId, onSelect }: UnitTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Employability Skills units"
      className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-3 print-hidden"
    >
      {units.map((unit) => {
        const selected = unit.id === selectedId;
        return (
          <button
            key={unit.id}
            type="button"
            role="tab"
            id={`it-tab-${unit.id}`}
            aria-selected={selected}
            aria-controls="it-panel"
            onClick={() => onSelect(unit.id)}
            className={cn(
              "flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              selected
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
            )}
          >
            <span aria-hidden="true" className={cn("font-mono text-xs", selected ? "text-white/70" : "text-ink-muted")}>
              Unit {unit.number}
            </span>
            <span className="whitespace-nowrap">{unit.shortTitle}</span>
            <span
              aria-hidden="true"
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                selected ? "bg-white/15 text-white" : "bg-surface-muted text-ink-muted",
              )}
            >
              {unit.sessions.length}
            </span>
          </button>
        );
      })}
    </div>
  );
}