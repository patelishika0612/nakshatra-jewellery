import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { collectionCards } from '@/config/site';

export default function Collections() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-lux-wide">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <p className="eyebrow">The Edit</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl text-charcoal-900 lg:text-5xl">
            Collections
          </h2>
          <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-charcoal-600">
            An evolving curation of gold, diamond and silver — each piece
            composed with an editorial eye.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {collectionCards.map((card, i) => {
            const span =
              card.span === 'wide'
                ? 'md:col-span-4 md:row-span-1'
                : card.span === 'tall'
                  ? 'md:col-span-2 md:row-span-2'
                  : 'md:col-span-2';
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden ${span}`}
              >
                <Link to={card.href} className="block h-full">
                  <div className={`relative h-full w-full ${card.span === 'tall' ? 'min-h-[420px] md:min-h-full' : 'min-h-[280px] md:min-h-[280px]'}`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-charcoal-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                      <p className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-gold-300">
                        {card.subtitle}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <h3 className="font-heading text-2xl text-ivory lg:text-3xl">
                          {card.title}
                        </h3>
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-ivory/40 text-ivory transition-all duration-500 group-hover:bg-gold-500 group-hover:text-charcoal-950 group-hover:border-gold-500">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
