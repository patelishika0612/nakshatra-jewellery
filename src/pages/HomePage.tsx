import Hero from '@/components/home/Hero';
import Collections from '@/components/home/Collections';
import SignatureCollection from '@/components/home/SignatureCollection';
import GoldSection from '@/components/home/GoldSection';
import DiamondSection from '@/components/home/DiamondSection';
import SilverSection from '@/components/home/SilverSection';
import BespokeSection from '@/components/home/BespokeSection';
import WhyNakshatra from '@/components/home/WhyNakshatra';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import InstagramSection from '@/components/home/InstagramSection';
import AppointmentPreview from '@/components/home/AppointmentPreview';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Nakshatra Elite Diamond Jewels | Gold, Diamond & Silver Jewellery"
        description="Discover exquisite gold, diamond and silver jewellery crafted with precision, passion and timeless elegance. Bespoke jewellery designed for you."
        keywords="Nakshatra Elite Diamond Jewels, Gold Jewellery, Diamond Jewellery, Silver Jewellery, Diamond Rings, Gold Rings, Gold Necklace, Diamond Earrings, Custom Jewellery"
      />
      <Hero />
      <Collections />
      <SignatureCollection />
      <GoldSection />
      <DiamondSection />
      <SilverSection />
      <BespokeSection />
      <WhyNakshatra />
      <AboutPreview />
      <Testimonials />
      <InstagramSection />
      <AppointmentPreview />
    </>
  );
}
