import ArtSection from "../../components/sections/ArtSection";
import Expertise from "../../components/sections/Expertise";
import ServicesHero from "../../components/sections/ServicesHero";

function Services() {
  return (
    <div className="flex flex-col gap-[40px] md:gap-[120px] mt-[40px] md:mt-[120px]">
      <ServicesHero />
      <Expertise />
      <ArtSection />
    </div>
  );
}

export default Services;
