"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import type { Experience } from "@/data/experiences";
import { HeartIcon, StarIcon } from "./Icons";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setLiked((value) => !value);
  };

  return (
    <article className="flex w-[160px] shrink-0 snap-start flex-col self-start text-left sm:w-[180px] md:w-[calc((100%-6rem)/7)]">
      <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-[12px] bg-neutral-200 pt-[100%]">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="200px"
          className="object-cover transition duration-300 hover:scale-[1.02]"
        />

        <button
          type="button"
          onClick={toggleLike}
          className={`absolute right-2.5 top-2.5 z-10 drop-shadow-md ${
            liked ? "text-[#FF385C]" : "text-white hover:scale-110"
          }`}
          aria-label={liked ? "Remove from wishlists" : "Add to wishlists"}
        >
          <HeartIcon className="h-6 w-6" filled={liked} />
        </button>

        {experience.badge && (
          <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[12px] font-semibold leading-none text-[#222] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
            {experience.badge === "Original" && (
              <svg className="h-3 w-3 text-[#C2A15B]" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <path d="M6 0c.4 2.2 1.8 3.6 4 4-2.2.4-3.6 1.8-4 4-.4-2.2-1.8-3.6-4-4 2.2-.4 3.6-1.8 4-4z" />
              </svg>
            )}
            {experience.badge}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="line-clamp-2 min-h-10 text-[14px] font-semibold leading-5 text-[#222]">
          {experience.title}
        </h3>
        {experience.location && (
          <p className="mt-0.5 truncate text-[14px] leading-5 text-[#6A6A6A]">{experience.location}</p>
        )}
        <p className="mt-0.5 flex items-center gap-1.5 truncate text-[14px] leading-5 text-[#6A6A6A]">
          <span>From ${experience.price} / guest</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1 text-[#222]">
            <StarIcon className="h-[10px] w-[10px]" />
            {Number(experience.rating.toFixed(2))}
          </span>
        </p>
      </div>
    </article>
  );
}
