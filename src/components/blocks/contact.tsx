import { Phone, MapPin, Clock } from "lucide-react";

import { SITE_CONFIG, OPENING_HOURS } from "@/lib/constants";

export function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Column */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-brand-primary/20 rounded-full p-4 mb-4">
              <Phone className="size-6 text-brand-primary" />
            </div>
            <h3 className="font-serif text-brand-brown text-lg font-semibold mb-2">
              Phone
            </h3>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Address Column */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-brand-primary/20 rounded-full p-4 mb-4">
              <MapPin className="size-6 text-brand-primary" />
            </div>
            <h3 className="font-serif text-brand-brown text-lg font-semibold mb-2">
              Address
            </h3>
            <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
          </div>

          {/* Opening Hours Column */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-brand-primary/20 rounded-full p-4 mb-4">
              <Clock className="size-6 text-brand-primary" />
            </div>
            <h3 className="font-serif text-brand-brown text-lg font-semibold mb-2">
              Opening Hours
            </h3>
            <div className="text-muted-foreground text-sm space-y-1">
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
