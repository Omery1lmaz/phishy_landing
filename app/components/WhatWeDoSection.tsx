'use client';

import React, {useRef} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

const WhatWeDoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('WhatWeDo');
  const rawFeatures = t.raw('features') as unknown;
  const features: string[] =
    rawFeatures && typeof rawFeatures === 'object'
      ? Object.values(rawFeatures as Record<string, string>)
      : [];

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background - Almost black */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Image - Positioned outside container, moved up */}
      <div className="absolute right-0 top-[-80px] lg:top-[-10px] w-1/2 lg:w-[45%] h-[500px] lg:h-[600px] z-20">
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
          }}
        >
          <Image
            src="/code-editor.png"
            alt={t('imageAlt')}
            fill
            className="object-contain"
            priority={false}
          />
        </div>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 rounded-xl" />
        {/* Color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 via-secondary-600/5 to-transparent rounded-xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Card Container */}
          <div className="relative group">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
            
            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-visible bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left Column - Content */}
                <div className="flex flex-col justify-between">
                  {/* Title */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                      {t('heading')}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                      {t('description')}
                    </p>
                  </div>

                  {/* Feature List - 3 Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white"
                      >
                        <div className="w-2 h-2 bg-gray-500 rounded-sm flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Get Demo Button */}
                  <button className="group relative px-6 py-3 rounded-lg font-medium text-white border border-gray-400/30 hover:border-gray-400/50 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm w-fit">
                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t('cta')}
                    </span>
                  </button>
                </div>

                {/* Right Column - Spacer for image */}
                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

