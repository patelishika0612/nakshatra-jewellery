import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, X } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

export default function WishlistDrawer() {
  const {
    items,
    isWishlistOpen,
    closeWishlist,
    remove,
  } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeWishlist}
            className="fixed inset-0 z-[65] bg-charcoal-950/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[66] flex h-full w-full max-w-md flex-col bg-ivory"
            aria-label="Wishlist"
          >
            <div className="flex items-center justify-between border-b border-charcoal-900/10 px-6 py-5">
              <h2 className="font-heading text-xl text-charcoal-900">
                Wishlist{' '}
                <span className="font-body text-sm text-charcoal-500">
                  ({items.length})
                </span>
              </h2>
              <button
                type="button"
                onClick={closeWishlist}
                aria-label="Close wishlist"
                className="text-charcoal-600 transition-colors hover:text-gold-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <Heart className="h-10 w-10 text-charcoal-300" />
                <p className="font-heading text-xl text-charcoal-700">
                  Your wishlist is empty
                </p>
                <Link
                  to="/collections"
                  onClick={closeWishlist}
                  className="btn-outline"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="divide-y divide-charcoal-900/10">
                  {items.map((product) => (
                    <li key={product.id} className="flex gap-4 py-5">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={closeWishlist}
                        className="shrink-0"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-24 w-20 object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-3">
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeWishlist}
                            className="font-heading text-base text-charcoal-900 hover:text-gold-700"
                          >
                            {product.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => remove(product.id)}
                            aria-label={`Remove ${product.name}`}
                            className="text-charcoal-400 transition-colors hover:text-gold-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-1 font-body text-xs text-charcoal-500">
                          {formatPrice(product.price)}
                        </p>
                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                          className="mt-auto inline-flex items-center gap-2 self-start pt-3 font-body text-xs uppercase tracking-[0.2em] text-charcoal-700 hover:text-gold-700"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
