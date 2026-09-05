import { useEffect, useState } from "react";
import { Code2, Github, Menu } from "lucide-react";
import { LINKS } from "../../data/links";
import { NAV_ITEMS, SECTION_IDS } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface NavbarProps {
  onOpenMenu: () => void;
}

export function Navbar({ onOpenMenu }: NavbarProps) {
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 print-hidden",
        scrolled
          ? "border-b border-line bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/50 backdrop-blur-sm",
      )}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-line">
        <div
          className="h-full origin-left bg-accent transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Aradhya Pratap Singh — back to top">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink text-white transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <Code2 size={16} strokeWidth={2.4} />
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-ink sm:inline">
            Aradhya <span className="font-normal text-ink-muted">Pratap Singh</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                active === item.id
                  ? "bg-surface-subtle font-medium text-ink"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={LINKS.github.href}
            variant="secondary"
            size="sm"
            className="print-hidden"
            aria-label={`${LINKS.github.label} (opens in a new tab)`}
          >
            <Github size={15} aria-hidden="true" />
            GitHub
          </Button>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-sm transition-colors hover:border-line-strong lg:hidden"
          >
            <Menu size={18} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}