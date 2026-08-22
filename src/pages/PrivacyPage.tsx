import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { site } from '@/config/site';

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Nakshatra Elite Diamond Jewels"
        description="Privacy policy for Nakshatra Elite Diamond Jewels."
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <article className="bg-ivory py-20 lg:py-28">
        <div className="container-lux max-w-2xl space-y-6 font-body text-sm leading-relaxed text-charcoal-700">
          <p>
            {site.brandFull} respects your privacy. This policy describes how we
            collect, use and protect the information you share with us.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900"></h2>
          <p>
            We collect information you provide directly — such as your name,
            contact details and enquiry content — when you use our forms,
            wishlist, cart or WhatsApp enquiry.
          </p>
 <h2 className="font-heading text-2xl text-charcoal-900">
  Privacy Policy
</h2>

<p>
  <strong>Last Updated: August 22, 2026</strong>
</p>

<p>
  Welcome to <strong>Nakshatra Elite Diamond Jewels</strong>. We respect your privacy
  and are committed to protecting your personal information.
</p>

<p>
  This Privacy Policy explains how we collect, use, store, and protect your
  information when you visit or use our website.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  1. Information We Collect
</h2>

<p>
  When you use our website, we may collect information such as:
</p>

<ul>
  <li>Your name</li>
  <li>Mobile number</li>
  <li>Email address</li>
  <li>Delivery or billing address</li>
  <li>Information you provide when contacting us</li>
  <li>Website usage and device information</li>
</ul>

<p>
  We only collect information that is reasonably necessary to provide and
  improve our services.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  2. How We Use Your Information
</h2>

<p>We may use your information to:</p>

<ul>
  <li>Respond to your enquiries and messages</li>
  <li>Process and manage orders, if applicable</li>
  <li>Provide customer support</li>
  <li>Improve our products, services, and website</li>
  <li>Communicate with you regarding your enquiry or order</li>
  <li>
    Maintain website security and prevent fraudulent or unauthorized
    activity
  </li>
</ul>

<h2 className="font-heading text-2xl text-charcoal-900">
  3. Cookies
</h2>

<p>
  Our website may use cookies and similar technologies to improve your
  browsing experience, understand website usage, and provide better
  functionality.
</p>

<p>
  You can control or disable cookies through your browser settings.
  However, disabling cookies may affect some website features.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  4. Sharing of Information
</h2>

<p>
  We do not sell, rent, or trade your personal information.
</p>

<p>We may share information only when necessary to:</p>

<ul>
  <li>Provide services requested by you</li>
  <li>Work with trusted service providers</li>
  <li>Comply with applicable laws or legal requirements</li>
  <li>
    Protect our website, business, customers, or legal rights
  </li>
</ul>

<h2 className="font-heading text-2xl text-charcoal-900">
  5. Data Security
</h2>

<p>
  We take reasonable measures to protect your personal information from
  unauthorized access, misuse, alteration, disclosure, or destruction.
</p>

<p>
  However, no method of transmission or electronic storage is completely
  secure, and we cannot guarantee absolute security.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  6. Third-Party Websites
</h2>

<p>
  Our website may contain links to third-party websites, services, or
  social media platforms.
</p>

<p>
  We are not responsible for the privacy practices or content of
  third-party websites. We recommend reviewing their privacy policies
  before providing them with your personal information.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  7. Children's Privacy
</h2>

<p>
  Our website is not intended to knowingly collect personal information
  from children without appropriate parental or guardian involvement.
</p>

<p>
  If you believe that a child has provided personal information to us,
  please contact us so that we can take appropriate action.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  8. Your Privacy Rights
</h2>

<p>
  Depending on applicable law, you may have the right to:
</p>

<ul>
  <li>Request access to your personal information</li>
  <li>Request correction of inaccurate information</li>
  <li>Request deletion of your personal information</li>
  <li>Withdraw consent where applicable</li>
  <li>Ask questions about how your information is used</li>
</ul>

<p>
  To exercise these rights, please contact us using the contact details
  provided below.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  9. Changes to This Privacy Policy
</h2>

<p>
  We may update this Privacy Policy from time to time.
</p>

<p>
  Any changes will be posted on this page with an updated
  <strong> Last Updated</strong> date.
</p>

<h2 className="font-heading text-2xl text-charcoal-900">
  10. Contact Us
</h2>

<p>
  If you have any questions, concerns, or requests regarding this Privacy
  Policy, please contact us:
</p>

<p>
  <strong>Nakshatra Elite Diamond Jewels</strong>
  <br />
  <strong>Email:</strong>{" "}
  <a
    href="mailto:nakshatraelitesurat@gmail.com"
    className="text-charcoal-700 hover:underline"
  >
    nakshatraelitesurat@gmail.com
  </a>
  <br />
 <strong>Phone:</strong>{" "}
  <a
    href="tel:+917284948918"
    className="text-charcoal-700 hover:underline"
  >
    +91 72849 48918
  </a>  <br />
  <strong>Address:</strong> Surat, Gujarat 395004
</p>

<p>
  By using our website, you acknowledge that you have read and understood
  this Privacy Policy.
</p>
        </div>
      </article>
    </>
  );
}
