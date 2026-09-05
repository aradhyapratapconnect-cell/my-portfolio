import type { JourneyTrack } from "../types";

/**
 * Two parallel tracks: the academic IT journey and the project-building
 * journey. Stage-based (no invented dates or achievements).
 */
export const JOURNEY_TRACKS: JourneyTrack[] = [
  {
    id: "academic",
    label: "Academic journey",
    stages: [
      {
        id: "academic-1",
        label: "School",
        title: "Class 10",
        description:
          "Studying at The Scholar Valley Sr. Sec. School, where Information Technology is a core subject.",
      },
      {
        id: "academic-2",
        label: "Subject",
        title: "Information Technology",
        description:
          "Building a foundation — hardware, software, files, operations and the responsible use of computers.",
      },
      {
        id: "academic-3",
        label: "Skills",
        title: "Employability Skills",
        description:
          "Working through the five units: communication, self-management, ICT, entrepreneurial and green skills.",
      },
      {
        id: "academic-4",
        label: "Application",
        title: "Practical application",
        description:
          "Connecting classroom concepts to real practice — documentation, projects and everyday problem solving.",
      },
    ],
  },
  {
    id: "building",
    label: "Project-building journey",
    stages: [
      {
        id: "building-1",
        label: "Start",
        title: "Learning",
        description:
          "Starting with programming fundamentals — HTML, CSS, JavaScript and C++ — to understand how software is written.",
      },
      {
        id: "building-2",
        label: "Practice",
        title: "Experimenting",
        description:
          "Building small interfaces and productivity ideas to practise structure, styling and logic.",
      },
      {
        id: "building-3",
        label: "Build",
        title: "Building",
        description:
          "Completing a full desktop application — Habiter — with TypeScript, Electron and CSS.",
      },
      {
        id: "building-4",
        label: "Improve",
        title: "Improving",
        description:
          "Taking on bigger ideas like Kycelius — combining AI agents, tools and application development.",
      },
    ],
  },
];