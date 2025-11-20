'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface TrendingNewsProps {
  posts: BlogPost[];
  locale: string;
}

const TrendingNews: React.FC<TrendingNewsProps> = ({ posts, locale }) => {
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get trending posts (first 5)
  const trendingPosts = posts.slice(0, 5);

  return (
    <div className="bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Trending News</h2>
      <div className="space-y-4">
        {trendingPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
          >
            {/* Number Indicator */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-sm">
              {index + 1}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span>{formatDate(post.date)}</span>
                <span className="text-white/30">•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;

