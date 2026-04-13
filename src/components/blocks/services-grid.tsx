"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            Comprehensive Dental Care for Every Smile
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
            From preventive care to advanced cosmetic treatments — we provide
            complete dental services under one roof
          </p>
        </motion.div>

        {/* Services Grid - 4 columns x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl bg-white border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden bg-brand-gold/5">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-brand-brown">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block bg-brand-brown text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-brand-brown/20"
          >
            View All Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
