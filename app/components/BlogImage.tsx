'use client';

import React from 'react';

interface BlogImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export default function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8 blog-image-container" data-blog-image>
      <div className="relative overflow-hidden rounded-xl blog-image-wrapper">
        <img
          src={src}
          alt={alt || caption || ''}
          className="blog-image"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

