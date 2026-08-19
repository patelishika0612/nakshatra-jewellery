import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';
import { stats } from '@/config/site';

export default function DiamondSection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="container-lux-wide">
        {/* Cinematic full image */}
        <Reveal className="relative overflow-hidden">
          <img
            src={images.editorial.diamondWide}
            alt="Diamond jewellery editorial"
            loading="lazy"
            className="aspect-[16/10] w-full object-cover lg:aspect-[16/7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-12">
            <p className="eyebrow text-gold-300">The Diamond Story</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl text-ivory lg:text-5xl">
              Where Every Diamond Tells a Story.
            </h2>
          </div>
        </Reveal>

        {/* Story + stats */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-body text-base leading-relaxed text-charcoal-700">
              A diamond is more than a stone — it is a moment made permanent.
              We select each one for its brilliance and character, then set it
              with a restraint that lets the light speak. From solitaires that
              mark a promise to cascading necklaces that crown an evening, every
              diamond piece is composed to be remembered.
            </p>
            <div className="mt-8">
              <ButtonLink to="/diamonds" variant="outline" icon>
                Discover Diamonds
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-3 gap-6 border-t border-charcoal-900/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-heading text-3xl text-charcoal-900 lg:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 font-body text-[0.7rem] uppercase tracking-[0.2em] text-charcoal-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-body text-[0.65rem] uppercase tracking-[0.2em] text-charcoal-400">
              Sample figures — replace with verified data.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
