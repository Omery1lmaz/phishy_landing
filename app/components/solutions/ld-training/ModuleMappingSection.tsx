'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

const ModuleMappingSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');

  const tabs = [
    {value: 'simulation', label: t('modules.simulation.label', {defaultMessage: 'Simulation'})},
    {value: 'training', label: t('modules.training.label', {defaultMessage: 'Training'})},
    {value: 'incident', label: t('modules.incident.label', {defaultMessage: 'Incident Response'})},
    {value: 'phishysafe', label: t('modules.phishysafe.label', {defaultMessage: 'PhishySafe'})},
    {value: 'phishypot', label: t('modules.phishypot.label', {defaultMessage: 'PhishyPot'})},
    {value: 'integrations', label: t('modules.integrations.label', {defaultMessage: 'Integrations'})},
  ];

  const modules = [
    {
      value: 'simulation',
      title: t('modules.simulation.title', {defaultMessage: 'Simulation'}),
      description: t('modules.simulation.description', {
        defaultMessage:
          'Simulations identify training needs. Click data informs content assignment. Risk-based segmentation.',
      }),
    },
    {
      value: 'training',
      title: t('modules.training.title', {defaultMessage: 'Training'}),
      description: t('modules.training.description', {
        defaultMessage:
          'Core module: Micro content delivery, completion tracking, certificate generation, segmentation, effectiveness measurement.',
      }),
    },
    {
      value: 'incident',
      title: t('modules.incident.title', {defaultMessage: 'Incident Response'}),
      description: t('modules.incident.description', {
        defaultMessage:
          'Not typically the focus of L&D programs, but available for incident-based training triggers.',
      }),
    },
    {
      value: 'phishysafe',
      title: t('modules.phishysafe.title', {defaultMessage: 'PhishySafe'}),
      description: t('modules.phishysafe.description', {
        defaultMessage:
          'Not typically used in L&D programs, but available for infrastructure testing.',
      }),
    },
    {
      value: 'phishypot',
      title: t('modules.phishypot.title', {defaultMessage: 'PhishyPot'}),
      description: t('modules.phishypot.description', {
        defaultMessage:
          'Not typically used in L&D programs, but available for early warning systems.',
      }),
    },
    {
      value: 'integrations',
      title: t('modules.integrations.title', {defaultMessage: 'Integrations'}),
      description: t('modules.integrations.description', {
        defaultMessage:
          'M365, Google Workspace, Exchange: User sync. LMS integration (Cornerstone, Workday, SAP SuccessFactors). HRIS integration. Certificate management systems.',
      }),
    },
  ];

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
              {t('modules.badge', {defaultMessage: 'Module Mapping'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('modules.heading', {defaultMessage: 'Module Mapping'})}
          </h2>
        </div>

        <Tabs defaultValue="training" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/5 border border-white/10 rounded-2xl p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary-500/20 data-[state=active]:text-primary-300 rounded-xl text-xs"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.value} value={module.value} className="mt-8">
              <Card className="border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20">
                <CardHeader>
                  <CardTitle className="text-white">{module.title}</CardTitle>
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

