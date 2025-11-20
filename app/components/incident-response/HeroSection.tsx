import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#02030d]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101142] via-[#060126] to-[#1b0b47] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_50%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 md:px-10 xl:grid xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:gap-20">
        <div className="space-y-8 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
            Incident Response
          </span>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl xl:text-[3.55rem] xl:leading-tight">
              Crush dwell time with
              <span className="block bg-gradient-to-r from-sky-100 via-white to-purple-200 bg-clip-text text-transparent">
                orchestrated response routines
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Route suspicious messages the moment they land, coordinate analysts, and offload repetitive actions to trusted automations. Phishy keeps your response muscle memory sharp even on the busiest days.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" />
                Response playbooks that adapt to every mail client and region
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-300" />
                Guided analyst workflows to slash MTTR across the board
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1b0b47] shadow-lg shadow-indigo-900/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-800/50">
              Launch a response
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
            <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10">
              Explore playbooks
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-12 top-12 h-52 w-52 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute -left-10 bottom-16 h-48 w-48 rounded-[36px] border border-white/10 bg-gradient-to-tr from-white/15 via-transparent to-transparent blur-[100px]" />

          <div className="relative flex aspect-square w-full items-center justify-center">
            <div className="absolute inset-10 rounded-[30px] border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative h-[82%] w-[82%] rounded-[30px] border border-white/10 bg-[#07011b]/70 p-8 shadow-[0_30px_80px_rgba(60,56,177,0.35)]">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-3 text-white/80">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200/90">
                    Active Incident
                  </p>
                  <h2 className="text-2xl font-semibold text-white">Vendor Invoice Spoof</h2>
                  <p className="text-sm text-white/60">
                    Analysts triage flagged threads in a guided workspace that captures every action for audit trails.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/60">Containment</p>
                      <span className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-green-100">
                        92% accounts
                      </span>
                    </div>
                    <div className="mt-3 flex items-end justify-between text-white">
                      <span className="text-3xl font-semibold">3m 48s</span>
                      <span className="text-sm text-white/60">MTTR &darr; 58%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/15 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/60">Auto-Actions</p>
                      <p className="mt-2 text-lg font-semibold text-white">12 executed</p>
                      <p className="text-xs text-white/60">Link removal + password resets</p>
                    </div>
                    <div className="rounded-2xl border border-purple-400/30 bg-purple-500/15 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/60">Escalations</p>
                      <p className="mt-2 text-lg font-semibold text-white">2 pending</p>
                      <p className="text-xs text-white/60">Legal & finance notified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
            <div className="absolute bottom-6 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute -top-6 left-1/3 h-12 w-12 rounded-full border border-white/10 bg-purple-400/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


