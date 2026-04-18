"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-[#173d22]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-white/80 md:px-6">
          <div className="flex items-start justify-between gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col text-left">
              <a
                href="mailto:gillespiecolonsay@gmail.com"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                gillespiecolonsay@gmail.com
              </a>

              <a
                href="mailto:patrickgillespie04@gmail.com"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                patrickgillespie04@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-end text-right">
              <a
                href="tel:07771259321"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                M: 07771 259 321
              </a>

              <a
                href="tel:07767017746"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                M: 07767 017 746
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[0.12em] text-white"
          >
            P. GILLESPIE & SON
          </Link>

          <nav className="hidden items-center gap-8 text-base text-white/80 md:flex">
            <Link
              href="/"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              About
            </Link>
            <Link
              href="/services"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-md bg-[#2f8f55] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90 active:scale-95 md:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 transition duration-300 active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`mx-auto max-w-7xl origin-top px-4 transition-all duration-[1400ms] ease-in-out md:hidden ${
            menuOpen
              ? "max-h-96 scale-100 overflow-hidden pb-4 opacity-100"
              : "max-h-0 scale-95 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-2 rounded-xl border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-md transition duration-300 delay-100">
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black md:min-h-[420px]">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero-wall1.jpeg"
            alt="Stone wall work"
            fill
            sizes="100vw"
            className="object-cover object-[58%_45%]"
            priority
          />
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[75%] md:block">
          <Image
            src="/hero-wall-ext.png"
            alt="Stone wall work"
            fill
            sizes="75vw"
            className="object-cover object-[75%_center] md:object-center"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/85 to-transparent md:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
          <div className="max-w-[320px] md:max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7fb857] md:text-base">
              About Us
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
              Over 40 years of trusted stonework experience
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Traditional craftsmanship, reliable service and high-quality
              stonework across Argyll, Oban and the Western Isles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f8f55]">
              About
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Traditional Dry Stone Dyking & Stonework
            </h2>

            <p className="mt-6 text-base leading-7 text-black/85 md:text-lg">
              Pat Gillespie & Son are specialists in traditional dry stone
              dyking and stonework, based in Argyll. With over 40 years of
              experience, the business has built a strong reputation for
              reliable workmanship and high-quality finishes across Scotland and
              the Western Isles.
            </p>

            <p className="mt-5 text-base leading-7 text-black/85 md:text-lg">
              Services include new builds and repairs such as dry stone dykes,
              bridges, pillars, entranceways, garden walls, retaining walls,
              steps and bespoke stone features. From small garden projects to
              large-scale farm and road construction work, every job is
              completed to a high standard.
            </p>

            <p className="mt-5 text-base leading-7 text-black/85 md:text-lg">
              Work is tailored to complement traditional and modern properties,
              ensuring each project fits naturally within its surroundings. No
              job is too big or too small.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f8f55]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Contact P. Gillespie & Son
            </h2>

            <p className="mt-5 text-base leading-7 text-white/85 md:text-lg">
              Get in touch for quotes, enquiries or to discuss your stonework
              project across Argyll, Oban and the Western Isles.
            </p>
          </div>

          <div className="grid gap-4 self-start">
            <a
              href="tel:07771259321"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Mobile
              </p>
              <p className="mt-2 text-lg text-white">07771 259 321</p>
            </a>

            <a
              href="tel:07767017746"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Mobile
              </p>
              <p className="mt-2 text-lg text-white">07767 017 746</p>
            </a>

            <a
              href="mailto:gillespiecolonsay@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Email
              </p>
              <p className="mt-2 break-all text-lg text-white">
                gillespiecolonsay@gmail.com
              </p>
            </a>

            <a
              href="mailto:patrickgillespie04@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Email
              </p>
              <p className="mt-2 break-all text-lg text-white">
                patrickgillespie04@gmail.com
              </p>
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/P.Gillespieandson"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.705 4.533-4.705 1.313 0 2.686.236 2.686.236v2.977h-1.514c-1.49 0-1.955.931-1.955 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/pgillespieandson/"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-white"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
