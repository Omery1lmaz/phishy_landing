'use client';

import React, {useRef} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Features');

  const features = [
    {
      title: t('cards.dashboard.title'),
      description: t('cards.dashboard.description'),
      visual: 'dashboard',
      image: '/dashboard.png',
    },
    {
      title: t('cards.secure.title'),
      description: t('cards.secure.description'),
      visual: 'lightning',
      image: '/secureandfast.png',
    },
    {
      title: t('cards.integrations.title'),
      description: t('cards.integrations.description'),
      visual: 'integrations',
      image: '/Explore Integrations.png',
    },
    {
      title: t('cards.analytics.title'),
      description: t('cards.analytics.description'),
      visual: 'chart',
      image: '/Analyze Your Blogs Performance.png',
    },
    {
      title: t('cards.chatbox.title'),
      description: t('cards.chatbox.description'),
      visual: 'openai',
      image: '/Chatbox.png',
    },
    {
      title: t('cards.publish.title'),
      description: t('cards.publish.description'),
      visual: 'publish',
      image: '/domain.png',
    },
  ];

  return (
    <section
      id="features"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        {/* Features Grid - Top 3, Bottom 2 */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="relative group feature-card"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[400px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02]">
                  {/* Background Image - Top Section */}
                  <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                    <div 
                      className="absolute inset-0"
                      style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    {/* Dark overlay gradient - aşağıya indikçe daha koyu */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                    {/* Color gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 via-secondary-600/5 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-grow p-6 pt-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    {feature.description && (
                      <p className="text-gray-200 text-sm leading-relaxed flex-grow drop-shadow-md">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Wide card + Single card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* First card - Wide (2 columns) */}
            {features.slice(3, 4).map((feature, index) => (
              <div
                key={index + 3}
                className="relative group feature-card md:col-span-2"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[400px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02]">
                  {/* Background Image - Top Section */}
                  <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                    <div 
                      className="absolute inset-0"
                      style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    {/* Dark overlay gradient - aşağıya indikçe daha koyu */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                    {/* Color gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 via-secondary-600/5 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-grow p-6 pt-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    {feature.description && (
                      <p className="text-gray-200 text-sm leading-relaxed flex-grow drop-shadow-md">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Second card - Single column */}
            {features.slice(4, 5).map((feature, index) => (
              <div
                key={index + 4}
                className="relative group feature-card"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[400px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group-hover:scale-[1.02]">
                  {/* Background Image - Top Section */}
                  <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                    <div 
                      className="absolute inset-0"
                      style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 100%)',
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    {/* Dark overlay gradient - aşağıya indikçe daha koyu */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                    {/* Color gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 via-secondary-600/5 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-grow p-6 pt-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    {feature.description && (
                      <p className="text-gray-200 text-sm leading-relaxed flex-grow drop-shadow-md">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

