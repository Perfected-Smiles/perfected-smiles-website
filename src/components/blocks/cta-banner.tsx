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
    <span className="text-brand-brown hover:bg-brand-gold inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-[13px] font-semibold tracking-wide shadow-md transition-colors">
      {ctaText}
    </span>
  );

  return (
    <section className="bg-white">
      <div className="w-full px-6 py-20">
        <div className="from-brand-primary via-brand-brown shadow-brand-brown/15 w-full rounded-lg bg-gradient-to-br to-[#182027] px-8 py-14 text-center shadow-xl md:px-16 md:py-20">
          <h2 className="font-serif text-[32px] leading-[1.2] font-medium text-white md:text-[40px]">
            {leadingWords}{" "}
            <span className="text-brand-gold italic">{accentWords}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[20px] font-light tracking-wide text-white/80">
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
