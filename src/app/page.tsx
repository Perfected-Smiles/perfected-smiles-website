import { Hero } from "@/components/blocks/hero";
import { IntroSection } from "@/components/blocks/intro-section";
import { AboutPreview } from "@/components/blocks/about-preview";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { Team } from "@/components/blocks/team";
import { Testimonials } from "@/components/blocks/testimonials";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";
import { FAQ } from "@/components/blocks/faq";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { MapEmbed } from "@/components/blocks/map-embed";

export default function Home() {
  return (
    <>
      <Hero
        welcomeText="WELCOME TO PERFECTED SMILES"
        heading="Your Trusted Dentist in Boston, Massachusetts"
      />
      <IntroSection />
      <AboutPreview />
      <ServicesGrid />
      <Team />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <CtaBanner />
      <MapEmbed />
    </>
  );
}
