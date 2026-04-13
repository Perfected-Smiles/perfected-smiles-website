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
        <h2 className="font-serif text-2xl md:text-4xl text-brand-brown text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mt-2 mb-10">
          Find answers to common questions about our dental services.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl px-6 border border-border/50 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-base font-medium text-brand-brown hover:no-underline hover:text-brand-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-brand-brown font-medium underline underline-offset-4 hover:text-brand-primary transition-colors"
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
