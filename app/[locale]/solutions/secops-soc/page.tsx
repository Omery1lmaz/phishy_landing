'use client';

export const runtime = 'edge';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroSection from '../../../components/solutions/secops-soc/HeroSection';
import ProblemsTargetsSection from '../../../components/solutions/secops-soc/ProblemsTargetsSection';
import WorkflowSection from '../../../components/solutions/secops-soc/WorkflowSection';
import TimelineSection from '../../../components/solutions/secops-soc/TimelineSection';
import KpiSection from '../../../components/solutions/secops-soc/KpiSection';
import FinalCtaSection from '../../../components/solutions/secops-soc/FinalCtaSection';

const SolutionsSecOpsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <HeroSection />
      <ProblemsTargetsSection />
      <WorkflowSection />
      <TimelineSection />
      <KpiSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default SolutionsSecOpsPage;

