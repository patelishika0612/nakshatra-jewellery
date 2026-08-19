import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import FormBuilder from '@/components/FormBuilder';
import { Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { site } from '@/config/site';
import { whatsappLink } from '@/utils/whatsapp';
import { images } from '@/config/images';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Nakshatra Elite Diamond Jewels"
        description="Get in touch with Nakshatra Elite Diamond Jewels. Reach us on Instagram, WhatsApp, or send us a message."
        keywords="Nakshatra Elite Diamond Jewels contact, jewellery enquiry"
        image={images.og}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="We would love to hear from you. Reach out with an enquiry, a commission idea, or simply to learn more."
        image="https://images.pexels.com/photos/36772490/pexels-photo-36772490.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Details */}
          <div>
            <Reveal>
              <p className="eyebrow">Reach Us</p>
              <h2 className="mt-4 font-heading text-3xl text-charcoal-900 lg:text-4xl">
                We're Here to Help
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">Email</p>
                    <p className="font-body text-sm text-charcoal-900">{site.email}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">Phone</p>
                    <p className="font-body text-sm text-charcoal-900">{site.phone}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">Address</p>
                    <p className="font-body text-sm text-charcoal-900">{site.addressLine}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">Hours</p>
                    <p className="font-body text-sm text-charcoal-900">{site.hours}</p>
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex gap-4">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center border border-charcoal-900/20 text-charcoal-800 transition-colors hover:border-gold-600 hover:text-gold-700"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={whatsappLink(`Hello ${site.brandFull}, I would like to enquire.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center border border-charcoal-900/20 text-charcoal-800 transition-colors hover:border-gold-600 hover:text-gold-700"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-body text-[0.65rem] uppercase tracking-[0.15em] text-charcoal-400">
                Contact details are placeholders — replace with your real information.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <FormBuilder
              fields={[
                { name: 'name', label: 'Name', type: 'text', required: true },
                { name: 'phone', label: 'Phone', type: 'tel', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                {
                  name: 'subject',
                  label: 'Subject',
                  type: 'select',
                  options: ['General Enquiry', 'Product Enquiry', 'Bespoke Commission', 'Appointment', 'Other'],
                },
                { name: 'message', label: 'Message', type: 'textarea', required: true },
              ]}
              submitLabel="Send Message"
              successTitle="Thank you for reaching out."
              successMessage="We will get back to you shortly. For urgent enquiries, please message us on WhatsApp."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
