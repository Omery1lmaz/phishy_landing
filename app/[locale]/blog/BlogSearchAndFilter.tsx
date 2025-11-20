'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X, ChevronDown, Filter } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

export interface BlogSearchAndFilterProps {
  posts: BlogPost[];
  onFilteredPostsChange: (filteredPosts: BlogPost[]) => void;
}

type SortOption = 'newest' | 'oldest' | 'title-asc' | 'title-desc';

export default function BlogSearchAndFilter({ 
  posts, 
  onFilteredPostsChange 
}: BlogSearchAndFilterProps) {
  const t = useTranslations('Blog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));
    return uniqueCategories.sort();
  }, [posts]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [posts, searchQuery, selectedCategory, sortBy]);

  // Track previous filtered posts to avoid unnecessary updates
  const prevFilteredPostsRef = useRef<BlogPost[]>([]);
  
  // Notify parent of filtered posts only when they actually change
  useEffect(() => {
    // Compare by checking if the arrays have different lengths or different slugs
    const hasChanged = 
      prevFilteredPostsRef.current.length !== filteredPosts.length ||
      prevFilteredPostsRef.current.some((post, index) => post.slug !== filteredPosts[index]?.slug);
    
    if (hasChanged) {
      prevFilteredPostsRef.current = filteredPosts;
      onFilteredPostsChange(filteredPosts);
    }
  }, [filteredPosts, onFilteredPostsChange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('newest');
  };

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all' || sortBy !== 'newest';

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <Card className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl">
          <div className="relative flex items-center gap-4">
            {/* Search Icon */}
            <div className="absolute left-4 z-10">
              <Search className="w-5 h-5 text-white/50" />
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search.placeholder', { defaultMessage: 'Search articles...' })}
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
            />
            
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 z-10 p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={t('search.clear', { defaultMessage: 'Clear search' })}
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            )}
          </div>
      </Card>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Category Filter */}
        <div className="relative">
          <button
            onClick={() => {
              setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
              setIsSortDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 text-white/90 hover:border-white/20 transition-all"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">
              {selectedCategory === 'all' 
                ? t('filter.category', { defaultMessage: 'All Categories' })
                : selectedCategory
              }
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isCategoryDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsCategoryDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 z-50 min-w-[200px] rounded-xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 shadow-xl shadow-black/40 backdrop-blur-xl overflow-hidden">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setIsCategoryDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary-500/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t('filter.allCategories', { defaultMessage: 'All Categories' })}
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsCategoryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-500/20 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sort Filter */}
        <div className="relative">
          <button
            onClick={() => {
              setIsSortDropdownOpen(!isSortDropdownOpen);
              setIsCategoryDropdownOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 text-white/90 hover:border-white/20 transition-all"
          >
            <span className="text-sm font-medium">
              {sortBy === 'newest' && t('sort.newest', { defaultMessage: 'Newest First' })}
              {sortBy === 'oldest' && t('sort.oldest', { defaultMessage: 'Oldest First' })}
              {sortBy === 'title-asc' && t('sort.titleAsc', { defaultMessage: 'Title A-Z' })}
              {sortBy === 'title-desc' && t('sort.titleDesc', { defaultMessage: 'Title Z-A' })}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSortDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsSortDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 z-50 min-w-[180px] rounded-xl bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 border border-white/10 shadow-xl shadow-black/40 backdrop-blur-xl overflow-hidden">
                <button
                  onClick={() => {
                    setSortBy('newest');
                    setIsSortDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    sortBy === 'newest'
                      ? 'bg-primary-500/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t('sort.newest', { defaultMessage: 'Newest First' })}
                </button>
                <button
                  onClick={() => {
                    setSortBy('oldest');
                    setIsSortDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    sortBy === 'oldest'
                      ? 'bg-primary-500/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t('sort.oldest', { defaultMessage: 'Oldest First' })}
                </button>
                <button
                  onClick={() => {
                    setSortBy('title-asc');
                    setIsSortDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    sortBy === 'title-asc'
                      ? 'bg-primary-500/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t('sort.titleAsc', { defaultMessage: 'Title A-Z' })}
                </button>
                <button
                  onClick={() => {
                    setSortBy('title-desc');
                    setIsSortDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    sortBy === 'title-desc'
                      ? 'bg-primary-500/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t('sort.titleDesc', { defaultMessage: 'Title Z-A' })}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
          >
            <X className="w-4 h-4" />
            {t('filter.clearAll', { defaultMessage: 'Clear All' })}
          </button>
        )}

        {/* Results Count */}
        <div className="ml-auto text-sm text-white/60">
          {filteredPosts.length === posts.length ? (
            <span>
              {t('filter.resultsCount', { 
                count: filteredPosts.length,
                defaultMessage: `Showing ${filteredPosts.length} articles`
              })}
            </span>
          ) : (
            <span>
              {t('filter.filteredResultsCount', { 
                count: filteredPosts.length,
                total: posts.length,
                defaultMessage: `Showing ${filteredPosts.length} of ${posts.length} articles`
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

