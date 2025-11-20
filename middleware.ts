import createMiddleware from 'next-intl/middleware';

import {defaultLocale, locales, localePrefix, pathnames} from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: [
    '/',
    '/(tr|en)/:path*',
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};

