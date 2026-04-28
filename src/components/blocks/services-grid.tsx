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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-brand-brown font-serif text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Comprehensive Dental Care for Every Smile
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
            From preventive care to advanced cosmetic treatments, our team helps
            patients plan care with clarity and comfort.
          </p>
        </motion.div>

        {/* Services Grid - 4 columns x 2 rows */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-border/70 overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-brand-gold/5 relative h-52 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-brand-brown font-serif text-xl font-semibold">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
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
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="bg-brand-brown shadow-brand-brown/20 hover:bg-brand-primary inline-block rounded-md px-8 py-3 text-sm font-medium tracking-wider text-white uppercase shadow-lg transition-colors"
          >
            View All Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
