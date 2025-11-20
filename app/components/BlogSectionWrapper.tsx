import { getAllBlogPosts } from '@/lib/blog';
import BlogSection from './BlogSection';
import type { Locale } from '@/i18n/routing';

interface BlogSectionWrapperProps {
  locale: Locale;
}

export default async function BlogSectionWrapper({ locale }: BlogSectionWrapperProps) {
  const posts = getAllBlogPosts(locale);
  return <BlogSection posts={posts} />;
}

