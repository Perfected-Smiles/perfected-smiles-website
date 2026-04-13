"use client";

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
    <div className="w-[340px] shrink-0 bg-white rounded-2xl border border-border/50 shadow-sm p-6 relative overflow-hidden">
      <Quote className="absolute top-4 right-4 size-8 text-brand-primary/10" />
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-sm font-semibold text-brand-brown shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <span className="font-semibold text-sm text-brand-brown block">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted-foreground">
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
  return (
    <section className="bg-warm-bg py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-primary text-center italic">
          Our Testimonials
        </h2>
        <p className="text-muted-foreground text-center mt-2 mb-10">
          Check out our reviews to learn what our patients say about us!
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-warm-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-warm-bg to-transparent z-10 pointer-events-none" />

        <div className="space-y-5">
          <MarqueeRow
            testimonials={doubledTestimonials}
            direction="left"
            duration={35}
          />
          <MarqueeRow
            testimonials={doubledReversed}
            direction="right"
            duration={40}
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block bg-brand-brown text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Leave Us A Review
        </a>
      </div>
    </section>
  );
};
