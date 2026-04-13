"use client";

import Image from "next/image";

import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Dental Laser Technology",
    description:
      "Gentle, precise procedures with reduced discomfort and faster healing.",
    icon: "/why-patients-choose-us/about-section/fluent_laser-tool-20-regular.svg",
  },
  {
    title: "Dental Crowns and Bridges",
    description: "Restore strength and beauty to your smile.",
    icon: "/why-patients-choose-us/about-section/hugeicons_dental-tooth.svg",
  },
  {
    title: "Comfort-Focused Care",
    description:
      "Treatment chairs with built-in warmers and calming amenities for a relaxing visit.",
    icon: "/why-patients-choose-us/about-section/hugeicons_chair-barber.svg",
  },
  {
    title: "Flexible Sedation Options",
    description:
      "Sedation options to help nervous patients feel calm and comfortable.",
    icon: "/why-patients-choose-us/about-section/solar_meditation-linear.svg",
  },
];

export function WhyChooseUsAbout() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-[32px] font-medium leading-[1.2] text-brand-brown mb-[10px]">
            Why Patients{" "}
            <span className="text-brand-primary italic">Choose Us</span>
          </h2>
          <p className="text-[14px] font-light leading-[20px] tracking-wide text-brand-brown max-w-2xl">
            We combine advanced technology with patient-focused comfort to
            deliver
            <br className="hidden md:block" /> an exceptional dental experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-h-[175.6px] p-5 border-[0.8px] border-neutral-200 rounded-[20px] flex flex-col justify-start"
            >
              <div className="mb-[13px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h5 className="font-serif text-[20px] font-medium leading-[24px] text-brand-brown mb-[5px]">
                {item.title}
              </h5>
              <p className="text-[12px] font-light leading-[20px] tracking-wide text-brand-brown">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
