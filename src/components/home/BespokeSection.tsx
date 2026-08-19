import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';
import { bespokeSteps } from '@/config/site';

export default function BespokeSection() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-lux-wide">
        {/* Intro with image */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={images.editorial.bespoke}
                alt="Bespoke jewellery craftsmanship"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Bespoke Jewellery</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-charcoal-900 lg:text-6xl">
                Your Vision.
                <br />
                <span className="italic text-gold-700">Our Craftsmanship.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
                Bring us a memory, a sketch, or simply a feeling. We translate
                it into a one-of-one piece — designed with you and crafted by
                hand, from first conversation to final reveal.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10">
                <ButtonLink to="/bespoke" variant="primary" icon>
                  Create Your Jewellery
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">The Process</p>
          </Reveal>
          <ol className="grid grid-cols-1 gap-px bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-5">
            {bespokeSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 0.08} className="bg-ivory p-7 lg:p-8">
                <span className="font-heading text-3xl text-gold-600">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
