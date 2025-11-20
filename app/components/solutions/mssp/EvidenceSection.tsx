'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GlowBadge } from '@/app/components/ui/glow-badge';

const EvidenceSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              Evidence & Testimonials
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Real Results from Real MSSPs
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            See how leading MSSPs are transforming their operations with Phishy's multi-tenant platform.
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-white/80">
                &ldquo;We managed 15 clients manually. Each client required separate setup and reporting. After implementing Phishy's multi-tenant platform, we now manage 150+ clients with the same team. White-label branding is perfect. Monthly summaries generate automatically. Billing integration saves 20 hours per month. Revenue increased 8x. The ROI is exceptional.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-white/60">— MSSP Director, Managed Security Services Provider</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-6">
              <blockquote className="text-sm italic text-white/70">
                &ldquo;White-label interface is perfect. Clients see our branding. Professional image maintained. Upsell opportunities increased.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs text-white/50">— Security Consultant, White-Label Reseller</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-6">
              <blockquote className="text-sm italic text-white/70">
                &ldquo;Automated monthly summaries save us 40 hours per month. Billing integration eliminates errors. Revenue recognition improved.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs text-white/50">— Operations Manager, MSSP Provider</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Trusted by Leading Organizations</h3>
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

export default EvidenceSection;
