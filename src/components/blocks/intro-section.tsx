import { Logos } from "./logos";

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-primary">
          Your Ideal Smile, Our Priority
        </h2>

        <div className="h-6" />

        <p className="text-base md:text-lg tracking-wide text-muted-foreground">
          Experience compassionate, advanced dental care in a comfortable,
          welcoming environment.
        </p>

        <div className="h-4" />

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
          Our dental practice focuses on providing quality dental care with a
          personal touch for patients and families seeking a dentist in Boston.
          We understand that every patient has unique needs, which is why our
          dentist and dental team take time to review your oral health, discuss
          concerns like tooth pain or damaged teeth, and develop a treatment
          plan that fits your goals and budget.
        </p>

        <div className="h-3" />

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
          We also understand that dental insurance and treatment costs are
          important considerations for many patients. Our front desk staff can
          help review insurance options and answer questions about benefits,
          payment options, and treatment planning. Our goal is to create a
          welcoming environment where patients in Boston feel supported while
          receiving professional dental care.
        </p>

        <div className="h-8" />

        <Logos heading="We Accept Most Major Insurance Plans" />
      </div>
    </section>
  );
};
