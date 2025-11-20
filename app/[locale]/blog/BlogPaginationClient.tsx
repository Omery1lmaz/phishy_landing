'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface BlogPaginationClientProps {
  totalPosts: number;
  postsPerPage: number;
}

export default function BlogPaginationClient({ totalPosts, postsPerPage }: BlogPaginationClientProps) {
  const t = useTranslations('Blog');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get initial page from URL or default to 1
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = React.useState(Math.max(1, initialPage));

  // Calculate pagination
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Sync page from URL on mount or when URL changes
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
    const validPage = Math.max(1, Math.min(pageFromUrl, totalPages || 1));
    
    setCurrentPage(prevPage => {
      if (prevPage !== validPage) {
        return validPage;
      }
      return prevPage;
    });
    
    // Update URL if page is out of bounds
    if (pageFromUrl > totalPages && totalPages > 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', totalPages.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, totalPosts, totalPages, pathname, router]);


  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      // Update URL with new page number
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', page.toString());
      }
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      router.push(newUrl, { scroll: false });
      
      // Update state immediately for better UX
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div 
      className="z-50 flex items-center justify-end gap-3"
    >
      {/* Page Info - No background */}
      <div className="relative inline-flex items-center px-2">
        <span className="text-xs text-white/60 font-medium">
          {t('pagination.pageInfo', {
            currentPage,
            totalPages,
            total: totalPosts,
          })}
        </span>
      </div>

      {/* Pagination Controls - Minimal design */}
      <div className="relative flex items-center gap-1">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative p-2 rounded-lg text-white/60 disabled:opacity-20 disabled:cursor-not-allowed hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label={t('pagination.previousPage')}
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-0.5">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 py-1 text-white/30 text-xs font-medium"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`relative px-3 py-1.5 rounded-lg min-w-[32px] text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                aria-label={t('pagination.pageNumber', { page: pageNum })}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="relative z-10">{pageNum}</span>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative p-2 rounded-lg text-white/60 disabled:opacity-20 disabled:cursor-not-allowed hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label={t('pagination.nextPage')}
        >
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
        </button>
      </div>
    </div>
  );
}

