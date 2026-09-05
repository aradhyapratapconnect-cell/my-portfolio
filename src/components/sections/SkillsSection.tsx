import { SKILL_CATEGORIES } from "../../data/skills";
import { SkillCard } from "../cards/SkillCard";
import { Reveal } from "../ui/Reveal";
import { SubSectionHeader } from "../ui/SubSectionHeader";

export function SkillsSection() {
  return (
    <div id="skills" className="scroll-mt-28">
      <Reveal>
        <SubSectionHeader
          title="Skills"
          description="The languages, frameworks and tools I study and use — shown as areas of work, not as scores or percentages."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.08} className="h-full">
            <SkillCard category={category} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}