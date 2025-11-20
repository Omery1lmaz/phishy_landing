'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {GlowBadge} from '@/app/components/ui/glow-badge';

type TimelineEvent = {
  week: string;
  title: string;
  description?: string;
  highlight?: boolean;
};

const timelineEvents: TimelineEvent[] = [
  {
    week: 'Hafta 1',
    title: 'Program KPI ve eşikler',
    description: 'Hedef metrikleri belirle ve eşik değerlerini ayarla.',
  },
  {
    week: 'Hafta 2–3',
    title: 'Segment bazlı simülasyon',
    description: 'Farklı kullanıcı gruplarına özel kampanyalar başlat.',
  },
  {
    week: 'Hafta 3',
    title: 'Triage & playbook',
    description: 'Raporlanan olayları otomatik triage et ve playbook uygula.',
    highlight: true,
  },
  {
    week: 'Hafta 4',
    title: 'Mikro eğitim + quiz',
    description: 'Tıklayan kullanıcılara anında eğitim içeriği gönder.',
  },
  {
    week: 'Ay sonu',
    title: 'Yönetim özeti & kanıt paketi',
    description: 'Raporları oluştur ve uyum kanıtlarını hazırla.',
  },
];

const TimelineSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="timelineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="timelineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#timelineGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 400 Q 300 300, 500 400 T 900 400"
            fill="none"
            stroke="url(#timelineGradient2)"
            strokeWidth="1.5"
            className="animate-draw-line-2"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated diagonal lines */}
          <line
            x1="120"
            y1="0"
            x2="240"
            y2="800"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="960"
            y1="0"
            x2="1080"
            y2="800"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-2"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated circles */}
          <circle
            cx="180"
            cy="160"
            r="3"
            fill="rgba(147, 51, 234, 0.4)"
            className="animate-pulse-glow"
          />
          <circle
            cx="1020"
            cy="240"
            r="4"
            fill="rgba(59, 130, 246, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="240"
            cy="560"
            r="2.5"
            fill="rgba(168, 85, 247, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
          />
          <circle
            cx="900"
            cy="640"
            r="3.5"
            fill="rgba(99, 102, 241, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1.5s'}}
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-primary-400/40 rounded-full animate-float-particle" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-secondary-400/40 rounded-full animate-float-particle" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-300/40 rounded-full animate-float-particle" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-secondary-300/40 rounded-full animate-float-particle" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary-500/40 rounded-full animate-float-particle" style={{animationDelay: '1.5s'}} />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>
      
      <div className="relative z-10 container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {t('timeline.badge', {defaultMessage: 'Timeline'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('timeline.heading', {defaultMessage: 'Örnek Senaryo Timeline'})}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            {t('timeline.subheading', {
              defaultMessage: 'Aylık program döngüsünde adım adım ilerleyin.',
            })}
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary-400/70 to-transparent" />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {timelineEvents.map((event, index) => {
              const isTop = index % 2 === 0;
              return (
                <div
                  key={`${event.week}-${event.title}`}
                  className="relative flex flex-col items-center text-center text-white"
                >
                  {isTop && (
                    <div className="mb-8 space-y-3 w-full">
                      <GlowBadge variant="primary" className="text-[10px] px-2.5 py-0.5">
                        {event.week}
                      </GlowBadge>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white md:text-base">{event.title}</h3>
                        {event.description && (
                          <p className="text-xs text-white/60 leading-relaxed">{event.description}</p>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="relative flex flex-col items-center">
                    <span className="block h-12 w-px bg-white/10" />
                    <span
                      className={`relative flex h-3 w-3 items-center justify-center rounded-full bg-primary-300 shadow-[0_0_16px_rgba(59,130,246,0.8)] ${
                        event.highlight ? 'h-4 w-4 bg-white shadow-[0_0_28px_rgba(6,182,212,0.9)]' : ''
                      }`}
                    >
                      {event.highlight && (
                        <span className="absolute inset-[-20px] rounded-full bg-primary-400/15 blur-2xl" />
                      )}
                      <span className="relative block h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <span className="block h-12 w-px bg-white/10" />
                  </div>
                  {!isTop && (
                    <div className="mt-8 space-y-3 w-full">
                      <GlowBadge variant="primary" className="text-[10px] px-2.5 py-0.5">
                        {event.week}
                      </GlowBadge>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white md:text-base">{event.title}</h3>
                        {event.description && (
                          <p className="text-xs text-white/60 leading-relaxed">{event.description}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

