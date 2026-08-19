import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';
import { products } from '@/data/products';
import { useState, type ReactNode } from 'react';
import type { Product } from '@/types';

interface MaterialPageProps {
  material: 'Gold' | 'Diamond' | 'Silver';
  eyebrow: string;
  title: ReactNode;
  description: string;
  heading: string;
  body: string;
  heroImage: string;
  editorialImage: string;
  ctaTo: string;
  ctaLabel: string;
  keywords: string;
}

export default function MaterialPage({
  material,
  eyebrow,
  title,
  description,
  heading,
  body,
  heroImage,
  editorialImage,
  ctaTo,
  ctaLabel,
  keywords,
}: MaterialPageProps) {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const list = products.filter((p) => p.material === material);

  return (
    <>
      <Seo
        title={`${material} Jewellery | Nakshatra Elite Diamond Jewels`}
        description={description}
        keywords={keywords}
        image={heroImage}
      />
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={heroImage}
      />

      {/* Editorial intro */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-lux-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={editorialImage}
                alt={`${material} jewellery editorial`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-4 font-heading text-3xl text-charcoal-900 lg:text-5xl">
                {heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
                {body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-ivory-50 pb-24 pt-4 lg:pb-32">
        <div className="container-lux">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">The {material} Edit</p>
            <h2 className="mt-3 font-heading text-3xl text-charcoal-900 lg:text-4xl">
              {material} Pieces
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3 lg:gap-9">
            {list.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onQuickView={setQuickView}
              />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonLink to={ctaTo} variant="outline" icon>
              {ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
