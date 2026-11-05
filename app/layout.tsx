import type { Metadata } from "next";
import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryxy — Semua berawal dari sini, titik mula",
  description:
    "Bryxy menghadirkan produk digital yang dekat dengan keseharian. Kenali Moneyzz dan Doki.",
};

// Runs before first paint so scroll-reveal elements start hidden instead of
// flashing in and out. Skipped for reduced motion, and without JS nothing is hidden.
const revealBootstrap =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reveal-ready')";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="bryxy" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
