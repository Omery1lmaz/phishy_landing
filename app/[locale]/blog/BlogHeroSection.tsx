'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import { cn } from '@/lib/utils';

interface BlogHeroSectionProps {
  posts: BlogPost[];
  locale: string;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ posts, locale }) => {
  // Get image for post
  const getImageForPost = (post: { image?: string; slug: string }) => {
    if (post.image) return post.image;
    const imageMap: Record<string, string> = {
      'phishing-saldirilarina-karsi-korunma': '/code-editor.png',
      'siber-guvenlik-farkindaligi-neden-onemli': '/dashboard.png',
      'phishing-simulasyonlarinin-onemi': '/secureandfast.png',
    };
    return imageMap[post.slug] || '/code-editor.png';
  };

  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const smallPosts = posts.slice(1, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      {/* Large Featured Post - Left */}
      <Link
        href={`/${locale}/blog/${featuredPost.slug}`}
        className="lg:col-span-2 group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src={getImageForPost(featuredPost)}
            alt={featuredPost.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            {/* Category Badge */}
            <div className="mb-4">
              <GlowBadge variant="primary" className="px-3 py-1 text-xs">
                {featuredPost.category}
              </GlowBadge>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 line-clamp-3 group-hover:text-primary-300 transition-colors">
              {featuredPost.title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-white/80 text-base lg:text-lg line-clamp-2">
              {featuredPost.excerpt}
            </p>
          </div>
        </div>
      </Link>

      {/* Small Featured Posts - Right */}
      <div className="flex flex-col gap-6">
        {smallPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group relative h-[280px] rounded-3xl overflow-hidden flex-shrink-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={getImageForPost(post)}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <GlowBadge variant="primary" className="px-3 py-1 text-xs">
                    {post.category}
                  </GlowBadge>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-white/70 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHeroSection;

