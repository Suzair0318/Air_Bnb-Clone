import DestinationRow from "@/components/DestinationRow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListingRow from "@/components/ListingRow";
import { homeDestinations } from "@/data/destinations";
import { getListingsByIds, sections } from "@/data/listings";

export default function HomesPage() {
  const lahoreSection = sections.find((section) => section.id === "lahore");
  const islamabadSection = sections.find((section) => section.id === "islamabad");

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#222]">
      <Header />

      <div className="bg-white">
        <main className="mx-auto max-w-[1760px] px-8 pb-12 pt-6 md:px-12 md:pt-8 lg:px-16 xl:px-20">
          <DestinationRow title="Destinations for you" destinations={homeDestinations} />

          {lahoreSection && (
            <ListingRow
              title={lahoreSection.title}
              listings={getListingsByIds(lahoreSection.listingIds)}
            />
          )}

          {islamabadSection && (
            <ListingRow
              title={islamabadSection.title}
              listings={getListingsByIds(islamabadSection.listingIds)}
            />
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
