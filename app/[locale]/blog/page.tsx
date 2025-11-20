import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '../../components/Header';

export const runtime = 'edge';

import Footer from '../../components/Footer';
import { getAllBlogPosts } from '@/lib/blog';
import BlogContentWrapper from './BlogContentWrapper';
import BlogHeroSection from './BlogHeroSection';
import BlogHeaderClient from './BlogHeaderClient';
import TrendingNews from './TrendingNews';
import type { Locale } from '@/i18n/routing';
import { getCanonicalUrl, getAlternateUrls, getBaseUrl, generateBlogListStructuredData } from '@/lib/seo';
import { locales } from '@/i18n/routing';
import BlogPaginationClient from './BlogPaginationClient';

interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Blog');
  const baseUrl = getBaseUrl();
  const canonicalUrl = getCanonicalUrl(`/${locale}/blog`, locale as Locale);
  const alternateUrls = getAlternateUrls('/blog', [...locales]);

  const title = locale === 'tr' 
    ? 'Blog - Phishy | Siber Güvenlik Yazıları ve İpuçları'
    : 'Blog - Phishy | Cybersecurity Articles and Tips';
  
  const description = t('subtitle');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        alternateUrls.map((alt) => [alt.hreflang, alt.href])
      ),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Phishy',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1', 10);
  const isFirstPage = currentPage === 1;
  const t = await getTranslations('Blog');
  const posts = getAllBlogPosts(locale as Locale);

  // Generate structured data for SEO
  const structuredData = generateBlogListStructuredData(
    locale as Locale,
    posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
    }))
  );

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
    <main className="min-h-screen text-white relative overflow-hidden bg-[#050505]">
      <Header />
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blogPageGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blogPageGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blogPageGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#blogPageGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#blogPageGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#blogPageGradient3)"
            strokeWidth="2"
            className="animate-draw-line-3"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Static circles */}
          <circle
            cx="200"
            cy="300"
            r="4"
            fill="rgba(147, 51, 234, 0.5)"
          />
          <circle
            cx="700"
            cy="500"
            r="5"
            fill="rgba(99, 102, 241, 0.5)"
          />
          <circle
            cx="1200"
            cy="700"
            r="4.5"
            fill="rgba(168, 85, 247, 0.5)"
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-float-particle" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary-400/50 rounded-full animate-float-particle" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary-300/50 rounded-full animate-float-particle" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-secondary-300/50 rounded-full animate-float-particle" style={{animationDelay: '0.5s'}} />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Blog Header with Title and Badge */}
          <BlogHeaderClient />

          {/* Hero Section - Featured Posts - Only show on page 1 */}
          {posts.length > 0 && isFirstPage && (
            <BlogHeroSection posts={posts} locale={locale} />
          )}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News - Left Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
              {posts.length > 0 ? (
                <BlogContentWrapper posts={posts} locale={locale as Locale} />
              ) : (
                <div className="text-center py-20">
                  <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40">
                    <p className="text-white/70 text-lg font-medium">
                      {t('noPosts')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Trending News - Right Column - Sticky */}
            <div className="lg:col-span-1">
              {posts.length > 0 && (
                <div className="lg:sticky lg:top-24">
                  <TrendingNews posts={posts} locale={locale} />
                </div>
              )}
            </div>
          </div>
          <div>
            <BlogPaginationClient
              totalPosts={posts.slice(3).length}
              postsPerPage={3}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}
