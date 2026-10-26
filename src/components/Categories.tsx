"use client";

import { useRef, useState } from "react";
import { categories } from "@/data/listings";
import { CategoryIcon, ChevronLeft, ChevronRight, FilterIcon } from "./Icons";

export default function Categories() {
  const [active, setActive] = useState(categories[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[73px] z-40 border-b border-neutral-100 bg-white">
      <div className="mx-auto flex max-w-[1760px] items-center gap-3 px-6 py-3 md:px-10 lg:px-20">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition hover:scale-105 md:flex"
          aria-label="Scroll categories left"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollerRef}
          className="flex flex-1 gap-8 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`flex shrink-0 flex-col items-center gap-1.5 border-b-2 pb-2 pt-1 transition ${
                  isActive
                    ? "border-neutral-800 text-neutral-800"
                    : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                }`}
              >
                <CategoryIcon name={category.icon} className="h-6 w-6" />
                <span className="whitespace-nowrap text-xs font-semibold">{category.label}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition hover:scale-105 md:flex"
          aria-label="Scroll categories right"
        >
          <ChevronRight />
        </button>

        <button
          type="button"
          className="hidden shrink-0 items-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 text-xs font-semibold text-neutral-800 transition hover:border-neutral-800 md:flex"
        >
          <FilterIcon />
          Filters
        </button>
      </div>
    </div>
  );
}
