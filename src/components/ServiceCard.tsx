"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import type { Service } from "@/data/services";
import { HeartIcon, StarIcon } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setLiked((value) => !value);
  };

  const unitLabel = service.unit === "group" ? "group" : "guest";

  return (
    <article className="flex w-[160px] shrink-0 snap-start flex-col self-start sm:w-[180px] md:w-[calc((100%-6rem)/7)]">
      <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-[12px] bg-neutral-200 pt-[100%]">
        <Image
          src={service.image}
          alt={service.title}
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

        {service.badge && (
          <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[12px] font-semibold leading-none text-[#222] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
            {service.badge}
          </span>
        )}
      </div>

      <div className="flex min-h-[76px] flex-col">
        <h3 className="line-clamp-2 h-10 text-[14px] font-semibold leading-5 text-[#222]">
          {service.title}
        </h3>
        <p className="mt-0.5 flex h-5 items-center gap-1.5 truncate text-[14px] leading-5 text-[#6A6A6A]">
          <span className="truncate">
            From ${service.price} / {unitLabel}
          </span>
          {service.rating !== undefined && (
            <>
              <span className="shrink-0">·</span>
              <span className="inline-flex shrink-0 items-center gap-1 text-[#222]">
                <StarIcon className="h-[10px] w-[10px]" />
                {Number(service.rating.toFixed(2))}
              </span>
            </>
          )}
        </p>
        <p className="mt-0.5 h-5 truncate text-[14px] leading-5 text-[#6A6A6A]">
          {service.minimumToBook !== undefined ? `Minimum $${service.minimumToBook} to book` : "\u00A0"}
        </p>
      </div>
    </article>
  );
}
