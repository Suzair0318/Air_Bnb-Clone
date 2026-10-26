import ExperienceRow from "@/components/ExperienceRow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  kualaLumpurExperiences,
  londonExperiences,
  originals,
} from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#222]">
      <Header />

      <div className="bg-white">
        <main className="mx-auto max-w-[1760px] px-8 pb-12 pt-6 md:px-12 md:pt-8 lg:px-16 xl:px-20">
          <ExperienceRow
            title="Airbnb Originals"
            subtitle="Hosted by the world's most interesting people"
            experiences={originals}
            showTitleArrow
          />

          <div className="mb-2">
            <h2 className="mb-5 text-[22px] font-semibold tracking-tight text-[#222]">
              Popular with travelers from your area
            </h2>
            <ExperienceRow
              title="Experiences in Kuala Lumpur"
              experiences={kualaLumpurExperiences}
            />
          </div>

          <ExperienceRow title="Experiences in London" experiences={londonExperiences} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
