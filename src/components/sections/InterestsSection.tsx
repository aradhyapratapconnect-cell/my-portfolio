import { INTERESTS } from "../../data/interests";
import { InterestCard } from "../cards/InterestCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function InterestsSection() {
  return (
    <Section id="interests" className="border-t border-line">
      <Reveal>
        <SectionHeader
          index="05"
          eyebrow="My Interests"
          title="Areas I want to keep exploring"
          description="Genuine interests rather than claims of mastery — fields I enjoy learning about and hope to go deeper in."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INTERESTS.map((interest, index) => (
          <Reveal key={interest.id} delay={index * 0.06} className="h-full">
            <InterestCard interest={interest} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}