"use client";

import Image from "next/image";

import { motion } from "motion/react";

import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="relative bg-brand-primary py-20 md:py-28 overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,179,135,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-[3px] mb-3">
            The Perfected Smiles Difference
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why Patients Choose Us
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="h-px w-10 bg-brand-gold/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="h-px w-10 bg-brand-gold/60" />
          </div>
          <p className="text-white/80 text-base md:text-lg mt-5 leading-relaxed">
            We combine advanced technology with patient-focused comfort to
            deliver an exceptional dental experience.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Dashed connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-brand-gold/30 pointer-events-none"
            aria-hidden="true"
          />

          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image with decorative ring */}
              <div className="relative mb-6">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-xl scale-90 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all duration-500" />

                {/* Rotating gold ring on hover */}
                <div className="absolute -inset-2 rounded-full border border-brand-gold/40 group-hover:border-brand-gold/70 transition-all duration-500" />

                {/* Image container */}
                <div className="relative w-44 h-44 rounded-full overflow-hidden bg-white shadow-2xl shadow-brand-brown/30 ring-4 ring-white/90 group-hover:ring-brand-gold transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="176px"
                  />
                </div>

                {/* Number badge */}
                <div className="absolute -bottom-2 -right-2 w-11 h-11 rounded-full bg-brand-brown border-4 border-brand-primary flex items-center justify-center shadow-lg">
                  <span className="font-serif text-white text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-white mt-2 leading-snug">
                {item.title}
              </h3>

              {/* Gold accent divider */}
              <div className="h-0.5 w-10 bg-brand-gold mt-3 group-hover:w-16 transition-all duration-300" />

              {/* Description */}
              <p className="text-white/75 text-sm mt-4 leading-relaxed max-w-[260px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
    </section>
  );
}
