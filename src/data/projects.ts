import { Bot, Clock, Repeat } from "lucide-react";
import type { Project } from "../types";

/**
 * Exactly three projects. Clocke deliberately has no githubUrl (repository
 * links must not be exposed for it). Habiter's URL was verified publicly as
 * https://github.com/aradhyapratapconnect-cell/Habiter. Kycelius has no
 * verified repository URL yet, so none is invented.
 */
export const PROJECTS: Project[] = [
  {
    id: "clocke",
    name: "Clocke",
    status: "developing",
    description:
      "A productivity and time-awareness application designed to help make time more productive and work more efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    note: "Currently being developed — practising core web fundamentals while exploring how interfaces can encourage focused, efficient work.",
    icon: Clock,
  },
  {
    id: "habiter",
    name: "Habiter",
    status: "completed",
    description:
      "A habit-tracking desktop application that helps users build and keep up with their habits.",
    technologies: ["TypeScript", "Electron", "CSS"],
    githubUrl: "https://github.com/aradhyapratapconnect-cell/Habiter",
    note: "Completed — the first desktop application, applying components, state and desktop packaging to a real product idea.",
    icon: Repeat,
  },
  {
    id: "kycelius",
    name: "Kycelius",
    status: "developing",
    description:
      "An autonomous AI agent in development, designed to help users by creating files, projects and performing useful computer-based tasks.",
    technologies: ["TypeScript", "React", "Electron", "Tailwind CSS"],
    note: "Currently being developed — exploring how agents and tools can work together to automate meaningful tasks.",
    icon: Bot,
  },
];