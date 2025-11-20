'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { LucideIcon } from 'lucide-react';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from '@/app/utils/gsap';
import RequestDemoButton from './RequestDemoButton';

export type MetricDirection = 'up' | 'down';

export interface HeroMetric {
  label: string;
  icon: LucideIcon;
  badge: string;
  color: string;
  startValue: number;
  endValue: number;
  startDelta: number;
  endDelta: number;
  unit: string;
  direction: MetricDirection;
}

export interface CenterCardData {
  badge?: string;
  title: string;
  description: string;
  valueLabel: string;
  value: {
    startValue: number;
    endValue: number;
    unit: string;
    direction: MetricDirection;
  };
}

export interface HeroSectionProps {
  badge: string;
  title: string;
  description: string;
  centerCard: CenterCardData;
  metrics: HeroMetric[];
  arrowImage?: string;
  angles?: number[]; // Custom angles for orbit positioning (in degrees)
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  centerCard,
  metrics,
  arrowImage,
  angles,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement[]>([]);
  const [animatedValues, setAnimatedValues] = useState<Array<{ value: number; delta: number }>>(
    metrics.map((m) => ({
      value: m.startValue,
      delta: m.startDelta,
    }))
  );
  const [centerAnimatedValue, setCenterAnimatedValue] = useState<number>(centerCard.value.startValue);

  // Default angles if not provided - memoized to prevent re-animation
  const defaultAngles = useMemo(() => {
    if (angles) return angles;
    // Distribute evenly around circle if not specified
    return metrics.map((_, index) => (index * 360) / metrics.length - 90);
  }, [angles, metrics.length]);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Container entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // Orbit rings animation
      const rings = cardRef.current?.querySelectorAll('.orbit-ring');
      rings?.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            delay: 0.5 + index * 0.1,
          }
        );
      });

      // Metrics cards orbit entrance animation
      metricsRef.current.forEach((metricEl, index) => {
        if (!metricEl) return;

        const metric = metrics[index];
        const radius = 180;
        const angle = (defaultAngles[index] * Math.PI) / 180;
        const startX = radius * Math.cos(angle) * 1.5;
        const startY = radius * Math.sin(angle) * 1.5;
        const endX = radius * Math.cos(angle);
        const endY = radius * Math.sin(angle);

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
              delay: 0.8 + index * 0.2,
              onComplete: () => {
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

        // Number counting animation
        const duration = 1.5;
        const delay = 1.2 + index * 0.2;

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

      // Center card value animation
      const centerDuration = 1.5;
      const centerDelay = 1.2;
      gsap.to(
        {},
        {
          duration: centerDuration,
          delay: centerDelay,
          ease: 'power2.out',
          onUpdate: function () {
            const progress = this.progress();
            const currentValue =
              centerCard.value.startValue +
              (centerCard.value.endValue - centerCard.value.startValue) * progress;
            setCenterAnimatedValue(currentValue);
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [metrics, defaultAngles, centerCard.value]);

  const formatValue = (value: number, unit: string, direction: MetricDirection) => {
    const rounded = Math.round(value);
    const symbol = direction === 'up' ? '↑' : '↓';
    return `${symbol} ${rounded}${unit}`;
  };

  const formatDelta = (delta: number, unit: string) => {
    const rounded = Math.round(delta);
    const sign = rounded >= 0 ? '+' : '';
    return `${sign}${rounded}${unit}`;
  };

  const centerFormattedValue = formatValue(
    centerAnimatedValue,
    centerCard.value.unit,
    centerCard.value.direction
  );

  return (
    <section className="relative overflow-hidden pt-28 pb-24 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050017]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0034] via-[#050017] to-[#050017]" />
        <div className="absolute -left-48 top-16 h-[32rem] w-[32rem] rounded-full bg-primary-500/25 blur-3xl" />
        <div className="absolute right-[-16rem] top-24 h-[36rem] w-[36rem] rounded-full bg-secondary-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.32),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      </div>

      <div className="relative z-1 container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <GlowBadge variant="primary">
                {badge}
              </GlowBadge>
            </div>

            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  {title}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {description}
              </p>
            </div>

            <RequestDemoButton arrowImage={arrowImage ? arrowImage : '/arrow.png'} />
          </div>

          <div ref={cardRef} className="relative h-[500px] w-full z-10">
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="orbit-ring absolute h-[480px] w-[480px] rounded-full border border-white/5 animate-pulse" />
              <div className="orbit-ring absolute h-[380px] w-[380px] rounded-full border border-white/10" />
              <div className="orbit-ring absolute h-[280px] w-[280px] rounded-full border border-white/15" />
              <div className="orbit-ring absolute h-[180px] w-[180px] rounded-full border border-white/10" />
              <div className="orbit-ring absolute h-[380px] w-[380px] rounded-full border border-primary-500/10 blur-[2px]" />
              <div className="orbit-ring absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-500/30 via-secondary-500/20 to-purple-500/20 blur-[100px]" />
            </div>

            {/* Center card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="absolute inset-0 -z-10 h-48 w-48 rounded-full bg-gradient-to-br from-primary-500/40 via-primary-400/30 to-secondary-500/30 blur-2xl opacity-80" />
              <Card className="relative w-64 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent p-6 text-center shadow-2xl shadow-primary-900/30 backdrop-blur-2xl">
                {centerCard.badge && (
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="rounded-full flex justify-center items-center gap-1 border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs uppercase tracking-wide text-primary-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                      </span>
                      {centerCard.badge}
                    </div>
                  </div>
                )}
                <Card className="text-xl border-none shadow-none bg-transparent  text-white mb-2">{centerCard.title}</Card>
                <p className="text-white/60 text-xs mb-4">
                  {centerCard.description}
                </p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary-300 tabular-nums">
                    {centerFormattedValue}
                  </div>
                  <p className="text-xs text-white/50">{centerCard.valueLabel}</p>
                </div>
              </Card>
            </div>

            {/* Orbit cards */}
            <div className="pointer-events-none absolute inset-0" style={{ zIndex: 50 }}>
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                const animatedValue = animatedValues[index];
                const radius = 180;
                const angle = (defaultAngles[index] * Math.PI) / 180;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const directionStyle = metric.direction === 'up'
                  ? { accent: 'bg-primary-500/15 text-primary-200 border border-primary-400/40', valueColor: 'text-primary-200' }
                  : { accent: 'bg-secondary-500/15 text-secondary-200 border border-secondary-400/40', valueColor: 'text-secondary-200' };

                return (
                  <div
                    key={metric.label}
                    ref={(el) => {
                      if (el) metricsRef.current[index] = el;
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      zIndex: 50,
                    }}
                    className="pointer-events-auto absolute w-48 origin-center"
                  >
                    <Card className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-primary-900/30" style={{ zIndex: 50 }}>
                      <CardContent className="p-4 space-y-3 relative">
                        <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
                          <span>KPI</span>
                          <div className="rounded-lg bg-black/40 p-1.5 metric-icon">
                            <Icon className={`h-3.5 w-3.5 ${metric.color}`} />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-white/90">{metric.label}</p>
                          <p className={`text-2xl font-bold ${directionStyle.valueColor} tabular-nums`}>
                            {formatValue(animatedValue.value, metric.unit, metric.direction)}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[0.65rem] text-white/40">{metric.badge}</span>
                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] ${directionStyle.accent}`}>
                              {metric.unit === '%'
                                ? `${Math.round(animatedValue.delta)}%`
                                : formatDelta(animatedValue.delta, metric.unit)}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

