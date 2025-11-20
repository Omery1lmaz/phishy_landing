import React from 'react';

const panelItems = [
  {
    title: 'Unified queue',
    description:
      'Every alert feeds the same canvas with deduplication, enrichment, and threaded context so analysts never chase stale artifacts.',
  },
  {
    title: 'Collaborative war-room',
    description:
      'Assign tasks, mention stakeholders, and capture decisions directly inside the incident timeline—no more lost Slack trails.',
  },
  {
    title: 'Evidence locker',
    description:
      'Archive emails, headers, and forensic snapshots with audit-ready metadata that exports cleanly into ticketing and SIEM tools.',
  },
];

const AnalystWorkspaceSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#02020f]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1237] via-[#04031c] to-[#171035] opacity-85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:px-10 xl:grid xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Analyst Workspace
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A cockpit that keeps teams synced under pressure
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Give responders the clarity they need to move fast without missing a beat. Phishy overlays collaboration, evidence, and automation in one shared view.
          </p>

          <div className="space-y-3">
            {panelItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-14 h-20 w-20 rounded-2xl border border-white/15 bg-white/10 blur-xl" />
          <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#07021a]/80 p-6 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Incident Timeline</p>
                  <h3 className="text-2xl font-semibold text-white">Quarter-end wire fraud</h3>
                </div>
                <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
                  Priority
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    time: '08:42',
                    event: 'Alert received from finance mailbox',
                    role: 'Automation',
                  },
                  {
                    time: '08:44',
                    event: 'Headers parsed, payload quarantined, evidence logged',
                    role: 'Playbook',
                  },
                  {
                    time: '08:47',
                    event: 'Analyst assigned, legal looped in, timeline updated',
                    role: 'Analyst',
                  },
                  {
                    time: '08:53',
                    event: 'Finance coach pack sent & metrics auto-shared with leadership',
                    role: 'Automation',
                  },
                ].map((entry) => (
                  <div key={entry.event} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/40">{entry.time}</span>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white">{entry.event}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{entry.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystWorkspaceSection;


