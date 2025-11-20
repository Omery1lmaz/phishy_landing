import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';

export const runtime = 'edge';

import Footer from '../../../components/Footer';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';
import MostReadPosts from './MostReadPosts';
import ShareButtons from './ShareButtons';
import TableOfContents from './TableOfContents';
import type { Locale } from '@/i18n/routing';
import { getCanonicalUrl, getAlternateUrls, getBaseUrl, getOgImageUrl, generateBlogPostStructuredData } from '@/lib/seo';
import { locales } from '@/i18n/routing';
import { extractHeadings } from '@/lib/markdown';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug, locale as Locale);
  const t = await getTranslations('Blog');

  if (!post) {
    return {
      title: t('postNotFoundTitle'),
    };
  }

  const baseUrl = getBaseUrl();
  const canonicalUrl = post.meta?.canonicalUrl || getCanonicalUrl(`/${locale}/blog/${slug}`, locale as Locale);
  const alternateUrls = getAlternateUrls(`/blog/${slug}`, [...locales]);
  
  // Determine OG image - prioritize meta.ogImage, then post.image, then default
  let ogImage: string;
  if (post.meta?.ogImage) {
    ogImage = getOgImageUrl(post.meta.ogImage);
  } else if (post.image) {
    ogImage = getOgImageUrl(post.image);
  } else {
    ogImage = `${baseUrl}/og-image.jpg`;
  }

  // Use meta tags if available, otherwise use defaults
  // For page title, use ogTitle if available, otherwise post.title (Next.js will add site name)
  const pageTitle = post.meta?.ogTitle || post.title;
  const title = pageTitle; // Next.js automatically appends site name from root layout
  const description = post.meta?.ogDescription || post.excerpt;
  const keywords = post.meta?.keywords || post.tags.join(', ');
  const ogType = post.meta?.ogType || 'article';
  const ogSiteName = post.meta?.ogSiteName || 'Phishy';
  const twitterCard = post.meta?.twitterCard || 'summary_large_image';
  const twitterTitle = post.meta?.twitterTitle || title;
  const twitterDescription = post.meta?.twitterDescription || description;
  
  // Twitter image - prioritize meta.twitterImage, then ogImage
  const twitterImage = post.meta?.twitterImage 
    ? getOgImageUrl(post.meta.twitterImage) 
    : ogImage;
  
  const twitterCreator = post.meta?.twitterCreator || '@phishy';
  const articleAuthor = post.meta?.articleAuthor || post.author;
  const articlePublishedTime = post.meta?.articlePublishedTime || post.date;
  const articleModifiedTime = post.meta?.articleModifiedTime || post.date;
  const articleSection = post.meta?.articleSection || post.category;
  const articleTags = post.meta?.articleTags || post.tags;
  const robots = post.meta?.robots || 'index, follow';

  // Parse robots string
  const robotsConfig = robots.includes('noindex') 
    ? { index: false, follow: robots.includes('follow') }
    : {
        index: true,
        follow: !robots.includes('nofollow'),
        googleBot: {
          index: !robots.includes('noindex'),
          follow: !robots.includes('nofollow'),
          'max-video-preview': -1,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
        },
      };

  return {
    title,
    description,
    keywords,
    authors: [{ name: articleAuthor }],
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
      siteName: ogSiteName,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: ogType as 'article' | 'website',
      publishedTime: articlePublishedTime,
      modifiedTime: articleModifiedTime,
      authors: [articleAuthor],
      section: articleSection,
      tags: articleTags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: twitterCard as 'summary' | 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage ? [twitterImage] : undefined,
      creator: twitterCreator,
    },
    robots: robotsConfig,
    other: {
      ...(post.meta?.keywords && { keywords: post.meta.keywords }),
      ...(post.meta?.author && { author: post.meta.author }),
      ...(post.meta?.geoRegion && { 'geo.region': post.meta.geoRegion }),
      ...(post.meta?.geoPlacename && { 'geo.placename': post.meta.geoPlacename }),
      ...(post.meta?.geoPosition && { 'geo.position': post.meta.geoPosition }),
      ...(post.meta?.ICBM && { 'ICBM': post.meta.ICBM }),
      // Article meta tags (OpenGraph already includes tags, but we add them here for completeness)
      'article:author': articleAuthor,
      'article:published_time': articlePublishedTime,
      ...(articleModifiedTime && { 'article:modified_time': articleModifiedTime }),
      'article:section': articleSection,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations('Blog');
  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{t('postNotFound')}</h1>
            <p className="text-gray-400 mb-8">{t('postNotFoundDescription')}</p>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t('backToBlog')}</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const formatDate = (dateString: string, locale: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get most read posts (for now, just get recent posts excluding current)
  const mostReadPosts = getAllBlogPosts(locale as Locale)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Extract headings for table of contents
  const headings = extractHeadings(post.content);

  // Generate structured data for SEO (includes meta tags)
  const structuredData = generateBlogPostStructuredData(locale as Locale, {
    ...post,
    meta: post.meta,
  });

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
    <main className="min-h-screen bg-background relative">
      <Header />
      <div className="pt-24 relative">
        {/* Container for Main Content with Grid Layout */}
        <div className="w-full mx-auto px-4 lg:px-6">
          <div className={`grid grid-cols-1 ${headings.length > 0 ? 'lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_280px]' : 'xl:grid-cols-[1fr_280px]'} gap-4 lg:gap-6 xl:gap-8 relative`}>
            {/* Table of Contents - Desktop Sticky on Left Side */}
            {headings.length > 0 && (
              <div className="hidden lg:block lg:col-start-1">
                <div className="sticky top-24 mb-16 mr-2 lg:mr-4 self-start" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
                  <TableOfContents headings={headings} />
                </div>
              </div>
            )}

            {/* Main Content Area */}
            <div className={`${headings.length > 0 ? 'lg:col-start-2 xl:col-start-2' : 'lg:col-start-1 xl:col-start-1'} w-full`}>
              {/* Table of Contents - Mobile */}
              {headings.length > 0 && (
                <div className="lg:hidden mb-8">
                  <TableOfContents headings={headings} />
                </div>
              )}

              {/* Most Read Posts - Mobile (always render for mobile button) */}
              {mostReadPosts.length > 0 && (
                <div className="xl:hidden mb-8">
                  <MostReadPosts posts={mostReadPosts} />
                </div>
              )}
          {/* Back Button */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 blog-post-header"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>{t('backToBlog')}</span>
          </Link>

          {/* Article Header */}
          <header className="blog-post-header mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/50">
              {/* Author and Date */}
              <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-700/30">
                <svg
                      className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                  </div>
                  <span className="text-sm font-medium">{post.author}</span>
              </div>
                <div className="w-px h-4 bg-gray-700/50"></div>
              <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-700/30">
                <svg
                      className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                  </div>
                  <span className="text-sm font-medium">{formatDate(post.date, locale)}</span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-gray-700/50"></div>
              
              {/* Share Section */}
              <div className="flex items-center gap-2 ml-auto">
                <ShareButtons postTitle={post.title} postSlug={post.slug} locale={locale as Locale} />
              </div>
            </div>
          </header>

              {/* Article Content */}
              <BlogPostClient 
                post={post} 
                locale={locale as Locale} 
                blogUrl={`${getBaseUrl()}/${locale}/blog/${post.slug}`}
              />
            </div>

            {/* Most Read Posts - Desktop Sticky on Right Side */}
            {mostReadPosts.length > 0 && (
              <div className={`hidden xl:block ${headings.length > 0 ? 'xl:col-start-3' : 'xl:col-start-2'}`}>
                <div className="sticky top-24 mb-16 self-start" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
                  <MostReadPosts posts={mostReadPosts} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <Footer  />
      </div>
    </main>
    </>
  );
}
