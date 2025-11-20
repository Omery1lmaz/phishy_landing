'use client';

export const runtime = 'edge';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/phishing-simulation/HeroSection';
import PrepareSimulationsSection from '../../components/phishing-simulation/PrepareSimulationsSection';
import RunSimulationsSection from '../../components/phishing-simulation/RunSimulationsSection';
import SeeResultsSection from '../../components/phishing-simulation/SeeResultsSection';

const PhishingSimulationPage = () => {
  return (
    <main className="min-h-screen bg-background text-white">
      <Header />

      <HeroSection />
      <PrepareSimulationsSection />
      <RunSimulationsSection />
      <SeeResultsSection />

      <Footer />
    </main>
  );
};

export default PhishingSimulationPage;
