'use client';

export const runtime = 'edge';

import React, {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import type {
  SimplePageCta,
  SimplePageSection,
} from '../../../components/ComingSoonPage';
import {Link} from '@/i18n/routing';
import {AlertTriangle, Mailbox, Workflow} from 'lucide-react';

const IncidentResponseProductPage: React.FC = () => {
  const t = useTranslations('Pages.ProductsIncidentResponse');
  const subtitle = t('subtitle', {defaultMessage: ''}) || undefined;
  const description = t('description', {defaultMessage: ''}) || undefined;
  const sections = (t.raw('sections') as SimplePageSection[] | undefined) ?? [];
  const cta = (t.raw('cta') as SimplePageCta | undefined) ?? undefined;

  const featureTabs = useMemo(
    () => [
      {
        key: 'unified-inbox',
        label: sections[0]?.title ?? 'Unified Inbox',
        description:
          sections[0]?.description ??
          'Aggregate incident reports from every channel and surface what needs attention first.',
        icon: Mailbox,
        section: sections[0],
      },
      {
        key: 'automated-playbooks',
        label: sections[1]?.title ?? 'Automated Playbooks',
        description:
          sections[1]?.description ??
          'Trigger orchestrated workflows that remove repetitive work and keep analysts focused.',
        icon: Workflow,
        section: sections[1],
      },
      {
        key: 'post-incident-insights',
        label: sections[2]?.title ?? 'Post-Incident Insights',
        description:
          sections[2]?.description ??
          'Capture learnings from every case and feed them back into training and detection.',
        icon: AlertTriangle,
        section: sections[2],
      },
    ],
    [sections],
  );

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = featureTabs[activeTabIndex] ?? featureTabs[0];
  const ActiveIcon = activeTab?.icon ?? Mailbox;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#050017]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0034] via-[#050017] to-[#050017]" />
          <div className="absolute -left-48 top-16 h-[32rem] w-[32rem] rounded-full bg-primary-500/25 blur-3xl" />
          <div className="absolute right-[-16rem] top-24 h-[36rem] w-[36rem] rounded-full bg-secondary-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.32),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1">{t('title')}</span>
                {subtitle ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-primary-200">
                    {subtitle}
                  </span>
                ) : null}
              </div>

              <div>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Coordinate Every Response</span>
                  <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-white bg-clip-text text-transparent">
                    Before Threats Escalate
                  </span>
                </h1>
                {description ? (
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                    {description}
                  </p>
                ) : null}

                {cta ? (
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    {cta.href.startsWith('mailto:') || cta.href.startsWith('http') ? (
                      <a
                        href={cta.href}
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
                      >
                        <span>{cta.label}</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={cta.href}
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
                      >
                        <span>{cta.label}</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                    {subtitle ? <span className="text-sm text-white/60">{subtitle}</span> : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-primary-900/40 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/10" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/80">Incident Queue</span>
                      <span className="rounded-full border border-primary-400/40 bg-primary-400/10 px-3 py-1 text-xs uppercase tracking-wide text-primary-200">
                        Live Sync
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">
                      Keep every reported phish in one place, prioritise automatically, and give analysts the context they need to act fast.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3 rounded-3xl border border-primary-500/30 bg-primary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-primary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Real-Time Routing</p>
                        <p className="text-xs text-white/60">Assign responders instantly based on workload and severity.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-secondary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Forensic Timeline</p>
                        <p className="text-xs text-white/60">See every action, artefact, and decision in a single audit trail.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-white/60" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Closure Intelligence</p>
                        <p className="text-xs text-white/60">Push learnings to simulations, training, and reporting teams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28 rounded-t-[1rem]">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[140vw] -translate-x-1/2 rounded-[4rem] rounded-t-[6rem] bg-gradient-to-b from-[#a78bfa]/65 via-[#7c3aed]/25 to-transparent opacity-90 blur-[4px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(79,70,229,0.18),transparent_60%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {subtitle ?? 'Incident response designed for relentless teams.'}
            </h2>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              {description ??
                'Coordinate triage, automate repetitive work, and share insights faster than attackers can pivot.'}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {featureTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = index === activeTabIndex;
              return (
                <button
                  type="button"
                  key={tab.key}
                  onClick={() => setActiveTabIndex(index)}
                  className={`relative flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-300 md:px-6 md:py-4 ${
                    isActive
                      ? 'border-primary-400/60 bg-primary-500/20 text-white shadow-[0_0_20px_rgba(129,140,248,0.4)]'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-primary-400/40 hover:text-white'
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-primary-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{tab.label}</span>
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400" />
                  ) : null}
                </button>
              );
            })}
          </div>

          {activeTab ? (
            <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
              <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_25px_70px_-30px_rgba(79,70,229,0.6)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 opacity-60" />
                <div className="relative flex h-full flex-col gap-6">
                  <header>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70">
                      <ActiveIcon className="h-4 w-4" />
                      <span>{activeTab.label}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {activeTab.section?.title ?? activeTab.label}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/75">{activeTab.description}</p>
                    {activeTab.section?.description ? (
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        {activeTab.section.description}
                      </p>
                    ) : null}
                  </header>

                  {activeTab.section?.points && activeTab.section.points.length > 0 ? (
                    <ul className="mt-auto space-y-3">
                      {activeTab.section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-white/75">
                          <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-primary-500/20 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_65%)] opacity-60" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="rounded-2xl border border-white/10 bg-[#050505]/60 p-6">
                    <p className="text-sm leading-relaxed text-white/70">
                      {activeTab.section?.description ?? activeTab.description}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-5">
                      <p className="text-xs uppercase tracking-wide text-primary-100">Mean Time to Respond</p>
                      <p className="mt-2 text-sm text-white/80">
                        Slash triage cycles by assigning and resolving incidents in one console.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                      <p className="text-xs uppercase tracking-wide text-secondary-100">Visibility Score</p>
                      <p className="mt-2 text-sm text-white/80">
                        Audit every action with built-in timelines and automated reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IncidentResponseProductPage;

