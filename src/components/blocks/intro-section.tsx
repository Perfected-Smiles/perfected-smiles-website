import { Logos } from "./logos";

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-brand-primary font-serif text-3xl font-bold md:text-4xl">
          Your Ideal Smile, Our Priority
        </h2>

        <div className="h-6" />

        <p className="text-muted-foreground text-base tracking-wide md:text-lg">
          Experience compassionate, advanced dental care in a comfortable,
          welcoming environment.
        </p>

        <div className="h-4" />

        <p className="text-muted-foreground text-sm leading-relaxed tracking-wide md:text-base">
          Our dental practice focuses on providing quality dental care with a
          personal touch for patients and families seeking a dentist near
          Rochelle Park. We understand that every patient has unique needs,
          which is why our dentist and dental team take time to review your oral
          health, discuss concerns like tooth pain or damaged teeth, and develop
          a treatment plan that fits your goals and budget.
        </p>

        <div className="h-3" />

        <p className="text-muted-foreground text-sm leading-relaxed tracking-wide md:text-base">
          We also understand that dental insurance and treatment costs are
          important considerations for many patients. Our front desk staff can
          help review insurance options and answer questions about benefits,
          payment options, and treatment planning. Our goal is to create a
          welcoming environment where patients across Bergen County feel
          supported while receiving professional dental care.
        </p>

        <div className="h-8" />

        <Logos heading="We Accept Most Major Insurance Plans" />
      </div>
    </section>
  );
};
