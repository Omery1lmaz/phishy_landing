'use client';

export const runtime = 'edge';

import React, {createRef, useEffect, useMemo, useRef, useState} from 'react';
import {useMessages, useTranslations} from 'next-intl';
import type {LucideIcon} from 'lucide-react';
import {BellRing, Compass, Radar, ShieldCheck, Target, Zap} from 'lucide-react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import type {SimplePageCta, SimplePageSection} from '../../components/ComingSoonPage';
import {Link} from '@/i18n/routing';

type FeatureTabTranslation = {
  key?: string;
  label?: string;
  description?: string;
  icon?: string;
  sectionKey?: string;
  sectionIndex?: number;
};

type SegmentHighlight = {
  label?: string;
  description?: string;
};

type SegmentCallout = {
  headline?: string;
  copy?: string;
  chips?: string[];
};

type SegmentHighlightNormalized = {
  label: string;
  description: string;
};

type SegmentCalloutNormalized = {
  headline: string;
  copy: string;
  chips?: string[];
};

type SegmentTranslation = {
  key?: string;
  label?: string;
  eyebrow?: string;
  headline?: string;
  description?: string;
  capabilities?: string[];
  primary?: SegmentHighlight;
  secondary?: SegmentHighlight;
  tertiary?: SegmentHighlight;
  callout?: SegmentCallout;
};

type WorkflowFeatureTranslation = {
  title?: string;
  description?: string;
  icon?: string;
  emoji?: string;
  chips?: string[];
};

type FeatureTab = {
  key: string;
  label: string;
  description: string;
  icon: LucideIcon;
  section?: SimplePageSection;
};

type SegmentTab = {
  key: string;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  capabilities: string[];
  primary: SegmentHighlightNormalized;
  secondary: SegmentHighlightNormalized;
  tertiary: SegmentHighlightNormalized;
  callout: SegmentCalloutNormalized;
};

type WorkflowFeature = {
  key: string;
  title: string;
  description: string;
  chips: string[];
  iconEmoji?: string;
  IconComponent?: LucideIcon;
};

type FeatureTabsMessage = {
  heading?: string;
  subheading?: string;
  metrics?: {
    first?: SegmentHighlight;
    second?: SegmentHighlight;
    third?: SegmentHighlight;
  };
  items?: FeatureTabTranslation[];
};

type SegmentsMessage = {
  eyebrow?: string;
  capabilitiesTitle?: string;
  items?: SegmentTranslation[];
};

type WorkflowMessage = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  features?: WorkflowFeatureTranslation[];
};

type WhyPhishyMessageShape = {
  sections?: SimplePageSection[];
  cta?: SimplePageCta;
  featureTabs?: FeatureTabsMessage;
  segments?: SegmentsMessage;
  workflow?: WorkflowMessage;
};

const iconLibrary: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  radar: Radar,
  bell: BellRing,
  target: Target,
  zap: Zap,
  compass: Compass,
};

const resolveIcon = (key?: string, fallback: LucideIcon = ShieldCheck) => {
  if (!key) {
    return fallback;
  }

  const normalized = key.toLowerCase().trim();
  return iconLibrary[normalized] ?? fallback;
};

const ensureHighlight = (
  highlight?: SegmentHighlight,
  fallbackLabel?: string,
  fallbackDescription?: string,
): SegmentHighlightNormalized => ({
  label: highlight?.label ?? fallbackLabel ?? '',
  description: highlight?.description ?? fallbackDescription ?? '',
});

const ensureCallout = (
  callout?: SegmentCallout,
  fallbackHeadline?: string,
  fallbackCopy?: string,
): SegmentCalloutNormalized => ({
  headline: callout?.headline ?? fallbackHeadline ?? '',
  copy: callout?.copy ?? fallbackCopy ?? '',
  chips: callout?.chips,
});

const WhyPhishyPage: React.FC = () => {
  const t = useTranslations('Pages.WhyPhishy');
  const messages = useMessages() as {Pages?: {WhyPhishy?: WhyPhishyMessageShape}};
  const pageMessages = (messages?.Pages?.WhyPhishy ?? {}) as WhyPhishyMessageShape;
  const title = t('title');
  const subtitle = t('subtitle', {defaultMessage: ''}) || undefined;
  const description = t('description', {defaultMessage: ''}) || undefined;
  const sections = pageMessages.sections ?? [];
  const cta = pageMessages.cta ?? undefined;
  const featureTabsMessage: FeatureTabsMessage = pageMessages.featureTabs ?? {};
  const segmentMessage: SegmentsMessage = pageMessages.segments ?? {};
  const workflowMessage: WorkflowMessage = pageMessages.workflow ?? {};
  const featureTabTranslations = featureTabsMessage.items ?? [];
  const segmentTranslations = segmentMessage.items ?? [];
  const workflowFeatureTranslations = workflowMessage.features ?? [];

  const featureTabs: FeatureTab[] = useMemo(() => {
    const fallbackIcons: LucideIcon[] = [ShieldCheck, Radar, BellRing, Target];

    if (featureTabTranslations.length > 0) {
      return featureTabTranslations.map((tab, index) => {
        const sectionFromTitle = tab.sectionKey
          ? sections.find((section) => section?.title === tab.sectionKey)
          : undefined;
        const sectionFromIndex =
          typeof tab.sectionIndex === 'number' ? sections[tab.sectionIndex] : undefined;
        const section = sectionFromTitle ?? sectionFromIndex ?? sections[index];

        return {
          key: tab.key ?? section?.title ?? `feature-${index}`,
          label: tab.label ?? section?.title ?? title,
          description: tab.description ?? section?.description ?? description ?? '',
          icon: resolveIcon(tab.icon, fallbackIcons[index] ?? ShieldCheck),
          section,
        };
      });
    }

    return sections.slice(0, 3).map((section, index) => ({
      key: section?.title ?? `feature-${index}`,
      label: section?.title ?? `Feature ${index + 1}`,
      description: section?.description ?? description ?? '',
      icon: fallbackIcons[index] ?? ShieldCheck,
      section,
    }));
  }, [description, featureTabTranslations, sections, title]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = featureTabs[activeTabIndex] ?? featureTabs[0];
  const ActiveIcon = activeTab?.icon ?? ShieldCheck;

  const segmentTabs: SegmentTab[] = useMemo(() => {
    return segmentTranslations.length > 0
      ? segmentTranslations.map((segment, index) => {
          const fallbackSection = sections[featureTabs.length + index];
          const points = fallbackSection?.points ?? [];

          return {
            key: segment.key ?? `segment-${index}`,
            label: segment.label ?? `Segment ${index + 1}`,
            eyebrow: segment.eyebrow ?? segment.label ?? title,
            headline: segment.headline ?? segment.label ?? `Segment ${index + 1}`,
            description: segment.description ?? fallbackSection?.description ?? description ?? '',
            capabilities: segment.capabilities ?? points,
            primary: ensureHighlight(
              segment.primary,
              points[0],
              fallbackSection?.description ?? description ?? '',
            ),
            secondary: ensureHighlight(
              segment.secondary,
              points[1],
              fallbackSection?.description ?? description ?? '',
            ),
            tertiary: ensureHighlight(
              segment.tertiary,
              points[2],
              fallbackSection?.description ?? description ?? '',
            ),
            callout: ensureCallout(
              segment.callout,
              fallbackSection?.title ?? segment.label,
              fallbackSection?.description ?? description ?? '',
            ),
          };
        })
      : sections.slice(featureTabs.length, featureTabs.length + 3).map((section, index) => {
          const points = section?.points ?? [];

          return {
            key: section?.title ?? `segment-${index}`,
            label: section?.title ?? `Segment ${index + 1}`,
            eyebrow: section?.title ?? title,
            headline: section?.title ?? `Segment ${index + 1}`,
            description: section?.description ?? description ?? '',
            capabilities: points,
            primary: ensureHighlight(undefined, points[0], section?.description ?? description ?? ''),
            secondary: ensureHighlight(undefined, points[1], section?.description ?? description ?? ''),
            tertiary: ensureHighlight(undefined, points[2], section?.description ?? description ?? ''),
            callout: ensureCallout(undefined, section?.title, section?.description ?? description ?? ''),
          };
        });
  }, [description, featureTabs.length, segmentTranslations, sections, title]);

  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const segmentContainerRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useMemo(
    () => segmentTabs.map(() => createRef<HTMLDivElement>()),
    [segmentTabs],
  );

  useEffect(() => {
    if (segmentTabs.length === 0) {
      return;
    }

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
  }, [activeSegmentIndex, segmentRefs, segmentTabs.length]);

  const workflowFeatures: WorkflowFeature[] = useMemo(() => {
    if (workflowFeatureTranslations.length > 0) {
      return workflowFeatureTranslations.map((feature, index) => {
        const IconComponent = feature.icon ? resolveIcon(feature.icon) : undefined;

        return {
          key: feature.title ?? `workflow-feature-${index}`,
          title: feature.title ?? `Workflow Feature ${index + 1}`,
          description: feature.description ?? description ?? '',
          chips: feature.chips ?? [],
          iconEmoji: feature.emoji,
          IconComponent,
        };
      });
    }

    const fallbackSections = sections.slice(featureTabs.length + segmentTabs.length);

    if (fallbackSections.length > 0) {
      return fallbackSections.map((section, index) => ({
        key: section?.title ?? `workflow-feature-${index}`,
        title: section?.title ?? `Workflow Feature ${index + 1}`,
        description: section?.description ?? description ?? '',
        chips: section?.points ?? [],
        iconEmoji: ['🛡️', '🧭', '🚀'][index % 3],
      }));
    }

    return [
      {
        key: 'default-workflow-feature',
        title,
        description: description ?? '',
        chips: [],
        iconEmoji: '✨',
      },
    ];
  }, [description, featureTabs.length, segmentTabs.length, sections, title, workflowFeatureTranslations]);

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
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1">{title}</span>
                {subtitle ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-primary-200">
                    {subtitle}
                  </span>
                ) : null}
              </div>

              <div>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    {t('hero.headlinePrimary', {
                      defaultMessage: title,
                    })}
                  </span>
                  <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-white bg-clip-text text-transparent">
                    {t('hero.headlineAccent', {
                      defaultMessage: subtitle ?? description ?? title,
                    })}
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {description ??
                    t('hero.body', {
                      defaultMessage:
                        'Phishy modernizes email threat detection with proactive decoys, end-to-end visibility, and automated workflows.',
                    })}
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
                      <span className="text-sm font-medium text-white/80">
                        {t('hero.card.title', {defaultMessage: 'Visibility Dashboard'})}
                      </span>
                      <span className="rounded-full border border-primary-400/40 bg-primary-400/10 px-3 py-1 text-xs uppercase tracking-wide text-primary-200">
                        {t('hero.card.status', {defaultMessage: 'Live'})}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">
                      {t('hero.card.description', {
                        defaultMessage:
                          'Track phishing exposures in real time and coordinate rapid response without sacrificing productivity.',
                      })}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3 rounded-3xl border border-primary-500/30 bg-primary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-primary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {t('hero.card.metrics.first.title', {defaultMessage: 'Real-Time Alerts'})}
                        </p>
                        <p className="text-xs text-white/60">
                          {t('hero.card.metrics.first.description', {
                            defaultMessage: 'Instant signal when adversaries probe your defenses.',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-secondary-300/80" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {t('hero.card.metrics.second.title', {defaultMessage: 'Incident Insights'})}
                        </p>
                        <p className="text-xs text-white/60">
                          {t('hero.card.metrics.second.description', {
                            defaultMessage: 'Learn from every attempt to harden the next response.',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <div className="h-6 w-6 rounded-lg bg-white/60" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {t('hero.card.metrics.third.title', {defaultMessage: 'Integrations'})}
                        </p>
                        <p className="text-xs text-white/60">
                          {t('hero.card.metrics.third.description', {
                            defaultMessage: 'Sync outcomes to your SOC playbooks without friction.',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {featureTabs.length > 0 ? (
        <section className="relative overflow-hidden rounded-t-[1rem] py-20 md:py-28">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[140vw] -translate-x-1/2 rounded-[4rem] rounded-t-[6rem] bg-gradient-to-b from-[#a78bfa]/65 via-[#7c3aed]/25 to-transparent opacity-90 blur-[4px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(79,70,229,0.18),transparent_60%)] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t('featureTabs.heading', {
                  defaultMessage: 'Proactive phishing defense, tailored to your team.',
                })}
              </h2>
              <p className="mt-4 text-base text-white/70 md:text-lg">
                {t('featureTabs.subheading', {
                  defaultMessage:
                    'Explore how Phishy unifies decoys, detection, and response to neutralize phishing attempts before they escalate.',
                })}
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
                      {activeTab.section?.description && activeTab.section.description !== activeTab.description ? (
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
                        <p className="text-xs uppercase tracking-wide text-primary-100">
                          {t('featureTabs.metrics.first.title', {defaultMessage: 'Signal Strength'})}
                        </p>
                        <p className="mt-2 text-sm text-white/80">
                          {t('featureTabs.metrics.first.description', {
                            defaultMessage: 'Immediate visibility when suspicious actors engage with your decoys.',
                          })}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-5">
                        <p className="text-xs uppercase tracking-wide text-secondary-100">
                          {t('featureTabs.metrics.second.title', {defaultMessage: 'Response Speed'})}
                        </p>
                        <p className="mt-2 text-sm text-white/80">
                          {t('featureTabs.metrics.second.description', {
                            defaultMessage: 'Automated workflows escalate critical events to the right responders fast.',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {segmentTabs.length > 0 ? (
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[#040312]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,29,149,0.4),transparent_55%)] opacity-60" />

          <div className="relative z-10 container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.5fr_1.5fr]">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32">
              <span className="text-sm font-semibold tracking-[0.3em] text-white/40">
                {t('segments.eyebrow', {defaultMessage: 'BUILT FOR'})}
              </span>
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
                      <p className="text-base leading-relaxed text-white/75 md:text-lg">
                        {segment.description}
                      </p>
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
                          {t('segments.capabilitiesTitle', {defaultMessage: 'Featured Capabilities'})}
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
                          {segment.callout.chips && segment.callout.chips.length > 0 ? (
                            <div className="flex flex-wrap gap-2 text-xs text-white/60">
                              {segment.callout.chips.map((chip) => (
                                <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                                  {chip}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {workflowFeatures.length > 0 ? (
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[#050014]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),transparent_60%)] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-25" />

          <div className="relative z-10 container mx-auto max-w-6xl px-6">
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                {t('workflow.eyebrow', {defaultMessage: 'Honeypot Function'})}
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                {t('workflow.heading', {defaultMessage: 'The Future is Happening Now'})}
              </h2>
              <p className="mt-3 text-base text-white/70 md:text-lg">
                {t('workflow.description', {
                  defaultMessage:
                    'Our adaptive honeypot workflows reduce security team workload while improving response speed and precision.',
                })}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {workflowFeatures.map((feature, index) => (
                <div
                  key={feature.key}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090818]/80 p-10 text-left shadow-[0_35px_80px_-35px_rgba(76,29,149,0.6)] transition-transform duration-500 hover:-translate-y-2 ${
                    index === 1
                      ? 'bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-secondary-500/10 border-primary-400/40'
                      : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                  <div className="relative flex h-full flex-col gap-6 text-white">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-lg shadow-primary-900/30">
                      {feature.IconComponent ? (
                        <feature.IconComponent className="h-6 w-6" />
                      ) : (
                        <span>{feature.iconEmoji ?? '✨'}</span>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
                    </div>
                    {feature.chips.length > 0 ? (
                      <div className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-white/60">
                        {feature.chips.map((chip) => (
                          <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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

export default WhyPhishyPage;

