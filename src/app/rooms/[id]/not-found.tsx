import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold text-neutral-900">Listing not found</h1>
      <p className="text-neutral-600">We couldn&apos;t find that home. It may have been removed.</p>
      <Link
        href="/"
        className="rounded-lg bg-[#FF385C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#E31C5F]"
      >
        Back to Airbnb Clone
      </Link>
    </div>
  );
}
