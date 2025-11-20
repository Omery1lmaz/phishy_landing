import React from 'react';
import BlogImage from '@/app/components/BlogImage';

// Generate slug from text
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Extract headings from markdown content
export function extractHeadings(content: string): Array<{ id: string; text: string; level: number }> {
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const usedIds = new Set<string>();
  const lines = content.split('\n');
  
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      const text = trimmed.substring(2).trim();
      let id = generateSlug(text);
      // Handle duplicate IDs
      let counter = 1;
      const originalId = id;
      while (usedIds.has(id)) {
        id = `${originalId}-${counter}`;
        counter++;
      }
      usedIds.add(id);
      headings.push({ id, text, level: 1 });
    } else if (trimmed.startsWith('## ')) {
      const text = trimmed.substring(3).trim();
      let id = generateSlug(text);
      // Handle duplicate IDs
      let counter = 1;
      const originalId = id;
      while (usedIds.has(id)) {
        id = `${originalId}-${counter}`;
        counter++;
      }
      usedIds.add(id);
      headings.push({ id, text, level: 2 });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.substring(4).trim();
      let id = generateSlug(text);
      // Handle duplicate IDs
      let counter = 1;
      const originalId = id;
      while (usedIds.has(id)) {
        id = `${originalId}-${counter}`;
        counter++;
      }
      usedIds.add(id);
      headings.push({ id, text, level: 3 });
    }
  });
  
  return headings;
}

// Extract audio file path from markdown content
// Supports: [audio:mp3/example.mp3] or [audio:/mp3/example.mp3]
export function extractAudioPath(content: string): string | null {
  const audioRegex = /\[audio:([^\]]+)\]/i;
  const match = content.match(audioRegex);
  
  if (match && match[1]) {
    let audioPath = match[1].trim();
    // Ensure path starts with /mp3/ or mp3/
    if (!audioPath.startsWith('/')) {
      audioPath = '/' + audioPath;
    }
    if (!audioPath.startsWith('/mp3/')) {
      audioPath = '/mp3/' + audioPath.replace(/^\/+/, '');
    }
    return audioPath;
  }
  
  return null;
}

export function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  const usedIds = new Set<string>();
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let inCodeBlock = false;
  let firstH1Skipped = false;

  // Helper function to generate unique ID
  const getUniqueId = (text: string): string => {
    let id = generateSlug(text);
    let counter = 1;
    const originalId = id;
    while (usedIds.has(id)) {
      id = `${originalId}-${counter}`;
      counter++;
    }
    usedIds.add(id);
    return id;
  };

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphText = currentParagraph.join(' ');
      elements.push(
        <p key={`p-${elements.length}`} className="mb-4 text-gray-300 leading-relaxed">
          {paragraphText}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="mb-4 ml-6 list-disc space-y-2">
          {currentList.map((item, idx) => (
            <li key={idx} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };


  lines.forEach((line, index) => {
    line = line.trim();

    // Skip audio syntax lines: [audio:...]
    if (line.match(/^\[audio:[^\]]+\]$/i)) {
      return;
    }

    if (line.startsWith('```')) {
      flushParagraph();
      flushList();
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      elements.push(
        <code
          key={index}
          className="block bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto mb-4"
        >
          {line}
        </code>
      );
      return;
    }

    // Check for image: ![alt](url) or ![alt](url "caption")
    // Also support: ![alt](url|caption) for convenience
    const imageMatchStandard = line.match(/^!\[([^\]]*)\]\(([^\)]+?)(?:\s+"([^"]+)")?\)$/);
    const imageMatchCustom = line.match(/^!\[([^\]]*)\]\(([^\|]+)\|(.+)\)$/);
    
    if (imageMatchStandard || imageMatchCustom) {
      flushParagraph();
      flushList();
      const match = imageMatchStandard || imageMatchCustom;
      const altText = match![1]?.trim() || '';
      const imageUrl = match![2].trim();
      // Support both "caption" (standard) and |caption (custom) formats
      const caption = imageMatchStandard ? match![3]?.trim() : match![3]?.trim();
      elements.push(
        <BlogImage key={`image-${index}`} src={imageUrl} alt={altText} caption={caption} />
      );
      return;
    }

    if (line.startsWith('# ')) {
      // Skip the first h1 heading as it's already shown in the page header
      if (!firstH1Skipped) {
        firstH1Skipped = true;
        return;
      }
      flushParagraph();
      flushList();
      const text = line.substring(2).trim();
      const id = getUniqueId(text);
      elements.push(
        <h1
          key={index}
          id={id}
          className="text-4xl font-bold text-white mb-6 mt-8 scroll-mt-24"
        >
          {text}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      const text = line.substring(3).trim();
      const id = getUniqueId(text);
      elements.push(
        <h2
          key={index}
          id={id}
          className="text-3xl font-bold text-white mb-4 mt-8 scroll-mt-24"
        >
          {text}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      const text = line.substring(4).trim();
      const id = getUniqueId(text);
      elements.push(
        <h3 key={index} id={id} className="text-2xl font-semibold text-white mb-3 mt-6 scroll-mt-24">
          {text}
        </h3>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph();
      currentList.push(line.substring(2));
    } else if (line === '') {
      flushParagraph();
      flushList();
    } else {
      flushList();
      currentParagraph.push(line);
    }
  });

  flushParagraph();
  flushList();

  return elements;
}

