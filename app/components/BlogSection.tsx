'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import PrimaryButton from '@/app/components/ui/primary-button';
import { Card, CardContent } from '@/components/ui/card';
import BlogHeroSection from '../[locale]/blog/BlogHeroSection';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const locale = useLocale();
  const router = useRouter();
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);

  // Sync left card height with right container
  useEffect(() => {
    const updateHeight = () => {
      if (rightContainerRef.current && leftCardRef.current) {
        const rightHeight = rightContainerRef.current.offsetHeight;
        setLeftHeight(rightHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Use ResizeObserver for more accurate height tracking
    const resizeObserver = new ResizeObserver(updateHeight);
    if (rightContainerRef.current) {
      resizeObserver.observe(rightContainerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      resizeObserver.disconnect();
    };
  }, [posts]);

  // Featured post (first post)
  const featuredPost = posts[0];
  // Recent posts (next 3 posts)
  const recentPosts = posts.slice(1, 4);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get image for post
  const getImageForPost = (post: { image?: string; slug: string }) => {
    if (post.image) return post.image;
    return '/code-editor.png';
  };

  return (
    <section id="blog" className="relative overflow-hidden py-20 md:py-28 bg-[#050505]">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blogGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blogGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blogGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#blogGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#blogGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#blogGradient3)"
            strokeWidth="2"
            className="animate-draw-line-3"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated circles */}
          <circle
            cx="200"
            cy="300"
            r="4"
            fill="rgba(147, 51, 234, 0.5)"
            className="animate-pulse-glow"
          />
          <circle
            cx="700"
            cy="500"
            r="5"
            fill="rgba(99, 102, 241, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="1200"
            cy="700"
            r="4.5"
            fill="rgba(168, 85, 247, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
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

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <span className="text-sm font-medium text-primary-400/80 uppercase tracking-wider">
              Blog Articles
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Stay informed with our most recent reports, market updates, and expert insights.
          </p>
        </div>

        {/* Main Content Layout */}
        <BlogHeroSection posts={posts} locale={locale} />

        {/* View All Button */}
        <div className="text-center">
          <PrimaryButton
            onClick={() => router.push(`/${locale}/blog`)}
            text="View All Articles"
            className="inline-flex"
          />
        </div>
      </div>

    
    </section>
  );
};

export default BlogSection;

