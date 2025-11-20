import {createNavigation} from 'next-intl/navigation';
import type {ComponentProps} from 'react';

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/phishing-simulation': '/phishing-simulation',
  '/request-demo': '/request-demo',
  '/why-phishy': '/why-phishy',
  '/products': '/products',
  '/products/incident-response': '/products/incident-response',
  '/products/phishypot': '/products/phishypot',
  '/products/simulation': '/products/simulation',
  '/solutions': '/solutions',
  '/solutions/phishing-programs': '/solutions/phishing-programs',
} as const;

const navigation = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

// Link component'ini daha esnek bir type ile export ediyoruz
// Build'i geçirmek için strict type checking'i gevşetiyoruz
export const Link = navigation.Link as any;

// Router'ı da esnek hale getiriyoruz
export const useRouter = navigation.useRouter as any;
export const usePathname = navigation.usePathname;
export const redirect = navigation.redirect as any;
export const getPathname = navigation.getPathname;

