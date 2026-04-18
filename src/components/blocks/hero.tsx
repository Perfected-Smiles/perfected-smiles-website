"use client";

import { motion } from "motion/react";

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
  const words = heading.split(" ");

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-brand-primary/90 to-[#c4aa90]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 via-transparent to-transparent" />

      {/* Subtle pattern overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft radial glow */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-brown/20 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          {welcomeText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-brand-gold text-sm font-medium uppercase tracking-[3px] mb-5">
                {welcomeText}
              </p>
              {/* Decorative golden accent line */}
              <div className="flex items-center gap-2 mb-6">
                <span className="block h-px w-12 bg-brand-gold/60" />
                <span className="block h-1 w-1 rounded-full bg-brand-gold/60" />
              </div>
            </motion.div>
          )}

          <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.08,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + words.length * 0.08 + 0.2,
              }}
              className="text-white/80 text-base md:text-lg lg:text-xl mt-5 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + words.length * 0.08 + 0.5,
              }}
              className="mt-10"
            >
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-brown text-white px-8 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider border border-white/15 shadow-lg shadow-brand-brown/30 hover:shadow-xl hover:brightness-110 transition-all duration-200"
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
