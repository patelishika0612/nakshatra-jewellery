import { useEffect } from 'react';
import { images } from '@/config/images';

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function Seo({ title, description, keywords, image }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (keywords) setMeta('name', 'keywords', keywords);

    setMeta('property', 'og:title', title);
    setMeta('name', 'twitter:title', title);
    setMeta('property', 'og:image', image || images.og);
    setMeta('name', 'twitter:image', image || images.og);
  }, [title, description, keywords, image]);

  return null;
}
