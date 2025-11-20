import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';

/**
 * Get the base URL for the site
 * In production, this should be set via NEXT_PUBLIC_SITE_URL environment variable
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    // Client-side: use current origin
    return window.location.origin;
  }
  
  // Server-side: use environment variable or default
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://phishy.com';
}

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string, locale: Locale): string {
  const baseUrl = getBaseUrl();
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate alternate language URLs (hreflang)
 */
export function getAlternateUrls(path: string, locales: readonly Locale[]): Array<{ href: string; hreflang: string }> {
  const baseUrl = getBaseUrl();
  return locales.map((locale) => ({
    href: `${baseUrl}/${locale}${path}`,
    hreflang: locale,
  }));
}

/**
 * Generate Open Graph image URL
 */
export function getOgImageUrl(imagePath?: string): string {
  const baseUrl = getBaseUrl();
  if (imagePath) {
    // If imagePath is already a full URL, return it
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    // Otherwise, construct full URL
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${baseUrl}${cleanPath}`;
  }
  // Default OG image
  return `${baseUrl}/og-image.jpg`;
}

/**
 * Generate structured data for Blog listing page
 */
export function generateBlogListStructuredData(locale: Locale, posts: Array<{ slug: string; title: string; date: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: locale === 'tr' ? 'Phishy Blog' : 'Phishy Blog',
    description: locale === 'tr' 
      ? 'Siber güvenlik, phishing koruması ve dijital güvenlik hakkında güncel yazılar ve ipuçları'
      : 'Latest articles and tips about cybersecurity, phishing protection, and digital security',
    url: getCanonicalUrl(`/${locale}/blog`, locale),
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: getCanonicalUrl(`/${locale}/blog/${post.slug}`, locale),
      datePublished: post.date,
    })),
  };
}

/**
 * Generate structured data for Blog post page
 */
export function generateBlogPostStructuredData(
  locale: Locale,
  post: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image?: string;
    slug: string;
    category: string;
    tags: string[];
    meta?: {
      ogImage?: string;
      articleModifiedTime?: string;
      articleAuthor?: string;
      keywords?: string;
    };
  }
) {
  const baseUrl = getBaseUrl();
  const url = getCanonicalUrl(`/${locale}/blog/${post.slug}`, locale);
  
  // Determine image - prioritize meta.ogImage, then post.image, then default
  const image = post.meta?.ogImage 
    ? getOgImageUrl(post.meta.ogImage)
    : (post.image ? getOgImageUrl(post.image) : `${baseUrl}/og-image.jpg`);
  
  // Use meta tags if available
  const author = post.meta?.articleAuthor || post.author;
  const dateModified = post.meta?.articleModifiedTime || post.date;
  const keywords = post.meta?.keywords || post.tags.join(', ');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Phishy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: post.category,
    keywords: keywords,
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    url,
  };
}

