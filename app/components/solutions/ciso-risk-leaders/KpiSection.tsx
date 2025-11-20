'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {Badge} from '@/components/ui/badge';
import {TrendingDown, TrendingUp} from 'lucide-react';

const kpis = [
  {label: 'Click rate', value: '43%', direction: 'down', tooltip: 'Tıklama oranı azalması'},
  {label: 'Report rate', value: '68%', direction: 'up', tooltip: 'Raporlama oranı artışı'},
  {label: 'Time-to-Triage', value: '8m', direction: 'down', tooltip: 'Triage süresi azalması'},
  {label: 'Tamamlama oranı', value: '92%', direction: 'up', tooltip: 'Eğitim tamamlama oranı'},
  {label: 'Gelişim skoru', value: '78', direction: 'up', tooltip: 'Kullanıcı gelişim skoru'},
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
    label: 'Artış',
  },
  down: {
    Icon: TrendingDown,
    accent: 'bg-secondary-500/15 text-secondary-200 border border-secondary-400/40',
    valueColor: 'text-secondary-200',
    label: 'Azalış',
  },
};

const orbitCards = kpis.map((kpi, idx) => ({
  ...kpi,
  angle: ((idx / kpis.length) * 360 - 90) * (Math.PI / 180),
}));

const KpiSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="border-primary-500/40 bg-primary-500/10 text-primary-200">
            {t('kpi.badge', {defaultMessage: 'Program KPI Paneli'})}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {t('kpi.heading', {defaultMessage: 'KPI & ROI'})}
            </h2>
            <p className="max-w-3xl text-base text-white/70 md:text-lg">
              {t('kpi.description', {
                defaultMessage:
                  'İnsan kaynaklı riskleri orbit dashboard’da izleyin; KPI kartları çeyrek hedeflerinizle hizalanır.',
              })}
            </p>
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
                <CardTitle className="text-2xl text-white">ROI Formülü</CardTitle>
                <CardDescription className="text-white/70">
                  Azalan olay × Ortalama olay maliyeti = tahmini tasarruf Azalan olay × Ortalama olay maliyeti = tahmini tasarruf Azalan olay × Ortalama olay maliyeti = tahmini tasarruf
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">
                  Rapor, çeyrek kapanışında otomatik olarak yönetim ekibine e-posta edilebilir.
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
                        className="pointer-events-auto absolute w-56 origin-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(6,4,18,0.92))] text-left shadow-2xl shadow-black/40 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/25"
                      >
                        <CardContent className="space-y-4 p-5">
                          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-white/35">
                            <span>KPI</span>
                            <span className="tracking-[0.15em] text-white/45">Orbit</span>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                              <p className="text-sm font-semibold text-white">{kpi.label}</p>
                              <p className="text-xs text-white/60">{kpi.tooltip}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className={`text-3xl font-semibold ${style.valueColor}`}>{kpi.value}</span>
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.7rem] ${style.accent}`}
                              >
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

