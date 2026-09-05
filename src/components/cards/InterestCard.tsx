import type { Interest } from "../../types";
import { Card } from "../ui/Card";

interface InterestCardProps {
  interest: Interest;
}

/** Interest area card — plain and genuine, not an expertise claim. */
export function InterestCard({ interest }: InterestCardProps) {
  const Icon = interest.icon;

  return (
    <Card className="group flex h-full flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover">
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-subtle text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent"
      >
        <Icon size={18} strokeWidth={1.9} />
      </span>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{interest.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{interest.description}</p>
    </Card>
  );
}