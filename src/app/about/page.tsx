import type { Metadata } from "next";

import { About } from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { CtaBanner } from "@/components/blocks/cta-banner";
import { WhyChooseUsAbout } from "@/components/blocks/why-choose-us-about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Dr. Ryan C. Maher DMD, FICOI and the Perfected Smiles team. 29+ years of dental experience in Boston, MA.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <WhyChooseUsAbout />
      <CtaBanner
        heading="Ready to schedule your appointment?"
        description="Experience the difference at Perfected Smiles."
      />
    </>
  );
}
