"use client";

import { useEffect, useRef, useState } from "react";
import type { Listing } from "@/types";
import ListingCard from "./ListingCard";
import { ChevronLeft, ChevronRight } from "./Icons";

export default function ListingRow({ title, listings }: { title: string; listings: Listing[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: direction === "left" ? -720 : 720,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10 md:mb-12">
      <div className="mb-3 flex items-center justify-between gap-4 md:mb-4">
        <button type="button" className="group flex items-center gap-2 text-left">
          <h2 className="text-[20px] font-semibold leading-tight tracking-tight text-[#222] md:text-[22px]">
            {title}
          </h2>
          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-transparent transition group-hover:bg-black/5">
            <ChevronRight className="h-3.5 w-3.5 text-[#222]" />
          </span>
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
              canScrollLeft
                ? "border-[#DDDDDD] bg-white text-[#222] hover:scale-105 hover:border-[#B0B0B0] hover:shadow-sm"
                : "cursor-default border-[#EBEBEB] bg-transparent text-[#DDDDDD]"
            }`}
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
              canScrollRight
                ? "border-[#DDDDDD] bg-white text-[#222] hover:scale-105 hover:border-[#B0B0B0] hover:shadow-sm"
                : "cursor-default border-[#EBEBEB] bg-transparent text-[#DDDDDD]"
            }`}
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-1 snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
