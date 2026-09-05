import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Code2,
  FolderGit2,
  Github,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import { PROFILE } from "../../data/profile";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface FlowStep {
  icon: LucideIcon;
  title: string;
  caption: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    icon: Code2,
    title: "Code",
    caption: "Learning the fundamentals — HTML, CSS, JavaScript, C++ and more.",
  },
  {
    icon: Lightbulb,
    title: "Ideas",
    caption: "Applying IT and employability skills to problems worth solving.",
  },
  {
    icon: FolderGit2,
    title: "Projects",
    caption: "Clocke, Habiter and Kycelius — learning by building real things.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    caption: "Repeating and improving, through Class 10 and beyond.",
  },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-24 right-[-12%] h-[420px] w-[420px] rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-surface-muted blur-3xl" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div>
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-card"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {PROFILE.className} · {PROFILE.school}
            </motion.p>

            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-6 text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-[4.75rem]"
            >
              Aradhya Pratap
              <br />
              Singh<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
            >
              {PROFILE.positioning} <span className="text-ink">{PROFILE.heroStatement}</span>
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects" variant="primary" size="lg">
                Explore projects
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button href="#it" variant="secondary" size="lg">
                <BookOpen size={17} aria-hidden="true" />
                Class 10 IT Portfolio
              </Button>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-line pt-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Projects
              </span>
              {PROJECTS.map((project) => (
                <span key={project.id} className="text-sm font-medium text-ink-soft">
                  {project.name}
                </span>
              ))}
              <a
                href="https://github.com/aradhyapratapconnect-cell"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
              >
                <Github size={14} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Visual motif */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-3xl border border-line bg-surface/90 p-6 shadow-card backdrop-blur-sm md:p-8">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  How I work
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-ink-muted">
                  <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  building
                </span>
              </div>

              <ol className="mt-2">
                {FLOW_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === FLOW_STEPS.length - 1;
                  return (
                    <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] w-px bg-line"
                        />
                      )}
                      <motion.span
                        initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.35 + index * 0.12 }}
                        className="relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-subtle text-ink"
                        aria-hidden="true"
                      >
                        <Icon size={18} strokeWidth={1.9} />
                      </motion.span>
                      <div className="min-w-0 pt-1">
                        <p className="text-[15px] font-semibold tracking-tight text-ink">
                          <span className="mr-2 font-mono text-xs font-normal text-ink-muted" aria-hidden="true">
                            {`0${index + 1}`}
                          </span>
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.caption}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>
        </div>

        {!reduced && (
          <motion.div
            aria-hidden="true"
            className="mt-14 hidden justify-center md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="flex flex-col items-center gap-1 text-xs text-ink-muted">
              <span className="text-[11px] uppercase tracking-[0.2em]">Scroll to explore</span>
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <ChevronDown size={16} />
              </motion.span>
            </span>
          </motion.div>
        )}
      </Container>
    </section>
  );
}