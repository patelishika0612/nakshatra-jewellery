import type { Product } from '@/types';

/**
 * Centralized product data.
 * Add new products by copying an object below and editing its fields.
 * Replace the image URLs with your own photography when ready.
 */
export const products: Product[] = [
  // ---------------- GOLD ----------------
  {
    id: 'neelam-gold-necklace',
    name: 'Neelam Heritage Gold Necklace',
    code: 'NE-G-001',
    category: 'Necklaces',
    material: 'Gold',
    price: 184500,
    images: [
      'https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/7273386/pexels-photo-7273386.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A handcrafted heritage necklace in warm gold, with intricate links that catch the light from every angle. Designed to anchor an occasion look with quiet confidence.',
    weight: '38.4 g',
    purity: '22K Gold',
    size: 'Adjustable 16–18 in',
    availability: 'Made to Order',
    collection: 'Heritage',
    occasion: 'Bridal',
    featured: true,
  },
  {
    id: 'amrita-gold-jhumka',
    name: 'Amrita Gold Jhumka Earrings',
    code: 'NE-G-002',
    category: 'Earrings',
    material: 'Gold',
    price: 64200,
    images: [
      'https://images.pexels.com/photos/37601639/pexels-photo-37601639.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/2733490/pexels-photo-2733490.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'Traditional jhumka earrings rendered in 22K gold, with fine filigree work along the bell. A timeless silhouette for festive and bridal occasions.',
    weight: '12.8 g',
    purity: '22K Gold',
    size: '2.4 cm drop',
    availability: 'In Stock',
    collection: 'Heritage',
    occasion: 'Festive',
    featured: true,
  },
  {
    id: 'kanak-gold-bangle',
    name: 'Kanak Twisted Gold Bangles',
    code: 'NE-G-003',
    category: 'Bangles',
    material: 'Gold',
    price: 92800,
    images: [
      'https://images.pexels.com/photos/38827892/pexels-photo-38827892.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/14873626/pexels-photo-14873626.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A pair of twisted-surface gold bangles with a soft hammered finish. Stackable, modern, yet rooted in traditional craft.',
    weight: '21.2 g (pair)',
    purity: '22K Gold',
    size: '2.4 / 2.6',
    availability: 'In Stock',
    collection: 'Signature',
    occasion: 'Everyday',
  },
  {
    id: 'devi-gold-ring',
    name: 'Devi Signet Gold Ring',
    code: 'NE-G-004',
    category: 'Rings',
    material: 'Gold',
    price: 38600,
    images: [
      'https://images.pexels.com/photos/15871502/pexels-photo-15871502.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/14509875/pexels-photo-14509875.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A sculptural signet ring in 22K gold with a brushed central face and polished rim. Understated, architectural, made to be worn daily.',
    weight: '7.1 g',
    purity: '22K Gold',
    size: 'Adjustable',
    availability: 'In Stock',
    collection: 'Signature',
    occasion: 'Everyday',
    isNew: true,
  },
  {
    id: 'sundar-gold-pendant',
    name: 'Sundar Lotus Gold Pendant',
    code: 'NE-G-005',
    category: 'Pendants',
    material: 'Gold',
    price: 29400,
    images: [
      'https://images.pexels.com/photos/4938199/pexels-photo-4938199.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/12168876/pexels-photo-12168876.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A delicate lotus-motif pendant in 22K gold on a fine chain. A quiet, meaningful piece for everyday wear.',
    weight: '4.6 g',
    purity: '22K Gold',
    size: '18 in chain',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Gifting',
  },
  {
    id: 'vairag-gold-bracelet',
    name: 'Vairag Chain Gold Bracelet',
    code: 'NE-G-006',
    category: 'Bracelets',
    material: 'Gold',
    price: 71500,
    images: [
      'https://images.pexels.com/photos/11476471/pexels-photo-11476471.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/8268782/pexels-photo-8268782.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A fluid gold chain bracelet with a refined toggle clasp. Elegant on its own or layered with thinner pieces.',
    weight: '15.9 g',
    purity: '22K Gold',
    size: '7.5 in',
    availability: 'Made to Order',
    collection: 'Signature',
    occasion: 'Formal',
  },

  // ---------------- DIAMOND ----------------
  {
    id: 'tara-diamond-ring',
    name: 'Tara Solitaire Diamond Ring',
    code: 'NE-D-001',
    category: 'Rings',
    material: 'Diamond',
    price: 268000,
    images: [
      'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/28843741/pexels-photo-28843741.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A brilliant-cut solitaire set on a slender band, designed to let the stone speak. A future heirloom, made for the most meaningful moments.',
    weight: '3.8 g',
    purity: '18K Gold',
    diamondDetails: '0.90 ct · VS1 clarity · Excellent cut',
    size: 'Adjustable',
    availability: 'Limited Edition',
    collection: 'Eternal',
    occasion: 'Bridal',
    featured: true,
  },
  {
    id: 'sitra-diamond-earrings',
    name: 'Sitra Drop Diamond Earrings',
    code: 'NE-D-002',
    category: 'Earrings',
    material: 'Diamond',
    price: 154000,
    images: [
      'https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/35270159/pexels-photo-35270159.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'Linear drop earrings set with graduated diamonds that draw the eye with quiet brilliance. Light on the ear, luminous in motion.',
    weight: '5.2 g',
    purity: '18K Gold',
    diamondDetails: '1.2 ct total · VS clarity',
    size: '3 cm drop',
    availability: 'In Stock',
    collection: 'Celeste',
    occasion: 'Formal',
    featured: true,
  },
  {
    id: 'myra-diamond-necklace',
    name: 'Myra Cascade Diamond Necklace',
    code: 'NE-D-003',
    category: 'Necklaces',
    material: 'Diamond',
    price: 412000,
    images: [
      'https://images.pexels.com/photos/16146016/pexels-photo-16146016.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/36599395/pexels-photo-36599395.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A cascading diamond necklace that traces the neckline in light. Each stone is set to move softly, catching every glimmer.',
    weight: '22.1 g',
    purity: '18K Gold',
    diamondDetails: '5.4 ct total · VS–SI clarity',
    size: '16 in',
    availability: 'Made to Order',
    collection: 'Celeste',
    occasion: 'Bridal',
    featured: true,
  },
  {
    id: 'aura-diamond-pendant',
    name: 'Aura Halo Diamond Pendant',
    code: 'NE-D-004',
    category: 'Pendants',
    material: 'Diamond',
    price: 88500,
    images: [
      'https://images.pexels.com/photos/9280250/pexels-photo-9280250.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/38290052/pexels-photo-38290052.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A central diamond framed by a delicate halo, suspended on a fine chain. An everyday luxury that never feels too much.',
    weight: '3.1 g',
    purity: '18K Gold',
    diamondDetails: '0.35 ct centre · VS2 clarity',
    size: '18 in chain',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Everyday',
    isNew: true,
  },
  {
    id: 'riya-diamond-bracelet',
    name: 'Riya Tennis Diamond Bracelet',
    code: 'NE-D-005',
    category: 'Bracelets',
    material: 'Diamond',
    price: 226000,
    images: [
      'https://images.pexels.com/photos/34542609/pexels-photo-34542609.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/32988532/pexels-photo-32988532.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A line of matched diamonds set in a continuous row — the classic tennis bracelet, refined and endlessly wearable.',
    weight: '9.4 g',
    purity: '18K Gold',
    diamondDetails: '3.0 ct total · VS clarity',
    size: '7 in',
    availability: 'Limited Edition',
    collection: 'Eternal',
    occasion: 'Formal',
  },
  {
    id: 'isha-diamond-bangles',
    name: 'Isha Diamond Bangle Pair',
    code: 'NE-D-006',
    category: 'Bangles',
    material: 'Diamond',
    price: 298000,
    images: [
      'https://images.pexels.com/photos/32988532/pexels-photo-32988532.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/32988666/pexels-photo-32988666.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A pair of slim bangles, each set with a crescent of diamonds. Designed to be worn together or layered with gold.',
    weight: '14.6 g (pair)',
    purity: '18K Gold',
    diamondDetails: '1.6 ct total · VS clarity',
    size: '2.4 / 2.6',
    availability: 'Made to Order',
    collection: 'Eternal',
    occasion: 'Bridal',
  },

  // ---------------- SILVER ----------------
  {
    id: 'naina-silver-necklace',
    name: 'Naina Chain Silver Necklace',
    code: 'NE-S-001',
    category: 'Necklaces',
    material: 'Silver',
    price: 8400,
    images: [
      'https://images.pexels.com/photos/34588320/pexels-photo-34588320.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/35759124/pexels-photo-35759124.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A minimalist silver chain with a subtle toggle clasp. Effortless for daily wear, refined enough for the evening.',
    weight: '11.2 g',
    purity: '925 Sterling Silver',
    size: '18 in',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Everyday',
    featured: true,
    isNew: true,
  },
  {
    id: 'kavi-silver-earrings',
    name: 'Kavi Hoop Silver Earrings',
    code: 'NE-S-002',
    category: 'Earrings',
    material: 'Silver',
    price: 4600,
    images: [
      'https://images.pexels.com/photos/14886240/pexels-photo-14886240.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/9430468/pexels-photo-9430468.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'Clean silver hoops with a softly brushed finish. A modern essential that pairs with everything.',
    weight: '6.4 g (pair)',
    purity: '925 Sterling Silver',
    size: '2.8 cm',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Everyday',
  },
  {
    id: 'ishaan-silver-ring',
    name: 'Ishaan Band Silver Ring',
    code: 'NE-S-003',
    category: 'Rings',
    material: 'Silver',
    price: 3900,
    images: [
      'https://images.pexels.com/photos/3579470/pexels-photo-3579470.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/6862116/pexels-photo-6862116.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A smooth silver band with a gentle matte centre and polished edges. Quietly modern, made for everyday wear.',
    weight: '5.0 g',
    purity: '925 Sterling Silver',
    size: 'Adjustable',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Everyday',
  },
  {
    id: 'meera-silver-pendant',
    name: 'Meera Disc Silver Pendant',
    code: 'NE-S-004',
    category: 'Pendants',
    material: 'Silver',
    price: 5200,
    images: [
      'https://images.pexels.com/photos/12241930/pexels-photo-12241930.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/11447083/pexels-photo-11447083.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A simple silver disc pendant on a fine chain. A piece that settles easily into any jewellery rotation.',
    weight: '7.8 g',
    purity: '925 Sterling Silver',
    size: '20 in chain',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Gifting',
  },
  {
    id: 'rohan-silver-bracelet',
    name: 'Rohan Cuff Silver Bracelet',
    code: 'NE-S-005',
    category: 'Bracelets',
    material: 'Silver',
    price: 6700,
    images: [
      'https://images.pexels.com/photos/32874211/pexels-photo-32874211.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/6862116/pexels-photo-6862116.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'An open silver cuff with a hand-finished surface. Architectural and light, made to be worn alone or stacked.',
    weight: '14.2 g',
    purity: '925 Sterling Silver',
    size: 'One size',
    availability: 'In Stock',
    collection: 'Signature',
    occasion: 'Everyday',
    isNew: true,
  },
  {
    id: 'leela-silver-bangles',
    name: 'Leela Stack Silver Bangles',
    code: 'NE-S-006',
    category: 'Bangles',
    material: 'Silver',
    price: 7200,
    images: [
      'https://images.pexels.com/photos/35689271/pexels-photo-35689271.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
      'https://images.pexels.com/photos/32874211/pexels-photo-32874211.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
    ],
    description:
      'A stack of slender silver bangles with a soft hammered texture. They move together with a quiet, refined sound.',
    weight: '18.0 g (set of 4)',
    purity: '925 Sterling Silver',
    size: '2.4 / 2.6',
    availability: 'In Stock',
    collection: 'Aurora',
    occasion: 'Festive',
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getRelatedProducts = (
  product: Product,
  limit = 3
): Product[] =>
  products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.material === product.material)
    )
    .slice(0, limit);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

export const categories: { value: string; label: string }[] = [
  { value: 'Rings', label: 'Rings' },
  { value: 'Earrings', label: 'Earrings' },
  { value: 'Necklaces', label: 'Necklaces' },
  { value: 'Bracelets', label: 'Bracelets' },
  { value: 'Pendants', label: 'Pendants' },
  { value: 'Bangles', label: 'Bangles' },
];

export const materials: { value: string; label: string }[] = [
  { value: 'Gold', label: 'Gold' },
  { value: 'Diamond', label: 'Diamond' },
  { value: 'Silver', label: 'Silver' },
];

export const occasions: { value: string; label: string }[] = [
  { value: 'Bridal', label: 'Bridal' },
  { value: 'Festive', label: 'Festive' },
  { value: 'Everyday', label: 'Everyday' },
  { value: 'Formal', label: 'Formal' },
  { value: 'Gifting', label: 'Gifting' },
];

export const collectionsList: { value: string; label: string }[] = [
  { value: 'Signature', label: 'Signature' },
  { value: 'Heritage', label: 'Heritage' },
  { value: 'Aurora', label: 'Aurora' },
  { value: 'Celeste', label: 'Celeste' },
  { value: 'Eternal', label: 'Eternal' },
];
