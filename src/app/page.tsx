import { AboutPreview } from "@/components/blocks/about-preview";
import { AppointmentHighlights } from "@/components/blocks/appointment-highlights";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { FAQ } from "@/components/blocks/faq";
import { Hero } from "@/components/blocks/hero";
import { IntroSection } from "@/components/blocks/intro-section";
import { MapEmbed } from "@/components/blocks/map-embed";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { Team } from "@/components/blocks/team";
import { Testimonials } from "@/components/blocks/testimonials";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero
        welcomeText="WELCOME TO PERFECTED SMILES"
        heading="Trusted Dentistry in Rochelle Park, New Jersey"
        subtitle="Personalized dental care for families across Rochelle Park, Hackensack, and Bergen County."
      />
      <AppointmentHighlights />
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
