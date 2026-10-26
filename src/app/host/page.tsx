"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HostAuthCard from "@/components/HostAuthCard";
import HostFooter from "@/components/HostFooter";
import { AirbnbLogo, GlobeIcon, MenuIcon, UserIcon } from "@/components/Icons";

const BACKGROUND =
  "https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-signup-and-login/original/2d46d9a0-5218-4fa7-91da-356eb8bb130b.jpeg?im_w=1680&im_q=medq";

export default function HostPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#222]">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1760px] items-center justify-between px-5 md:h-[80px] md:px-8 lg:px-10 xl:px-16">
          <Link href="/" className="flex shrink-0 items-center text-[#FF385C]" aria-label="Airbnb home">
            <AirbnbLogo className="h-[32px] w-[102px]" />
          </Link>

          <div className="relative flex items-center gap-1">
            <Link
              href="/host"
              className="hidden rounded-full px-3.5 py-2.5 text-[14px] font-semibold text-[#222] transition hover:bg-black/5 md:block"
            >
              Become a host
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#222] transition hover:bg-black/5"
              aria-label="Language and currency"
            >
              <GlobeIcon className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="ml-1 flex h-10 items-center gap-2 rounded-full border border-neutral-200 bg-white pl-3 pr-1.5 shadow-sm transition hover:shadow-md"
              aria-expanded={menuOpen}
              aria-label="Main menu"
            >
              <MenuIcon className="h-3.5 w-3.5" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#222] text-white">
                <UserIcon className="h-4 w-4" />
              </span>
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  className="fixed inset-0 z-40 cursor-default"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 top-[52px] z-50 w-[240px] overflow-hidden rounded-xl bg-white py-2 shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm font-semibold text-[#222] hover:bg-neutral-50">
                    Sign up
                  </button>
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                    Log in
                  </button>
                  <div className="my-2 border-t border-neutral-200" />
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                    Gift cards
                  </button>
                  <Link
                    href="/host"
                    className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    Airbnb your home
                  </Link>
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                    Help Center
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
        <Image
          src={BACKGROUND}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden />
        <div className="relative z-10 w-full flex justify-center">
          <HostAuthCard />
        </div>
      </section>

      <HostFooter />
    </div>
  );
}
