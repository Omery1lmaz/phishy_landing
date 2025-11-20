'use client';

import React, { useRef } from 'react';

const ComplianceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const complianceCards = [
    {
      title: 'Market Volatility Analyzer',
      icon: '⚡',
    },
    {
      title: 'Regulatory Compliance Checker',
      icon: '⚡',
    },
    {
      title: 'Fraud Detection Toolkit',
      icon: '⚡',
    },
    {
      title: 'Risk Assessment Engine',
      icon: '⚡',
    },
    {
      title: 'Security Audit System',
      icon: '⚡',
    },
    {
      title: 'Data Protection Module',
      icon: '⚡',
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...complianceCards, ...complianceCards, ...complianceCards];

  return (
    <section
      id="compliance"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-0" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 z-0" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,61,255,0.1),transparent_70%)] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left side - Title */}
            <div className="flex-1">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Your Data and Investments —
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-white">
                Safe, Secure, and Fully Compliant
              </h3>
            </div>
            
            {/* Right side - Description */}
            <div className="flex-1 lg:max-w-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are revolutionizing the way people interact with digital assets by harnessing the power of blockchain technology. Our platform is designed to bring transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative overflow-hidden">
          <div className="compliance-scroll-container">
            <div className="compliance-scroll-track">
              {duplicatedCards.map((card, index) => (
                <div
                  key={index}
                  className="compliance-card flex-shrink-0"
                >
                  <div className="relative group">
                    {/* Card */}
                    <div 
                      className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-visible bg-gradient-to-br from-white/5 via-primary-500/8 to-white/0 backdrop-blur-sm h-full min-w-[280px] p-6 shadow-lg shadow-primary-500/10"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-60" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Lightning Icon */}
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-2xl text-primary-400">
                            {card.icon}
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-lg font-semibold text-white">
                            {card.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

