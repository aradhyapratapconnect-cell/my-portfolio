import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import type { ITSession, ITUnit } from "../../types";
import { cn } from "../../lib/cn";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface LessonCardProps {
  unit: ITUnit;
  session: ITSession;
  sessionIndex: number;
  onNavigate: (direction: "prev" | "next") => void;
}

/** Animated session content for the Interactive IT curriculum. */
export function LessonCard({ unit, session, sessionIndex, onNavigate }: LessonCardProps) {
  const reduced = useReducedMotion();
  const hasPrev = sessionIndex > 0;
  const hasNext = sessionIndex < unit.sessions.length - 1;

  return (
    <article
      id="it-panel"
      role="tabpanel"
      aria-label={`Session ${sessionIndex + 1}: ${session.title}`}
      className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-card"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={session.id}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 md:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="neutral">
              <BookOpen size={12} aria-hidden="true" />
              Session {sessionIndex + 1} of {unit.sessions.length}
            </Badge>
            <Badge variant="accent">Unit {unit.number} · {unit.shortTitle}</Badge>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {session.title}
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft md:text-base">
            {session.overview}
          </p>

          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              <Lightbulb size={14} aria-hidden="true" />
              Important concepts
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {session.concepts.map((concept) => (
                <li
                  key={concept}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface-subtle p-4 text-sm leading-relaxed text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {concept}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              <Sparkles size={14} aria-hidden="true" />
              Key terms
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {session.keyTerms.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-[13px] font-medium text-ink-soft"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              <CheckCircle2 size={14} aria-hidden="true" />
              Learning outcomes
            </h4>
            <ul className="mt-4 space-y-2.5">
              {session.learningOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {session.application && (
            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles size={14} aria-hidden="true" />
                Application &amp; reflection
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{session.application}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-3 border-t border-line bg-surface-subtle/60 px-6 py-4 md:px-10 print-hidden">
        <Button
          variant="ghost"
          size="md"
          disabled={!hasPrev}
          onClick={() => onNavigate("prev")}
          className={cn(!hasPrev && "pointer-events-none opacity-40")}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Previous
        </Button>
        <span className="text-xs font-medium text-ink-muted">
          {sessionIndex + 1} / {unit.sessions.length}
        </span>
        <Button
          variant="ghost"
          size="md"
          disabled={!hasNext}
          onClick={() => onNavigate("next")}
          className={cn(!hasNext && "pointer-events-none opacity-40")}
        >
          Next session
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}