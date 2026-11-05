"use client";

import { LottieInteractions, LottieLight, lottieInView } from "lottie-react";
import { useEffect, useState } from "react";

// Kept in its own module so the Lottie engine lands in a separate chunk that
// is only fetched after hydration (see LottieAccent).
export default function LottiePlayer({ src }: { src: string }) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Plays while visible and pauses when scrolled away, so off-screen
  // animations cost nothing. Reduced motion shows the first frame only.
  return (
    <LottieInteractions interactions={reducedMotion ? [] : [lottieInView({ amount: 0.25 })]}>
      <LottieLight src={src} autoplay={false} loop className="h-full w-full" />
    </LottieInteractions>
  );
}
