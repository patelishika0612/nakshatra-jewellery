import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { navLinks, site } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { itemCount, openCart } = useCart();
  const { count, openWishlist } = useWishlist();
  const { openSearch } = useSearch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const onHome = location.pathname === '/';
  const transparent = onHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,11,10,0.08)]'
        }`}
      >
        <div className="container-lux-wide flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" aria-label={site.brandFull}>
            <span
              className={`font-heading text-2xl tracking-[0.18em] transition-colors duration-500 lg:text-[1.7rem] ${
                transparent ? 'text-ivory' : 'text-charcoal-900'
              }`}
            >
              {site.brand.toUpperCase()}
            </span>
            <span
              className={`mt-0.5 font-body text-[0.55rem] uppercase tracking-[0.32em] transition-colors duration-500 ${
                transparent ? 'text-ivory/80' : 'text-gold-700'
              }`}
            >
              {site.brandSub}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold-600 after:transition-all after:duration-500 hover:after:w-full ${
                    transparent ? 'text-ivory/90 hover:text-ivory' : ''
                  } ${isActive ? 'after:w-full text-gold-700' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-5">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search"
              className={`transition-colors duration-300 ${
                transparent ? 'text-ivory hover:text-gold-300' : 'text-charcoal-800 hover:text-gold-700'
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openWishlist}
              aria-label={`Wishlist with ${count} items`}
              className={`relative transition-colors duration-300 ${
                transparent ? 'text-ivory hover:text-gold-300' : 'text-charcoal-800 hover:text-gold-700'
              }`}
            >
              <Heart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold-600 px-1 font-body text-[0.55rem] text-charcoal-950">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Cart with ${itemCount} items`}
              className={`relative transition-colors duration-300 ${
                transparent ? 'text-ivory hover:text-gold-300' : 'text-charcoal-800 hover:text-gold-700'
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold-600 px-1 font-body text-[0.55rem] text-charcoal-950">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden transition-colors duration-300 ${
                transparent ? 'text-ivory' : 'text-charcoal-900'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-charcoal-950 lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-heading text-xl tracking-[0.18em] text-ivory">
                {site.brand.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-ivory"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav
              className="flex flex-col gap-1 px-5 pt-8"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="block border-b border-charcoal-700 py-4 font-heading text-2xl text-ivory transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <p className="mt-10 px-5 font-body text-xs uppercase tracking-[0.3em] text-gold-500">
              {site.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
