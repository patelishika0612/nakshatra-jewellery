import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  index?: number;
}

export default function ProductCard({
  product,
  onQuickView,
  index = 0,
}: ProductCardProps) {
  const { has, toggle } = useWishlist();
  const wished = has(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden bg-ivory-100">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Second image cross-fade on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggle(product)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/80 text-charcoal-900 backdrop-blur-sm transition-all duration-300 hover:bg-ivory"
        >
          <Heart
            className="h-4 w-4"
            fill={wished ? '#b0893a' : 'none'}
            stroke={wished ? '#b0893a' : 'currentColor'}
          />
        </button>

        {/* Quick view */}
        {onQuickView && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-center pb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="inline-flex items-center gap-2 bg-charcoal-900/90 px-5 py-2.5 font-body text-[0.65rem] uppercase tracking-[0.25em] text-ivory backdrop-blur-sm transition-colors hover:bg-charcoal-800"
            >
              <Eye className="h-3.5 w-3.5" /> Quick View
            </button>
          </div>
        )}

        {product.isNew && (
          <span className="absolute left-3 top-3 bg-gold-600 px-2.5 py-1 font-body text-[0.6rem] uppercase tracking-[0.2em] text-charcoal-950">
            New
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <p className="eyebrow">{product.material} · {product.category}</p>
        <h3 className="font-heading text-xl text-charcoal-900">
          <Link to={`/product/${product.id}`} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="font-body text-sm tracking-wide text-charcoal-600">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.article>
  );
}
