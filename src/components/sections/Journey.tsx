import { GraduationCap, Hammer } from "lucide-react";
import type { JourneyStage, JourneyTrack } from "../../types";
import { JOURNEY_TRACKS } from "../../data/journey";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function TimelineItem({ stage }: { stage: JourneyStage }) {
  return (
    <li className="relative pb-9 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-ink ring-4 ring-line/60"
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {stage.label}
      </p>
      <h4 className="mt-1 text-base font-semibold tracking-tight text-ink">{stage.title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{stage.description}</p>
    </li>
  );
}

function TimelineTrack({ track }: { track: JourneyTrack }) {
  const icon =
    track.id === "building" ? <Hammer size={17} strokeWidth={1.9} /> : <GraduationCap size={17} strokeWidth={1.9} />;

  return (
    <div>
      <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight text-ink">
        <span
          aria-hidden="true"
          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink shadow-card"
        >
          {icon}
        </span>
        <span>{track.label}</span>
      </h3>
      <ol className="relative mt-8 space-y-1 border-l border-line pl-8">
        {track.stages.map((stage) => (
          <TimelineItem key={stage.id} stage={stage} />
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="border-y border-line bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-12">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="My Journey"
            title="Two journeys, one portfolio"
            description="My academic IT learning and my project-building practice, side by side. Stage-based, honest and still in progress."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {JOURNEY_TRACKS.map((track, i) => (
            <Reveal key={track.id} delay={i * 0.08}>
              <div className="rounded-3xl border border-line bg-surface p-6 shadow-card md:p-9">
                <TimelineTrack track={track} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}