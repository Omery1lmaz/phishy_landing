'use client';

import React from 'react';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/i18n/routing';
import BlogListCard from './BlogListCard';

interface BlogPostsClientProps {
  posts: BlogPost[];
  locale: Locale;
}

export default function BlogPostsClient({ posts, locale }: BlogPostsClientProps) {

  return (
    <div className="space-y-4 mb-12">
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <BlogListCard
              post={post}
              locale={locale}
            />
          </div>
        );
      })}
    </div>
  );
}
