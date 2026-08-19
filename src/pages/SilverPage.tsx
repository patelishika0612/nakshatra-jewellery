import MaterialPage from '@/pages/MaterialPage';
import { images } from '@/config/images';

export default function SilverPage() {
  return (
    <MaterialPage
      material="Silver"
      eyebrow="The Silver Edit"
      title={
        <>
          Modern Silver.
          <br />
          <span className="italic text-charcoal-300">Effortless Elegance.</span>
        </>
      }
      description="Clean lines, cool light and a quiet confidence. Silver jewellery made for everyday luxury."
      heading="Quiet confidence, everyday luxury."
      body="Our silver jewellery is designed to move with you — pieces that never ask for attention and always look considered. Minimalist chains, hoops, cuffs and bangles composed for a modern wardrobe."
      heroImage={images.editorial.silverWide}
      editorialImage={images.editorial.silverPortrait}
      ctaTo="/collections?material=Silver"
      ctaLabel="View All Silver Pieces"
      keywords="Silver Jewellery, Silver Necklace, Silver Earrings, Silver Rings, Nakshatra silver"
    />
  );
}
