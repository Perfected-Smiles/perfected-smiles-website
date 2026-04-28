import type { Metadata } from "next";

import { CtaBanner } from "@/components/blocks/cta-banner";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { ServicesDetail } from "@/components/blocks/services-detail";
import { Testimonials } from "@/components/blocks/testimonials";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive dental services in Rochelle Park, NJ. Dental implants, Invisalign, veneers, crowns, dentures, fillings, and more at Perfected Smiles.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        heading="Explore Our Comprehensive Dental Services"
        subtitle="From preventive care to advanced cosmetic treatments — everything you need for a healthy, confident smile in one place."
        showCta
      />
      <ServicesDetail />
      <Logos heading="We Accept Most Major Insurance Plans" />
      <CtaBanner
        heading="Always Here for Emergency Care"
        description="We're here when you need us most. Call us and our team can help arrange urgent dental care fast."
      />
      <Testimonials />
    </>
  );
}
