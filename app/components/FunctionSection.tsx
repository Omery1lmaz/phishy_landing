'use client';

import React, {useRef} from 'react';
import {useTranslations} from 'next-intl';

const ICON_MAP = {
  threatDetection: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  collaboration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  notifications: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  performance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  customization: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  dataIntegration: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  default: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
    </svg>
  ),
} as const;

type BaseFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type HighlightFeature = BaseFeature & {
  isHighlighted: true;
  keywords: string[];
};

type RegularFeature = BaseFeature & {
  isHighlighted: false;
};

type Feature = HighlightFeature | RegularFeature;

const FunctionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Function');

  const rawItems = t.raw('items') as unknown;

  const featureEntries =
    rawItems && typeof rawItems === 'object'
      ? Object.entries(rawItems as Record<string, unknown>)
      : [];

  const features: Feature[] = featureEntries.map(([key, value]) => {
    const record = value as Record<string, unknown>;
    const baseFeature: BaseFeature = {
      title: String((record.title as {toString(): string})?.toString() ?? ''),
      description: String((record.description as {toString(): string})?.toString() ?? ''),
      icon: ICON_MAP[key as keyof typeof ICON_MAP] ?? ICON_MAP.default,
    };

    if (key === 'collaboration') {
      const keywordObj = record.keywords as Record<string, unknown> | undefined;
      const keywords = keywordObj
        ? Object.values(keywordObj).map((keyword) =>
            String((keyword as {toString(): string})?.toString() ?? '')
          )
        : [];

      return {
        ...baseFeature,
        isHighlighted: true,
        keywords,
      } satisfies HighlightFeature;
    }

    return {
      ...baseFeature,
      isHighlighted: false,
    } satisfies RegularFeature;
  });

  return (
    <section
      id="function"
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Function Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 mb-6 backdrop-blur-sm transition-all duration-500 hover:from-primary-600/40 hover:to-secondary-600/40 hover:border-primary-500/60 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse group-hover:bg-primary-400 group-hover:animate-none group-hover:scale-150 transition-all duration-300" />
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider group-hover:text-primary-300 transition-colors duration-300">
              {t('badge')}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Features Grid - 2 rows, 3 columns */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            <div className="relative group function-card">
              {/* Regular Card - Left */}
              {features[0].isHighlighted ? (
                // This shouldn't happen, but handle it
                <></>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                  <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[300px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02] p-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-white">
                      {features[0].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {features[0].title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mt-auto">
                      {features[0].description}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Highlighted Card - Center */}
            <div className="relative group function-card">
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[400px] flex flex-col overflow-hidden bg-gradient-to-b from-primary-600/20 via-primary-500/15 to-secondary-600/20 backdrop-blur-sm group-hover:scale-[1.02] p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 mb-6 text-white">
                    {features[1].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {features[1].title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-6">
                    {features[1].description}
                  </p>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative flex items-center gap-8">
                      <div className="flex flex-col gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-16 h-0.5 bg-white/30" />
                            <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="w-16 h-0.5 bg-white/30" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {'keywords' in features[1] && features[1].keywords?.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs text-white/80 bg-white/10 rounded-full border border-white/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            </div>

            {/* Regular Card - Right */}
            <div className="relative group function-card">
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[300px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02] p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-white">
                    {features[2].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {features[2].title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mt-auto">
                    {features[2].description}
                  </p>
                </div>
              </>
            </div>

            {/* Second Row */}
            {features.slice(3).map((feature, index) => (
              <div
                key={index + 3}
                className="relative group function-card"
              >
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                  <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[300px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02] p-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mt-auto">
                      {feature.description}
                    </p>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionSection;

