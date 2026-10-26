import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceRow from "@/components/ServiceRow";
import {
  kualaLumpurServices,
  londonServices,
  losAngelesServices,
} from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#222]">
      <Header />

      <div className="bg-white">
        <main className="mx-auto max-w-[1760px] px-8 pb-12 pt-6 md:px-12 md:pt-8 lg:px-16 xl:px-20">
          <ServiceRow title="Services in Kuala Lumpur" services={kualaLumpurServices} />
          <ServiceRow title="Services in London" services={londonServices} />
          <ServiceRow title="Services in Los Angeles" services={losAngelesServices} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
