'use client';

import React, {useRef} from 'react';
import {useTranslations} from 'next-intl';

const ValueProposition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('ValueProposition');

  const values = [
    {
      title: t('items.proactiveDetection.title'),
      description: t('items.proactiveDetection.description'),
      before: t('items.proactiveDetection.before'),
      after: t('items.proactiveDetection.after'),
      icon: '🔍',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: t('items.behavioralShield.title'),
      description: t('items.behavioralShield.description'),
      before: t('items.behavioralShield.before'),
      after: t('items.behavioralShield.after'),
      icon: '🛡️',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: t('items.culturalTransformation.title'),
      description: t('items.culturalTransformation.description'),
      before: t('items.culturalTransformation.before'),
      after: t('items.culturalTransformation.after'),
      icon: '🔄',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section
      id="value"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-teal-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 mb-6 backdrop-blur-sm transition-all duration-500 hover:from-emerald-600/40 hover:to-teal-600/40 hover:border-emerald-500/60 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:bg-emerald-400 group-hover:animate-none group-hover:scale-150 transition-all duration-300" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider group-hover:text-emerald-300 transition-colors duration-300">
              {t('badge')}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.rich('heading', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Gradient Accent Line */}
                <div
                
                style={{ width: 'calc(100% - 20px)' }}
                className={`absolute top-0 left-[10px] w-full h-1 bg-gradient-to-r ${value.gradient} rounded-t-3xl opacity-60`} />
                
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 mb-4`}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {value.title}
                </h3>
                
                <div className={`h-1 w-12 bg-gradient-to-r ${value.gradient} rounded-full mb-6`} />
                
                <p className="text-gray-300 mb-8 leading-relaxed text-base">
                  {value.description}
                </p>
                
                {/* Before/After Comparison */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-2 h-2 rounded-full bg-red-500 group-hover/item:scale-150 transition-transform duration-300" />
                    <span className="text-gray-400 line-through text-sm">{value.before}</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.gradient} group-hover/item:scale-150 transition-transform duration-300`} />
                    <span className={`text-sm font-medium bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                      {value.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

