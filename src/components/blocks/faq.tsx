"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-brown text-center font-serif text-2xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2 mb-10 text-center">
          Find answers to common questions about our dental services.
        </p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border/70 rounded-lg border bg-white px-6 transition-shadow data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-brand-brown hover:text-brand-primary text-base font-medium transition-colors hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-brand-brown hover:text-brand-primary font-medium underline underline-offset-4 transition-colors"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
