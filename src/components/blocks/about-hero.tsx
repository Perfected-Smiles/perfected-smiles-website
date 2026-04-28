import { Hero } from "@/components/blocks/hero";

export function AboutHero() {
  return (
    <Hero
      heading="Perfected Smiles: Creating Confident Smiles"
      subtitle="Compassionate, advanced dentistry dedicated to your health and comfort."
      showCta
      imageSrc="/Dr.Ryan.png"
      imageClassName="object-contain object-right-bottom md:object-right"
    />
  );
}
