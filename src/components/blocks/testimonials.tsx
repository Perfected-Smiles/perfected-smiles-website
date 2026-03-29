"use client";

import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials = () => {
  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-primary text-center italic">
          Our Testimonials
        </h2>
        <p className="text-muted-foreground text-center mt-2">
          Check out our reviews to learn what our patients say about us!
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Rating summary - left side */}
          <div className="flex flex-col items-center md:items-start shrink-0">
            <span className="text-lg font-bold tracking-wide">EXCELLENT</span>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground mt-1">
              Based on reviews
            </span>
            <span className="text-sm font-semibold mt-0.5">Google</span>
          </div>

          {/* Carousel - right side */}
          <div className="w-full min-w-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">
                          {testimonial.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {testimonial.date}
                        </span>
                      </div>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-4 text-yellow-400 fill-yellow-400"
                            />
                          ),
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {testimonial.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </Carousel>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 mt-8"
          >
            Leave Us A Review
          </a>
        </div>
      </div>
    </section>
  );
};
