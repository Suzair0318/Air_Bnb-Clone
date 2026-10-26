"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AirbnbLogo,
  MenuIcon,
  NavBalloonIcon,
  NavGlobeIcon,
  NavHomeIcon,
  NavServicesIcon,
  SearchIcon,
  UserIcon,
} from "./Icons";

const tabs = [
  { id: "all", label: "All", Icon: NavGlobeIcon },
  { id: "homes", label: "Homes", Icon: NavHomeIcon },
  { id: "experiences", label: "Experiences", Icon: NavBalloonIcon },
  { id: "services", label: "Services", Icon: NavServicesIcon },
] as const;

export default function Header({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("all");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F3F3F3]">
      <div className="relative mx-auto flex h-[72px] max-w-[1760px] items-center justify-between px-6 md:h-[80px] md:px-12 lg:px-16 xl:px-20">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center text-[#FF385C]"
          aria-label="Airbnb home"
        >
          <AirbnbLogo className="h-[32px] w-[102px]" />
        </Link>

        {!compact && (
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 md:flex">
            {tabs.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`group relative flex flex-row items-center gap-2 px-3.5 pb-2.5 pt-2 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-65 hover:opacity-100"
                  }`}
                >
                  <Icon className="h-[26px] w-[26px] shrink-0" />
                  <span
                    className={`whitespace-nowrap text-[13px] leading-none ${
                      isActive ? "font-semibold text-[#222]" : "font-medium text-[#222]"
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition ${
                      isActive ? "bg-[#222]" : "bg-transparent group-hover:bg-neutral-300"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        )}

        {compact && (
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex max-w-[380px] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-neutral-200 bg-white py-2 pl-4 pr-2 shadow-sm transition hover:shadow-md"
          >
            <SearchIcon className="h-4 w-4 text-neutral-800" />
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-semibold text-neutral-800">Anywhere</p>
              <p className="truncate text-xs text-neutral-500">Any week · Add guests</p>
            </div>
          </button>
        )}

        <div className="relative z-10 flex shrink-0 items-center">
          <button
            type="button"
            className="hidden rounded-full px-3.5 py-2.5 text-[14px] font-semibold text-[#222] transition hover:bg-black/5 lg:block"
          >
            Become a host
          </button>

          <div className="relative ml-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#222] shadow-sm transition hover:shadow-md"
              aria-label="Account"
            >
              <UserIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#222] shadow-sm transition hover:shadow-md"
              aria-expanded={menuOpen}
              aria-label="Main menu"
            >
              <MenuIcon className="h-4 w-4" />
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  className="fixed inset-0 z-40 cursor-default"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 top-[48px] z-50 w-[240px] overflow-hidden rounded-xl bg-white py-2 shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
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
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                    Airbnb your home
                  </button>
                  <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                    Help Center
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
