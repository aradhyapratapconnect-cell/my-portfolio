import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 * Scroll-based (rAF-throttled) so sections that mount later — like the
 * lazy-loaded IT curriculum — are detected correctly.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = window.innerHeight * 0.4;
      let current = ids[0] ?? "";
      let bestTop = -Infinity;

      // Position-based (not array-order based) so the active highlight stays
      // correct even when the navigation order differs from document order.
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= probe && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}