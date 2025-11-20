'use client';

import React, {useRef} from 'react';
import {useTranslations} from 'next-intl';

const ThreatSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Threats');

  const threats = [
    {
      title: t('items.hackerTarget.title'),
      description: t('items.hackerTarget.description'),
      icon: '🎯',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      title: t('items.phishingArt.title'),
      description: t('items.phishingArt.description'),
      icon: '🎣',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: t('items.userInteraction.title'),
      description: t('items.userInteraction.description'),
      icon: '👥',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section
      id="threats"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-600/15 to-orange-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,61,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 mb-6 backdrop-blur-sm transition-all duration-500 hover:from-red-600/40 hover:to-orange-600/40 hover:border-red-500/60 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:bg-red-400 group-hover:animate-none group-hover:scale-150 transition-all duration-300" />
            <span className="text-sm font-medium text-red-400 uppercase tracking-wider group-hover:text-red-300 transition-colors duration-300">
              {t('badge')}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.rich('heading', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${threat.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Gradient Accent Line */}
                <div
                        style={{
                          width: '100%',
                          height: '151px',
                          background: 'none',
                          left: '0px',
                          borderTop: '1px solid ',
                         }}

                className={`absolute top-0 left-[10px] w-full h-1 bg-gradient-to-r ${threat.gradient} rounded-t-3xl opacity-60`} />
                
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${threat.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 mb-4`}>
                    <span className="text-3xl">{threat.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {threat.title}
                </h3>
                
                <div className={`h-1 w-12 bg-gradient-to-r ${threat.gradient} rounded-full mb-4`} />
                
                <p className="text-gray-300 leading-relaxed text-base">
                  {threat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;

