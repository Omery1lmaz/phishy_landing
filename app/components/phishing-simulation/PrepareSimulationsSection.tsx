import React from 'react';

type Step = {
  id: string;
  stepNumber: string;
  label: string;
  title: string;
  description: string;
  capabilities: readonly string[];
};

const steps: Step[] = [
  {
    id: 'prepare',
    stepNumber: '01',
    label: 'Prepare Simulations',
    title: 'Easy Simulation Setup',
    description:
      'Pull together believable phishing campaigns without touching custom code or juggling disconnected tools.',
    capabilities: [
      'Create phishing emails by dragging and dropping the pieces you need.',
      "Brand messages with your organisation’s domains for extra realism.",
      'Spin up replica web pages instantly by scraping approved content.',
      'Target the right audiences and schedule launches with precision.',
    ],
  },
  {
    id: 'run',
    stepNumber: '02',
    label: 'Run Simulations',
    title: 'Launch & Track in Real-Time',
    description:
      'Orchestrate multi-wave phishing exercises and watch engagement unfold live from a single dashboard.',
    capabilities: [
      'Push campaigns out instantly and monitor live responses by segment.',
      'Pinpoint who is clicking risky links or forwarding sensitive details.',
      'See attachment downloads and file opens per employee in context.',
      'Surface rapid-fire stats on who detects and reports the threat first.',
    ],
  },
  {
    id: 'improve',
    stepNumber: '03',
    label: 'Coach & Improve',
    title: 'Convert Insights into Action',
    description:
      'Close the loop with data-backed coaching so every simulation drives lasting behaviour change.',
    capabilities: [
      'Auto-send micro learnings to employees after risky behaviour.',
      'Share executive-ready scorecards with compliance alignment built in.',
      'Benchmark departments against industry peers to prioritise focus.',
      'Feed results into ticketing tools so remediation never falls through.',
    ],
  },
];

const PrepareSimulationsSection: React.FC = () => {
  return (
    <section id="prepare-simulations" className="relative bg-[#040511]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1030] to-[#05071c]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative container mx-auto grid gap-16 px-6 py-28 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-8 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:pr-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
              How it works
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Orchestrate phishing simulations in minutes
            </h2>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              Keep pace with evolving adversaries by automating every stage of the simulation lifecycle. From building convincing payloads to coaching the people who need it most, Phishy handles the moving parts so your team can focus on strategy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#request-demo"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1030] shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-[1.04] hover:shadow-indigo-700/50"
            >
              Try for free
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#request-demo"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-6 bottom-6 hidden lg:block">
            <div className="mx-auto h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(31,41,55,0.45)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-transparent" />
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  <div className="flex flex-col items-start gap-3 lg:min-w-[160px]">
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">
                      {step.stepNumber}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
                      {step.label}
                    </span>
                  </div>

                  <div className="space-y-4 text-white/80">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Capabilities</p>
                      <ul className="mt-3 space-y-3 text-sm text-white/75">
                        {step.capabilities.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 ? (
                  <div className="absolute bottom-0 left-1/2 hidden h-8 w-px translate-y-full bg-gradient-to-b from-white/20 to-transparent lg:block" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareSimulationsSection;

