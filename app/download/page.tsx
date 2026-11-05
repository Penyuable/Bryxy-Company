import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";
import type { CSSProperties } from "react";
import LottieAccent from "../components/LottieAccent";
import { AndroidIcon, AppleIcon } from "../components/icons";

// Doki builds on Google Drive.
const downloads = {
  ios: "https://drive.google.com/file/d/1D6tALvQkEBNCkqPerNyu-6jg9cTslh1B/view?usp=drive_link",
  android: "https://drive.google.com/file/d/1uC92s-Dp2ARefOGF8bcj2UxB7A1QkS3v/view?usp=drive_link",
};

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function DownloadCard({
  platform,
  detail,
  href,
  icon,
  style,
}: {
  platform: string;
  detail: string;
  href: string;
  icon: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div data-reveal style={style}>
    <a
      target="_blank"
      className="soft-panel group flex h-full items-center gap-5 rounded-[1.75rem] p-6 transition hover:-translate-y-1 sm:p-8"
      href={href}
      rel="noreferrer"
    >
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#f4f0e9] text-[#c95d1b] shadow-[inset_5px_5px_10px_#ddd6cb,inset_-5px_-5px_10px_#fff]">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#9695a7]">Unduh untuk</span>
        <span className="mt-1 block text-2xl font-black">{platform}</span>
        <span className="mt-1 block text-sm text-[#887f75]">{detail}</span>
      </span>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e87932] text-white shadow-[4px_4px_9px_#d9cdbf,-4px_-4px_9px_#fff] transition group-hover:translate-x-1" aria-hidden="true">↓</span>
    </a>
    </div>
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

      <section className="relative mx-auto max-w-4xl px-6 pb-24 pt-12 sm:pt-20">
        <div className="hero-orb -right-32 top-0 h-72 w-72 bg-[#f9ddc7] opacity-70" />
        <div className="animate-enter relative text-center" style={delay(120)}>
          <span className="mx-auto grid h-16 w-16 place-items-center overflow-hidden rounded-[1.4rem] bg-[#f4f0e9] shadow-[8px_8px_18px_#ddd6cb,-8px_-8px_18px_#fff]">
            <LottieAccent name="download" className="h-12 w-12" />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-[#c95d1b]">Download center</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Mulai dari sini.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#766d63]">
            Pilih perangkatmu untuk mengunduh Doki melalui Google Drive. Tersedia untuk iOS dan Android.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 sm:grid-cols-2">
          <DownloadCard platform="iOS" detail="Doki untuk iPhone & iPad" href={downloads.ios} icon={<AppleIcon className="h-6 w-6" />} style={delay(240)} />
          <DownloadCard platform="Android" detail="Doki untuk perangkat Android" href={downloads.android} icon={<AndroidIcon className="h-6 w-6" />} style={delay(340)} />
        </div>

        <div data-reveal className="soft-inset relative mt-8 rounded-2xl px-5 py-4 text-center text-sm leading-6 text-[#887f75]">
          File akan dibuka melalui Google Drive. Ikuti petunjuk di halaman Drive untuk menyimpan dan memasang aplikasi.
        </div>

        <div className="relative mt-14 text-center">
          <p className="text-sm text-[#887f75]">Jelajahi produk lainnya</p>
          <Link href="/#project" className="mt-2 inline-flex items-center gap-2 font-bold text-[#b95017] hover:underline">
            Kenali Moneyzz & Doki <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e2d9ce] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[#887f75] sm:flex-row">
          <Link href="/" className="font-extrabold tracking-tight text-[#454039]">bryxy<span className="text-[#e87932]">.</span></Link>
          <p>@2026 Bryxy All right reserved</p>
        </div>
      </footer>
    </main>
  );
}
