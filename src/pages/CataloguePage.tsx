import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import {
  products,
  categories,
  materials,
  occasions,
  collectionsList,
} from '@/data/products';
import type { Product } from '@/types';

type SortKey = 'featured' | 'newest' | 'price-asc' | 'price-desc';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const priceBands = [
  { value: '0-10000', label: 'Under ₹10,000' },
  { value: '10000-50000', label: '₹10,000 – ₹50,000' },
  { value: '50000-200000', label: '₹50,000 – ₹2,00,000' },
  { value: '200000-10000000', label: 'Above ₹2,00,000' },
];

export default function CataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: searchParams.get('material') || '',
    occasion: '',
    collection: '',
    price: '',
  });
  const [sort, setSort] = useState<SortKey>('featured');
  const [query, setQuery] = useState('');

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setFilters((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const updateCategory = (cat: string) => {
    setFilters((f) => ({ ...f, category: cat }));
    const next = new URLSearchParams(searchParams);
    if (cat) next.set('category', cat);
    else next.delete('category');
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.category)
      list = list.filter((p) => p.category === filters.category);
    if (filters.material)
      list = list.filter((p) => p.material === filters.material);
    if (filters.occasion)
      list = list.filter((p) => p.occasion === filters.occasion);
    if (filters.collection)
      list = list.filter((p) => p.collection === filters.collection);
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      list = list.filter((p) => p.price >= min && p.price <= max);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        [p.name, p.category, p.material, p.collection]
          .join(' ')
          .toLowerCase()
          .includes(q)
      );
    }
    switch (sort) {
      case 'newest':
        list.sort((a, b) => Number(b.isNew ?? 0) - Number(a.isNew ?? 0));
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        list.sort((a, b) => Number(b.featured ?? 0) - Number(a.featured ?? 0));
    }
    return list;
  }, [filters, sort, query]);

  const resetAll = () => {
    setFilters({ category: '', material: '', occasion: '', collection: '', price: '' });
    setQuery('');
    setSearchParams({}, { replace: true });
  };

  const FilterGroup = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="border-b border-charcoal-900/10 py-5">
      <h3 className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-charcoal-700">
        {label}
      </h3>
      <ul className="mt-3 space-y-2">
        <li>
          <button
            type="button"
            onClick={() => onChange('')}
            className={`font-body text-sm transition-colors ${
              !value ? 'text-gold-700' : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            All
          </button>
        </li>
        {options.map((o) => (
          <li key={o.value}>
            <button
              type="button"
              onClick={() => onChange(o.value)}
              className={`font-body text-sm transition-colors ${
                value === o.value
                  ? 'text-gold-700'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {o.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Seo
        title="Collections | Nakshatra Elite Diamond Jewels"
        description="Explore our full catalogue of gold, diamond and silver jewellery — rings, earrings, necklaces, bracelets, pendants and bangles."
      />
      <PageHeader
        eyebrow="The Catalogue"
        title="Collections"
        description="Browse the full Nakshatra catalogue. Filter by material, category, occasion and collection to find your piece."
        image="https://images.pexels.com/photos/36772490/pexels-photo-36772490.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
      />

      <div className="bg-ivory py-14 lg:py-20">
        <div className="container-lux-wide grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          {/* Filters sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between lg:hidden">
              <button
                type="button"
                onClick={() => setFiltersOpen((o) => !o)}
                className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-charcoal-800"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <button
                type="button"
                onClick={resetAll}
                className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500"
              >
                Reset
              </button>
            </div>

            <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="hidden items-center justify-between lg:flex">
                <h2 className="font-heading text-xl text-charcoal-900">Filter</h2>
                <button
                  type="button"
                  onClick={resetAll}
                  className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500 hover:text-gold-700"
                >
                  Reset
                </button>
              </div>
              <FilterGroup
                label="Category"
                options={categories}
                value={filters.category}
                onChange={(v) => updateCategory(v)}
              />
              <FilterGroup
                label="Material"
                options={materials}
                value={filters.material}
                onChange={(v) => setFilters((f) => ({ ...f, material: v }))}
              />
              <FilterGroup
                label="Occasion"
                options={occasions}
                value={filters.occasion}
                onChange={(v) => setFilters((f) => ({ ...f, occasion: v }))}
              />
              <FilterGroup
                label="Collection"
                options={collectionsList}
                value={filters.collection}
                onChange={(v) => setFilters((f) => ({ ...f, collection: v }))}
              />
              <FilterGroup
                label="Price"
                options={priceBands}
                value={filters.price}
                onChange={(v) => setFilters((f) => ({ ...f, price: v }))}
              />
            </div>
          </aside>

          {/* Grid */}
          <div>
            {/* Toolbar */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 border-b border-charcoal-900/15 pb-2 sm:border-0 sm:pb-0">
                <Search className="h-4 w-4 text-charcoal-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search within catalogue..."
                  aria-label="Search within catalogue"
                  className="w-full bg-transparent font-body text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none sm:w-64"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4 text-charcoal-400" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="border-b border-charcoal-900/20 bg-transparent py-1 font-body text-sm text-charcoal-900 focus:border-gold-600 focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">
              {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
            </p>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <p className="font-heading text-2xl text-charcoal-700">
                  No pieces match your selection.
                </p>
                <button onClick={resetAll} className="btn-outline">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3 lg:gap-9">
                {filtered.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    onQuickView={setQuickView}
                  />
                ))}
              </div>
            )}

            <Reveal className="mt-16 border-t border-charcoal-900/10 pt-8 text-center">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">
                Can't find what you're looking for?{' '}
                <a href="/bespoke" className="text-gold-700 hover:underline">
                  Commission a bespoke piece
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
