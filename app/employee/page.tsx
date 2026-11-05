import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";
import type { CSSProperties } from "react";
import LottieAccent from "../components/LottieAccent";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

// Add a new entry here for every new team member.
const employees = [
  {
    name: "Samuel",
    role: "Founder & Developer",
    bio: "Merancang dan membangun produk Bryxy, dari Moneyzz sampai Doki.",
    color: "bg-[#f4cbaa] text-[#b95017]",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function EmployeePage() {
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

      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-12 sm:pt-20">
        <div className="hero-orb -right-32 top-0 h-72 w-72 bg-[#f9ddc7] opacity-70" />
        <div className="animate-enter relative text-center" style={delay(120)}>
          <span className="mx-auto grid h-16 w-16 place-items-center overflow-hidden rounded-[1.4rem] bg-[#f4f0e9] shadow-[8px_8px_18px_#ddd6cb,-8px_-8px_18px_#fff]">
            <LottieAccent name="sparkle" className="h-12 w-12" />
          </span>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-[#c95d1b]">Tim Bryxy</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Orang di balik Bryxy.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#766d63]">
            Tim kecil yang membangun produk digital dengan perhatian penuh.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((person, i) => (
            <div key={person.name} data-reveal style={delay(240 + i * 100)}>
              <article className="soft-panel flex h-full flex-col items-center rounded-[2rem] p-8 text-center">
                <span className={`grid h-24 w-24 place-items-center rounded-full text-3xl font-black shadow-[inset_5px_5px_10px_#ddd6cb,inset_-5px_-5px_10px_#fff] ${person.color}`}>
                  {initials(person.name)}
                </span>
                <h2 className="mt-6 text-2xl font-black">{person.name}</h2>
                <span className="badge mt-3 border-0 bg-[#f8e5d6] px-4 py-3 font-semibold text-[#b95017]">{person.role}</span>
                <p className="mt-4 text-sm leading-6 text-[#766d63]">{person.bio}</p>
              </article>
            </div>
          ))}
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
