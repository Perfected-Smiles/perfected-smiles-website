"use client";

import Image from "next/image";

import { MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
  welcomeText?: string;
  heading: string;
  subtitle?: string;
  showCta?: boolean;
  imageSrc?: string;
  imageClassName?: string;
}

export const Hero = ({
  welcomeText,
  heading,
  subtitle,
  showCta = true,
  imageSrc = "/perfectedsmiles-staff.jpg",
  imageClassName = "object-cover object-center",
}: HeroProps) => {
  const words = heading.split(" ");
  const phoneHref = `tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`;

  return (
    <section className="bg-brand-brown relative flex min-h-[560px] items-center overflow-hidden md:min-h-[660px]">
      <Image
        src={imageSrc}
        alt="Perfected Smiles dental team"
        fill
        priority
        sizes="100vw"
        className={imageClassName}
      />
      <div className="from-brand-brown/95 via-brand-brown/72 to-brand-brown/20 absolute inset-0 bg-gradient-to-r" />
      <div className="from-brand-brown/50 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />

      <div className="relative z-10 container px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {welcomeText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-brand-gold mb-5 text-sm font-medium tracking-[3px] uppercase">
                {welcomeText}
              </p>
              <div className="mb-6 flex items-center gap-2">
                <span className="bg-brand-gold/60 block h-px w-12" />
                <span className="bg-brand-gold/60 block h-1 w-1 rounded-full" />
              </div>
            </motion.div>
          )}

          <h1 className="font-serif text-4xl leading-[1.1] font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl">
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
                className="mr-[0.3em] inline-block"
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
              className="mt-5 text-base leading-relaxed text-white/80 md:text-lg lg:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.15 + words.length * 0.08 + 0.3,
            }}
            className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/82"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="text-brand-gold size-4" />
              {SITE_CONFIG.serviceArea}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="fill-brand-gold text-brand-gold size-4" />
              29+ years of experience
            </span>
          </motion.div>

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + words.length * 0.08 + 0.5,
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-brown inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold tracking-wider uppercase shadow-lg shadow-black/20 transition-all duration-200 hover:bg-white"
              >
                Book Appointment
              </a>
              <a
                href={phoneHref}
                className="hover:text-brand-brown inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur transition-all duration-200 hover:bg-white"
              >
                <Phone className="size-4" />
                Call Now
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
