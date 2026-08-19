import { Gem, Sparkles, PencilRuler, HeartHandshake, BadgeCheck, Diamond } from 'lucide-react';
import type { ComponentType } from 'react';
import Reveal from '@/components/Reveal';
import { trustItems } from '@/config/site';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Gem,
  Sparkles,
  PencilRuler,
  HeartHandshake,
  BadgeCheck,
  Diamond,
};

export default function WhyNakshatra() {
  return (
    <section className="bg-charcoal-950 py-24 text-ivory lg:py-32">
      <div className="container-lux">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow text-gold-500">The Nakshatra Promise</p>
          <h2 className="mt-4 font-heading text-4xl text-ivory lg:text-5xl">
            Why Nakshatra
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-charcoal-700 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className="bg-charcoal-950 p-8 lg:p-10"
              >
                <Icon className="h-7 w-7 text-gold-500" />
                <h3 className="mt-5 font-heading text-xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-300">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-charcoal-500">
            Claims of hallmarking and certification apply where applicable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
