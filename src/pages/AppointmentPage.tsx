import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import FormBuilder from '@/components/FormBuilder';
import { images } from '@/config/images';

export default function AppointmentPage() {
  return (
    <>
      <Seo
        title="Book an Appointment | Nakshatra Elite Diamond Jewels"
        description="Reserve a private viewing at Nakshatra Elite Diamond Jewels. Explore our collections or discuss a bespoke commission in person."
        keywords="Nakshatra appointment, private jewellery viewing, bespoke consultation"
        image={images.editorial.modelEditorial}
      />
      <PageHeader
        eyebrow="Private Appointment"
        title="Book a Private Appointment"
        description="Reserve a private viewing to explore our collections, discuss a bespoke commission, or find the piece that marks your moment."
        image={images.editorial.modelEditorial}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">A Personal Experience</p>
              <h2 className="mt-4 font-heading text-3xl text-charcoal-900 lg:text-4xl">
                Time Set Aside for You
              </h2>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-charcoal-600">
                Whether you are considering a signature piece, planning a
                bespoke commission, or simply wish to experience the collection
                in person, we will prepare a quiet, unhurried appointment for
                you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 border-t border-charcoal-900/10 pt-6">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500">
                  What to Expect
                </p>
                <ul className="space-y-3 font-body text-sm text-charcoal-700">
                  <li>• A dedicated one-hour private viewing</li>
                  <li>• Guidance from our jewellery specialists</li>
                  <li>• Refreshments in a relaxed setting</li>
                  <li>• No obligation to purchase</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-charcoal-900 p-7 text-ivory lg:p-10">
            <div className="[&_input]:text-ivory [&_input]:placeholder:text-charcoal-400 [&_input]:border-charcoal-600 [&_select]:text-ivory [&_select]:border-charcoal-600 [&_label]:text-charcoal-300 [&_textarea]:text-ivory [&_textarea]:placeholder:text-charcoal-400 [&_textarea]:border-charcoal-600">
              <FormBuilder
                fields={[
                  { name: 'name', label: 'Name', type: 'text', required: true },
                  { name: 'phone', label: 'Phone', type: 'tel', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'date', label: 'Preferred Date', type: 'date', required: true },
                  { name: 'time', label: 'Preferred Time', type: 'time', required: true },
                  {
                    name: 'interest',
                    label: 'Jewellery Interest',
                    type: 'select',
                    options: ['Gold', 'Diamond', 'Silver', 'Bespoke', 'General Viewing'],
                  },
                  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Anything you would like us to prepare...' },
                ]}
                submitLabel="Request Appointment"
                successTitle="Your appointment request has been received."
                successMessage="We will confirm your booking by phone or email shortly. Thank you for choosing Nakshatra."
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
