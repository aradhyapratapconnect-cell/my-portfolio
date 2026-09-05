import { Github } from "lucide-react";
import type { Project } from "../../types";
import { cn } from "../../lib/cn";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { ExternalLink } from "../ui/ExternalLink";
import { SkillChip } from "../ui/SkillChip";

interface ProjectCardProps {
  project: Project;
}

/** Premium product-style project card with hover elevation. */
export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;
  const developing = project.status === "developing";

  return (
    <Card className="group flex h-full flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-subtle text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent"
        >
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <Badge variant={developing ? "warning" : "success"} dot>
          {developing ? "Developing" : "Completed"}
        </Badge>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <SkillChip key={tech}>{tech}</SkillChip>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="border-t border-line pt-4">
          <p className="text-[13px] leading-relaxed text-ink-muted">{project.note}</p>
        </div>

        <div className="mt-4">
          {project.githubUrl ? (
            <ExternalLink href={project.githubUrl} withIcon>
              View repository
            </ExternalLink>
          ) : (
            <p className="inline-flex items-center gap-2 text-sm text-ink-muted">
              <span
                aria-hidden="true"
                className={cn("h-1.5 w-1.5 rounded-full", developing ? "animate-pulse bg-warning" : "bg-success")}
              />
              {developing ? "In active development" : "Completed project"}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

/** Small inline GitHub link used where a repository exists. */
export function ProjectGithubLink({ href, label }: { href: string; label?: string }) {
  return (
    <ExternalLink href={href} withIcon aria-label={`${label ?? "View on GitHub"} (opens in a new tab)`}>
      <Github size={14} aria-hidden="true" />
      {label ?? "View on GitHub"}
    </ExternalLink>
  );
}