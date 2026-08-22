import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import WhyNakshatra from '@/components/home/WhyNakshatra';
import { images } from '@/config/images';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About | Nakshatra Elite Diamond Jewels"
        description="Crafted with passion and designed to last forever. Discover the Nakshatra philosophy of craftsmanship, elegance and timeless design."
        keywords="Nakshatra Elite Diamond Jewels, about, jewellery craftsmanship, fine jewellery India"
        image={images.editorial.aboutPortrait}
      />
      <PageHeader
        eyebrow="The Maison"
        title={
          <>
            Crafted with Passion.
            <br />
            <span className="italic text-gold-300">Designed to Last Forever.</span>
          </>
        }
        description="A devotion to craftsmanship, an eye for timeless design, and an attention to detail that borders on obsession."
        image={images.editorial.atelier}
      />

      {/* Story */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-lux-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={images.editorial.aboutPortrait}
                alt="Nakshatra atelier craftsmanship"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="mt-4 font-heading text-3xl text-charcoal-900 lg:text-5xl">
                jewellery worthy of the moments it accompanies.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-body text-sm leading-relaxed text-charcoal-600">
                At Nakshatra Elite Diamond Jewels, we believe jewellery is more
                than adornment — it is a keeper of memory. Each piece is shaped
                by skilled hands, finished with patience, and composed with an
                editorial restraint that lets material, form and light speak.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-600">
                Our work spans gold, diamond and silver — and a bespoke service
                that turns a personal vision into a one-of-one piece. From the
                first sketch to the final polish, our focus never shifts: to
                make jewellery that endures, in beauty and in meaning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-stone-100 py-20 lg:py-28">
        <div className="container-lux">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">What Guides Us</p>
            <h2 className="mt-3 font-heading text-3xl text-charcoal-900 lg:text-4xl">
              The Principles of the House
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Craftsmanship', text: 'Every piece is made by hand with precision and patience.' },
              { title: 'Elegance', text: 'Design that endures beyond season or trend.' },
              { title: 'Attention to Detail', text: 'The smallest elements considered with equal care.' },
              { title: 'Timeless Design', text: 'Jewellery made to be worn now and passed on later.' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="bg-stone-100 p-8 lg:p-10">
                <h3 className="font-heading text-xl text-charcoal-900">{p.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-600">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <WhyNakshatra /> */}

      <section className="bg-ivory py-20 text-center lg:py-24">
        <Reveal>
          <h2 className="font-heading text-3xl text-charcoal-900 lg:text-4xl">
            Begin Your Nakshatra Story
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/collections" variant="primary" icon>
              Explore Collection
            </ButtonLink>
            <ButtonLink to="/appointment" variant="outline">
              Book an Appointment
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
