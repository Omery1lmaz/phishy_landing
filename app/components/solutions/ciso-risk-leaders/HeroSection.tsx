'use client';

import React, {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {ArrowRight, Clock, TrendingDown, TrendingUp} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {gsap} from '@/app/utils/gsap';

const heroMetrics = [
  {
    label: 'Click rate',
    value: '↓ 43%',
    delta: '-12%',
    icon: TrendingDown,
    badge: 'Risk ↓',
    color: 'text-primary-300',
    startValue: 0,
    endValue: 43,
    startDelta: 0,
    endDelta: -12,
    unit: '%',
    direction: 'down',
  },
  {
    label: 'Report rate',
    value: '↑ 68%',
    delta: '+15%',
    icon: TrendingUp,
    badge: 'Awareness',
    color: 'text-secondary-300',
    startValue: 0,
    endValue: 68,
    startDelta: 0,
    endDelta: 15,
    unit: '%',
    direction: 'up',
  },
  {
    label: 'Time-to-Triage',
    value: '↓ 8m',
    delta: '-22m',
    icon: Clock,
    badge: 'Response',
    color: 'text-white',
    startValue: 30,
    endValue: 8,
    startDelta: 0,
    endDelta: -22,
    unit: 'm',
    direction: 'down',
  },
] as const;

const HeroSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');
  const cardRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement[]>([]);
  const [animatedValues, setAnimatedValues] = useState<Array<{value: number; delta: number}>>(
    heroMetrics.map((m) => ({
      value: m.startValue as number,
      delta: m.startDelta as number,
    }))
  );

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // Metrics cards stagger animation
      metricsRef.current.forEach((metricEl, index) => {
        if (!metricEl) return;

        // Icon animation
        const iconEl = metricEl.querySelector('.metric-icon');
        if (iconEl) {
          gsap.fromTo(
            iconEl,
            {
              opacity: 0,
              scale: 0,
              rotation: -180,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: 'back.out(1.7)',
              delay: 0.5 + index * 0.15,
              onComplete: () => {
                // Subtle pulse after entrance
                gsap.to(iconEl, {
                  scale: 1.1,
                  duration: 0.2,
                  yoyo: true,
                  repeat: 1,
                  ease: 'power2.inOut',
                });
              },
            }
          );
        }

        // Card container animation
        gsap.fromTo(
          metricEl,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.4 + index * 0.15,
          }
        );

        // Number counting animation
        const metric = heroMetrics[index];
        const duration = 1.5;
        const delay = 0.6 + index * 0.15;

        // Value animation
        gsap.to(
          {},
          {
            duration,
            delay,
            ease: 'power2.out',
            onUpdate: function () {
              const progress = this.progress();
              const currentValue =
                metric.startValue +
                (metric.endValue - metric.startValue) * progress;
              const currentDelta =
                metric.startDelta +
                (metric.endDelta - metric.startDelta) * progress;

              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = {
                  value: currentValue,
                  delta: currentDelta,
                };
                return newValues;
              });
            },
          }
        );
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const formatValue = (value: number, unit: string, direction: string) => {
    const rounded = Math.round(value);
    const symbol = direction === 'up' ? '↑' : '↓';
    return `${symbol} ${rounded}${unit}`;
  };

  const formatDelta = (delta: number) => {
    const rounded = Math.round(delta);
    const sign = rounded >= 0 ? '+' : '';
    return `${sign}${rounded}%`;
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050017]" />
        {/* Lamp light effect - spreading from top to bottom */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[1200px] w-[1400px] blur-3xl animate-lamp-glow" 
          style={{
            background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(147, 51, 234, 0.45) 0%, rgba(127, 61, 255, 0.35) 15%, rgba(168, 85, 247, 0.25) 25%, rgba(99, 102, 241, 0.2) 40%, rgba(59, 130, 246, 0.15) 60%, rgba(37, 99, 235, 0.1) 75%, transparent 100%)'
          }} 
        />
        {/* Secondary light layer - brighter at top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[900px] w-[1200px] blur-2xl" 
          style={{
            background: 'radial-gradient(ellipse 65% 90% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(232, 221, 255, 0.25) 15%, rgba(168, 85, 247, 0.2) 30%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)'
          }}
        />
        {/* Additional light rays spreading downward */}
        <div 
          className="absolute top-0 left-1/4 h-[800px] w-[600px] blur-3xl opacity-60" 
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(147, 51, 234, 0.25) 0%, rgba(127, 61, 255, 0.2) 20%, rgba(99, 102, 241, 0.15) 40%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-0 right-1/4 h-[800px] w-[600px] blur-3xl opacity-60" 
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.2) 20%, rgba(37, 99, 235, 0.15) 40%, transparent 70%)'
          }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Badge 
                variant="outline" 
                className="group relative border-primary-500/50 text-primary-300 bg-primary-500/10 transition-all duration-300 hover:border-primary-400/70 hover:bg-primary-500/20 hover:text-primary-200 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105"
              >
                <span className="relative z-10">
                  {t('hero.badge', {defaultMessage: 'By Role / CISO & Risk Leaders'})}
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 via-primary-400/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Badge>
            </div>

            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  {t('hero.headline', {
                    defaultMessage: 'İnsan kaynaklı siber güvenlik risklerini görünür ve ölçülebilir kılın.',
                  })}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t('hero.description', {
                  defaultMessage:
                    'Phishy, kullanıcı davranışı ve olay süreçlerini tek panelde toplayıp ölçer; metrikleri çeyrek hedeflerinize bağlar.',
                })}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/request-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
              >
                <span>{t('hero.cta.primary', {defaultMessage: 'Demo iste'})}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#overview" className="text-sm text-white/60 hover:text-white/80 transition-colors">
                {t('hero.cta.secondary', {defaultMessage: '2 dakikalık özet'})}
              </Link>
            </div>
          </div>

          <Card ref={cardRef} className="relative overflow-hidden border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/30 hero-card-animate transition-all duration-700">
            <div className="pointer-events-none absolute inset-0">
              <div
                aria-hidden="true"
                className="hero-card-light absolute -inset-16 rounded-[48px] bg-gradient-to-r from-primary-500/30 via-fuchsia-500/20 to-secondary-500/30"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_65%)] opacity-40"
              />
            </div>
            <CardHeader className="relative z-10 space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">Program KPI Paneli</p>
                  <CardTitle className="text-2xl mt-1">Risk Insights</CardTitle>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90 shadow-inner shadow-emerald-400/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  </span>
                  <span className="tracking-wide">Live</span>
                </div>
              </div>
              <CardDescription className="text-white/60">
                {t('hero.metrics.description', {
                  defaultMessage: 'Davranış metrikleriniz anlık dashboardta güncellenir.',
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-4">
                {heroMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  const animatedValue = animatedValues[index];
                  return (
                    <div
                      key={metric.label}
                      ref={(el) => {
                        if (el) metricsRef.current[index] = el;
                      }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-black/40 p-2 metric-icon">
                          <Icon className={`h-5 w-5 ${metric.color} transition-all duration-300`} />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">{metric.label}</p>
                          <p className={`text-lg font-semibold ${metric.color} tabular-nums`}>
                            {formatValue(animatedValue.value, metric.unit, metric.direction)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/40">{metric.badge}</span>
                        <p className="text-sm font-semibold text-white/80 tabular-nums">
                          {metric.unit === 'm' 
                            ? `${Math.round(animatedValue.delta) >= 0 ? '+' : ''}${Math.round(animatedValue.delta)}m`
                            : formatDelta(animatedValue.delta)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-white/50 mb-1">Next action</p>
                <p className="text-sm text-white/80">
                  {t('hero.metrics.nextAction', {
                    defaultMessage: 'Triage playbook’unu tetikleyerek kritik raporları dakikalar içinde kapatın.',
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

