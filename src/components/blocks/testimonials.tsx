"use client";

import { useEffect, useState } from "react";

import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

import { TESTIMONIALS } from "@/lib/constants";

const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];
const reversedTestimonials = [...TESTIMONIALS].reverse();
const doubledReversed = [...reversedTestimonials, ...reversedTestimonials];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="border-border/70 relative w-[340px] shrink-0 overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
      <Quote className="text-brand-primary/10 absolute top-4 right-4 size-8" />
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 line-clamp-4 text-sm leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="bg-brand-primary/20 text-brand-brown flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <span className="text-brand-brown block text-sm font-semibold">
            {testimonial.name}
          </span>
          <span className="text-muted-foreground text-xs">
            {testimonial.date}
          </span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction = "left",
  duration = 30,
}: {
  testimonials: (typeof TESTIMONIALS)[number][];
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-5"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <section className="bg-warm-bg overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-primary text-center font-serif text-3xl italic md:text-4xl">
          Our Testimonials
        </h2>
        <p className="text-muted-foreground mt-2 mb-10 text-center">
          Check out our reviews to learn what our patients say about us!
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="from-warm-bg pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent md:w-40" />
        <div className="from-warm-bg pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l to-transparent md:w-40" />

        <div className="space-y-5">
          <MarqueeRow
            testimonials={doubledTestimonials}
            direction="left"
            duration={isMobile ? 18 : 35}
          />
          <MarqueeRow
            testimonials={doubledReversed}
            direction="right"
            duration={isMobile ? 20 : 40}
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/search?q=Perfected+Smiles+Rochelle+Park+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-brown hover:bg-brand-primary inline-block rounded-md px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors"
        >
          Read Patient Reviews
        </a>
      </div>
    </section>
  );
};
