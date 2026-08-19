import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  ShoppingBag,
  Calendar,
  Check,
  ChevronLeft,
  Truck,
  RotateCcw,
  BadgeCheck,
  Gem,
} from 'lucide-react';
import {
  getProductById,
  getRelatedProducts,
  formatPrice,
} from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { whatsappLink, productEnquiryMessage } from '@/utils/whatsapp';
import Seo from '@/components/Seo';
import ButtonLink from '@/components/ButtonLink';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { site } from '@/config/site';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addToCart } = useCart();
  const { has, toggle } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-ivory px-6 text-center">
        <h1 className="font-heading text-3xl text-charcoal-900">
          Piece not found
        </h1>
        <p className="font-body text-sm text-charcoal-600">
          The piece you are looking for may have moved or sold.
        </p>
        <ButtonLink to="/collections" variant="outline" icon>
          Back to Collections
        </ButtonLink>
      </div>
    );
  }

  const wished = has(product.id);
  const related = getRelatedProducts(product, 3);

  const specs: { label: string; value: string }[] = [
    { label: 'Product Code', value: product.code },
    { label: 'Material', value: product.material },
    { label: 'Purity', value: product.purity },
    { label: 'Weight', value: product.weight },
    ...(product.diamondDetails
      ? [{ label: 'Diamond Details', value: product.diamondDetails }]
      : []),
    ...(product.size ? [{ label: 'Size', value: product.size }] : []),
    { label: 'Collection', value: product.collection },
    { label: 'Availability', value: product.availability },
  ];

  return (
    <>
      <Seo
        title={`${product.name} | Nakshatra Elite Diamond Jewels`}
        description={product.description}
        keywords={`${product.name}, ${product.material} ${product.category}, ${product.collection}`}
        image={product.images[0]}
      />

      <div className="bg-ivory pt-24 lg:pt-28">
        {/* Breadcrumb */}
        <div className="container-lux py-5">
          <Link
            to="/collections"
            className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-[0.2em] text-charcoal-500 hover:text-gold-700"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to Collections
          </Link>
        </div>

        <div className="container-lux grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div
              className="relative aspect-square cursor-zoom-in overflow-hidden bg-ivory-100"
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
            >
              <motion.img
                key={activeImage}
                src={product.images[activeImage]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: zoom ? 1.4 : 1 }}
                transition={{ opacity: { duration: 0.4 }, scale: { duration: 0.6, ease: 'easeOut' } }}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-20 w-16 overflow-hidden border ${
                      i === activeImage ? 'border-gold-600' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <p className="eyebrow">
              {product.material} · {product.category}
            </p>
            <h1 className="mt-3 font-heading text-3xl text-charcoal-900 lg:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 font-body text-lg text-charcoal-700">
              {formatPrice(product.price)}
            </p>
            <p className="mt-2 font-body text-xs text-charcoal-500">
              Code: {product.code}
            </p>

            <p className="mt-6 font-body text-sm leading-relaxed text-charcoal-600">
              {product.description}
            </p>

            {/* Specs */}
            <dl className="mt-8 grid grid-cols-1 gap-px border-y border-charcoal-900/10 sm:grid-cols-2">
              {specs.map((s) => (
                <div key={s.label} className="py-3 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 sm:even:border-charcoal-900/10">
                  <dt className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-charcoal-500">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-body text-sm text-charcoal-900">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="btn-primary"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
              <button
                type="button"
                onClick={() => {
                  addToCart(product);
                  window.location.href = '/collections';
                }}
                className="btn-outline"
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={() => toggle(product)}
                aria-label="Toggle wishlist"
                className="btn-outline !px-4"
              >
                <Heart
                  className="h-4 w-4"
                  fill={wished ? '#b0893a' : 'none'}
                  stroke={wished ? '#b0893a' : 'currentColor'}
                />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={whatsappLink(productEnquiryMessage(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <ButtonLink to="/appointment" variant="outline">
                <Calendar className="h-4 w-4" /> Book Appointment
              </ButtonLink>
            </div>

            {/* Trust */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-charcoal-900/10 pt-8 sm:grid-cols-2">
              {[
                { icon: Gem, title: 'Authenticity', text: 'Each piece is crafted with genuine materials.' },
                { icon: BadgeCheck, title: 'Hallmarking', text: 'Gold hallmarked where applicable.' },
                { icon: Truck, title: 'Shipping', text: 'Insured shipping on every order.' },
                { icon: RotateCcw, title: 'Returns', text: 'Returnable within 7 days, unworn.' },
              ].map((t) => (
                <div key={t.title} className="flex gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-charcoal-900">
                      {t.title}
                    </p>
                    <p className="mt-0.5 font-body text-xs leading-relaxed text-charcoal-500">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 font-body text-[0.65rem] uppercase tracking-[0.15em] text-charcoal-400">
              Certification available where applicable. Contact us for details.
            </p>
          </div>
        </div>
      </div>

      {/* Complete the look */}
      {related.length > 0 && (
        <section className="bg-ivory-50 py-20 lg:py-24">
          <div className="container-lux">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow">Complete the Look</p>
              <h2 className="mt-3 font-heading text-3xl text-charcoal-900 lg:text-4xl">
                You May Also Love
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3 lg:gap-9">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
