import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

function setMetaTag(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setNameMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.content = content;
}

const BASE_URL = 'https://location-lestiac.netlify.app';
const DEFAULT_OG_IMAGE = '/images/maison-entiere/photo2.jpeg';

export default function usePageMeta({ title, description, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = title;

    setNameMeta('description', description);
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', `${BASE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`);
  }, [title, description, ogImage]);
}
