import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { site } from '@/config/site';
import { whatsappLink } from '@/utils/whatsapp';
import logo1 from '@/images/logo1.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal-950 text-ivory">
      {/* Newsletter */}
      <div className="border-b border-charcoal-700">
        <div className="container-lux flex flex-col items-center gap-6 py-16 text-center lg:py-20">
          <p className="eyebrow text-gold-500">The Nakshatra World</p>
          <h2 className="max-w-xl font-heading text-3xl text-ivory lg:text-4xl">
            Join our world of timeless elegance.
          </h2>
          {subscribed ? (
            <p className="font-body text-sm tracking-wide text-gold-400">
              Thank you — you have joined the Nakshatra circle.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex w-full max-w-md items-center gap-3 border-b border-charcoal-600 pb-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full bg-transparent font-body text-sm text-ivory placeholder:text-charcoal-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-gold-500 transition-colors hover:text-gold-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Links */}
      <div className="container-lux grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:py-20">
        <div className="col-span-2 md:col-span-1">
       <div className="flex flex-col items-start">
  <img
    src={logo1}
    alt="Nakshatra Elite Diamond Jewels"
    className="h-24 w-auto object-contain sm:h-28 lg:h-40"
  />
</div>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-charcoal-300">
            Gold, diamond and silver jewellery, designed and crafted with
            precision, passion and timeless elegance.
          </p>
        </div>

        <div>
          <h3 className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold-500">
            Collections
          </h3>
          <ul className="mt-5 space-y-3 font-body text-sm text-charcoal-300">
            <li><Link to="/gold" className="link-underline hover:text-ivory">Gold</Link></li>
            <li><Link to="/diamonds" className="link-underline hover:text-ivory">Diamond</Link></li>
            <li><Link to="/silver" className="link-underline hover:text-ivory">Silver</Link></li>
            <li><Link to="/bespoke" className="link-underline hover:text-ivory">Bespoke</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold-500">
            Maison
          </h3>
          <ul className="mt-5 space-y-3 font-body text-sm text-charcoal-300">
            <li><Link to="/about" className="link-underline hover:text-ivory">About</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-ivory">Contact</Link></li>
            <li><Link to="/appointment" className="link-underline hover:text-ivory">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold-500">
            Customer Care
          </h3>
          <ul className="mt-5 space-y-3 font-body text-sm text-charcoal-300">
            <li><Link to="/privacy" className="link-underline hover:text-ivory">Privacy Policy</Link></li>
            <li><Link to="/terms" className="link-underline hover:text-ivory">Terms & Conditions</Link></li>
            <li><Link to="/returns" className="link-underline hover:text-ivory">Returns & Exchanges</Link></li>

            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-ivory"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(`Hello ${site.brandFull}, I would like to enquire.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-ivory"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-700">
        <div className="container-lux flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-charcoal-400">
            © {new Date().getFullYear()} {site.brandFull}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-charcoal-400 transition-colors hover:text-gold-400"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink(`Hello ${site.brandFull}, I would like to enquire.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-charcoal-400 transition-colors hover:text-gold-400"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
