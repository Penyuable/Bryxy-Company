import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";
import type { CSSProperties, ReactNode } from "react";
import LottieAccent from "../components/LottieAccent";
import { AndroidIcon, AppleIcon, DokiMark, MoneyzzMark } from "../components/icons";

type Platform = "ios" | "android";

type AppEntry = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  mark: ReactNode;
  badgeClass: string;
  // A missing link means that build is not published yet ("Segera hadir").
  downloads: Partial<Record<Platform, { href: string; detail: string }>>;
  note?: string;
};

// Add new apps here — each one gets its own section on the page.
const apps: AppEntry[] = [
  {
    id: "doki",
    name: "Doki",
    category: "Game",
    tagline: "Permainan kartu bergaya TCG. Susun strategi, kumpulkan kartu, dan nikmati setiap duel.",
    mark: <DokiMark className="h-14 w-14" />,
    badgeClass: "bg-[#e3f0e8] text-[#548b70]",
    downloads: {
      ios: {
        href: "https://github.com/Penyuable/Doki/releases/download/ios-latest/dokimon-unsigned.ipa",
        detail: "Doki untuk iPhone & iPad",
      },
      android: {
        href: "https://drive.google.com/file/d/1uC92s-Dp2ARefOGF8bcj2UxB7A1QkS3v/view?usp=drive_link",
        detail: "Doki untuk perangkat Android",
      },
    },
    note: "Versi iOS diunduh langsung sebagai file .ipa (unsigned) dari GitHub, sedangkan versi Android dibuka melalui Google Drive.",
  },
  {
    id: "moneyzz",
    name: "Moneyzz",
    category: "Lifestyle",
    tagline: "Teman untuk mengatur keuangan harian: catat uang masuk dan keluar, pantau arus kas, dan scan struk belanja.",
    mark: <MoneyzzMark className="h-14 w-14" />,
    badgeClass: "bg-[#f8e5d6] text-[#b95017]",
    downloads: {},
  },
];

const platformInfo: Record<Platform, { label: string; icon: ReactNode }> = {
  ios: { label: "iOS", icon: <AppleIcon className="h-6 w-6" /> },
  android: { label: "Android", icon: <AndroidIcon className="h-6 w-6" /> },
};

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function DownloadCard({
  appName,
  platform,
  link,
  style,
}: {
  appName: string;
  platform: Platform;
  link?: { href: string; detail: string };
  style?: CSSProperties;
}) {
  const { label, icon } = platformInfo[platform];
  const body = (
    <>
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#f4f0e9] text-[#c95d1b] shadow-[inset_5px_5px_10px_#ddd6cb,inset_-5px_-5px_10px_#fff]">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#9695a7]">
          {link ? "Unduh untuk" : "Segera hadir"}
        </span>
        <span className="mt-1 block text-2xl font-black">{label}</span>
        <span className="mt-1 block text-sm text-[#887f75]">
          {link ? link.detail : `${appName} untuk ${label} sedang disiapkan`}
        </span>
      </span>
    </>
  );

  return (
    <div data-reveal style={style}>
      {link ? (
        <a
          target="_blank"
          className="soft-panel group flex h-full items-center gap-5 rounded-[1.75rem] p-6 transition hover:-translate-y-1 sm:p-8"
          href={link.href}
          rel="noreferrer"
        >
          {body}
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e87932] text-white shadow-[4px_4px_9px_#d9cdbf,-4px_-4px_9px_#fff] transition group-hover:translate-x-1" aria-hidden="true">↓</span>
        </a>
      ) : (
        <div
          aria-disabled="true"
          className="soft-inset flex h-full cursor-not-allowed items-center gap-5 rounded-[1.75rem] border-2 border-dashed border-[#e2d6c8] p-6 opacity-80 sm:p-8"
        >
          {body}
        </div>
      )}
    </div>
  );
}

function AppSection({ app }: { app: AppEntry }) {
  const available = Object.keys(app.downloads).length > 0;
  return (
    <section id={app.id} className="relative scroll-mt-8 pt-14">
      <div data-reveal className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="shrink-0">{app.mark}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-3xl font-black tracking-tight">{app.name}</h2>
            <span className={`badge border-0 px-3 py-3 text-xs font-semibold ${app.badgeClass}`}>{app.category}</span>
            {!available && (
              <span className="badge border-0 bg-[#f3e8dc] px-3 py-3 text-xs font-semibold text-[#887f75]">Segera hadir</span>
            )}
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#766d63]">{app.tagline}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {(["ios", "android"] as const).map((platform, i) => (
          <DownloadCard
            key={platform}
            appName={app.name}
            platform={platform}
            link={app.downloads[platform]}
            style={delay(100 + i * 100)}
          />
        ))}
      </div>

      {app.note && (
        <div data-reveal className="soft-inset mt-6 rounded-2xl px-5 py-4 text-center text-sm leading-6 text-[#887f75]">
          {app.note}
        </div>
      )}
    </section>
  );
}

export default function DownloadPage() {
  return (
    <main className="page-shell min-h-screen">
      <header className="animate-enter mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Kembali ke beranda">
          <Image
            src={logo}
            alt="Bryxy"
            width={128}
            height={72}
            priority
            className="h-14 w-28 rounded-xl object-contain"
          />
        </Link>
        <Link href="/" className="soft-button rounded-full px-5 py-3 text-sm font-bold text-[#b95017]">← Kembali</Link>
      </header>

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-12 sm:pt-20">
        <div className="hero-orb -right-32 top-0 h-72 w-72 bg-[#f9ddc7] opacity-70" />
        <div className="animate-enter relative text-center" style={delay(120)}>
          <span className="mx-auto grid h-16 w-16 place-items-center overflow-hidden rounded-[1.4rem] bg-[#f4f0e9] shadow-[8px_8px_18px_#ddd6cb,-8px_-8px_18px_#fff]">
            <LottieAccent name="download" className="h-12 w-12" />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-[#c95d1b]">Download center</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Mulai dari sini.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#766d63]">
            Pilih aplikasi, lalu pilih perangkatmu. Semua produk Bryxy tersedia untuk iOS dan Android.
          </p>

          <nav aria-label="Pilih aplikasi" className="mt-8 flex flex-wrap justify-center gap-3">
            {apps.map((app) => (
              <a
                key={app.id}
                href={`#${app.id}`}
                className="soft-button inline-flex items-center gap-2 rounded-full py-2 pl-2 pr-5 text-sm font-bold text-[#454039]"
              >
                <span className="[&>svg]:h-8 [&>svg]:w-8">{app.mark}</span>
                {app.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative">
          {apps.map((app) => (
            <AppSection key={app.id} app={app} />
          ))}
        </div>

        <div className="relative mt-16 text-center">
          <p className="text-sm text-[#887f75]">Ingin tahu lebih banyak?</p>
          <Link href="/#project" className="mt-2 inline-flex items-center gap-2 font-bold text-[#b95017] hover:underline">
            Lihat semua project Bryxy <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <footer className="border-t border-[#e2d9ce] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[#887f75] sm:flex-row">
          <Link href="/" className="font-extrabold tracking-tight text-[#454039]">bryxy<span className="text-[#e87932]">.</span></Link>
          <p>@2026 Bryxy All right reserved</p>
        </div>
      </footer>
    </main>
  );
}
