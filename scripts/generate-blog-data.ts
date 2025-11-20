/**
 * Blog Data Generator
 * 
 * Bu script, content/blog/ klasöründeki markdown dosyalarını okuyup
 * Edge Runtime ile uyumlu bir TypeScript dosyasına çevirir.
 * 
 * Build time'da çalışır, runtime'da fs/path kullanmaz.
 */

import fs from 'fs';
import path from 'path';

interface BlogPostMeta {
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCreator?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  ICBM?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
  meta?: BlogPostMeta;
}

interface FrontMatter {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
  metaEtiketleri?: BlogPostMeta;
  meta?: BlogPostMeta;
}

function parseFrontMatter(content: string): { frontMatter: FrontMatter; markdown: string } {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    throw new Error('Front matter not found in markdown file');
  }

  const frontMatterText = match[1];
  const markdown = match[2];

  const frontMatter: Partial<FrontMatter> = {};
  const lines = frontMatterText.split('\n');
  let inMetaBlock = false;
  let currentMetaKey: 'metaEtiketleri' | 'meta' | null = null;
  let metaObject: Partial<BlogPostMeta> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;
    
    // Check if we're entering a meta block
    if (trimmedLine === 'metaEtiketleri:' || trimmedLine === 'meta:') {
      inMetaBlock = true;
      currentMetaKey = trimmedLine.startsWith('metaEtiketleri') ? 'metaEtiketleri' : 'meta';
      metaObject = {};
      continue;
    }

    // Check if we're in a meta block (indented lines)
    if (inMetaBlock) {
      // Check if line is still part of meta block (starts with 2+ spaces or tab)
      const isIndented = line.startsWith('  ') || line.startsWith('\t');
      const hasColon = trimmedLine.includes(':');
      
      if (isIndented && hasColon) {
        const colonIndex = trimmedLine.indexOf(':');
        if (colonIndex !== -1) {
          const metaKey = trimmedLine.substring(0, colonIndex).trim();
          let metaValue = trimmedLine.substring(colonIndex + 1).trim();

          // Remove quotes if present
          if ((metaValue.startsWith('"') && metaValue.endsWith('"')) || 
              (metaValue.startsWith("'") && metaValue.endsWith("'"))) {
            metaValue = metaValue.slice(1, -1);
          }

          // Parse array values
          if (metaValue.startsWith('[')) {
            try {
              (metaObject as any)[metaKey] = JSON.parse(metaValue);
            } catch {
              (metaObject as any)[metaKey] = metaValue.split(',').map((t: string) => t.trim().replace(/^["']|["']$/g, ''));
            }
          } else if (metaValue.includes(',') && (metaKey.includes('tags') || metaKey.includes('Tags'))) {
            // Handle comma-separated tags
            (metaObject as any)[metaKey] = metaValue.split(',').map((t: string) => t.trim().replace(/^["']|["']$/g, ''));
          } else {
            (metaObject as any)[metaKey] = metaValue;
          }
        }
        continue;
      } else if (!isIndented && trimmedLine && !trimmedLine.startsWith('#')) {
        // End of meta block - we hit a non-indented line that's not empty
        if (currentMetaKey) {
          (frontMatter as any)[currentMetaKey] = metaObject;
        }
        inMetaBlock = false;
        currentMetaKey = null;
        // Continue processing this line as a regular field
        i--; // Re-process this line
        continue;
      } else {
        // Empty line or comment in meta block, continue
        continue;
      }
    }
    
    // Regular field parsing
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmedLine.substring(0, colonIndex).trim();
    let value = trimmedLine.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key === 'tags') {
      // Parse array: tags: ["tag1", "tag2"] or tags: tag1, tag2
      if (value.startsWith('[')) {
        try {
          frontMatter.tags = JSON.parse(value);
        } catch {
          frontMatter.tags = value.split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
        }
      } else {
        frontMatter.tags = value.split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
      }
    } else {
      (frontMatter as any)[key] = value;
    }
  }

  // Handle case where meta block is at the end
  if (inMetaBlock && currentMetaKey) {
    (frontMatter as any)[currentMetaKey] = metaObject;
  }

  // Validate required fields
  if (!frontMatter.title || !frontMatter.excerpt || !frontMatter.author || !frontMatter.date || !frontMatter.category) {
    throw new Error('Missing required front matter fields: title, excerpt, author, date, category');
  }

  return {
    frontMatter: frontMatter as FrontMatter,
    markdown,
  };
}

function getAllBlogPosts(locale: string = 'tr'): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content', 'blog', locale);

  if (!fs.existsSync(blogDir)) {
    console.warn(`⚠️  Blog directory not found: ${blogDir}`);
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    try {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { frontMatter, markdown } = parseFrontMatter(fileContent);
      const slug = file.replace('.md', '');

      posts.push({
        slug,
        title: frontMatter.title,
        excerpt: frontMatter.excerpt,
        content: markdown,
        author: frontMatter.author,
        date: frontMatter.date,
        category: frontMatter.category,
        image: frontMatter.image,
        tags: frontMatter.tags || [],
        meta: frontMatter.metaEtiketleri || frontMatter.meta,
      });
    } catch (error) {
      console.error(`❌ Error reading blog post ${file}:`, error);
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Generate blog data file
const locales = ['tr', 'en'];
const blogData: Record<string, BlogPost[]> = {};

console.log('📝 Generating blog data for Edge Runtime...\n');

for (const locale of locales) {
  const posts = getAllBlogPosts(locale);
  blogData[locale] = posts;
  console.log(`✅ ${locale.toUpperCase()}: ${posts.length} posts found`);
}

const outputPath = path.join(process.cwd(), 'app', 'data', 'blog-posts.ts');
const outputDir = path.dirname(outputPath);

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate TypeScript file with blog data
const content = `// This file is auto-generated by scripts/generate-blog-data.ts
// Do not edit manually. Run 'npm run generate:blog' to regenerate.
// 
// This file contains all blog posts as static data, making it compatible
// with Edge Runtime (Cloudflare Pages) where fs/path APIs are not available.

export interface BlogPostMeta {
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCreator?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  ICBM?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
  meta?: BlogPostMeta;
}

export const blogPosts: Record<string, BlogPost[]> = ${JSON.stringify(blogData, null, 2)};

/**
 * Get all blog posts for a locale
 * Edge Runtime compatible - uses static data instead of fs
 */
export function getAllBlogPosts(locale: string = 'tr'): BlogPost[] {
  return blogPosts[locale] || [];
}

/**
 * Get a single blog post by slug
 * Edge Runtime compatible - uses static data instead of fs
 */
export function getBlogPost(slug: string, locale: string = 'tr'): BlogPost | undefined {
  const posts = blogPosts[locale] || [];
  return posts.find(post => post.slug === slug);
}
`;

fs.writeFileSync(outputPath, content, 'utf-8');

console.log(`\n✅ Generated blog data file: ${outputPath}`);
console.log(`   Total posts: ${blogData.tr.length + blogData.en.length}`);
console.log(`\n✨ Blog data is now Edge Runtime compatible!\n`);

