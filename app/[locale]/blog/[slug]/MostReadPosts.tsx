'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

interface MostReadPostsProps {
  posts: BlogPost[];
}

export default function MostReadPosts({ posts }: MostReadPostsProps) {
  const locale = useLocale();
  const t = useTranslations('Blog');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>('700px'); // Initial height to prevent flash
  const hasMeasured = useRef(false);
  const retryCount = useRef(0);

  // Match height with Table of Contents
  useEffect(() => {
    if (hasMeasured.current) return;

    const updateHeight = () => {
      if (hasMeasured.current || retryCount.current > 10) return;

      const tocContent = document.querySelector('[data-table-of-contents]');
      if (tocContent) {
        const height = tocContent.getBoundingClientRect().height;
        if (height > 0) {
          // Use the measured height or minimum 700px, whichever is larger
          const minHeight = 700;
          const finalHeight = Math.max(height, minHeight);
          setMaxHeight(`${finalHeight}px`);
          hasMeasured.current = true;
          return;
        }
      }
      
      // Retry if not ready yet
      retryCount.current += 1;
      setTimeout(updateHeight, 200);
    };

    // Wait for DOM to be ready, then measure once - faster to prevent flash
    const timeoutId = setTimeout(updateHeight, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (posts.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button - Right Side */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="xl:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 hover:from-primary-500 hover:to-secondary-500 text-white p-4 rounded-full shadow-2xl shadow-primary-500/50 transition-all duration-300 hover:scale-110"
        aria-label={locale === 'tr' ? 'En Çok Okunan Yazılar' : 'Most Read Posts'}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Desktop Sidebar */}
      <aside id="most-read-posts-sidebar" className="hidden xl:block z-50">
      <div 
        id="most-read-posts-content"
        data-most-read-posts
        className="bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-300 flex flex-col w-[300px] max-h-[calc(100vh-12rem)] min-h-[700px]"
        style={{ maxHeight }}
      >
        {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-white/10 transition-all duration-300">
            <h2 className="text-xs font-semibold text-white flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {locale === 'tr' ? 'En Çok Okunan Yazılar' : 'Most Read Posts'}
            </h2>
          </div>

        {/* Demo Request CTA - At top */}
        <div className="border-b border-white/10 p-4 flex-shrink-0">
              <Link
                href={`/${locale}/request-demo`}
                className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-primary-600/30 via-primary-500/25 to-secondary-600/30 hover:from-primary-600/40 hover:via-primary-500/35 hover:to-secondary-600/40 border-2 border-primary-500/40 hover:border-primary-400/60 transition-all duration-300 overflow-hidden shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/20 group-hover:via-primary-500/10 group-hover:to-secondary-500/20 transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-primary-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/40 to-secondary-500/40 group-hover:from-primary-400/60 group-hover:to-secondary-400/60 transition-all duration-300 shadow-lg shadow-primary-500/30 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="text-sm font-bold text-white leading-tight px-2">
                      {locale === 'tr' ? 'Ürün hakkında bilgi almak için hemen demo talep et' : 'Request a demo to learn more about our product'}
                    </span>
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-medium">
                      {locale === 'tr' ? 'Hemen başlayın' : 'Get started now'}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

        {/* Posts List */}
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Scrollable Posts */}
            <div className="space-y-1.5 p-3 overflow-y-auto custom-scrollbar flex-1 min-h-0">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block p-2.5 rounded-lg bg-gradient-to-r from-gray-800/20 to-gray-800/10 hover:from-gray-800/40 hover:to-gray-800/30 border border-gray-700/20 hover:border-primary-500/30 transition-all duration-200"
                >
                  <h3 className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-relaxed">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

            {/* Newsletter Section - Fixed at bottom */}
            <div className="border-t border-white/10 p-3 flex-shrink-0">
              <h3 className="text-[10px] font-semibold text-white mb-2.5 text-center uppercase tracking-wider">
                {t('newsletter.title')}
              </h3>
              <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); }}>
                <input
                  type="email"
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white text-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary-600/80 to-secondary-600/80 text-white hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 shadow-md shadow-secondary-600/20 hover:shadow-secondary-600/40 font-medium text-[10px]"
                >
                  {t('newsletter.subscribe')}
                </button>
              </form>
            </div>
      </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        id="most-read-posts-mobile"
        className={`xl:hidden fixed z-30 bottom-0 left-0 right-0 transition-all duration-300 ${
          isMobileOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div
          className="bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10 rounded-t-2xl shadow-2xl shadow-black/50 w-full max-h-[70vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {locale === 'tr' ? 'En Çok Okunan Yazılar' : 'Most Read Posts'}
            </h2>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                aria-label={locale === 'tr' ? 'Kapat' : 'Close'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </div>

          {/* Demo Request CTA - At top */}
          <div className="border-b border-white/10 p-4 flex-shrink-0">
              <Link
                href={`/${locale}/request-demo`}
                className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-primary-600/30 via-primary-500/25 to-secondary-600/30 hover:from-primary-600/40 hover:via-primary-500/35 hover:to-secondary-600/40 border-2 border-primary-500/40 hover:border-primary-400/60 transition-all duration-300 overflow-hidden shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
                onClick={() => setIsMobileOpen(false)}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/20 group-hover:via-primary-500/10 group-hover:to-secondary-500/20 transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-primary-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/40 to-secondary-500/40 group-hover:from-primary-400/60 group-hover:to-secondary-400/60 transition-all duration-300 shadow-lg shadow-primary-500/30 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="text-sm font-bold text-white leading-tight px-2">
                      {locale === 'tr' ? 'Ürün hakkında bilgi almak için hemen demo talep et' : 'Request a demo to learn more about our product'}
                    </span>
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-medium">
                      {locale === 'tr' ? 'Hemen başlayın' : 'Get started now'}
                    </span>
                  </div>
                  </div>
                </Link>
          </div>

          {/* Posts List - Scrollable */}
          <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
            <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0">
              <div className="space-y-2 p-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                    className="block p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-200 group"
                  onClick={() => setIsMobileOpen(false)}
                >
                    <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>

            {/* Newsletter Section - Fixed at bottom */}
            <div className="border-t border-white/10 p-4 flex-shrink-0">
              <h3 className="text-xs font-semibold text-white mb-3 text-center">
                {t('newsletter.title')}
              </h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600/80 to-secondary-600/80 text-white hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 shadow-lg shadow-secondary-600/30 hover:shadow-secondary-600/50 font-medium text-sm"
                >
                  {t('newsletter.subscribe')}
                </button>
              </form>
            </div>
        </div>
      </div>
    </>
  );
}

