import type { LucideIcon } from "lucide-react";

export type ProjectStatus = "completed" | "developing";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  /** Only present when the exact repository URL has been verified. */
  githubUrl?: string;
  /** Learning / application note tied to the project. */
  note: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface JourneyStage {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface JourneyTrack {
  id: string;
  label: string;
  stages: JourneyStage[];
}

export interface ITSession {
  id: string;
  title: string;
  overview: string;
  concepts: string[];
  keyTerms: string[];
  learningOutcomes: string[];
  application?: string;
}

export interface ITUnit {
  id: string;
  number: number;
  /** Full official unit title including the "-II" suffix. */
  title: string;
  /** Short label used in navigation. */
  shortTitle: string;
  overview: string;
  practicalConnection: string;
  sessions: ITSession[];
}

export interface NavItem {
  id: string;
  label: string;
}