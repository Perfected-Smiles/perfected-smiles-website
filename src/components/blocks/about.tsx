"use client";

import { User } from "lucide-react";

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
            {/* Left: Photo placeholder */}
            <div className="flex flex-shrink-0 flex-col items-center gap-4 md:w-64">
              <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full bg-[#c5b9a8] shadow-md md:h-64 md:w-64">
                <User className="h-24 w-24 text-white/70 md:h-28 md:w-28" />
              </div>
              <div className="text-center">
                <p className="font-serif text-xl font-semibold text-brand-brown">
                  {doctor.name}
                </p>
                <p className="text-sm text-brand-primary">{doctor.credentials}</p>
              </div>
            </div>

            {/* Right: Tabs (desktop) / Accordion (mobile) */}
            <div className="min-w-0 flex-1">
              {/* Desktop Tabs */}
              <div className="hidden md:block">
                <Tabs defaultValue={defaultTab}>
                  <TabsList className="mb-6 flex h-auto w-full flex-wrap gap-1 rounded-none border-b border-brand-brown/20 bg-transparent p-0">
                    {tabKeys.map((key) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="rounded-none border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-brown data-[state=active]:border-brand-brown data-[state=active]:bg-transparent data-[state=active]:text-brand-brown data-[state=active]:shadow-none"
                      >
                        {key}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tabKeys.map((key) => (
                    <TabsContent key={key} value={key} className="mt-0">
                      <p className="leading-relaxed text-muted-foreground">
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
                      <AccordionTrigger className="text-base font-medium text-brand-brown hover:no-underline">
                        {key}
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed text-muted-foreground">
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
