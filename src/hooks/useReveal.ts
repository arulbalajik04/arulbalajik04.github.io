// CUSTOM HOOK — makes elements fade/slide in when they scroll into view.
// Mark any element with data-reveal="fade-up" (or fade-left, fade-right, zoom)
// and this hook adds the "is-visible" class once it appears on screen.
import { useEffect } from "react";
import type { CSSProperties } from "react";

export type RevealKind = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom";

// Helper so components can write {...reveal("fade-up", 200)}
export function reveal(kind: RevealKind, delayMs = 0) {
  const style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;
  return { "data-reveal": kind, style };
}

export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
