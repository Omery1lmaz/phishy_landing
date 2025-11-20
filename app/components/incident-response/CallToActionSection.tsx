import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#050317]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a1c6d] via-[#0b062b] to-[#191043] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl space-y-10 px-6 py-24 text-center md:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
          Ready For Day Zero
        </span>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Feel confident hitting send on every phishing report
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Partner with Phishy to modernise your incident response program. We help you design workflows, onboard teams, and automate actions so every investigation is closed with certainty.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-[#191043] shadow-lg shadow-indigo-900/35 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-700/40">
            Request a live demo
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10">
            Download the playbook
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;


