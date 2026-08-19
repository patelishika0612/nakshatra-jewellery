import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-28">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/30" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-charcoal-900" />}
      <div className="container-lux-wide relative z-10 pb-14 pt-20 text-ivory lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-gold-400"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl font-heading text-4xl text-ivory lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl font-body text-sm leading-relaxed text-ivory/80 lg:text-base"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
