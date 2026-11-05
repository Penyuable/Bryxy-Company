"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// One observer for the whole page: every element marked `data-reveal` fades
// up the first time it enters the viewport. The hiding CSS only applies under
// `html.reveal-ready`, which the inline script in the layout sets.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains("reveal-ready")) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
