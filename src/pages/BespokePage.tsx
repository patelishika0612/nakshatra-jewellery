import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import FormBuilder from '@/components/FormBuilder';
import ButtonLink from '@/components/ButtonLink';
import { images } from '@/config/images';
import { bespokeSteps } from '@/config/site';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/utils/whatsapp';
import { site } from '@/config/site';

export default function BespokePage() {
  return (
    <>
      <Seo
        title="Bespoke Jewellery | Nakshatra Elite Diamond Jewels"
        description="Commission a one-of-a-kind piece of jewellery. Share your vision and our artisans will bring it to life — from design consultation to final craftsmanship."
        keywords="Custom Jewellery, Bespoke Jewellery, Nakshatra bespoke, made to order jewellery"
        image={images.editorial.bespoke}
      />
      <PageHeader
        eyebrow="Bespoke Jewellery"
        title={
          <>
            Your Vision.
            <br />
            <span className="italic text-gold-300">Our Craftsmanship.</span>
          </>
        }
        description="A one-of-one piece, designed with you and crafted by hand. From the first idea to the final reveal."
        image={images.editorial.bespoke}
      />

      {/* Process */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-lux-wide">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">The Process</p>
            <h2 className="mt-3 font-heading text-3xl text-charcoal-900 lg:text-4xl">
              Five Steps to Your Piece
            </h2>
          </Reveal>
          <ol className="grid grid-cols-1 gap-px bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-5">
            {bespokeSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 0.08} className="bg-ivory p-7 lg:p-8">
                <span className="font-heading text-3xl text-gold-600">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-charcoal-900 py-20 text-ivory lg:py-28">
        <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-gold-500">Begin Your Commission</p>
              <h2 className="mt-4 font-heading text-3xl text-ivory lg:text-5xl">
                Custom Jewellery Enquiry
              </h2>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-200">
                Tell us about the piece you envision. The more detail you share,
                the more precisely we can begin. Our team will reach out to
                continue the conversation.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8">
                <a
                  href={whatsappLink(`Hello ${site.brandFull}, I would like to discuss a bespoke jewellery commission.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-ivory p-7 text-charcoal-900 lg:p-10">
            <FormBuilder
              fields={[
                { name: 'name', label: 'Name', type: 'text', required: true },
                { name: 'phone', label: 'Phone', type: 'tel', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                {
                  name: 'jewelleryType',
                  label: 'Jewellery Type',
                  type: 'select',
                  required: true,
                  options: ['Ring', 'Necklace', 'Earrings', 'Bracelet', 'Bangle', 'Pendant', 'Other'],
                },
                {
                  name: 'budget',
                  label: 'Budget',
                  type: 'select',
                  options: ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', 'Above ₹5,00,000'],
                },
                {
                  name: 'message',
                  label: 'Message',
                  type: 'textarea',
                  required: true,
                  placeholder: 'Describe your vision...',
                },
                { name: 'reference', label: 'Reference Image', type: 'file' },
              ]}
              submitLabel="Submit Enquiry"
              successTitle="Thank you for your enquiry."
              successMessage="Our design team will reach out within 48 hours to begin your bespoke journey."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-charcoal-900">
            Prefer to speak in person?
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink to="/appointment" variant="primary" icon>
              Book an Appointment
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
