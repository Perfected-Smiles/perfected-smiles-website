import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface CtaBannerProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CtaBanner({
  heading = "Thinking About Perfecting Your Smile?",
  description = "Maintaining your oral health is an important part of your overall health and well-being. At Perfected Smiles, our dental team provides dental services designed to help patients maintain healthy teeth and confident smiles. If you are looking for a dentist in Boston, our team is available to answer your questions and help you explore treatment options.",
  ctaText = "BOOK APPOINTMENT",
  ctaHref = SITE_CONFIG.calendlyUrl,
}: CtaBannerProps) {
  const isExternal = ctaHref.startsWith("http");

  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-brown">
          {heading}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-4 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        {isExternal ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity mt-8"
          >
            {ctaText}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity mt-8"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
