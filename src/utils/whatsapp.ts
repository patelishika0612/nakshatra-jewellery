import { site } from '@/config/site';

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message: string): string {
  const number = site.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp enquiry message for a specific product. */
export function productEnquiryMessage(productName: string): string {
  return `Hello ${site.brandFull}, I am interested in ${productName}. Please share more details.`;
}
