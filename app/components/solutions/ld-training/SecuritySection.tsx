'use client';

import React, {useEffect, useRef} from 'react';
import {useTranslations} from 'next-intl';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardContent} from '@/components/ui/card';
import {Server, Lock, Shield, FileText, CheckCircle2} from 'lucide-react';
import {gsap} from '@/app/utils/gsap';

const SecuritySection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const badges = [
    {
      icon: Server,
      label: t('security.0.label', {defaultMessage: 'On-prem / Air-gapped'}),
      description: t('security.0.description', {defaultMessage: 'Full on-premise deployment available'}),
      size: 'normal' as const,
      chips: ['On-premise', 'Air-gapped', 'Full Control'],
      iconBg: 'bg-white/10',
    },
    {
      icon: Lock,
      label: t('security.1.label', {defaultMessage: 'Data Residency'}),
      description: t('security.1.description', {defaultMessage: 'Data stays in your region'}),
      size: 'normal' as const,
      chips: ['Regional Storage', 'Compliance', 'Data Sovereignty'],
      iconBg: 'bg-white/10',
    },
    {
      icon: Shield,
      label: t('security.2.label', {defaultMessage: 'MFA/SSO'}),
      description: t('security.2.description', {defaultMessage: 'Enterprise authentication supported'}),
      size: 'normal' as const,
      chips: ['Multi-Factor Auth', 'Single Sign-On', 'Enterprise SSO'],
      iconBg: 'bg-white/15',
      isHighlighted: true,
    },
    {
      icon: FileText,
      label: t('security.3.label', {defaultMessage: 'Encryption'}),
      description: t('security.3.description', {
        defaultMessage: 'End-to-end encryption at rest and in transit',
      }),
      size: 'large' as const,
      chips: ['End-to-End', 'At Rest', 'In Transit', 'AES-256'],
      iconBg: 'bg-white/10',
    },
    {
      icon: CheckCircle2,
      label: t('security.4.label', {defaultMessage: 'SOC2 (Coming)'}),
      description: t('security.4.description', {
        defaultMessage: 'SOC2 Type II certification in progress',
      }),
      size: 'normal' as const,
      chips: ['SOC2 Type II', 'In Progress', 'Compliance'],
      iconBg: 'bg-white/10',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        gsap.fromTo(
          cardRef,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {t('security.badge', {defaultMessage: 'Security & Privacy'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('security.heading', {defaultMessage: 'Security & Privacy'})}
          </h2>
        </div>

        {/* Grid Layout - Top row: 3 cards, Bottom row: 2 large + 1 small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Row - 3 normal cards */}
          {badges.slice(0, 3).map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090818]/80 p-10 text-left shadow-[0_35px_80px_-35px_rgba(76,29,149,0.6)] transition-transform duration-500 hover:-translate-y-2 ${
                  badge.isHighlighted
                    ? 'bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-secondary-500/10 border-primary-400/40'
                    : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative flex h-full flex-col gap-6 text-white">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${badge.iconBg} text-white shadow-lg shadow-primary-900/30`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{badge.label}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{badge.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-white/60">
                      {badge.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`rounded-full border border-white/10 px-3 py-1 ${
                            badge.isHighlighted ? 'bg-white/10' : 'bg-white/5'
                          }`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row - 1 large card + 1 small card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {badges.slice(3).map((badge, index) => {
            const Icon = badge.icon;
            const isLarge = badge.size === 'large';
            return (
              <div
                key={index + 3}
                ref={(el) => {
                  cardRefs.current[index + 3] = el;
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090818]/80 p-10 text-left shadow-[0_35px_80px_-35px_rgba(76,29,149,0.6)] transition-transform duration-500 hover:-translate-y-2 ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative flex h-full flex-col gap-6 text-white">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${badge.iconBg} text-white shadow-lg shadow-primary-900/30`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{badge.label}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{badge.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-white/60">
                      {badge.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
