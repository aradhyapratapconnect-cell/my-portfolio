import { useMemo } from "react";
import { PORTFOLIO_TABS } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { ChipRow } from "../ui/SubSectionHeader";
import { Projects } from "./Projects";
import { SkillsSection } from "./SkillsSection";
import { GitHubSection } from "./GitHubSection";

export function Portfolio() {
  const ids = useMemo(() => PORTFOLIO_TABS.map((tab) => tab.id), []);
  const active = useActiveSection(ids);

  return (
    <Section id="portfolio" className="border-t border-line">
      <Reveal>
        <SectionHeader
          index="03"
          eyebrow="Portfolio"
          title="What I build and work with"
          description="Three focused areas — the projects I am developing, the skills behind them, and my public work on GitHub."
        />
      </Reveal>

      <ChipRow items={PORTFOLIO_TABS} activeSection={active} />

      <Projects />
      <div className="mt-20">
        <SkillsSection />
      </div>
      <div className="mt-20">
        <GitHubSection />
      </div>
    </Section>
  );
}