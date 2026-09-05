import type { ITUnit } from "../../types";
import { PROFILE } from "../../data/profile";

/**
 * Full curriculum listing rendered ONLY in print / Save-as-PDF.
 * Invisible on screen (hidden) and expanded in print (print:block).
 */
export function PrintCurriculum({ units }: { units: ITUnit[] }) {
  return (
    <div className="hidden print:block">
      <div className="avoid-break">
        <h2 className="text-xl font-bold">Class 10 IT Portfolio — Employability Skills</h2>
        <p className="mt-1 text-sm">
          {PROFILE.name} · {PROFILE.className} · {PROFILE.school}
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Unit and session titles follow the Class 10 Employability Skills curriculum, presented as
          original summaries.
        </p>
      </div>

      {units.map((unit) => (
        <div key={unit.id} className="mt-8">
          <h3 className="border-b border-gray-300 pb-1 text-base font-bold">
            Unit {unit.number}: {unit.title}
          </h3>

          {unit.sessions.map((session, index) => (
            <div key={session.id} className="mt-4 avoid-break">
              <h4 className="text-sm font-semibold">
                Session {index + 1}: {session.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed">{session.overview}</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
                {session.concepts.map((concept) => (
                  <li key={concept}>{concept}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Key terms: </span>
                {session.keyTerms.join(", ")}
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
                {session.learningOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              {session.application && (
                <p className="mt-2 text-sm italic">
                  <span className="font-semibold not-italic">Application/reflection: </span>
                  {session.application}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}