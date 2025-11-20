import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#060014]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0120] via-[#14004c] to-[#4c38ff]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.45),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(96,165,250,0.45),rgba(27,13,82,0.4),transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_48%),linear-gradient(245deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 md:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="space-y-8 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
            Phishing Simulation
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-snug tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-tight">
              Flexible phishing simulation orchestration
              <span className="block bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent">
                built for modern defenders
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Craft believable phishing journeys in minutes, auto-personalise payloads for every audience, and measure how fast employees report, escalate, or fall for attacks—all from one control plane.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" />
                Adaptive difficulty that tightens after each simulation
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-violet-300" />
                Instant coaching nudges delivered the moment someone slips
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#12003c] shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-800/60">
              Launch a simulation
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10">
              View sample attacks
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-10 top-16 h-48 w-48 rounded-[32px] border border-white/15 bg-gradient-to-br from-white/15 via-transparent to-transparent blur-3xl" />
          <div className="absolute -left-12 bottom-12 h-44 w-44 rounded-[32px] border border-white/10 bg-gradient-to-tr from-white/10 via-transparent to-transparent blur-[90px]" />
          <div className="relative flex aspect-square w-full items-center justify-center">
            <div className="absolute inset-12 rounded-[30px] border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative h-[82%] w-[82%] rounded-[30px] border border-white/10 bg-[#0b0124]/55 p-8 shadow-[0_30px_80px_rgba(72,63,228,0.4)]">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-3 text-white/80">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-indigo-200/90">
                    Campaign Health
                  </p>
                  <h2 className="text-2xl font-semibold text-white">C-Suite Spear Phish</h2>
                  <p className="text-sm text-white/60">
                    Track how fast executives report malicious prompts and who needs immediate reinforcement.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.32em] text-indigo-200/80">Phish Click Rate</p>
                      <span className="rounded-full border border-teal-400/30 bg-teal-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-100">
                        Improving
                      </span>
                    </div>
                    <div className="mt-3 flex items-end justify-between text-white">
                      <span className="text-3xl font-semibold">14%</span>
                      <span className="text-sm text-white/60">▼ 9% vs last campaign</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
                    <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/15 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/60">Reported</p>
                      <p className="mt-2 text-lg font-semibold text-white">71%</p>
                      <p className="text-xs text-white/60">Median time 2m 14s</p>
                    </div>
                    <div className="rounded-2xl border border-purple-400/30 bg-purple-500/15 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/60">Credentials</p>
                      <p className="mt-2 text-lg font-semibold text-white">3</p>
                      <p className="text-xs text-white/60">Auto-reset & coached</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
            <div className="absolute bottom-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute -top-6 left-1/3 h-12 w-12 rounded-full border border-white/10 bg-sky-400/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

