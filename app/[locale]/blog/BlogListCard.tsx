'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import { cn } from '@/lib/utils';

export interface BlogListCardProps {
  post: BlogPost;
  locale: string;
  className?: string;
}

const BlogListCard: React.FC<BlogListCardProps> = ({
  post,
  locale,
  className,
}) => {
  const [imageError, setImageError] = useState(false);

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
      <div className="flex gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
        {/* Thumbnail Image */}
        <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-800">
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              onError={() => setImageError(true)}
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
              <span className="text-white/60 text-xs text-center px-2 line-clamp-3">
                {post.title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Category Badge */}
          <div className="mb-2">
            <GlowBadge variant="primary" className="px-2 py-0.5 text-xs">
              {post.category}
            </GlowBadge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/60 text-sm line-clamp-2 mb-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Meta Info */}
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
            <span className="text-white/30">•</span>
            <span className="text-primary-300">{post.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListCard;

