import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { site } from '@/config/site';

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions | Nakshatra Elite Diamond Jewels"
        description="Terms and conditions for Nakshatra Elite Diamond Jewels."
      />
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <article className="bg-ivory py-20 lg:py-28">
        <div className="container-lux max-w-2xl space-y-6 font-body text-sm leading-relaxed text-charcoal-700">
          <p>
            By using this website, you agree to the following terms with{' '}
            {site.brandFull}.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Products & Pricing</h2>
          <p>
            All jewellery is handcrafted; minor variations may occur. Prices are
            listed in Indian Rupees and may change without notice. We reserve
            the right to correct pricing errors.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Bespoke Orders</h2>
          <p>
            Bespoke commissions are made to order and are non-refundable once
            crafting has begun, except where required by law.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Returns</h2>
          <p>
            Ready pieces may be returned within 7 days in unworn, original
            condition. Contact us to initiate a return.
          </p>
          <p className="text-charcoal-500">
            This is a placeholder terms document. Replace with your final terms
            before going live.
          </p>
        </div>
      </article>
    </>
  );
}
