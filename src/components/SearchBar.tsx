"use client";

import { useState } from "react";
import { SearchIcon } from "./Icons";

type Field = "where" | "when" | "who" | null;

export default function SearchBar() {
  const [active, setActive] = useState<Field>(null);
  const [hovered, setHovered] = useState<Field>(null);

  const isSelected = (field: Field) => active === field;
  const showGrey = (field: Field) => !active && hovered === field;

  const segmentClass = (field: Field) => {
    if (isSelected(field)) return "bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)]";
    if (active) return "bg-transparent hover:bg-[#DDDDDD]";
    if (showGrey(field)) return "bg-[#EBEBEB]";
    return "bg-transparent hover:bg-[#EBEBEB]";
  };

  const hideDivider = (a: Field, b: Field) =>
    active === a || active === b || hovered === a || hovered === b;

  return (
    <div className="mx-auto w-full max-w-[850px] px-6 pb-6 pt-1 md:px-10">
      <div
        className={`mx-auto flex h-[64px] max-w-[720px] items-center rounded-full border border-black/8 transition ${
          active ? "bg-[#EBEBEB]" : "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
        }`}
        role="search"
      >
        <button
          type="button"
          onClick={() => setActive(active === "where" ? null : "where")}
          onMouseEnter={() => setHovered("where")}
          onMouseLeave={() => setHovered(null)}
          className={`flex h-full min-w-0 flex-[1.3] flex-col items-start justify-center rounded-full px-7 text-left transition ${segmentClass("where")}`}
        >
          <span className="text-[12px] font-bold leading-none text-[#222]">Where</span>
          <span className="mt-1 truncate text-[14px] leading-none text-[#6A6A6A]">
            Search destinations
          </span>
        </button>

        <div className={`h-7 w-px shrink-0 ${hideDivider("where", "when") ? "bg-transparent" : "bg-[#DDDDDD]"}`} />

        <button
          type="button"
          onClick={() => setActive(active === "when" ? null : "when")}
          onMouseEnter={() => setHovered("when")}
          onMouseLeave={() => setHovered(null)}
          className={`flex h-full min-w-0 flex-1 flex-col items-start justify-center rounded-full px-6 text-left transition ${segmentClass("when")}`}
        >
          <span className="text-[12px] font-bold leading-none text-[#222]">When</span>
          <span className="mt-1 truncate text-[14px] leading-none text-[#6A6A6A]">Add dates</span>
        </button>

        <div className={`h-7 w-px shrink-0 ${hideDivider("when", "who") ? "bg-transparent" : "bg-[#DDDDDD]"}`} />

        <div
          onMouseEnter={() => setHovered("who")}
          onMouseLeave={() => setHovered(null)}
          className={`flex h-full min-w-0 flex-[1.15] items-center rounded-full pl-6 pr-2 transition ${segmentClass("who")}`}
        >
          <button
            type="button"
            onClick={() => setActive(active === "who" ? null : "who")}
            className="flex min-w-0 flex-1 flex-col items-start justify-center text-left"
          >
            <span className="text-[12px] font-bold leading-none text-[#222]">Who</span>
            <span className="mt-1 truncate text-[14px] leading-none text-[#6A6A6A]">Add guests</span>
          </button>
          <button
            type="button"
            className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#FF385C] text-white transition hover:bg-[#D90B3E]"
            aria-label="Search"
          >
            <SearchIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
