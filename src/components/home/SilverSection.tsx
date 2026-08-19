import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';

export default function SilverSection() {
  return (
    <section className="bg-stone-100 py-24 lg:py-32">
      <div className="container-lux-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">The Silver Edit</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-charcoal-900 lg:text-6xl">
              Modern Silver.
              <br />
              <span className="italic text-charcoal-500">Effortless Elegance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
              Clean lines, cool light and a quiet confidence. Our silver
              jewellery is made for everyday luxury — pieces that move with you
              and never ask for attention.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <ButtonLink to="/silver" variant="outline" icon>
                Discover Silver
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal className="order-first lg:order-last">
          <div className="relative overflow-hidden">
            <img
              src={images.editorial.silverWide}
              alt="Silver jewellery editorial"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
