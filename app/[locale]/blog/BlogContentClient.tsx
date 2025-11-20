'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/i18n/routing';
import BlogSearchAndFilter from './BlogSearchAndFilter';
import BlogPostsClient from './BlogPostsClient';

interface BlogContentClientProps {
  posts: BlogPost[];
  locale: Locale;
  onFilteredPostsCountChange?: (count: number) => void;
}

const POSTS_PER_PAGE = 3;

export default function BlogContentClient({ posts, locale, onFilteredPostsCountChange }: BlogContentClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts.slice(3));
  
  // Get initial page from URL or default to 1
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(Math.max(1, initialPage));

  const handleFilteredPostsChange = useCallback((newFilteredPosts: BlogPost[]) => {
    setFilteredPosts(newFilteredPosts);
    // Reset to page 1 when filtering
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(newUrl, { scroll: false });
    // Notify parent of filtered posts count
    if (onFilteredPostsCountChange) {
      onFilteredPostsCountChange(newFilteredPosts.length);
    }
  }, [searchParams, pathname, router, onFilteredPostsCountChange]);

  // Notify parent when filtered posts change
  useEffect(() => {
    if (onFilteredPostsCountChange) {
      onFilteredPostsCountChange(filteredPosts.length);
    }
  }, [filteredPosts.length, onFilteredPostsCountChange]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Sync page from URL on mount or when URL changes
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const validPage = Math.max(1, Math.min(pageFromUrl, totalPages || 1));
    
    // Use startTransition to avoid synchronous setState in effect
    React.startTransition(() => {
      setCurrentPage(prevPage => {
        if (prevPage !== validPage) {
          return validPage;
        }
        return prevPage;
      });
    });
    
    // Update URL if page is out of bounds
    if (pageFromUrl > totalPages && totalPages > 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', totalPages.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, filteredPosts.length, pathname, router]);


  return (
    <>
      <BlogSearchAndFilter 
        posts={posts.slice(3)} 
        onFilteredPostsChange={handleFilteredPostsChange}
      />
      
      <BlogPostsClient posts={currentPosts} locale={locale} />
    </>
  );
}

