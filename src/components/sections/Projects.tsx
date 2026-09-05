import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "../cards/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { SubSectionHeader } from "../ui/SubSectionHeader";

export function Projects() {
  return (
    <div id="projects" className="scroll-mt-28">
      <Reveal>
        <SubSectionHeader
          title="My Projects"
          description="Three projects that show how my IT learning turns into working software. Two are actively being developed; one is complete."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}