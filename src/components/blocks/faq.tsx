"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ = () => {
  const leftColumn = FAQ_ITEMS.slice(0, 2);
  const rightColumn = FAQ_ITEMS.slice(2, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-brown text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {/* Left column */}
          <div>
            <Accordion type="single" collapsible>
              {leftColumn.map((item, i) => (
                <AccordionItem key={i} value={`left-${i}`}>
                  <AccordionTrigger className="font-serif text-base md:text-lg text-brand-brown font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column */}
          <div>
            <Accordion type="single" collapsible>
              {rightColumn.map((item, i) => (
                <AccordionItem key={i} value={`right-${i}`}>
                  <AccordionTrigger className="font-serif text-base md:text-lg text-brand-brown font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
