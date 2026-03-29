import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-brown text-center">
          Comprehensive Dental Care for Every Smile
        </h2>
        <p className="text-muted-foreground text-center mt-3 text-sm md:text-base max-w-2xl mx-auto">
          From preventive care to advanced cosmetic treatments — we provide complete dental services
          under one roof
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-brand-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center" />
              <h3 className="font-serif text-lg font-semibold text-brand-brown">{service.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{service.shortDescription}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-block bg-brand-brown text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View All Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
