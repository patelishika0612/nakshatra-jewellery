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
          <h2 className="font-heading text-2xl text-charcoal-900">About Our Website</h2>
          <p>
            This website is operated by Nakshatra Elite Diamond Jewels  and provides information about our jewellery products, services, offers, and related information.

          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Use of Our Website</h2>
          <p>
          You agree to use this website only for lawful purposes.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Product Information</h2>
          <p>
          We make reasonable efforts to ensure that product descriptions, images, specifications, prices, and other information displayed on our website are accurate.

          </p>

           <h2 className="font-heading text-2xl text-charcoal-900">Prices</h2>
          <p>
All prices displayed on the website are subject to change without prior notice.
<br/>
Where applicable, taxes, shipping charges, customization charges, or other additional charges may be displayed separately.
<br/>
We reserve the right to correct pricing errors that may occur due to technical or human error.
          </p>
          
           <h2 className="font-heading text-2xl text-charcoal-900">Orders</h2>
          <p>
Placing an order through our website does not automatically guarantee acceptance of the order.
          </p> 
          <h2 className="font-heading text-2xl text-charcoal-900">Payments</h2>
          <p>
Payments must be made using the payment methods made available on our website.
          </p> 
          <p>You agree to provide accurate and complete payment and billing information.
</p>
<p>We are not responsible for payment failures caused by banks, payment gateways, card issuers, or other third-party payment providers.
</p>
          
          
          
          <h2 className="font-heading text-2xl text-charcoal-900">Delivery</h2>
          <p>
Delivery timelines displayed on the website are estimates and may vary depending on location, product availability, courier services, weather conditions, holidays, or circumstances beyond our control.
          </p> 
          <p>Customers are responsible for providing accurate delivery information.
</p>
          <p>Nakshatra Elite Diamond Jewels is not responsible for delays caused by incorrect or incomplete delivery information provided by the customer.
</p>
          
          <p>For complete details, please refer to our Shipping & Delivery Policy.
</p>
          
          
          <h2 className="font-heading text-2xl text-charcoal-900">Returns, Refunds & Cancellations</h2>
          <p>
Returns, refunds, exchanges, and order cancellations are subject to our applicable policies.

          </p> 
          <p>Customers should review our Return & Refund Policy and Cancellation Policy before placing an order.
</p>
          <p>Certain products may not be eligible for return or exchange due to their nature, customization, hygiene considerations, or other applicable conditions.
</p>
          
          
          
          <h2 className="font-heading text-2xl text-charcoal-900">Jewellery Products  </h2>
          <p>
Customers should carefully review product specifications, including size, material, weight, colour, stone details, and other available information before purchasing.

          </p>
          <p>For jewellery requiring sizing or customization, customers are responsible for providing correct information.
</p>
          <p>Customized or personalized jewellery may be subject to different return, cancellation, or refund conditions.
</p>
          
          
           <h2 className="font-heading text-2xl text-charcoal-900">Third-Party Links</h2>
          <p>
Our website may contain links to third-party websites, services, payment providers, social media platforms, or other external resources.

          </p> 
          <p>These links are provided for convenience. Nakshatra Elite Diamond Jewels does not control and is not responsible for the content, availability, security, or privacy practices of third-party websites.
</p>
          <h2 className="font-heading text-2xl text-charcoal-900">User Information</h2>
          <p>
You are responsible for ensuring that all information provided to us is accurate, complete, and up to date.
          </p>

          <p>Our collection and use of personal information is governed by our Privacy Policy.
</p>
          
          <h2 className="font-heading text-2xl text-charcoal-900">Changes to These Terms</h2>
          <p>
Nakshatra Elite Diamond Jewels reserves the right to update or modify these Terms & Conditions at any time.

          </p>

          <p>Changes will become effective when the updated Terms & Conditions are published on this page.

</p>
<p>We recommend checking this page periodically for updates.
</p>
          
          <h2 className="font-heading text-2xl text-charcoal-900">Governing Law</h2>
          <p>
These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.

          </p>

          <p>Any disputes arising in connection with the use of this website or our services shall be subject to the jurisdiction of the appropriate courts, subject to applicable law.

</p>
          

        </div>
      </article>
    </>
  );
}
