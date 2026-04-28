import { Phone, MapPin, Clock } from "lucide-react";

import { SITE_CONFIG, OPENING_HOURS } from "@/lib/constants";

export function Contact() {
  return (
    <section className="bg-warm-bg py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-brand-primary text-xs font-semibold tracking-[3px] uppercase">
            Visit Perfected Smiles
          </span>
          <h2 className="text-brand-brown mt-3 font-serif text-3xl font-bold md:text-4xl">
            Schedule Care in Rochelle Park
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border-border flex flex-col items-center rounded-lg border bg-white p-7 text-center shadow-sm">
            <div className="bg-brand-primary/10 mb-4 rounded-md p-4">
              <Phone className="text-brand-primary size-6" />
            </div>
            <h3 className="text-brand-brown mb-2 font-serif text-lg font-semibold">
              Phone
            </h3>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>

          <div className="border-border flex flex-col items-center rounded-lg border bg-white p-7 text-center shadow-sm">
            <div className="bg-brand-primary/10 mb-4 rounded-md p-4">
              <MapPin className="text-brand-primary size-6" />
            </div>
            <h3 className="text-brand-brown mb-2 font-serif text-lg font-semibold">
              Address
            </h3>
            <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
          </div>

          <div className="border-border flex flex-col items-center rounded-lg border bg-white p-7 text-center shadow-sm">
            <div className="bg-brand-primary/10 mb-4 rounded-md p-4">
              <Clock className="text-brand-primary size-6" />
            </div>
            <h3 className="text-brand-brown mb-2 font-serif text-lg font-semibold">
              Opening Hours
            </h3>
            <div className="text-muted-foreground space-y-1 text-sm">
              {OPENING_HOURS.map((item) => (
                <div key={item.day}>
                  <span className="font-medium">{item.day}:</span> {item.hours}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
