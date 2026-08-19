import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { products } from '@/data/products';
import type { Product } from '@/types';

interface SearchContextValue {
  isOpen: boolean;
  query: string;
  results: Product[];
  openSearch: () => void;
  closeSearch: () => void;
  setQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) =>
        [p.name, p.category, p.material, p.collection]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const openSearch = useCallback(() => {
    setQuery('');
    setIsOpen(true);
  }, []);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  return (
    <SearchContext.Provider
      value={{ isOpen, query, results, openSearch, closeSearch, setQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within SearchProvider');
  return ctx;
}
