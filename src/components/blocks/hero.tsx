import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
  welcomeText?: string;
  heading: string;
  subtitle?: string;
  showCta?: boolean;
}

export const Hero = ({
  welcomeText,
  heading,
  subtitle,
  showCta = true,
}: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-brand-brown via-brand-primary to-[#d4c5b5] min-h-[400px] md:min-h-[500px] flex items-center">
      <div className="container px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          {welcomeText && (
            <p className="text-brand-gold text-sm font-medium uppercase tracking-[2px] mb-4">
              {welcomeText}
            </p>
          )}

          <h1 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heading}
          </h1>

          {subtitle && (
            <p className="text-white/80 text-base md:text-lg mt-4">
              {subtitle}
            </p>
          )}

          {showCta && (
            <a
              href={SITE_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity border border-white/20 mt-8"
            >
              BOOK APPOINTMENT
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
