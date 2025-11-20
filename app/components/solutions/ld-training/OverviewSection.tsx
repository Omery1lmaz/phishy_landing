'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';

const OverviewSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');

  return (
    <section id="overview" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ldTrainingOverviewGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#ldTrainingOverviewGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20 transition-all duration-300 hover:border-primary-400/50 hover:shadow-primary-500/30">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-primary-500/20 via-fuchsia-500/10 to-secondary-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
          </div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-primary-300 mb-4">
              {t('overview.title', {defaultMessage: 'This page is for:'})}
            </CardTitle>
            <div className="space-y-4">
              <div>
                <p className="text-white/90 font-medium mb-2">
                  {t('overview.role.label', {defaultMessage: 'Role:'})}
                </p>
                <p className="text-white/70">
                  {t('overview.role.value', {
                    defaultMessage: 'L&D Directors, Training Managers, Learning Coordinators, HR Teams',
                  })}
                </p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">
                  {t('overview.companySize.label', {defaultMessage: 'Company Size:'})}
                </p>
                <p className="text-white/70">
                  {t('overview.companySize.value', {
                    defaultMessage:
                      'All sizes—especially organizations with 200+ employees requiring structured training programs',
                  })}
                </p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">
                  {t('overview.useCase.label', {defaultMessage: 'Use Case:'})}
                </p>
                <p className="text-white/70">
                  {t('overview.useCase.value', {
                    defaultMessage:
                      'Micro content planning, completion tracking, certification generation, segmentation, LMS integration',
                  })}
                </p>
              </div>
              <Separator className="bg-white/10 my-4" />
              <div>
                <p className="text-white/90 font-medium mb-2">
                  {t('overview.why.label', {defaultMessage: 'Why this persona cares:'})}
                </p>
                <p className="text-white/70">
                  {t('overview.why.value', {
                    defaultMessage:
                      'Training completion is hard to track. Certificates are manual. Content isn\'t segmented. Training effectiveness isn\'t measured.',
                  })}
                </p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">
                  {t('overview.goal.label', {defaultMessage: 'Your goal:'})}
                </p>
                <p className="text-white/70">
                  {t('overview.goal.value', {
                    defaultMessage:
                      'Automate training delivery and tracking. Phishy helps by providing micro content plans, automatic completion tracking, certificate generation, and segmentation.',
                  })}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default OverviewSection;

