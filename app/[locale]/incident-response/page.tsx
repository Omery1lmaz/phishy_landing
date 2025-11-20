'use client';

export const runtime = 'edge';

import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AnalystWorkspaceSection from '../../components/incident-response/AnalystWorkspaceSection';
import AutomationHighlightsSection from '../../components/incident-response/AutomationHighlightsSection';
import CallToActionSection from '../../components/incident-response/CallToActionSection';
import HeroSection from '../../components/incident-response/HeroSection';
import ResponseWorkflowSection from '../../components/incident-response/ResponseWorkflowSection';

const PhishyIncidentResponsePage: React.FC = () => (
  <main className="min-h-screen bg-background text-white">
    <Header />

    <div className="flex flex-col ">
      <HeroSection />
      <ResponseWorkflowSection />
      <AutomationHighlightsSection />
      <AnalystWorkspaceSection />
      <CallToActionSection />
    </div>

    <Footer />
  </main>
);

export default PhishyIncidentResponsePage;


