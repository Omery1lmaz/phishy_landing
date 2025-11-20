'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardContent} from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
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
              {t('testimonials.badge', {defaultMessage: 'Evidence & Testimonials'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('testimonials.heading', {defaultMessage: 'Evidence & Testimonials'})}
          </h2>
        </div>

        <div className="mb-12">
          <Card className="border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-white/80">
                &ldquo;We managed training manually with spreadsheets. Completion tracking was a nightmare. After implementing Phishy, completion rates increased from 45% to 92%. Certificates generate automatically. LMS integration is seamless. Our L&D team saves 20 hours per week. The ROI is clear.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-white/60">— L&D Director, Fortune 1000 Manufacturing</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20">
            <CardContent className="p-6">
              <blockquote className="text-sm italic text-white/70">
                &ldquo;Micro content plans are perfect. Learners complete training faster. Engagement improved 70%.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs text-white/50">— Training Manager, Enterprise Technology</p>
            </CardContent>
          </Card>
          <Card className="border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20">
            <CardContent className="p-6">
              <blockquote className="text-sm italic text-white/70">
                &ldquo;Segmentation by role works perfectly. Right content to right learners. Effectiveness increased.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs text-white/50">— Learning Coordinator, Mid-Market Financial Services</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">
            {t('testimonials.trusted', {defaultMessage: 'Trusted by Leading Organizations'})}
          </h3>
          <div className="grid grid-cols-4 gap-4 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <span className="text-xs text-white/40">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

