import Link from "next/link";

import { SITE_CONFIG } from "@/lib/constants";

interface CtaBannerProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CtaBanner({
  heading = "Ready to schedule your appointment?",
  description = "Experience the difference at Perfected Smiles.",
  ctaText = "Book Appointment",
  ctaHref = SITE_CONFIG.bookingUrl,
}: CtaBannerProps) {
  const isExternal = ctaHref.startsWith("http");

  // Split heading to italicize the last 2 words for the accent effect
  const words = heading.split(" ");
  const accentWords = words.slice(-2).join(" ");
  const leadingWords = words.slice(0, -2).join(" ");

  const button = (
    <span className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-brand-brown text-[13px] font-medium tracking-wide hover:bg-brand-gold hover:text-white transition-colors shadow-md">
      {ctaText}
    </span>
  );

  return (
    <section className="bg-white">
      <div className="w-full px-6 py-24">
        <div className="w-full rounded-[20px] bg-gradient-to-br from-[#6b4a3b] via-[#4a332d] to-[#3a2620] px-8 py-16 md:px-16 md:py-20 text-center shadow-xl">
          <h2 className="font-serif text-[32px] md:text-[40px] font-medium leading-[1.2] text-white">
            {leadingWords}{" "}
            <span className="text-brand-gold italic">{accentWords}</span>
          </h2>
          <p className="text-[14px] font-light leading-[20px] tracking-wide text-white/80 max-w-2xl mx-auto mt-4">
            {description}
          </p>
          <div className="mt-8">
            {isExternal ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                {button}
              </a>
            ) : (
              <Link href={ctaHref}>{button}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
