import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ThreatSection from '../components/ThreatSection';
import ValueProposition from '../components/ValueProposition';
import FeaturesSection from '../components/FeaturesSection';
import FunctionSection from '../components/FunctionSection';
import ModulesSection from '../components/ModulesSection';
import TrustSection from '../components/TrustSection';
import BlogSectionWrapper from '../components/BlogSectionWrapper';
import FAQSection from '../components/FAQSection';
import ConnectCommunitySection from '../components/ConnectCommunitySection';
import DashboardSection from '../components/DashboardSection';
import ComplianceSection from '../components/ComplianceSection';
import Footer from '../components/Footer';
import HomeAnimations from '../components/HomeAnimations';
import type { Locale } from '@/i18n/routing';

export const runtime = 'edge';

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-background">
      <HomeAnimations />
      <Header />
      <Hero />
      <WhatWeDoSection />
      <ThreatSection />
      <ValueProposition />
      <FeaturesSection />
      <FunctionSection />
      <ModulesSection />
      <DashboardSection />
      <TrustSection />
      <ComplianceSection />
      <BlogSectionWrapper locale={locale as Locale} />
      <FAQSection />
      <ConnectCommunitySection />
      <Footer />
    </main>
  );
}