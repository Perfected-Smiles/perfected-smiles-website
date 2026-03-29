import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <section className="bg-brand-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-white text-center mb-12">
          Meet Our Dentist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="text-center max-w-sm">
              <div className="w-36 h-36 bg-white/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white">
                {member.name}
              </h3>
              <p className="text-white/80 text-sm mt-1">{member.credentials}</p>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                {member.shortBio}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
