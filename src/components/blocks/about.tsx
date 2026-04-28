"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TEAM_MEMBERS } from "@/lib/constants";

export function About() {
  const doctor = TEAM_MEMBERS[0];
  const tabKeys = Object.keys(doctor.tabs) as Array<keyof typeof doctor.tabs>;
  const defaultTab = tabKeys[0];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            <div className="flex flex-shrink-0 flex-col items-center gap-4 md:w-64">
              <div className="bg-warm-bg ring-border relative h-56 w-56 overflow-hidden rounded-lg shadow-md ring-1 md:h-64 md:w-64">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(min-width: 768px) 256px, 224px"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-brand-brown font-serif text-xl font-semibold">
                  {doctor.name}
                </p>
                <p className="text-brand-primary text-sm">
                  {doctor.credentials}
                </p>
              </div>
            </div>

            {/* Right: Tabs (desktop) / Accordion (mobile) */}
            <div className="min-w-0 flex-1">
              {/* Desktop Tabs */}
              <div className="hidden md:block">
                <Tabs defaultValue={defaultTab}>
                  <TabsList className="border-brand-brown/20 mb-6 flex h-auto w-full flex-wrap gap-1 rounded-none border-b bg-transparent p-0">
                    {tabKeys.map((key) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="text-muted-foreground hover:text-brand-brown data-[state=active]:border-brand-brown data-[state=active]:text-brand-brown rounded-none border-b-2 border-transparent px-4 py-2.5 text-sm font-medium transition-colors data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        {key}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tabKeys.map((key) => (
                    <TabsContent key={key} value={key} className="mt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {doctor.tabs[key]}
                      </p>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              {/* Mobile Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible defaultValue={defaultTab}>
                  {tabKeys.map((key) => (
                    <AccordionItem key={key} value={key}>
                      <AccordionTrigger className="text-brand-brown text-base font-medium hover:no-underline">
                        {key}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {doctor.tabs[key]}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
