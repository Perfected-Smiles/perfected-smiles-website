import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-white text-center">
          Why Patients Choose Us
        </h2>
        <p className="text-white/70 text-center mt-3 text-sm md:text-base max-w-2xl mx-auto">
          We combine advanced technology with patient-focused comfort to deliver
          an exceptional dental experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-20 h-20 bg-white/15 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
