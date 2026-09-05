import { useState } from "react";
import { BookOpen, Lightbulb } from "lucide-react";
import { IT_UNITS } from "../../data/itCurriculum";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { LessonCard } from "../it/LessonCard";
import { SessionNav } from "../it/SessionNav";
import { UnitTabs } from "../it/UnitTabs";
import { PrintCurriculum } from "../it/PrintCurriculum";

/**
 * Interactive Class 10 Employability Skills presentation.
 * Unit selector -> Session selector -> Session content.
 * Lazy-loaded from App to keep the initial bundle lean.
 */
export function ItPortfolio() {
  const [unitId, setUnitId] = useState(IT_UNITS[0].id);
  const unit = IT_UNITS.find((u) => u.id === unitId) ?? IT_UNITS[0];
  const [sessionId, setSessionId] = useState(unit.sessions[0].id);

  const sessionIndex = Math.max(
    0,
    unit.sessions.findIndex((s) => s.id === sessionId),
  );
  const session = unit.sessions[sessionIndex] ?? unit.sessions[0];

  const handleSelectUnit = (nextUnitId: string) => {
    const nextUnit = IT_UNITS.find((u) => u.id === nextUnitId);
    if (!nextUnit) return;
    setUnitId(nextUnit.id);
    setSessionId(nextUnit.sessions[0].id);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const next = sessionIndex + (direction === "next" ? 1 : -1);
    if (next >= 0 && next < unit.sessions.length) {
      setSessionId(unit.sessions[next].id);
    }
  };

  return (
    <section id="it" className="border-y border-line bg-surface-subtle py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            index="04"
            eyebrow="Class 10 IT Portfolio"
            title="Employability Skills, explored interactively"
            description="The five units and their sessions from my Class 10 Information Technology curriculum — choose a unit, then a session, to read compact summaries written in my own words."
          />
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">
          Now viewing {unit.title}, session {sessionIndex + 1} of {unit.sessions.length}:{" "}
          {session.title}
        </p>

        <Reveal>
          <UnitTabs units={IT_UNITS} selectedId={unit.id} onSelect={handleSelectUnit} />
        </Reveal>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* Session navigation + unit note */}
          <Reveal delay={0.05} className="min-w-0">
            <div className="space-y-4 lg:sticky lg:top-24">
              <SessionNav unit={unit} selectedId={session.id} onSelect={setSessionId} />
              <Card className="hidden p-5 lg:block">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  <BookOpen size={14} aria-hidden="true" />
                  About this unit
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{unit.overview}</p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    <Lightbulb size={14} aria-hidden="true" />
                    In practice
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    {unit.practicalConnection}
                  </p>
                </div>
              </Card>
            </div>
          </Reveal>

          {/* Session content */}
          <Reveal delay={0.1} className="min-w-0">
            <LessonCard
              unit={unit}
              session={session}
              sessionIndex={sessionIndex}
              onNavigate={handleNavigate}
            />
          </Reveal>
        </div>

        {/* Full curriculum for print / Save-as-PDF */}
        <PrintCurriculum units={IT_UNITS} />
      </Container>
    </section>
  );
}