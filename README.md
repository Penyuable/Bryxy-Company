# Bryxy Company Profile

Company profile website for Bryxy, featuring the Moneyzz and Doki projects and a dedicated app download page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The download page is available at `/download`. Its iOS and Android buttons open the Doki builds on Google Drive (links in `app/download/page.tsx`).

## Animations

- Lottie files live in `public/lottie/` and are fetched by URL, so they stay out of the JS bundle.
- `app/components/LottieAccent.tsx` lazy-loads the light Lottie engine after hydration; each animation plays only while it is on screen.
- Mark any element with `data-reveal` to fade it up when it scrolls into view (`app/components/ScrollReveal.tsx`). Above-the-fold content uses the CSS `animate-enter` class.
- Everything respects `prefers-reduced-motion`.
