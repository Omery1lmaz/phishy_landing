'use client';

export const runtime = 'edge';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroSection from '../../../components/solutions/ld-training/HeroSection';
import OverviewSection from '../../../components/solutions/ld-training/OverviewSection';
import ProblemsTargetsSection from '../../../components/solutions/ld-training/ProblemsTargetsSection';
import WorkflowSection from '../../../components/solutions/ld-training/WorkflowSection';
import ModuleMappingSection from '../../../components/solutions/ld-training/ModuleMappingSection';
import TimelineSection from '../../../components/solutions/ld-training/TimelineSection';
import KpiSection from '../../../components/solutions/ld-training/KpiSection';
import TestimonialsSection from '../../../components/solutions/ld-training/TestimonialsSection';
import SecuritySection from '../../../components/solutions/ld-training/SecuritySection';
import FinalCtaSection from '../../../components/solutions/ld-training/FinalCtaSection';

const SolutionsLDTrainingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <HeroSection />
      <ProblemsTargetsSection />
      <WorkflowSection />
    {/*   <ModuleMappingSection /> */}
      <TimelineSection />
      <KpiSection />
      {/* <TestimonialsSection /> */}
      <SecuritySection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default SolutionsLDTrainingPage;
