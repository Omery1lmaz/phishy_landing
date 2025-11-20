'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {TrendingDown, TrendingUp} from 'lucide-react';

const kpis = [
  {
    label: 'Completion Rate',
    value: '↑',
    direction: 'up' as const,
    tooltip: 'Completion rate increases to 85-95%',
  },
  {
    label: 'Certification Rate',
    value: '↑',
    direction: 'up' as const,
    tooltip: 'Certification rate increases to 90%+',
  },
  {
    label: 'Engagement',
    value: '↑',
    direction: 'up' as const,
    tooltip: 'Training engagement increases 60-80%',
  },
  {
    label: 'Effectiveness Score',
    value: '↑',
    direction: 'up' as const,
    tooltip: 'Training effectiveness score increases 50-70%',
  },
  {
    label: 'Time to Complete',
    value: '↓',
    direction: 'down' as const,
    tooltip: 'Time to complete training decreases with micro content',
  },
] as const;

type Direction = (typeof kpis)[number]['direction'];

const directionStyles: Record<
  Direction,
  {
    Icon: typeof TrendingUp;
    accent: string;
    valueColor: string;
    label: string;
  }
> = {
  up: {
    Icon: TrendingUp,
    accent: 'bg-primary-500/15 text-primary-200 border border-primary-400/40',
    valueColor: 'text-primary-200',
    label: 'Increase',
  },
  down: {
    Icon: TrendingDown,
    accent: 'bg-secondary-500/15 text-secondary-200 border border-secondary-400/40',
    valueColor: 'text-secondary-200',
    label: 'Decrease',
  },
};

const orbitCards = kpis.map((kpi, idx) => ({
  ...kpi,
  angle: ((idx / kpis.length) * 360 - 90) * (Math.PI / 180),
}));

const KpiSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ldTrainingKpiGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#ldTrainingKpiGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
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
        </svg>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>
      
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <GlowBadge variant="primary" className="px-4 py-1.5">
            {t('kpi.badge', {defaultMessage: 'KPI & ROI'})}
          </GlowBadge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {t('kpi.heading', {defaultMessage: 'KPI & ROI'})}
            </h2>
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex min-h-[560px] max-w-4xl items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5" />
            <div className="absolute h-[420px] w-[420px] rounded-full border border-white/10" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-white/15" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-white/10" />
            <div className="absolute h-[120px] w-[120px] rounded-full border border-white/5" />
            <div className="absolute h-[440px] w-[440px] rounded-full border border-primary-500/10 blur-[2px]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-500/40 via-secondary-500/30 to-purple-500/30 blur-[140px]" />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary-500/40 via-primary-400/30 to-secondary-500/30 blur-3xl opacity-80" />
            <Card className="relative z-10 flex w-72 flex-col rounded-3xl border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent p-1 text-center shadow-2xl shadow-primary-900/30 backdrop-blur-2xl">
              <CardHeader className="pb-2 space-y-3">
                <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1 text-xs uppercase tracking-wide text-primary-300">
                  ROI
                  <span className="text-white/60">Model</span>
                </div>
                <CardTitle className="text-2xl text-white">ROI Formula</CardTitle>
                <CardDescription className="text-white/70">
                  Time saved × L&D team cost + Improved compliance = ROI estimate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">
                  Example: 100 hours saved per quarter × $100/hour = $10K per quarter. Improved compliance reduces audit risk ($20K-100K annually). Annual ROI: $60K-140K+.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="pointer-events-none absolute inset-0">
            {orbitCards.map((kpi) => {
              const style = directionStyles[kpi.direction];
              const Icon = style.Icon;
              const radius = 235;
              const x = radius * Math.cos(kpi.angle);
              const y = radius * Math.sin(kpi.angle);

              return (
                <TooltipProvider key={kpi.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        }}
                        className="pointer-events-auto absolute w-48 origin-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-primary-900/30"
                      >
                        <CardContent className="p-4 space-y-3 relative">
                          <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
                            <span>KPI</span>
                            <div className="rounded-lg bg-black/40 p-1.5">
                              <Icon className={`h-3.5 w-3.5 ${style.valueColor}`} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-white/90">{kpi.label}</p>
                            <p className={`text-2xl font-bold ${style.valueColor} tabular-nums`}>{kpi.value}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-[0.65rem] text-white/40">{kpi.tooltip}</span>
                              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] ${style.accent}`}>
                                <Icon className="h-3 w-3" />
                                {style.label}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{kpi.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KpiSection;

