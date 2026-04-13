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
        <p className="text-sm text-muted-foreground text-center mb-6">
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
          className="flex items-center gap-14 w-max hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          {doubledProviders.map((provider, index) => (
            <div
              key={`${provider.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={provider.logo}
                alt={provider.name}
                width={140}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
