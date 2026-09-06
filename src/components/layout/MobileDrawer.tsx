import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { LINKS } from "../../data/links";
import { NAV_ITEMS } from "../../data/navigation";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";
import apsLogo from "../../assets/aps-logo.png";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

/** Accessible animated navigation drawer for mobile screens. */
export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;

    triggerRef.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (!panel) return undefined;

    const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden print-hidden">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-[2px]"
            aria-label="Close navigation menu"
            tabIndex={-1}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduced ? { opacity: 0 } : { x: "100%" }}
            animate={reduced ? { opacity: 1 } : { x: 0 }}
            exit={reduced ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "tween", duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex w-[min(21rem,88vw)] flex-col border-l border-line bg-surface shadow-float"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-ink text-white"
                >
                  <img src={apsLogo} alt="" className="h-full w-full object-contain" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-ink">
                  Aradhya Pratap Singh
                </span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-line-strong"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-surface-subtle",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-xs tabular-nums text-ink-muted",
                          index + 1 < 10 ? "w-3" : "w-4",
                        )}
                      >
                        {index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-line px-6 py-5">
              <Button
                href={LINKS.github.href}
                variant="secondary"
                size="md"
                className="w-full"
                aria-label={`${LINKS.github.label} (opens in a new tab)`}
              >
                Visit GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </Button>
              <p className="mt-3 text-center text-xs text-ink-muted">
                The Scholar Valley Sr. Sec. School · Class 10
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}