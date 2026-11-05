import Link from "next/link";
import Image from "next/image";
import logo from "./img/logo.png";
import type { CSSProperties } from "react";
import LottieAccent from "./components/LottieAccent";
import { AndroidIcon, AppleIcon, ArrowIcon } from "./components/icons";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function MoneyzzMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      <rect x="7" y="7" width="50" height="50" rx="18" fill="#E87932" />
      <path d="M20 24.5c2-3 5.6-4.5 10.8-4.5 6.3 0 10.2 2.3 10.2 6 0 8-17 4-17 12 0 3.7 3.9 6 10.2 6 5.2 0 8.8-1.5 10.8-4.5M32 15v34" stroke="white" strokeWidth="3.6" strokeLinecap="round" />
    </svg>
  );
}

function DokiMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      <rect x="7" y="7" width="50" height="50" rx="18" fill="#78B99A" />
      <path d="M21 19h15a10 10 0 0 1 0 20H21V19Z" fill="white" />
      <path d="M21 39h15a7 7 0 0 1 0 14H21V39Z" fill="#E9F5ED" />
      <path d="m42 19 2.4 4.8 5.3.8-3.8 3.7.9 5.2-4.8-2.5-4.7 2.5.9-5.2-3.8-3.7 5.2-.8L42 19Z" fill="#F6D991" />
    </svg>
  );
}

function PlatformBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="badge badge-lg gap-2 border-0 bg-[#f3e8dc] px-3 text-[#62564c]">
        <AppleIcon /> iOS
      </span>
      <span className="badge badge-lg gap-2 border-0 bg-[#f3e8dc] px-3 text-[#62564c]">
        <AndroidIcon /> Android
      </span>
    </div>
  );
}

// Placeholder for a project that is not public yet. Pass a title/description
// once there is something to tease; the defaults keep it generic.
function ComingSoonCard({
  title = "Project berikutnya",
  description = "Sesuatu yang baru sedang kami racik. Tetap pantau Bryxy untuk jadi yang pertama mencobanya.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <article className="soft-inset relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border-2 border-dashed border-[#e2d6c8] p-7 sm:flex-row sm:items-center sm:p-9">
      <LottieAccent name="sparkle" className="h-24 w-24 shrink-0" />
      <div className="min-w-0 flex-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f8e5d6] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#b95017]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e87932] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e87932]" />
          </span>
          Coming soon
        </span>
        <h3 className="mt-4 text-3xl font-black">{title}</h3>
        <p className="mt-2 max-w-2xl leading-7 text-[#766d63]">{description}</p>
      </div>
      <span
        aria-disabled="true"
        className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 self-start rounded-full border border-[#e2d6c8] px-5 py-3 text-sm font-bold text-[#a89c90] sm:self-center"
      >
        Segera hadir
      </span>
    </article>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="animate-enter relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Bryxy beranda">
          <Image
            src={logo}
            alt="Bryxy"
            width={128}
            height={72}
            priority
            className="h-14 w-28 rounded-xl object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#766d63] md:flex" aria-label="Navigasi utama">
          <a className="transition hover:text-[#c95d1b]" href="#tentang">Tentang</a>
          <a className="transition hover:text-[#c95d1b]" href="#project">Project</a>
          <Link className="transition hover:text-[#c95d1b]" href="/employee">Tim</Link>
          <Link className="transition hover:text-[#c95d1b]" href="/download">Download</Link>
        </nav>
        <Link href="/download" className="soft-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#b95017]">
          Coba aplikasi <ArrowIcon />
        </Link>
      </header>
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-32 lg:pt-16">
        <div className="hero-orb right-[-90px] top-12 h-80 w-80 bg-[#f6d9c2] opacity-70" />
        <div className="animate-enter relative z-10" style={delay(120)}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wide text-[#c95d1b] soft-inset">
            <span className="h-2 w-2 rounded-full bg-[#81bda0]" />
            DIGITAL PRODUCTS, MADE WITH CARE YOO
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-[-0.05em] text-[#40372f] sm:text-6xl lg:text-7xl">
            Semua berawal dari sini,
            <span className="mt-2 block text-[#e87932]">titik mula.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#766d63] sm:text-lg sm:leading-8">
            Kami merancang pengalaman digital yang terasa dekat, mudah digunakan, dan menyenangkan untuk menemani keseharian.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#project" className="btn h-14 rounded-full border-0 bg-[#e87932] px-7 text-white shadow-[7px_7px_16px_#d9cdbf,-7px_-7px_16px_#fff] hover:bg-[#d7651d]">
              Lihat project <ArrowIcon />
            </a>
            <Link href="/download" className="soft-button inline-flex h-14 items-center gap-2 rounded-full px-7 font-bold text-[#b95017]">
              Halaman download
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f4f0e9] bg-[#f4cbaa] text-xs font-bold text-[#b95017]">M</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f4f0e9] bg-[#d9efe2] text-xs font-bold text-[#568c70]">D</span>
            </div>
            <p className="text-sm text-[#887f75]">Dibuat untuk kebutuhan nyata, dengan sentuhan personal.</p>
          </div>
        </div>

        <div className="animate-enter relative mx-auto w-full max-w-[500px]" style={delay(280)}>
          <div className="hero-orb left-8 top-2 h-48 w-48 bg-[#f9ddc7] opacity-75" />
          <div className="soft-panel relative mx-auto max-w-[420px] rounded-[2.5rem] p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9998a9]">Studio highlights</p>
                <p className="mt-1 text-xl font-extrabold">Our universe</p>
              </div>
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-[#f8eee3] shadow-[inset_4px_4px_8px_#e2d9ce,inset_-4px_-4px_8px_#fff]">
                <LottieAccent name="floating-orbs" className="h-12 w-12" />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="app-tile rounded-[1.75rem] p-5">
                <div className="flex justify-between"><MoneyzzMark /><span className="text-xs font-bold text-[#aaa9b8]">01</span></div>
                <p className="mt-6 text-lg font-extrabold">Moneyzz</p>
                <p className="mt-1 text-xs leading-5 text-[#89889a]">Keuangan lebih teratur dan lebih menyenangkan</p>
              </div>
              <div className="app-tile mt-8 rounded-[1.75rem] p-5">
                <div className="flex justify-between"><DokiMark /><span className="text-xs font-bold text-[#aaa9b8]">02</span></div>
                <p className="mt-6 text-lg font-extrabold">Doki</p>
                <p className="mt-1 text-xs leading-5 text-[#89889a]">Kartu, strategi, seru</p>
              </div>
            </div>
            <div className="soft-inset mt-5 flex items-center justify-between rounded-2xl px-4 py-4">
              <div><p className="text-xs text-[#9392a3]">Dibuat untuk</p><p className="mt-1 text-sm font-bold">iOS & Android</p></div>
              <div className="flex gap-2 text-[#766d63]"><AppleIcon /><AndroidIcon /></div>
            </div>
          </div>
          <div className="soft-panel absolute -bottom-6 -left-2 rounded-2xl px-4 py-3 sm:-left-10">
            <span className="text-sm font-bold">✨ Small ideas, big impact</span>
          </div>
        </div>
      </section>

      <section id="tentang" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div data-reveal className="soft-panel grid gap-8 rounded-[2rem] p-8 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:p-14">
          <div>
            <LottieAccent name="sparkle" className="-ml-3 mb-2 h-24 w-24" />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c95d1b]">Tentang Bryxy</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">Membuat hal sehari-hari terasa lebih baik.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[#766d63]">
              Bryxy adalah ruang untuk membangun produk digital yang berguna sekaligus menyenangkan. Dari mengelola uang dengan lebih sadar sampai menikmati strategi permainan kartu—setiap project dimulai dari kebutuhan pengguna.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge badge-lg border-0 bg-[#f8e5d6] text-[#b95017]">Berpusat pada pengguna</span>
              <span className="badge badge-lg border-0 bg-[#e3f0e8] text-[#548b70]">Dibuat dengan perhatian</span>
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c95d1b]">Yang sedang kami kerjakan</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Project pilihan</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#887f75]">Dua pengalaman berbeda, satu tujuan: membuat waktu yang kamu habiskan jadi lebih bermakna.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div data-reveal>
          <article className="project-card soft-panel h-full rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <MoneyzzMark />
                <span className="badge border-0 bg-[#f8e5d6] px-4 py-3 font-semibold text-[#b95017]">Lifestyle</span>
              </div>
              <LottieAccent name="coin" className="-mr-3 -mt-4 h-24 w-24" />
            </div>
            <h3 className="mt-7 text-3xl font-black">Moneyzz</h3>
            <p className="mt-3 max-w-lg leading-7 text-[#766d63]">Teman untuk mengatur keuangan harian. Catat uang masuk dan keluar, pantau arus keuangan, dan scan struk belanja dengan praktis.</p>
            <div className="mt-6"><PlatformBadges /></div>
            <Link href="/download" className="soft-button mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#b95017]">
              Lihat opsi download <ArrowIcon />
            </Link>
          </article>
          </div>
          <div data-reveal style={delay(140)}>
          <article className="project-card soft-panel h-full rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <DokiMark />
                <span className="badge border-0 bg-[#e3f0e8] px-4 py-3 font-semibold text-[#548b70]">Game</span>
              </div>
              <LottieAccent name="cards" className="-mr-3 -mt-4 h-24 w-24" />
            </div>
            <h3 className="mt-7 text-3xl font-black">Doki</h3>
            <p className="mt-3 max-w-lg leading-7 text-[#766d63]">Masuk ke dunia permainan kartu bergaya TCG. Susun strategi, kumpulkan kartu, dan nikmati setiap duel bersama Doki.</p>
            <div className="mt-6"><PlatformBadges /></div>
            <Link href="/download" className="soft-button mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#b95017]">
              Lihat opsi download <ArrowIcon />
            </Link>
          </article>
          </div>
          <div data-reveal style={delay(280)} className="lg:col-span-2">
            <ComingSoonCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div data-reveal className="relative overflow-hidden rounded-[2.25rem] bg-[#e87932] px-7 py-12 text-white shadow-[12px_12px_26px_#d9cdbf,-12px_-12px_26px_#fff] sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div className="hero-orb -right-10 -top-20 h-64 w-64 bg-white opacity-10" />
          <div className="relative flex items-center gap-5">
            <span className="hidden h-20 w-20 shrink-0 place-items-center rounded-full bg-[#f4f0e9] shadow-[5px_5px_12px_#bf5a20,-5px_-5px_12px_#fa995b] sm:grid">
              <LottieAccent name="download" className="h-16 w-16" />
            </span>
            <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Siap mencoba?</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">Temukan project yang cocok untukmu.</h2>
            </div>
          </div>
          <Link href="/download" className="relative mt-7 inline-flex h-14 items-center gap-2 rounded-full bg-[#f4f0e9] px-7 font-bold text-[#b95017] shadow-[5px_5px_12px_#bf5a20,-5px_-5px_12px_#fa995b] transition hover:-translate-y-0.5 lg:mt-0">
            Buka halaman download <ArrowIcon />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e2d9ce] px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[#887f75] sm:flex-row">
          <Link href="/" className="font-extrabold tracking-tight text-[#454039]">bryxy<span className="text-[#e87932]">.</span></Link>
          <p>@2026 Bryxy All right reserved</p>
          <Link href="/download" className="font-semibold hover:text-[#c95d1b]">Download aplikasi</Link>
        </div>
      </footer>
    </main>
  );
}
