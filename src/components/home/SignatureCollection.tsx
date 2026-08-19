import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import ButtonLink from '@/components/ButtonLink';
import { products } from '@/data/products';
import type { Product } from '@/types';

export default function SignatureCollection() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <section className="bg-ivory-50 py-24 lg:py-32">
      <div className="container-lux">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <p className="eyebrow">Curated Selection</p>
          <h2 className="mt-4 font-heading text-4xl text-charcoal-900 lg:text-5xl">
            The Signature Collection
          </h2>
          <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-charcoal-600">
            A considered edit of pieces that define the Nakshatra aesthetic —
            each one made to be worn, treasured and passed on.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3 lg:gap-9">
          {featured.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onQuickView={setQuickView}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <ButtonLink to="/collections" variant="outline" icon>
            View All Pieces
          </ButtonLink>
        </div>
      </div>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}
