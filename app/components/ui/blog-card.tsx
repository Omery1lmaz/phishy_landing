'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface BlogCardProps {
  post: BlogPost;
  locale: string;
  className?: string;
  imageFallbackMap?: Record<string, string>;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  locale,
  className,
  imageFallbackMap = {},
}) => {
  // Default fallback images
  const defaultImageMap: Record<string, string> = {
    'phishing-saldirilarina-karsi-korunma': '/code-editor.png',
    'siber-guvenlik-farkindaligi-neden-onemli': '/dashboard.png',
    'phishing-simulasyonlarinin-onemi': '/secureandfast.png',
    ...imageFallbackMap,
  };

  // Get image for post
  const getImageForPost = (post: { image?: string; slug: string }) => {
    if (post.image) return post.image;
    return defaultImageMap[post.slug] || '/code-editor.png';
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const imageSrc = getImageForPost(post);

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className={cn('group block', className)}
    >
      <Card className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-gray-800">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/10 to-transparent" />
          
          {/* Category Badge Overlay */}
          <div className="absolute bottom-4 left-4 z-10">
            <GlowBadge variant="primary" className="px-3 py-1 text-xs">
              {post.category}
            </GlowBadge>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/60 mb-4 flex-grow text-sm line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <svg
                className="w-4 h-4"
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
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1 text-primary-300">
              <span className="text-xs font-medium">Read</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;

