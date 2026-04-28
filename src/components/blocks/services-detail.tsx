import { SERVICES } from "@/lib/constants";

const leftColumnIndices = [2, 0, 4, 6];
const rightColumnIndices = [3, 1, 5, 7];

export function ServicesDetail() {
  const leftServices = leftColumnIndices.map((i) => SERVICES[i]);
  const rightServices = rightColumnIndices.map((i) => SERVICES[i]);

  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-brand-primary text-xs font-semibold tracking-[3px] uppercase">
            Complete care
          </span>
          <h2 className="text-brand-brown mt-3 font-serif text-3xl font-bold md:text-4xl">
            Dental Services for Health, Comfort, and Confidence
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            {leftServices.map((service) => (
              <div
                key={service.slug}
                className="border-border border-b pb-8 last:border-0"
              >
                <h3 className="text-brand-brown mb-2 font-serif text-xl">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {rightServices.map((service) => (
              <div
                key={service.slug}
                className="border-border border-b pb-8 last:border-0"
              >
                <h3 className="text-brand-brown mb-2 font-serif text-xl">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
