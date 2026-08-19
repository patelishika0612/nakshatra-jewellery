import MaterialPage from '@/pages/MaterialPage';
import { images } from '@/config/images';

export default function DiamondsPage() {
  return (
    <MaterialPage
      material="Diamond"
      eyebrow="The Diamond Story"
      title={
        <>
          Where Every Diamond{' '}
          <span className="italic text-gold-300">Tells a Story.</span>
        </>
      }
      description="Brilliant-cut solitaires, cascading necklaces and everyday luxuries — each diamond selected for its light and character."
      heading="Light, captured in form."
      body="We select each diamond for its brilliance and character, then set it with a restraint that lets the light speak. From solitaires that mark a promise to necklaces that crown an evening, every piece is composed to be remembered."
      heroImage={images.editorial.diamondWide}
      editorialImage={images.editorial.diamondPortrait}
      ctaTo="/collections?material=Diamond"
      ctaLabel="View All Diamond Pieces"
      keywords="Diamond Jewellery, Diamond Rings, Diamond Earrings, Diamond Necklace, Nakshatra diamonds"
    />
  );
}
