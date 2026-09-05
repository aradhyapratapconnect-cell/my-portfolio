import { GitHubCard } from "../cards/GitHubCard";
import { Reveal } from "../ui/Reveal";
import { SubSectionHeader } from "../ui/SubSectionHeader";

export function GitHubSection() {
  return (
    <div id="github" className="scroll-mt-28">
      <Reveal>
        <SubSectionHeader
          title="GitHub"
          description="My public GitHub profile — completed tools, learning repositories and experiments that are still taking shape."
        />
      </Reveal>

      <Reveal delay={0.06}>
        <GitHubCard />
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-5 text-xs leading-relaxed text-ink-muted">
          Repository links on this portfolio are only added where the exact public URL can be
          verified — otherwise the profile itself is the destination.
        </p>
      </Reveal>
    </div>
  );
}