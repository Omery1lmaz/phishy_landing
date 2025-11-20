'use client';

import React, { useRef } from 'react';

const ConnectCommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="community"
      className="py-24 relative overflow-hidden"
    >
      {/* Background - Almost black */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Radial gradient overlay - using project's primary and secondary colors */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(127, 61, 255, 0.15) 0%, rgba(59, 130, 246, 0.1) 20%, rgba(0, 0, 0, 0.8) 50%, transparent 70%)',
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card Container */}
          <div className="relative group">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
            
            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-visible backdrop-blur-sm">
              {/* Gradient overlay inside card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-secondary-600/20 pointer-events-none" />
              
              <div className="relative p-8 lg:p-12">
                <div className="max-w-2xl mx-auto text-center">
                  {/* Title - split across two lines */}
                  <h2 className="community-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
                    <span className="block">Connect Phishy</span>
                    <span className="block">Community</span>
                  </h2>
                  
                  {/* Email input and Sign up button */}
                  <div className="community-form flex flex-col sm:flex-row gap-3 mb-6 justify-center items-center">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 w-full sm:w-auto min-w-[280px] px-6 py-4 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/20 transition-all backdrop-blur-sm"
                    />
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap">
                      Sign up
                    </button>
                  </div>
                  
                  {/* Disclaimer text */}
                  <p className="community-disclaimer text-sm text-gray-400">
                    No credit card required • 7-days free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCommunitySection;

