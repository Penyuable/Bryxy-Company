"use client";

import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });

export type LottieName = "floating-orbs" | "coin" | "cards" | "download" | "sparkle";

// The wrapper reserves the animation's space up front, so lazy loading never
// shifts the layout.
export default function LottieAccent({ name, className = "" }: { name: LottieName; className?: string }) {
  return (
    <span className={`block ${className}`} aria-hidden="true">
      <LottiePlayer src={`/lottie/${name}.json`} />
    </span>
  );
}
