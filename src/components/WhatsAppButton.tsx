import { MessageCircle } from 'lucide-react';
import { site } from '@/config/site';
import { whatsappLink } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello ${site.brandFull}, I would like to enquire.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#1f2f24] text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
