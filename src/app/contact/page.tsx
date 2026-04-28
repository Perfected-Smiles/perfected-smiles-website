import type { Metadata } from "next";

import { Contact } from "@/components/blocks/contact";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Perfected Smiles in Rochelle Park, NJ. Call us or visit our office to schedule your dental appointment.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        heading="Get in Touch With Us"
        subtitle="We're here to answer your questions and help you schedule your next visit."
      />
      <Contact />
      <Logos heading="We Accept Most Major Insurance Plans" />
    </>
  );
}
