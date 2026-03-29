import { SERVICES } from "@/lib/constants";

const leftColumnIndices = [2, 0, 4, 6];
const rightColumnIndices = [3, 1, 5, 7];

export function ServicesDetail() {
  const leftServices = leftColumnIndices.map((i) => SERVICES[i]);
  const rightServices = rightColumnIndices.map((i) => SERVICES[i]);

  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-brown text-center mb-12">
          Discover Your Perfect Smile Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            {leftServices.map((service) => (
              <div key={service.slug}>
                <h3 className="font-serif text-xl text-brand-brown mb-2">
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
              <div key={service.slug}>
                <h3 className="font-serif text-xl text-brand-brown mb-2">
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
