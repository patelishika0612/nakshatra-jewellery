/**
 * Centralized image configuration.
 * Replace any URL here to update imagery across the entire site.
 * Product imagery lives in src/data/products.ts alongside each product.
 */

export const images = {
  hero: {
    main: 'https://images.pexels.com/photos/39648/lady-black-dress-jewellery-dress-39648.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
    mobile:
      'https://images.pexels.com/photos/39648/lady-black-dress-jewellery-dress-39648.jpeg?auto=compress&cs=tinysrgb&h=1400&w=900',
  },
  collections: {
    gold: 'https://images.pexels.com/photos/7273386/pexels-photo-7273386.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    diamond:
      'https://images.pexels.com/photos/36189601/pexels-photo-36189601.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    silver:
      'https://images.pexels.com/photos/34588320/pexels-photo-34588320.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    rings: 'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
    earrings:
      'https://images.pexels.com/photos/32989030/pexels-photo-32989030.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
    necklaces:
      'https://images.pexels.com/photos/16146016/pexels-photo-16146016.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
    bracelets:
      'https://images.pexels.com/photos/11476471/pexels-photo-11476471.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
    pendants:
      'https://images.pexels.com/photos/9280250/pexels-photo-9280250.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
    bangles:
      'https://images.pexels.com/photos/38827892/pexels-photo-38827892.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  editorial: {
    goldWide:
      'https://images.pexels.com/photos/35059564/pexels-photo-35059564.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1600',
    goldPortrait:
      'https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    diamondWide:
      'https://images.pexels.com/photos/34760894/pexels-photo-34760894.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1600',
    diamondPortrait:
      'https://images.pexels.com/photos/28843741/pexels-photo-28843741.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    silverWide:
      'https://images.pexels.com/photos/9430468/pexels-photo-9430468.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1600',
    silverPortrait:
      'https://images.pexels.com/photos/35759124/pexels-photo-35759124.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    atelier:
      'https://images.pexels.com/photos/6262840/pexels-photo-6262840.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    atelierHands:
      'https://images.pexels.com/photos/6262846/pexels-photo-6262846.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    bespoke:
      'https://images.pexels.com/photos/6263146/pexels-photo-6263146.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1700',
    modelEditorial:
      'https://images.pexels.com/photos/30751022/pexels-photo-30751022.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1700',
    aboutPortrait:
      'https://images.pexels.com/photos/6263058/pexels-photo-6263058.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900',
  },
  instagram: [
    {
      id: 'ig1',
      image:
        'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Diamond engagement ring on marble',
    },
    {
      id: 'ig2',
      image:
        'https://images.pexels.com/photos/37601639/pexels-photo-37601639.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Gold jhumka earring',
    },
    {
      id: 'ig3',
      image:
        'https://images.pexels.com/photos/36599395/pexels-photo-36599395.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Diamond necklace worn',
    },
    {
      id: 'ig4',
      image:
        'https://images.pexels.com/photos/14873626/pexels-photo-14873626.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Golden bangles on stone',
    },
    {
      id: 'ig5',
      image:
        'https://images.pexels.com/photos/34588320/pexels-photo-34588320.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Silver necklace and earrings',
    },
    {
      id: 'ig6',
      image:
        'https://images.pexels.com/photos/32988532/pexels-photo-32988532.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
      alt: 'Diamond and emerald bangles',
    },
  ] as { id: string; image: string; alt: string }[],
  og: 'https://images.pexels.com/photos/39648/lady-black-dress-jewellery-dress-39648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export type Images = typeof images;
