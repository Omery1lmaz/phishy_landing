'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from '@/app/utils/gsap';

export default function BlogHeaderClient() {
  const t = useTranslations('Blog');
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    // Set initial styles
    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 40 });

    // Animate title
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    // Animate subtitle
    gsap.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.4,
    });

    return () => {
      if (titleRef.current) gsap.killTweensOf(titleRef.current);
      if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current);
    };
  }, []);

  return (
    <div className="blog-header text-center mb-20">
      <h1 
        ref={titleRef}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text pb-2"
      >
        {t('title')}
      </h1>
      <p 
        ref={subtitleRef}
        className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
      >
        {t('subtitle')}
      </p>
    </div>
  );
}

