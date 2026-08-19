export type Material = 'Gold' | 'Diamond' | 'Silver';

export type Category =
  | 'Rings'
  | 'Earrings'
  | 'Necklaces'
  | 'Bracelets'
  | 'Pendants'
  | 'Bangles';

export type Occasion = 'Bridal' | 'Festive' | 'Everyday' | 'Formal' | 'Gifting';

export type Collection = 'Signature' | 'Heritage' | 'Aurora' | 'Celeste' | 'Eternal';

export interface Product {
  id: string;
  name: string;
  code: string;
  category: Category;
  material: Material;
  price: number;
  images: string[];
  description: string;
  weight: string;
  purity: string;
  diamondDetails?: string;
  size?: string;
  availability: 'In Stock' | 'Made to Order' | 'Limited Edition';
  collection: Collection;
  occasion: Occasion;
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  /** SAMPLE — replace with verified customer reviews. */
  sample: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  /** SAMPLE — replace with verified business statistics. */
  sample: boolean;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: string;
}

export interface BespokeStep {
  number: string;
  title: string;
  description: string;
}

export interface CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
}
