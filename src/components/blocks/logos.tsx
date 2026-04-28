"use client";

import Image from "next/image";

import { INSURANCE_PROVIDERS } from "@/lib/constants";

type LogosProps = {
  heading?: string;
};

const doubledProviders = [...INSURANCE_PROVIDERS, ...INSURANCE_PROVIDERS];

export const Logos = ({ heading }: LogosProps) => {
  return (
    <div className="py-8">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {heading && (
        <p className="text-muted-foreground mb-6 text-center text-sm">
          {heading}
        </p>
      )}

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center gap-14 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          {doubledProviders.map((provider, index) => (
            <div
              key={`${provider.name}-${index}`}
              className="flex flex-shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {"logo" in provider && provider.logo ? (
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain md:h-12"
                />
              ) : (
                <span className="border-brand-brown/15 text-brand-brown inline-flex h-12 min-w-36 items-center justify-center rounded-md border bg-white px-5 text-center text-sm font-semibold shadow-sm">
                  {provider.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
