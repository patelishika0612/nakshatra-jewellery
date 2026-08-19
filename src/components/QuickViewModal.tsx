import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, X } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { whatsappLink, productEnquiryMessage } from '@/utils/whatsapp';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { has, toggle } = useWishlist();

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[75] bg-charcoal-950/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[76] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-ivory md:grid-cols-2"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close quick view"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center bg-ivory/80 text-charcoal-700 backdrop-blur-sm transition-colors hover:text-gold-700"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-square bg-ivory-100 md:aspect-auto">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-4 p-7 lg:p-10">
                <p className="eyebrow">
                  {product.material} · {product.category}
                </p>
                <h3 className="font-heading text-2xl text-charcoal-900 lg:text-3xl">
                  {product.name}
                </h3>
                <p className="font-body text-lg text-charcoal-700">
                  {formatPrice(product.price)}
                </p>
                <p className="font-body text-sm leading-relaxed text-charcoal-600">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                    className="btn-primary"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    onClick={() => toggle(product)}
                    aria-label="Toggle wishlist"
                    className="btn-outline !px-4"
                  >
                    <Heart
                      className="h-4 w-4"
                      fill={has(product.id) ? '#b0893a' : 'none'}
                      stroke={has(product.id) ? '#b0893a' : 'currentColor'}
                    />
                  </button>
                  <a
                    href={whatsappLink(productEnquiryMessage(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="link-underline mt-2 self-start font-body text-xs uppercase tracking-[0.2em] text-charcoal-600"
                >
                  View Full Details
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
