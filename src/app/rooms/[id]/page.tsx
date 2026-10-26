import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeartIcon, ShareIcon, StarIcon } from "@/components/Icons";
import { getListingById, listings } from "@/data/listings";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) return { title: "Listing not found" };
  return {
    title: `${listing.title} · Airbnb Clone`,
    description: listing.description,
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();

  const nightly = Math.round(listing.price / listing.nights);
  const cleaningFee = 75;
  const serviceFee = Math.round(listing.price * 0.14);
  const total = listing.price + cleaningFee + serviceFee;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header compact />

      <main className="mx-auto max-w-[1120px] px-6 py-6 md:px-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{listing.title}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-1 text-sm">
              <StarIcon className="h-3 w-3" />
              <span className="font-semibold">{listing.rating.toFixed(2)}</span>
              <span>·</span>
              <button type="button" className="font-semibold underline">
                {listing.reviews} reviews
              </button>
              <span>·</span>
              <span className="underline">{listing.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-neutral-100"
            >
              <ShareIcon />
              Share
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-neutral-100"
            >
              <HeartIcon className="h-4 w-4" />
              Save
            </button>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2 md:h-[420px]">
          <div className="relative col-span-2 row-span-2 min-h-[260px] md:min-h-0">
            <Image src={listing.images[0]} alt={listing.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" priority />
          </div>
          {listing.images.slice(1, 5).map((image, index) => (
            <div key={image} className={`relative hidden md:block ${index >= listing.images.length - 1 ? "md:block" : ""}`}>
              <Image src={image} alt={`${listing.title} photo ${index + 2}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
          {listing.images.length < 5 &&
            Array.from({ length: 4 - (listing.images.length - 1) }).map((_, index) => (
              <div key={`placeholder-${index}`} className="relative hidden bg-neutral-200 md:block">
                <Image
                  src={listing.images[0]}
                  alt=""
                  fill
                  className="object-cover opacity-80"
                  sizes="25vw"
                />
              </div>
            ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <div className="border-b border-neutral-200 pb-6">
              <h2 className="text-[22px] font-semibold">
                {listing.type} hosted by {listing.host.name}
              </h2>
              <p className="mt-1 text-neutral-700">
                {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} baths
              </p>
            </div>

            <div className="flex items-center gap-4 border-b border-neutral-200 py-6">
              <Image
                src={listing.host.avatar}
                alt={listing.host.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Hosted by {listing.host.name}</p>
                <p className="text-sm text-neutral-500">
                  {listing.host.isSuperhost ? "Superhost · " : ""}
                  {listing.host.yearsHosting} years hosting
                </p>
              </div>
            </div>

            {listing.guestFavorite && (
              <div className="flex items-center gap-4 border-b border-neutral-200 py-6">
                <div className="text-2xl font-bold tracking-tight">Guest favorite</div>
                <p className="text-sm text-neutral-600">
                  One of the most loved homes on Airbnb, according to guests
                </p>
                <div className="ml-auto text-right">
                  <p className="text-xl font-semibold">{listing.rating.toFixed(2)}</p>
                  <div className="flex justify-end gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-2.5 w-2.5" />
                    ))}
                  </div>
                </div>
                <div className="border-l border-neutral-200 pl-4 text-right">
                  <p className="text-xl font-semibold">{listing.reviews}</p>
                  <p className="text-xs underline">Reviews</p>
                </div>
              </div>
            )}

            <div className="border-b border-neutral-200 py-8">
              <p className="leading-relaxed text-neutral-700">{listing.description}</p>
            </div>

            <div className="py-8">
              <h3 className="mb-5 text-[22px] font-semibold">What this place offers</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {listing.amenities.map((amenity) => (
                  <li key={amenity} className="text-neutral-800">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex items-end gap-1">
                <span className="text-[22px] font-semibold">${nightly}</span>
                <span className="mb-1 text-neutral-700">night</span>
              </div>

              <div className="mb-4 overflow-hidden rounded-xl border border-neutral-400">
                <div className="grid grid-cols-2 border-b border-neutral-400">
                  <div className="border-r border-neutral-400 px-3 py-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-wide">Check-in</p>
                    <p className="text-sm">{listing.dates.split("–")[0]?.trim() ?? "Add date"}</p>
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-wide">Checkout</p>
                    <p className="text-sm">{listing.dates.split("–")[1]?.trim() ?? "Add date"}</p>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-wide">Guests</p>
                  <p className="text-sm">1 guest</p>
                </div>
              </div>

              <button
                type="button"
                className="mb-4 w-full rounded-lg bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] py-3.5 text-center text-base font-semibold text-white transition hover:opacity-95"
              >
                Reserve
              </button>
              <p className="mb-6 text-center text-sm text-neutral-600">You won&apos;t be charged yet</p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="underline">
                    ${nightly} x {listing.nights} nights
                  </span>
                  <span>${listing.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Airbnb service fee</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-4 text-base font-semibold">
                  <span>Total before taxes</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Link href="/" className="mt-6 inline-block text-sm font-semibold underline">
              ← Back to homes
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
