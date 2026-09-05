import type { SkillCategory } from "../../types";
import { Card } from "../ui/Card";
import { SkillChip } from "../ui/SkillChip";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

/** Categorized skill group card with clean chips. */
export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <Card className="flex h-full flex-col p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong md:p-7">
      <div className="flex items-baseline gap-3">
        <span className="text-xs font-semibold tracking-widest text-accent" aria-hidden="true">
          {`0${index + 1}`}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-ink">{category.title}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{category.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillChip key={skill}>{skill}</SkillChip>
        ))}
      </div>
    </Card>
  );
}