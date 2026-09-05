import { CheckCircle2 } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import { PROFILE } from "../../data/profile";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

const CURRENT_WORK = PROJECTS.map((project) => ({
  name: project.name,
  status: project.status === "completed" ? "Completed" : "Developing",
  label: project.description.split(" ").slice(0, 8).join(" ") + "…",
}));

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <Reveal>
        <SectionHeader
          index="01"
          eyebrow="About"
          title="A student who learns by building"
          description="An introduction to who I am, how I study IT, and how classroom concepts become real projects."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-[16.5px]">
            <p>
              I'm Aradhya, a Class 10 student at{" "}
              <span className="font-medium text-ink">{PROFILE.school}</span>. I'm curious about how
              technology actually works — not just how to use it, but how it is designed and built.
            </p>
            <p>
              In school I study Information Technology along with the Employability Skills, and my
              favourite part is finding how those concepts show up in real software. Communication
              skills shape the documentation I write; self-management shapes how I plan a project;
              ICT skills shape how I organise files and keep systems healthy.
            </p>
            <p>
              Outside class I turn ideas into small applications. Each project — a web experiment, a
              desktop app, an AI agent — teaches me something new, and the best part is seeing the
              classroom concepts appear in working code.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-5">
            <Card className="p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                At a glance
              </h3>
              <dl className="mt-4 space-y-4">
                {[
                  { term: "Class", detail: PROFILE.className },
                  { term: "School", detail: PROFILE.school },
                  { term: "Subject", detail: PROFILE.subject },
                  { term: "Focus", detail: "Learning by building practical projects" },
                ].map((row) => (
                  <div key={row.term} className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-ink-muted">{row.term}</dt>
                    <dd className="text-right text-sm font-medium text-ink">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </Card>

            <Card className="p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Current projects
              </h3>
              <ul className="mt-4 space-y-3">
                {CURRENT_WORK.map((work) => (
                  <li key={work.name} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {work.name}
                        <span className="ml-2 text-xs font-normal text-ink-muted">{work.status}</span>
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">{work.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}