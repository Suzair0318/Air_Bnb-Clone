import Image from "next/image";
import type { Destination } from "@/data/destinations";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <button
      type="button"
      className="group w-[100px] shrink-0 snap-start text-left sm:w-[108px] md:w-[calc((100%-2.25rem*9)/10)]"
    >
      <div className="relative mb-2 aspect-square overflow-hidden rounded-[24px] bg-neutral-200">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="120px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="truncate text-[13px] font-semibold leading-[18px] text-[#222]">
        {destination.name}
      </h3>
      <p className="truncate text-[13px] leading-[18px] text-[#6A6A6A]">{destination.subtitle}</p>
    </button>
  );
}
