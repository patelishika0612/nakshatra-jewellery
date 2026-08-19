import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { SearchProvider } from '@/context/SearchContext';

import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SearchOverlay from '@/components/SearchOverlay';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';

import HomePage from '@/pages/HomePage';
import CataloguePage from '@/pages/CataloguePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import GoldPage from '@/pages/GoldPage';
import DiamondsPage from '@/pages/DiamondsPage';
import SilverPage from '@/pages/SilverPage';
import BespokePage from '@/pages/BespokePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import AppointmentPage from '@/pages/AppointmentPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CataloguePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/gold" element={<GoldPage />} />
          <Route path="/diamonds" element={<DiamondsPage />} />
          <Route path="/silver" element={<SilverPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>
            <ScrollToTop />
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
