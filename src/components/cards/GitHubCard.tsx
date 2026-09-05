import { ArrowUpRight, Github } from "lucide-react";
import { LINKS } from "../../data/links";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

/** Focused GitHub profile card — no fabricated statistics. */
export function GitHubCard() {
  return (
    <Card className="relative overflow-hidden p-6 transition-colors duration-300 hover:border-line-strong md:p-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
        <svg
          className="absolute -right-10 -top-10 h-64 w-64 text-line/60"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M40 60 L90 30 M90 30 L150 70 M90 30 L110 110 M150 70 L130 140 M110 110 L60 150 M60 150 L40 60"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="40" cy="60" r="5" fill="currentColor" />
          <circle cx="90" cy="30" r="5" fill="currentColor" />
          <circle cx="150" cy="70" r="5" fill="currentColor" />
          <circle cx="110" cy="110" r="5" fill="currentColor" />
          <circle cx="60" cy="150" r="5" fill="currentColor" />
          <circle cx="130" cy="140" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-ink text-white"
              aria-hidden="true"
            >
              <Github size={22} strokeWidth={1.9} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                GitHub
              </p>
              <p className="mt-0.5 font-mono text-sm text-ink-soft">{LINKS.github.username}</p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Public projects and learning experiments
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
            Completed tools like Habiter live here alongside other public code and experiments
            from my learning journey. The profile is updated as projects grow.
          </p>

          <div className="mt-7">
            <Button
              href={LINKS.github.href}
              variant="primary"
              size="lg"
              aria-label={`${LINKS.github.label} (opens in a new tab)`}
            >
              Visit GitHub profile
              <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}