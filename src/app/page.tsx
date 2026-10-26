import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListingRow from "@/components/ListingRow";
import SearchBar from "@/components/SearchBar";
import { getListingsByIds, sections } from "@/data/listings";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#222]">
      <Header />
      <SearchBar />

      <div className="bg-white">
        <main className="mx-auto max-w-[1760px] px-8 pb-12 pt-6 md:px-16 md:pt-8 lg:px-20 xl:px-24">
          {sections.map((section) => (
            <ListingRow
              key={section.id}
              title={section.title}
              listings={getListingsByIds(section.listingIds)}
            />
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
