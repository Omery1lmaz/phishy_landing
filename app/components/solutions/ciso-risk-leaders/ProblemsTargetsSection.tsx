'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {ArrowRight, FileText, GraduationCap, AlertCircle, TrendingDown, Clock, CheckCircle} from 'lucide-react';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const problemDefaults = {
  1: {
    title: 'Yönetim özetleri parçalı',
    description: 'Karar metrikleri gecikiyor.',
    icon: FileText,
    metric: 'Metrikler',
    value: 'Parçalı',
    color: 'text-primary-300',
  },
  2: {
    title: 'Eğitim etkisi ölçülmüyor',
    description: 'Eğitim tamamlanıyor ama davranışa etkisi ölçülmüyor.',
    icon: GraduationCap,
    metric: 'Eğitim',
    value: 'Etkisiz',
    color: 'text-primary-300',
  },
  3: {
    title: 'Olay süreçleri dağınık',
    description: 'Triage ve kapanış süresi uzun.',
    icon: AlertCircle,
    metric: 'Triage',
    value: 'Uzun',
    color: 'text-primary-300',
  },
} as const;

const targetDefaults = {
  1: {
    title: 'Click rate düşür, raporlama artır',
    description: "Click rate'i X% → Y% düşür, raporlama oranını arttır.",
    icon: TrendingDown,
    metric: 'Click Rate',
    value: '↓ 43%',
    delta: '-12%',
    color: 'text-secondary-300',
  },
  2: {
    title: 'Triage süresini dakikalara indir',
    description: 'Otomasyonla tutarlılık sağla.',
    icon: Clock,
    metric: 'Triage',
    value: '↓ 8m',
    delta: '-22m',
    color: 'text-secondary-300',
  },
  3: {
    title: 'Uyum kanıtları tek tık',
    description: 'PDF/CSV ile çeyrek hedeflerine bağla.',
    icon: CheckCircle,
    metric: 'Uyum',
    value: '100%',
    delta: '+25%',
    color: 'text-secondary-300',
  },
} as const;

const ProblemsTargetsSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');
  const problemTargetPairs = [1, 2, 3].map((num) => ({
    problem: {
      title: t(`problems.${num}.title`, {defaultMessage: problemDefaults[num as 1 | 2 | 3].title}),
      description: t(`problems.${num}.description`, {defaultMessage: problemDefaults[num as 1 | 2 | 3].description}),
      icon: problemDefaults[num as 1 | 2 | 3].icon,
      metric: problemDefaults[num as 1 | 2 | 3].metric,
      value: problemDefaults[num as 1 | 2 | 3].value,
      color: problemDefaults[num as 1 | 2 | 3].color,
    },
    target: {
      title: t(`targets.${num}.title`, {defaultMessage: targetDefaults[num as 1 | 2 | 3].title}),
      description: t(`targets.${num}.description`, {defaultMessage: targetDefaults[num as 1 | 2 | 3].description}),
      icon: targetDefaults[num as 1 | 2 | 3].icon,
      metric: targetDefaults[num as 1 | 2 | 3].metric,
      value: targetDefaults[num as 1 | 2 | 3].value,
      delta: targetDefaults[num as 1 | 2 | 3].delta,
      color: targetDefaults[num as 1 | 2 | 3].color,
    },
  }));

  return (
    <section id="overview" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#lineGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 400 Q 300 300, 500 400 T 900 400"
            fill="none"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            className="animate-draw-line-2"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 600 Q 400 500, 600 600 T 1000 600"
            fill="none"
            stroke="url(#lineGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-3"
            opacity="0.4"
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
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {t('problems.badge', {defaultMessage: 'Problemler ve Hedefler'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('problems.heading', {defaultMessage: 'Problemler ve Hedef Sonuçlar'})}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            {t('problems.subheading', {
              defaultMessage: 'Her risk, net bir hedefle eşlenir; yolculuk tek bir akışta görselleştirilir.',
            })}
          </p>
        </div>

        <div className="space-y-10">
          {problemTargetPairs.map((pair, index) => (
            <div key={`pair-${index}`} className="relative">
              <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)] items-center">
                <div className="relative group">
                  <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20 transition-all duration-300 group-hover:border-primary-400/50 group-hover:shadow-primary-500/30">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-primary-500/20 via-fuchsia-500/10 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
                    </div>
                    <CardHeader className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <GlowBadge variant="primary">
                          Problem 0{index + 1}
                        </GlowBadge>
                        <div className="rounded-xl bg-black/40 p-2.5">
                          <pair.problem.icon className={`h-5 w-5 ${pair.problem.color} transition-all duration-300`} />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white mb-1.5">{pair.problem.title}</CardTitle>
                        <CardDescription className="text-white/70 text-sm leading-relaxed">{pair.problem.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="hidden md:block absolute right-[-28px] top-1/2 h-1 w-7 rounded-full bg-gradient-to-r from-primary-400/60 to-secondary-400/30" />
                </div>

                <div className="relative flex h-full items-center justify-center">
                  <div className={`
                      hidden md:flex absolute inset-x-0 mx-auto h-[2px] w-[220px]
                      bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[2px]
                    `}
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/40 to-cyan-400/40 blur-xl animate-pulse" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/20 bg-[#08040f]/80 shadow-[0_10px_40px_rgba(2,0,12,0.8)] backdrop-blur-xl">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-secondary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-secondary-900/20 transition-all duration-300 group-hover:border-secondary-400/50 group-hover:shadow-secondary-500/30">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-secondary-500/20 via-cyan-500/10 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
                    </div>
                    <CardHeader className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <GlowBadge variant="secondary">
                          Outcome 0{index + 1}
                        </GlowBadge>
                        <div className="rounded-xl bg-black/40 p-2.5">
                          <pair.target.icon className={`h-5 w-5 ${pair.target.color} transition-all duration-300`} />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white mb-1.5">{pair.target.title}</CardTitle>
                        <CardDescription className="text-white/70 text-sm leading-relaxed">{pair.target.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="hidden md:block absolute left-[-28px] top-1/2 h-1 w-7 rounded-full bg-gradient-to-l from-secondary-400/60 to-primary-400/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsTargetsSection;


