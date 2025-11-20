'use client';

import React from 'react';

const responseStages = [
  {
    title: 'Report intake',
    description:
      'Capture employee and automated alerts in a single queue. Enrich every message with source, attachments, and threat intel before analysts even open the case.',
    badge: 'Stage 01',
  },
  {
    title: 'Triage & assign',
    description:
      'Dynamic playbooks prioritise cases, suggest containment actions, and auto-route work to responders across time zones with clear ownership.',
    badge: 'Stage 02',
  },
  {
    title: 'Automate response',
    description:
      'Trigger curated sequences—disable links, force logouts, quarantine messages—and track every step on the incident ledger for compliance.',
    badge: 'Stage 03',
  },
  {
    title: 'Review & learn',
    description:
      'Close the loop with post-incident insights. Push out coaching nudges, update detection rules, and export one-click reports for leadership.',
    badge: 'Stage 04',
  },
];

const ResponseWorkflowSection: React.FC = () => {
  const [activeStage, setActiveStage] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStage((prev) => (prev + 1) % responseStages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#040517]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f3f] via-[#050421] to-[#1a0f3f] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Guided Playbooks
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build a response muscle that flexes automatically
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Map every incident to orchestrated playbooks. Phishy keeps your team aligned, compliant, and relentlessly fast from first alert to final report.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 sm:-ml-20 sm:gap-8 sm:pl-20">
          <div className="pointer-events-none absolute -left-10 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block" />

          {responseStages.map((stage, index) => {
            const isActive = index === activeStage;

            return (
              <div
                key={stage.title}
                className={`group relative flex flex-col gap-5 overflow-visible rounded-[32px] border border-white/10 bg-white/5 px-6 py-8 transition-all duration-500 sm:min-h-[180px] sm:pl-28 sm:pr-12`}
                style={{transitionDelay: `${index * 80}ms`}}
              >
                <div
                  className={`absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 shadow-[0_0_0_rgba(56,189,248,0)] transition-all duration-500 sm:flex ${
                    isActive ? 'scale-[1.12] border-sky-300/80 text-white shadow-[0_0_40px_rgba(56,189,248,0.35)]' : ''
                  }`}
                >
                  <span className="relative z-10">{String(index + 1).padStart(2, '0')}</span>
                  <span
                    className={`absolute inset-0 -z-10 rounded-full transition-all duration-500 ${
                      isActive ? 'bg-sky-400/25 blur-md' : 'bg-transparent'
                    }`}
                  />
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
                  {stage.badge}
                </span>
                <div className="space-y-3">
                  <h3
                    className={`text-2xl font-semibold transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/85'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{stage.description}</p>
                </div>

                <div
                  className={`absolute right-6 top-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/20 transition-transform duration-500 ${
                    isActive ? 'translate-x-1 text-white/40' : ''
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div
                  className={`absolute inset-0 -z-10 rounded-3xl bg-white/5 opacity-0 blur-lg transition-all duration-500 ${
                    isActive ? 'opacity-100' : ''
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponseWorkflowSection;


