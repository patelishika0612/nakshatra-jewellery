import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';

export default function AboutPreview() {
  return (
    <section className="bg-ivory-50 py-24 lg:py-32">
      <div className="container-lux-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden">
            <img
              src={images.editorial.aboutPortrait}
              alt="Nakshatra atelier — craftsmanship"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Maison</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-charcoal-900 lg:text-5xl">
              Crafted with Passion.
              <br />
              <span className="italic text-gold-700">Designed to Last Forever.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
              Nakshatra Elite Diamond Jewels is built on a devotion to
              craftsmanship, an eye for timeless design, and an attention to
              detail that borders on obsession. Every piece is an exercise in
              restraint — letting material, form and light do the speaking.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
              From the first sketch to the final polish, our focus is the same:
              jewellery worthy of the moments it will accompany.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <ButtonLink to="/about" variant="outline" icon>
                Our Story
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
