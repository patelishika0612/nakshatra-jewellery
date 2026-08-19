import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useSearch } from '@/context/SearchContext';
import { formatPrice } from '@/data/products';

export default function SearchOverlay() {
  const { isOpen, query, results, setQuery, closeSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = '';
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeSearch]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-ivory/95 backdrop-blur-md"
        >
          <div className="container-lux pt-24 lg:pt-32">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Search</p>
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="text-charcoal-700 transition-colors hover:text-gold-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-8 flex items-center gap-4 border-b border-charcoal-900/20 pb-4"
            >
              <Search className="h-6 w-6 text-charcoal-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, material, collection..."
                aria-label="Search products"
                className="w-full bg-transparent font-heading text-2xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none lg:text-4xl"
              />
            </motion.div>

            <div className="mt-8">
              {query && results.length === 0 && (
                <p className="font-body text-sm text-charcoal-500">
                  No pieces found. Try another word.
                </p>
              )}
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {results.map((p) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={`/product/${p.id}`}
                        onClick={closeSearch}
                        className="group block"
                      >
                        <div className="aspect-[3/4] overflow-hidden bg-ivory-100">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="mt-3 font-heading text-lg text-charcoal-900">
                          {p.name}
                        </h4>
                        <p className="font-body text-xs text-charcoal-500">
                          {formatPrice(p.price)}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
