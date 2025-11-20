'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[140vw] -translate-x-1/2 rounded-[4rem] rounded-t-[6rem] bg-gradient-to-b from-[#a78bfa]/65 via-[#7c3aed]/25 to-transparent opacity-90 blur-[4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(79,70,229,0.18),transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <Card className="border-primary-500/30 bg-primary-500/10 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-primary-300 mb-4">This page is for:</CardTitle>
            <div className="space-y-4">
              <div>
                <p className="text-white/90 font-medium mb-2">Role:</p>
                <p className="text-white/70">MSSP Providers, Managed Security Service Providers, Security Consultants, White-Label Resellers</p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">Company Size:</p>
                <p className="text-white/70">MSSPs managing 10+ clients—scaling security awareness services</p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">Use Case:</p>
                <p className="text-white/70">Multi-tenant management, branded/unbranded interfaces, monthly summaries, automated billing</p>
              </div>
              <Separator className="bg-white/10 my-4" />
              <div>
                <p className="text-white/90 font-medium mb-2">Why this persona cares:</p>
                <p className="text-white/70">
                  Managing multiple clients manually doesn&apos;t scale. Billing is complex. Client reporting is time-consuming. White-label options are limited.
                </p>
              </div>
              <div>
                <p className="text-white/90 font-medium mb-2">Your goal:</p>
                <p className="text-white/70">
                  Scale security awareness services efficiently. Phishy helps by providing multi-tenant management, white-label capabilities, automated reporting, and billing integration.
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


