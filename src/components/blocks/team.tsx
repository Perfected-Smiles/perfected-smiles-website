import Image from "next/image";
import Link from "next/link";

import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  return (
    <section className="bg-brand-brown py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-[3px] uppercase">
            Experienced care
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Meet Our Dentist
          </h2>
        </div>
        <div className="flex justify-center">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="max-w-sm text-center">
              <div className="relative mx-auto mb-5 h-44 w-44 overflow-hidden rounded-lg bg-white/20 shadow-xl ring-1 shadow-black/20 ring-white/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-white/80">{member.credentials}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {member.shortBio}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="text-brand-brown hover:bg-brand-gold inline-block rounded-md bg-white px-6 py-3 text-sm font-medium transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
