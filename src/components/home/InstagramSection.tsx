import { Instagram } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/config/site';
import { images } from '@/config/images';

export default function InstagramSection() {
  return (
    <section className="bg-stone-100 py-24 lg:py-32">
      <div className="container-lux-wide">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow">Follow the Journey</p>
          <h2 className="mt-4 font-heading text-4xl text-charcoal-900 lg:text-5xl">
            Follow the Nakshatra Journey
          </h2>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-body text-sm text-charcoal-700 transition-colors hover:text-gold-700"
          >
            <Instagram className="h-4 w-4" /> {site.instagram}
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {images.instagram.map((post, i) => (
            <Reveal
              key={post.id}
              delay={(i % 6) * 0.06}
              className="group relative aspect-square overflow-hidden"
            >
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${post.alt} on Instagram`}
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 grid place-items-center bg-charcoal-950/0 transition-colors duration-500 group-hover:bg-charcoal-950/40">
                  <Instagram className="h-6 w-6 scale-0 text-ivory transition-transform duration-500 group-hover:scale-100" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
