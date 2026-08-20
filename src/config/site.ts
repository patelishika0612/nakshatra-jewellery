import type {
  BespokeStep,
  CollectionCard,
  StatItem,
  Testimonial,
  TrustItem,
} from '@/types';

export const site = {
  brand: 'Nakshatra',
  brandFull: 'Nakshatra Elite Diamond Jewels',
  brandSub: 'Elite Diamond Jewels',
  instagram: '@nakshatraelite_diamond_jewels',
  instagramUrl: 'https://instagram.com/nakshatraelite_diamond_jewels',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '7284948918',
  // Editable placeholders — replace with real contact details.
  email: 'hello@nakshatraelite.com', // PLACEHOLDER
  phone: '+91 00000 00000', // PLACEHOLDER
  addressLine: 'Showcase Address, City — 000000', // PLACEHOLDER
  hours: 'Monday – Saturday · 11 AM – 7 PM', // PLACEHOLDER
  tagline: 'Timeless Brilliance. Crafted for You.',
};

export const navLinks = [
  { label: 'Homeee', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Gold', to: '/gold' },
  { label: 'Diamonds', to: '/diamonds' },
  { label: 'Silver', to: '/silver' },
  { label: 'Bespoke', to: '/bespoke' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const collectionCards: CollectionCard[] = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    subtitle: 'Timeless warmth, crafted to endure',
    image:
      'https://images.pexels.com/photos/7273386/pexels-photo-7273386.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    href: '/gold',
    span: 'wide',
  },
  {
    id: 'diamond',
    title: 'Diamond Jewellery',
    subtitle: 'Light, captured in form',
    image:
      'https://images.pexels.com/photos/36189601/pexels-photo-36189601.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    href: '/diamonds',
    span: 'tall',
  },
  {
    id: 'silver',
    title: 'Silver Jewellery',
    subtitle: 'Modern lines, quiet elegance',
    image:
      'https://images.pexels.com/photos/34588320/pexels-photo-34588320.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    href: '/silver',
    span: 'normal',
  },
  {
    id: 'rings',
    title: 'Rings',
    subtitle: 'The smallest gestures, remembered',
    image:
      'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    href: '/collections?category=Rings',
    span: 'normal',
  },
  {
    id: 'earrings',
    title: 'Earrings',
    subtitle: 'Framing the face with light',
    image:
      'https://images.pexels.com/photos/32989030/pexels-photo-32989030.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    href: '/collections?category=Earrings',
    span: 'normal',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    subtitle: 'Adornments that define a neckline',
    image:
      'https://images.pexels.com/photos/16146016/pexels-photo-16146016.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    href: '/collections?category=Necklaces',
    span: 'wide',
  },
];

export const stats: StatItem[] = [
  { value: '10+', label: 'Years of Craftsmanship', sample: true },
  { value: '500+', label: 'Unique Designs', sample: true },
  { value: '1000+', label: 'Happy Clients', sample: true },
];

export const trustItems: TrustItem[] = [
  {
    title: 'Authentic Craftsmanship',
    description:
      'Every piece is shaped by skilled artisans with an obsession for detail and finish.',
    icon: 'Gem',
  },
  {
    title: 'Quality Materials',
    description:
      'We work with carefully sourced gold, silver and diamonds, selected for purity and brilliance.',
    icon: 'Sparkles',
  },
  {
    title: 'Bespoke Designs',
    description:
      'Your vision, translated into jewellery — from first sketch to the final reveal.',
    icon: 'PencilRuler',
  },
  {
    title: 'Customer Care',
    description:
      'A personal, attentive experience from enquiry to delivery and beyond.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Hallmarked Gold',
    description:
      'Gold pieces are hallmarked where applicable, affirming metal purity.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Certified Diamonds',
    description:
      'Diamonds are accompanied by certification where applicable.',
    icon: 'Diamond',
  },
];

export const bespokeSteps: BespokeStep[] = [
  {
    number: '01',
    title: 'Share Your Idea',
    description:
      'Tell us about the piece you envision — its occasion, meaning and the details that matter to you.',
  },
  {
    number: '02',
    title: 'Design Consultation',
    description:
      'Our designers discuss possibilities, materials and budget, refining the direction with you.',
  },
  {
    number: '03',
    title: 'CAD / Design Approval',
    description:
      'We present a digital rendering of your piece for your review and approval before crafting begins.',
  },
  {
    number: '04',
    title: 'Expert Craftsmanship',
    description:
      'Our artisans bring the approved design to life with precision and patience.',
  },
  {
    number: '05',
    title: 'Final Jewellery',
    description:
      'Your finished piece is presented, polished and ready to be treasured.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav Mehta',
    location: 'Mumbai',
    quote:
      'The bespoke ring exceeded everything I imagined. Every detail felt considered and personal.',
    sample: true,
  },
  {
    id: 't2',
    name: 'Riya Sharma',
    location: 'Bengaluru',
    quote:
      'Beautifully crafted diamond earrings. The experience felt as refined as the jewellery itself.',
    sample: true,
  },
  {
    id: 't3',
    name: 'Kabir Anand',
    location: 'Delhi',
    quote:
      'A gold necklace that now feels like an heirloom. Truly timeless work and graceful service.',
    sample: true,
  },
];
