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
          <h2 className="font-heading text-2xl text-charcoal-900">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name,
            contact details and enquiry content — when you use our forms,
            wishlist, cart or WhatsApp enquiry.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">How We Use It</h2>
          <p>
            To respond to enquiries, process orders, arrange appointments and
            improve your experience. We do not sell your information to third
            parties.
          </p>
          <h2 className="font-heading text-2xl text-charcoal-900">Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us.
          </p>
          <p className="text-charcoal-500">
            This is a placeholder policy. Replace with your final privacy policy
            before going live.
          </p>
        </div>
      </article>
    </>
  );
}
