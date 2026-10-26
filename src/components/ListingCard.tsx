"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import type { Listing } from "@/types";
import { HeartIcon, StarIcon } from "./Icons";

export default function ListingCard({ listing }: { listing: Listing }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setLiked((value) => !value);
  };

  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block w-[160px] shrink-0 snap-start sm:w-[180px] md:w-[calc((100%-6rem)/7)] lg:w-[calc((100%-6rem)/7)]"
    >
      <div className="relative mb-2.5 aspect-square overflow-hidden rounded-[12px] bg-neutral-200">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(max-width:768px) 180px, 220px"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        <button
          type="button"
          onClick={toggleLike}
          className={`absolute right-2.5 top-2.5 drop-shadow-md ${
            liked ? "text-[#FF385C]" : "text-white hover:scale-110"
          }`}
          aria-label={liked ? "Remove from wishlists" : "Add to wishlists"}
        >
          <HeartIcon className="h-6 w-6" filled={liked} />
        </button>

        {listing.guestFavorite && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[12px] font-semibold leading-none text-[#222] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
            Guest favorite
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-1">
          <h3 className="min-w-0 truncate text-[15px] font-semibold leading-5 text-[#222]">
            {listing.type}
          </h3>
        </div>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <p className="min-w-0 truncate text-[15px] leading-5 text-[#6A6A6A]">
            ${listing.price.toLocaleString()} for {listing.nights} nights
          </p>
          <span className="inline-flex shrink-0 items-center gap-1 text-[15px] leading-5 text-[#222]">
            <StarIcon className="h-[10px] w-[10px]" />
            {Number(listing.rating.toFixed(2))}
          </span>
        </div>
      </div>
    </Link>
  );
}
