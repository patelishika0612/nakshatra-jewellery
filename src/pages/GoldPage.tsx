import MaterialPage from '@/pages/MaterialPage';
import { images } from '@/config/images';

export default function GoldPage() {
  return (
    <MaterialPage
      material="Gold"
      eyebrow="The Gold Atelier"
      title={
        <>
          Golden. Timeless.{' '}
          <span className="italic text-gold-300">Yours.</span>
        </>
      }
      description="From sculptural signets to heritage necklaces, our gold jewellery is shaped by hand and finished with patience."
      heading="Warmth that endures, form that lasts."
      body="Each gold piece is crafted to be lived in and loved across generations — jewellery made with restraint, so the metal speaks for itself. Discover rings, necklaces, earrings and bangles composed with an editorial eye."
      heroImage={images.editorial.goldWide}
      editorialImage={images.editorial.goldPortrait}
      ctaTo="/collections?material=Gold"
      ctaLabel="View All Gold Pieces"
      keywords="Gold Jewellery, Gold Rings, Gold Necklace, Gold Earrings, Gold Bangles, Nakshatra gold"
    />
  );
}
