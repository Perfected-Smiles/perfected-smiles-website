import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-brand-primary relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="flex-1 max-w-2xl">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
            About Perfected Smiles
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
            At Perfected Smiles, our dental office focuses on helping patients maintain strong oral
            health through personalized dental care and a wide range of dental services. Patients
            searching for a dentist in Boston often want a dental practice that listens to their
            concerns and provides treatment options that fit their unique needs.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
            We provide many dental services under one roof, allowing patients to address concerns
            such as tooth pain, missing teeth, damaged teeth, and routine dental care in one place.
            From dental cleaning and preventive services to treatments like dental crowns, dentures,
            dental implants, and Invisalign, our dental office focuses on helping patients maintain
            their oral health and restore their smile.
          </p>
          <Link
            href="/about"
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mt-6"
          >
            Learn More About Us
          </Link>
        </div>
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/perfectedsmiles-staff.jpg"
              alt="Perfected Smiles staff"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
