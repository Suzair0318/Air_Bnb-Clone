"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import SearchBar from "./SearchBar";
import { AuthModal } from "./HostAuthCard";

const tabs = [
  { id: "all", label: "All", Icon: NavGlobeIcon, href: "/" },
  { id: "homes", label: "Homes", Icon: NavHomeIcon, href: "/homes" },
  { id: "experiences", label: "Experiences", Icon: NavBalloonIcon, href: "/experiences" },
  { id: "services", label: "Services", Icon: NavServicesIcon, href: "/services" },
] as const;

const ease = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function Header({ compact: forceCompact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openAuth = () => {
    setMenuOpen(false);
    setAuthOpen(true);
  };

  const activeTab =
    pathname === "/homes"
      ? "homes"
      : pathname === "/experiences"
        ? "experiences"
        : pathname === "/services"
          ? "services"
          : "all";

  useEffect(() => {
    if (forceCompact) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceCompact]);

  const isCompact = forceCompact || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-700 ${
        isCompact && !forceCompact
          ? "border-b border-neutral-200/80 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
          : forceCompact
            ? "border-b border-neutral-200 bg-white"
            : "border-b border-transparent bg-[#F3F3F3]"
      }`}
      style={{ transitionTimingFunction: ease }}
    >
      <div className="relative mx-auto flex h-[72px] max-w-[1760px] items-center justify-between px-5 md:h-[80px] md:px-8 lg:px-10 xl:px-16">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center text-[#FF385C]"
          aria-label="Airbnb home"
        >
          <AirbnbLogo className="h-[32px] w-[102px]" />
        </Link>

        {/* Tabs — slowly slide up & fade out */}
        {!forceCompact && (
          <nav
            className="absolute left-1/2 top-1/2 hidden items-center gap-0.5 md:flex"
            style={{
              transform: isCompact
                ? "translate(-50%, calc(-50% - 28px))"
                : "translate(-50%, -50%)",
              opacity: isCompact ? 0 : 1,
              pointerEvents: isCompact ? "none" : "auto",
              transition: `transform 700ms ${ease}, opacity 650ms ${ease}`,
            }}
          >
            {tabs.map(({ id, label, Icon, href }) => {
              const isActive = activeTab === id;
              return (
                <Link
                  key={id}
                  href={href}
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
                </Link>
              );
            })}
          </nav>
        )}

        {/* Compact search — slowly slides up into place */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 z-10 hidden items-center rounded-full border border-neutral-200 bg-white py-[6px] pl-3 pr-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] md:flex"
          style={{
            transform: isCompact
              ? "translate(-50%, -50%)"
              : "translate(-50%, calc(-50% + 24px))",
            opacity: isCompact ? 1 : 0,
            pointerEvents: isCompact ? "auto" : "none",
            transition: `transform 750ms ${ease}, opacity 700ms ${ease}`,
          }}
          aria-label="Search"
        >
          <span className="flex items-center gap-2.5 px-3">
            <NavHomeIcon className="h-5 w-5 shrink-0" />
            <span className="text-[14px] font-semibold text-[#222]">Anywhere</span>
          </span>
          <span className="h-6 w-px bg-neutral-200" />
          <span className="px-4 text-[14px] font-semibold text-[#222]">Anytime</span>
          <span className="h-6 w-px bg-neutral-200" />
          <span className="flex items-center gap-2 pl-4 pr-1">
            <span className="text-[14px] font-normal text-[#717171]">
              {activeTab === "services" ? "Add service" : "Add guests"}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
              <SearchIcon className="h-3.5 w-3.5 text-white" />
            </span>
          </span>
        </button>

        {/* Mobile compact search */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 z-10 flex max-w-[220px] items-center gap-2 rounded-full border border-neutral-200 bg-white py-2 pl-3 pr-2 shadow-sm md:hidden"
          style={{
            transform: isCompact
              ? "translate(-50%, -50%)"
              : "translate(-50%, calc(-50% + 20px))",
            opacity: isCompact ? 1 : 0,
            pointerEvents: isCompact ? "auto" : "none",
            transition: `transform 750ms ${ease}, opacity 700ms ${ease}`,
          }}
        >
          <SearchIcon className="h-4 w-4 text-[#222]" />
          <span className="truncate text-[13px] font-semibold text-[#222]">Anywhere</span>
        </button>

        <div className="relative z-10 flex shrink-0 items-center">
          <Link
            href="/host"
            className="hidden rounded-full px-3.5 py-2.5 text-[14px] font-semibold text-[#222] transition hover:bg-black/5 lg:block"
          >
            Become a host
          </Link>

          <div className="relative ml-2 flex items-center gap-2">
            <button
              type="button"
              onClick={openAuth}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[#222] transition hover:bg-[#EBEBEB]"
              aria-label="Account"
            >
              <UserIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[#222] transition hover:bg-[#EBEBEB]"
              aria-expanded={menuOpen}
              aria-label="Main menu"
            >
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>

          {menuOpen && (
            <>
              <button
                type="button"
                className="fixed inset-0 z-40 cursor-default"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 top-[48px] z-50 w-[240px] overflow-hidden rounded-xl bg-white py-2 shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
                <button type="button" onClick={openAuth} className="block w-full px-4 py-3 text-left text-sm font-semibold text-[#222] hover:bg-neutral-50">
                  Sign up
                </button>
                <button type="button" onClick={openAuth} className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                  Log in
                </button>
                <div className="my-2 border-t border-neutral-200" />
                <button type="button" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50">
                  Gift cards
                </button>
                <Link href="/host" className="block w-full px-4 py-3 text-left text-sm text-[#222] hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>
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

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      {/* Large search — slowly collapses upward */}
      {!forceCompact && (
        <div
          className={isCompact ? "overflow-hidden" : "overflow-visible"}
          style={{
            maxHeight: isCompact ? 0 : 120,
            opacity: isCompact ? 0 : 1,
            transform: isCompact ? "translateY(-12px)" : "translateY(0)",
            transition: `max-height 750ms ${ease}, opacity 650ms ${ease}, transform 750ms ${ease}`,
          }}
        >
          <SearchBar />
        </div>
      )}
    </header>
  );
}
