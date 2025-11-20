'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModuleMappingSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Module Mapping
          </h2>
        </div>

        <Tabs defaultValue="simulation" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/5 border border-white/10 rounded-2xl p-1">
            {[
              {value: 'simulation', label: 'Simulation'},
              {value: 'training', label: 'Training'},
              {value: 'incident', label: 'Incident Response'},
              {value: 'phishysafe', label: 'PhishySafe'},
              {value: 'phishypot', label: 'PhishyPot'},
              {value: 'integrations', label: 'Integrations'},
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary-500/20 data-[state=active]:text-primary-300 rounded-xl text-xs"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {[
            {
              value: 'simulation',
              title: 'Simulation',
              description:
                'Multi-tenant simulation management. Client-specific campaigns. Isolated data per tenant. White-label interface.',
            },
            {
              value: 'training',
              title: 'Training',
              description:
                'Multi-tenant training delivery. Client-specific content. Completion tracking per tenant. White-label certificates.',
            },
            {
              value: 'incident',
              title: 'Incident Response',
              description:
                'Multi-tenant incident management. Client-specific cases. Isolated triage workflows. White-label reporting.',
            },
            {
              value: 'phishysafe',
              title: 'PhishySafe',
              description:
                'Multi-tenant infrastructure testing. Client-specific tests. Isolated results. White-label reports.',
            },
            {
              value: 'phishypot',
              title: 'PhishyPot',
              description:
                'Multi-tenant early warning. Client-specific honeypots. Isolated alerts. White-label dashboards.',
            },
            {
              value: 'integrations',
              title: 'Integrations',
              description:
                'M365, Google Workspace, Exchange: Multi-tenant user sync. Billing system integration (Stripe, QuickBooks, custom). PSA integration. Client portal integration.',
            },
          ].map((module) => (
            <TabsContent key={module.value} value={module.value} className="mt-8">
              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription className="text-white/70">{module.description}</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ModuleMappingSection;


