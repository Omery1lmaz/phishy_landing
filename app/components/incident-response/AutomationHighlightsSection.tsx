import React from 'react';

const highlights = [
  {
    title: 'Link neutralisation',
    metric: '98% coverage',
    description: 'Instantly expire malicious URLs across inboxes, chat tools, and mobile devices with a single click.',
    accent: 'from-sky-400/40 to-sky-500/10',
  },
  {
    title: 'Credential resets',
    metric: '2m median',
    description: 'Detect compromised accounts, trigger identity workflows, and log every approval for auditors.',
    accent: 'from-purple-400/40 to-purple-500/10',
  },
  {
    title: 'Endpoint sweeps',
    metric: '41 devices',
    description: 'Fan out actions to EDRs, isolate machines, and push remediation runbooks across teams instantly.',
    accent: 'from-blue-400/40 to-indigo-500/10',
  },
];

const AutomationHighlightsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#030313]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#10163f] via-[#050624] to-[#1b133b] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:px-10">
        <div className="space-y-4 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Automation Surface
          </span>
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Actions that execute before attackers can pivot
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Connect your identity, email, and endpoint stacks into a single orchestrator. Phishy coordinates the busywork so responders stay focused on the signal that matters.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.accent} opacity-50`} />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    Automation
                  </span>
                </div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/50">Live throughput</p>
                <p className="text-3xl font-semibold text-white">{highlight.metric}</p>
                <p className="text-sm leading-relaxed text-white/70">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationHighlightsSection;


