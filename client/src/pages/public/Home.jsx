import Hero from "../../components/sections/Hero";
import Achievements from "../../components/sections/Achievements";
import Services from "../../components/sections/Services";
import Process from "../../components/sections/Process";
import Results from "../../components/sections/Results";
import Testimonials from "../../components/sections/Testimonials";
import ContactSection from "../../components/sections/ContactSection";

function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

export default Home;
