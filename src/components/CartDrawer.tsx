import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    itemCount,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[65] bg-charcoal-950/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[66] flex h-full w-full max-w-md flex-col bg-ivory"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-charcoal-900/10 px-6 py-5">
              <h2 className="font-heading text-xl text-charcoal-900">
                Your Cart{' '}
                <span className="font-body text-sm text-charcoal-500">
                  ({itemCount})
                </span>
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="text-charcoal-600 transition-colors hover:text-gold-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-charcoal-300" />
                <p className="font-heading text-xl text-charcoal-700">
                  Your cart is empty
                </p>
                <Link
                  to="/collections"
                  onClick={closeCart}
                  className="btn-outline"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="divide-y divide-charcoal-900/10">
                    {items.map((item) => (
                      <li
                        key={item.product.id}
                        className="flex gap-4 py-5"
                      >
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="shrink-0"
                        >
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-24 w-20 object-cover"
                          />
                        </Link>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-3">
                            <Link
                              to={`/product/${item.product.id}`}
                              onClick={closeCart}
                              className="font-heading text-base text-charcoal-900 hover:text-gold-700"
                            >
                              {item.product.name}
                            </Link>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              aria-label={`Remove ${item.product.name}`}
                              className="text-charcoal-400 transition-colors hover:text-gold-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-1 font-body text-xs text-charcoal-500">
                            {item.product.material} · {item.product.category}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-3">
                            <div className="flex items-center border border-charcoal-900/20">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                                aria-label="Decrease quantity"
                                className="px-2 py-1.5 text-charcoal-700 hover:text-gold-700"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 font-body text-sm">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                                aria-label="Increase quantity"
                                className="px-2 py-1.5 text-charcoal-700 hover:text-gold-700"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="font-body text-sm text-charcoal-900">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-charcoal-900/10 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm uppercase tracking-[0.2em] text-charcoal-600">
                      Subtotal
                    </span>
                    <span className="font-heading text-xl text-charcoal-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs text-charcoal-400">
                    Taxes and shipping calculated at checkout.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <button className="btn-primary w-full">Checkout</button>
                    <button
                      type="button"
                      onClick={closeCart}
                      className="text-center font-body text-xs uppercase tracking-[0.2em] text-charcoal-600 hover:text-gold-700"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
