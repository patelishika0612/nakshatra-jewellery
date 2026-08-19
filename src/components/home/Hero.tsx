import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={images.hero.main}
          alt="Nakshatra Elite Diamond Jewels — editorial luxury jewellery"
          className="kenburns h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/30 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-lux-wide">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={item}
              className="eyebrow text-gold-400"
            >
              Nakshatra Elite Diamond Jewels
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 font-heading text-[2.8rem] leading-[1.05] text-ivory sm:text-5xl lg:text-7xl"
            >
              Timeless Brilliance.
              <br />
              <span className="italic text-gold-200">Crafted for You.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg font-body text-base leading-relaxed text-ivory/85 lg:text-lg"
            >
              Discover exquisite gold, diamond and silver jewellery crafted with
              precision, passion and timeless elegance.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <ButtonLink to="/collections" variant="primary" icon>
                Explore Collection
              </ButtonLink>
              <ButtonLink to="/appointment" variant="outline" className="!border-ivory/60 !text-ivory hover:!bg-ivory hover:!text-charcoal-900">
                Book an Appointment
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gold line accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 z-10 h-px w-full origin-left bg-gold-500/60"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-ivory/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[0.6rem] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="h-10 w-px overflow-hidden bg-ivory/20">
            <div className="scroll-indicator-line h-full w-full bg-gold-400" />
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
}
