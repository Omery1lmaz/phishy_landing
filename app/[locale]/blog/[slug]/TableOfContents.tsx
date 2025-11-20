'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const t = useTranslations('Blog');
  const locale = useLocale();
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>('700px'); // Initial height to prevent flash
  const hasMeasured = useRef(false);
  const retryCount = useRef(0);

  // Check if desktop on mount
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
      // If desktop, close mobile menu
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Match height with Most Read Posts sidebar - only once on mount
  useEffect(() => {
    if (!isDesktop || hasMeasured.current) return;

    const updateHeight = () => {
      if (hasMeasured.current || retryCount.current > 10) return;

      const mostReadPostsContent = document.getElementById('most-read-posts-content');
      if (mostReadPostsContent) {
        // Make sure it's not collapsed
        const isCollapsed = mostReadPostsContent.offsetWidth <= 60;
        if (!isCollapsed) {
          const height = mostReadPostsContent.getBoundingClientRect().height;
          if (height > 0) {
            // Use the measured height or minimum 700px, whichever is larger
            const minHeight = 700;
            const finalHeight = Math.max(height, minHeight);
            setMaxHeight(`${finalHeight}px`);
            hasMeasured.current = true;
            return;
          }
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
  }, [isDesktop]); // Only run once when desktop is detected


  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button - Left Side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-50 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 hover:from-primary-500 hover:to-secondary-500 text-white p-4 rounded-full shadow-2xl shadow-primary-500/50 transition-all duration-300 hover:scale-110"
        aria-label={t('tableOfContents.title')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Table of Contents - Desktop */}
      {isDesktop && (
        <div className="z-50">
          <div 
          data-table-of-contents
          className="bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-300 flex flex-col w-[300px] max-h-[calc(100vh-12rem)] min-h-[700px]"
          style={{ maxHeight }}
          >
            {/* Header */}
              <div className="flex items-center justify-between p-3 border-b border-white/10 transition-all duration-300">
                <h3 className="text-xs font-semibold text-white flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {t('tableOfContents.title')}
                </h3>
              </div>

            {/* Headings List */}
              <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
                <div className="overflow-y-auto custom-scrollbar h-full w-full">
                  <div className="p-3">
                    <nav className="space-y-1">
                      {headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          className={`w-full text-left px-2 py-1.5 rounded-lg transition-all duration-200 text-xs ${
                            activeId === heading.id
                              ? 'bg-primary-500/30 text-primary-200 border-l-2 border-primary-400'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          } ${
                            heading.level === 1
                              ? 'font-semibold'
                              : heading.level === 2
                              ? 'font-medium pl-4'
                              : 'font-normal pl-6'
                          }`}
                        >
                          <span className="block break-words hyphens-auto leading-relaxed">{heading.text}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}

      {/* Table of Contents - Mobile */}
      <div
        className={`lg:hidden fixed z-30 bottom-0 left-0 right-0 transition-all duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div
          data-table-of-contents
          className="bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10 rounded-t-2xl shadow-2xl shadow-black/50 w-full max-h-[70vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {t('tableOfContents.title')}
            </h3>
            <div className="flex items-center gap-2">
              {/* Mobile: Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                aria-label={locale === 'tr' ? 'Kapat' : 'Close'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Headings List */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <div className="overflow-y-auto custom-scrollbar h-full w-full">
              <div className="p-4">
                <nav className="space-y-1">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => {
                        scrollToHeading(heading.id);
                        setIsOpen(false); // Close on mobile after click
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        activeId === heading.id
                          ? 'bg-primary-500/30 text-primary-200 border-l-2 border-primary-400'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      } ${
                        heading.level === 1
                          ? 'font-semibold'
                          : heading.level === 2
                          ? 'font-medium pl-4'
                          : 'font-normal pl-6 text-xs'
                      }`}
                    >
                      <span className="block break-words hyphens-auto">{heading.text}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
