import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-14 md:py-24">
        <div className="max-w-2xl flex-1">
          <span className="text-brand-primary text-xs font-semibold tracking-[3px] uppercase">
            Patient-first dentistry
          </span>
          <h2 className="text-brand-brown mt-3 font-serif text-3xl font-bold md:text-4xl">
            About Perfected Smiles
          </h2>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed md:text-base">
            At Perfected Smiles, our dental office focuses on helping patients
            maintain strong oral health through personalized dental care and a
            wide range of dental services. Patients searching for a dentist near
            Rochelle Park often want a dental practice that listens to their
            concerns and provides treatment options that fit their unique needs.
          </p>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
            We provide many dental services under one roof, allowing patients to
            address concerns such as tooth pain, missing teeth, damaged teeth,
            and routine dental care in one place. From dental cleaning and
            preventive services to treatments like dental crowns, dentures,
            dental implants, and Invisalign, our dental office focuses on
            helping patients maintain their oral health and restore their smile.
          </p>
          <Link
            href="/about"
            className="bg-brand-brown hover:bg-brand-primary mt-7 inline-block rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
        <div className="w-full flex-1">
          <div className="shadow-brand-brown/15 relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl">
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
