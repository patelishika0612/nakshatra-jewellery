import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { testimonials } from '@/config/site';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const active = testimonials[index];

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-lux">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-4 font-heading text-4xl text-charcoal-900 lg:text-5xl">
            From Our Clients
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-8 w-8 text-gold-500" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <p className="font-heading text-2xl italic leading-relaxed text-charcoal-800 lg:text-3xl">
                “{active.quote}”
              </p>
              <footer className="mt-6">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-charcoal-900">
                  {active.name}
                </p>
                <p className="mt-1 font-body text-xs text-charcoal-500">
                  {active.location}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 transition-all duration-500 ${
                  i === index ? 'w-8 bg-gold-600' : 'w-4 bg-charcoal-300'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center font-body text-[0.6rem] uppercase tracking-[0.2em] text-charcoal-400">
          Sample testimonials — replace with verified customer reviews.
        </p>
      </div>
    </section>
  );
}
