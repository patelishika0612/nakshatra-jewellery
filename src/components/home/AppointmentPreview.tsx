import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';

export default function AppointmentPreview() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-28 text-ivory lg:py-36">
      <div className="bg-grain absolute inset-0 opacity-40" />
      <div className="container-lux relative text-center">
        <Reveal>
          <p className="eyebrow text-gold-500">A Personal Experience</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-4xl text-ivory lg:text-6xl">
            Book a Private Appointment
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm leading-relaxed text-charcoal-200">
            Experience Nakshatra in person. Reserve a private viewing to
            explore our collections, discuss a bespoke commission, or find the
            piece that marks your moment.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/appointment" variant="gold" icon>
              Book an Appointment
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
