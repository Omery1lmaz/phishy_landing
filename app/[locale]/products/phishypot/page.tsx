'use client';

export const runtime = 'edge';

import React, {createRef, useEffect, useMemo, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import {Link} from '@/i18n/routing';
import type {
  SimplePageCta,
  SimplePageSection,
} from '../../../components/ComingSoonPage';
import {BellRing, Radar, ShieldCheck} from 'lucide-react';

const PhishypotProductPage: React.FC = () => {
  const t = useTranslations('Pages.ProductsPhishypot');
  const subtitle = t('subtitle', {defaultMessage: ''}) || undefined;
  const sections = (t.raw('sections') as SimplePageSection[] | undefined) ?? [];
  const cta = (t.raw('cta') as SimplePageCta | undefined) ?? undefined;

  const featureTabs = useMemo(
    () => [
      {
        key: 'smart-decoys',
        label: 'Smart Decoys Setup',
        description:
          'Our fake emails look real, tricking phishers and keeping your staff safe from deceptive attacks.',
        icon: ShieldCheck,
        section: sections[0],
      },
      {
        key: 'threat-watch',
        label: '24/7 Threat Watch',
        description:
          'Day and night, our system vigilantly watches over honeypot accounts to catch phishers in the act.',
        icon: Radar,
        section: sections[1],
      },
      {
        key: 'early-alerts',
        label: 'Early Attack Alerts',
        description:
          'We detect phishing attempts early by baiting hackers, keeping your actual inboxes threat-free.',
        icon: BellRing,
        section: sections[2],
      },
    ],
    [sections],
  );

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = featureTabs[activeTabIndex] ?? featureTabs[0];
  const ActiveIcon = activeTab?.icon ?? ShieldCheck;

  const segmentTabs = useMemo(
    () => [
      {
        key: 'ai-agents',
        label: 'Built for AI Agents',
        eyebrow: 'Secure your AI Agents',
        headline: 'Authenticate requests before AI agents act.',
        description:
          'Control which APIs autonomous agents may invoke, enforce real-user verification, and apply policy-aware permissions by design.',
        capabilities: ['Token Vault', 'User Authentication', 'Async Authorization', 'Fine-grained Access'],
        primary: {
          label: 'Authenticate the user',
          description: 'Verify the person prompting the agent in real time before tokens are issued.',
        },
        secondary: {
          label: 'Control the tools',
          description: 'Limit which downstream systems the agent can access with scoped credentials.',
        },
        tertiary: {
          label: 'Limit the knowledge',
          description: 'Enforce least-privilege policies and redact sensitive data from agent context.',
        },
        callout: {
          headline: 'Token Request Initiated',
          copy: 'Retrieving secure tokens for your connected business accounts.',
        },
      },
      {
        key: 'b2b',
        label: 'B2B',
        eyebrow: 'Protect partner workflows',
        headline: 'Give partners rapid access without sacrificing control.',
        description:
          'Deliver seamless integrations while keeping every action logged, auditable, and revocable at any time.',
        capabilities: ['SSO & SCIM', 'Just-in-time Provisioning', 'Granular Audit Trails', 'Zero Trust Policies'],
        primary: {
          label: 'Adaptive trust scoring',
          description: 'Continuously measure partner risk posture before elevating access.',
        },
        secondary: {
          label: 'Delegated approvals',
          description: 'Route requests to the right stakeholder with automated policy checks.',
        },
        tertiary: {
          label: 'Lifecycle automation',
          description: 'Revoke or rotate partner credentials instantly when contracts change.',
        },
        callout: {
          headline: 'Partner Session Guarded',
          copy: 'All partner actions are verified and tokenized across shared systems.',
        },
      },
      {
        key: 'b2c',
        label: 'B2C',
        eyebrow: 'Earn customer trust',
        headline: 'Delight customers with security that feels invisible.',
        description:
          'Ship frictionless sign-ins, protect accounts from takeovers, and respond to threats automatically.',
        capabilities: ['Passwordless Login', 'Behavioral Signals', 'Fraud Barriers', 'Privacy-first Telemetry'],
        primary: {
          label: 'Frictionless onboarding',
          description: 'Offer passkeys, magic links, or biometrics with built-in risk checks.',
        },
        secondary: {
          label: 'Account takeover defense',
          description: 'Shut down anomalous access attempts before they escalate.',
        },
        tertiary: {
          label: 'Customer reassurance',
          description: 'Send transparent security updates that reinforce confidence.',
        },
        callout: {
          headline: 'Customer Session Shielded',
          copy: 'Dynamic signals keep consumer accounts protected without added friction.',
        },
      },
    ],
    [],
  );

  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const segmentContainerRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useMemo(
    () => segmentTabs.map(() => createRef<HTMLDivElement>()),
    [segmentTabs],
  );

  const activeSegment = segmentTabs[activeSegmentIndex] ?? segmentTabs[0];

  useEffect(() => {
    const container = segmentContainerRef.current;
    const targetRef = segmentRefs[activeSegmentIndex];
    const target = targetRef?.current;

    if (!target) {
      return;
    }

    if (container) {
      const topOffset = target.offsetTop - 24;
      container.scrollTo({top: topOffset < 0 ? 0 : topOffset, behavior: 'smooth'});
    } else {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    segmentRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.removeAttribute('data-animate');
      }
    });

    target.setAttribute('data-animate', 'true');

    const timeout = window.setTimeout(() => {
      target.removeAttribute('data-animate');
    }, 800);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activeSegmentIndex, segmentRefs]);

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
                  <span className="block text-white">Catch The Phishers Before They</span>
                  <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-white bg-clip-text text-transparent">
                    Phish You
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  PhishyPot is an innovative cybersecurity module designed to proactively safeguard your organization by deploying decoy email addresses. These honeypot accounts mimic real employee emails and are strategically disseminated to attract and trap cyber attackers.
                </p>

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
                      <span className="text-sm font-medium text-white/80">Decoy Mailboxes</span>
                      <span className="rounded-full border border-primary-400/40 bg-primary-400/10 px-3 py-1 text-xs uppercase tracking-wide text-primary-200">
                        Active
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">
                      Deploy realistic inboxes that lure attackers while keeping your real people safe. Monitor every interaction and trigger instant alerts when suspicious activity is detected.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3 rounded-3xl border border-primary-500/30 bg-primary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-primary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Real-Time Alerts</p>
                        <p className="text-xs text-white/60">Instant signal when attackers bite the bait.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-secondary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Incident Insights</p>
                        <p className="text-xs text-white/60">Understand patterns and stop future attempts faster.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-white/60" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Integrations</p>
                        <p className="text-xs text-white/60">Route findings to your SOC tools without friction.</p>
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
              {subtitle ?? 'Proactive phishing defense, simplified.'}
            </h2>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              {t('description', {defaultMessage: ''}) || 'Stay ahead of attackers with decoy accounts, automated monitoring, and actionable intelligence.'}
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
                      <p className="text-xs uppercase tracking-wide text-primary-100">Signal Strength</p>
                      <p className="mt-2 text-sm text-white/80">
                        Immediate visibility when attackers engage with decoys.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                      <p className="text-xs uppercase tracking-wide text-secondary-100">Response Speed</p>
                      <p className="mt-2 text-sm text-white/80">
                        Automated workflows push alerts to your SOC tools instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#040312]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,29,149,0.4),transparent_55%)] opacity-60" />

        <div className="relative z-10 container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.5fr_1.5fr]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <span className="text-sm font-semibold tracking-[0.3em] text-white/40">BUILT FOR</span>
            <nav className="space-y-3">
              {segmentTabs.map((segment, index) => {
                const isActive = index === activeSegmentIndex;
                return (
                  <button
                    type="button"
                    key={segment.key}
                    onClick={() => setActiveSegmentIndex(index)}
                    className={`group relative flex w-full items-center justify-between rounded-3xl border px-5 py-4 text-left transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'border-primary-400/70 bg-primary-500/15 text-white shadow-lg shadow-primary-900/40'
                        : 'border-transparent bg-white/0 text-white/60 hover:border-white/10 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-wide">{segment.label}</span>
                    <span
                      className={`h-1 w-16 rounded-full bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {isActive ? (
                      <span className="absolute inset-0 rounded-3xl border border-primary-500/40" />
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>

          <div
            ref={segmentContainerRef}
            className="space-y-12 lg:max-h-[75vh] lg:overflow-y-auto lg:pr-4 lg:scroll-smooth"
          >
            {segmentTabs.map((segment, index) => (
              <article
                key={segment.key}
                ref={segmentRefs[index]}
                className="segment-card relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),transparent_60%)] bg-[#07061a]/70 p-10 shadow-[0_25px_70px_-30px_rgba(59,130,246,0.45)] backdrop-blur-2xl scroll-mt-24"
              >
                <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/20 opacity-60" />
                <div className="relative flex flex-col gap-10">
                  <header className="space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200/80">
                      {segment.eyebrow}
                    </span>
                    <h3 className="text-3xl font-semibold text-white md:text-4xl">{segment.headline}</h3>
                    <p className="text-base leading-relaxed text-white/75 md:text-lg">{segment.description}</p>
                  </header>

                  <div className="grid gap-6 text-sm text-white/75 md:grid-cols-3">
                    <div className="rounded-3xl border border-primary-500/40 bg-primary-500/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary-100">
                        {segment.primary.label}
                      </p>
                      <p className="mt-3 leading-relaxed text-white/75">{segment.primary.description}</p>
                    </div>
                    <div className="rounded-3xl border border-secondary-500/40 bg-secondary-500/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary-100">
                        {segment.secondary.label}
                      </p>
                      <p className="mt-3 leading-relaxed text-white/75">{segment.secondary.description}</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                        {segment.tertiary.label}
                      </p>
                      <p className="mt-3 leading-relaxed text-white/75">{segment.tertiary.description}</p>
                    </div>
                  </div>

                  <footer className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        Featured Capabilities
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-white/70">
                        {segment.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1"
                          >
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-primary-400/40 bg-gradient-to-br from-primary-600/40 via-primary-500/20 to-transparent p-6 text-left shadow-lg shadow-primary-900/40">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-60" />
                      <div className="relative space-y-3 text-sm text-white/80">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-100">
                          {segment.callout.headline}
                        </span>
                        <p>{segment.callout.copy}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-white/60">
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                            Secure token retrieved
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                            Apps accessed
                          </span>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#050014]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),transparent_60%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-25" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Honeypot Function
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
              The Future is Happening Now
            </h2>
            <p className="mt-3 text-base text-white/70 md:text-lg">
              Our adaptive honeypot workflows reduce workload for security teams while improving response speed and precision.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Integrate Email Honeypot',
                description:
                  'Add decoy emails to servers easily, creating believable company identities to attract attackers.',
                icon: '📨',
              },
              {
                title: 'Monitor Honeypot Non-Stop',
                description:
                  'Continuous monitoring ensures real-time tracking of all activity on honeypot emails, alerting teams to threats.',
                icon: '🛰️',
              },
              {
                title: 'Auto-Analyze Honeypot Traffic',
                description:
                  'Automatically evaluate every email to honeypots, using sophisticated algorithms to identify and assess risks.',
                icon: '🧠',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090818]/80 p-10 text-left shadow-[0_35px_80px_-35px_rgba(76,29,149,0.6)] transition-transform duration-500 hover:-translate-y-2 ${
                  index === 1
                    ? 'bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-secondary-500/10 border-primary-400/40'
                    : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                <div className={`relative flex h-full flex-col gap-6 ${index === 1 ? 'text-white' : 'text-white'}`}>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-lg shadow-primary-900/30 ${
                      index === 1 ? 'bg-white/15' : ''
                    }`}
                  >
                    <span>{feature.icon}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-white/60">
                      {index === 0
                        ? ['Identity Mirror', 'Zero-touch Setup', 'Mailbox Parity'].map((chip) => (
                            <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                              {chip}
                            </span>
                          ))
                        : null}
                      {index === 1
                        ? ['Real-time Sync', 'Task Automation', 'Smart Suggestions', 'Auto Task Assignment', 'Cross-Platform Integration'].map(
                            (chip) => (
                              <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                                {chip}
                              </span>
                            ),
                          )
                        : null}
                      {index === 2
                        ? ['Behavioral Scoring', 'Threat Insights', 'Risk Analytics'].map((chip) => (
                            <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                              {chip}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @keyframes sectionFadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .segment-card[data-animate='true'] {
          animation: sectionFadeUp 0.7s ease-out;
        }
      `}</style>
    </main>
  );
};

export default PhishypotProductPage;

