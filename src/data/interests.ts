import {
  BrainCircuit,
  FileCode2,
  Globe,
  PanelsTopLeft,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { Interest } from "../types";

/** Areas of genuine interest — presented as interests, not claimed expertise. */
export const INTERESTS: Interest[] = [
  {
    id: "ai-ml",
    title: "AI / ML",
    description: "Exploring how machines learn from data and assist with real-world tasks.",
    icon: BrainCircuit,
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Learning how software is planned, structured, tested and improved over time.",
    icon: FileCode2,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Building pages and applications that people can use directly in the browser.",
    icon: Globe,
  },
  {
    id: "application-ui-ux",
    title: "Application UI/UX",
    description: "Designing interfaces that are clear, comfortable and easy to use.",
    icon: PanelsTopLeft,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Understanding how data, accounts and systems are kept safe.",
    icon: ShieldCheck,
  },
  {
    id: "automation",
    title: "Automation",
    description: "Using code to reduce repetitive work and make tasks more efficient.",
    icon: Workflow,
  },
];