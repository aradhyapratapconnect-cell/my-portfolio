import type { SkillCategory } from "../types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Languages studied and used across classes, experiments and projects.",
    skills: ["C++", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    title: "Frameworks / Technologies",
    description: "Tools and libraries used to structure and build real applications.",
    skills: ["React", "Electron", "Tailwind CSS"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Utilities that organise, share and support everyday development work.",
    skills: ["Git", "GitHub", "Anti-Gravity"],
  },
];