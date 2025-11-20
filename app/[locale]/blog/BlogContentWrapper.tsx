'use client';

import { useState, useCallback } from 'react';
import BlogContentClient from './BlogContentClient';
import BlogPaginationClient from './BlogPaginationClient';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/i18n/routing';

interface BlogContentWrapperProps {
  posts: BlogPost[];
  locale: Locale;
}

const POSTS_PER_PAGE = 3;

export default function BlogContentWrapper({ posts, locale }: BlogContentWrapperProps) {
  const [filteredPostsCount, setFilteredPostsCount] = useState<number>(posts.slice(3).length);

  const handleFilteredPostsCountChange = useCallback((count: number) => {
    setFilteredPostsCount(count);
  }, []);

  return (
    <>
      <BlogContentClient 
        posts={posts} 
        locale={locale}
        onFilteredPostsCountChange={handleFilteredPostsCountChange}
      />
     {/*  <BlogPaginationClient 
        totalPosts={filteredPostsCount}
        postsPerPage={POSTS_PER_PAGE}
      /> */}
    </>
  );
}

