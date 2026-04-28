import { BadgeCheck, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";

const items = [
  {
    icon: CalendarDays,
    label: "New Patients Welcome",
    value: "Easy online scheduling",
  },
  {
    icon: ShieldCheck,
    label: "Insurance Support",
    value: "Most major PPO plans accepted",
  },
  {
    icon: BadgeCheck,
    label: "Comfort-Focused Care",
    value: "Clear plans, modern treatment",
  },
  {
    icon: MapPin,
    label: "Rochelle Park Office",
    value: SITE_CONFIG.address,
  },
];

export function AppointmentHighlights() {
  return (
    <section className="border-border border-b bg-white">
      <div className="divide-border container grid grid-cols-1 divide-y py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex gap-3 px-4 py-5">
              <div className="bg-brand-primary/10 text-brand-primary flex size-10 shrink-0 items-center justify-center rounded-md">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-brand-brown text-sm font-semibold">
                  {item.label}
                </p>
                <p className="text-muted-foreground mt-1 text-sm leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
