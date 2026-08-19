import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';

export default function GoldSection() {
  return (
    <section className="bg-charcoal-900 py-24 text-ivory lg:py-32">
      <div className="container-lux-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden">
            <img
              src={images.editorial.goldWide}
              alt="Gold jewellery editorial"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow text-gold-500">The Gold Atelier</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-ivory lg:text-6xl">
              Golden. Timeless.{' '}
              <span className="italic text-gold-300">Yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-200">
              From sculptural signets to heritage necklaces, our gold pieces
              are shaped by hand and finished with patience — jewellery made to
              be lived in and loved across generations.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 font-body text-sm text-charcoal-200">
              {['Rings', 'Necklaces', 'Earrings', 'Bangles'].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-px w-4 bg-gold-500" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <ButtonLink to="/gold" variant="gold" icon>
                Discover Gold
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Subtle gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="container-lux-wide mt-20 h-px origin-left bg-gold-500/40"
      />
    </section>
  );
}
