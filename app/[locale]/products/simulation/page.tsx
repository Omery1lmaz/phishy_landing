'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import {Link} from '@/i18n/routing';

type SimulationHeroContent = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  note?: string;
  checklist?: string[];
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

type SimulationStepField = {
  label: string;
  value: string;
};

type SimulationStepBadge = {
  badge: string;
  title: string;
};

type SimulationCreateStep = SimulationStepBadge & {
  description?: string;
  promptLabel?: string;
  promptPlaceholder?: string;
  fields?: SimulationStepField[];
  tags?: string[];
  helper?: string;
  cta: string;
};

type SimulationConfigureStep = SimulationStepBadge & {
  description?: string;
  route?: {
    method: string;
    path: string;
  };
  requestSections?: {
    label: string;
    items: string[];
  }[];
  policies?: string[];
  helper?: string;
  cta: string;
};

type SimulationStepsContent = {
  create?: SimulationCreateStep;
  configure?: SimulationConfigureStep;
};

const SimulationProductPage: React.FC = () => {
  const t = useTranslations('Pages.ProductsSimulation');

  const hero = (t.raw('hero') as SimulationHeroContent | undefined) ?? {
    title: t('title'),
    description: t('description', {defaultMessage: ''}) || undefined,
  };
  const steps = (t.raw('steps') as SimulationStepsContent | undefined) ?? {};
  const createStep = steps.create;
  const configureStep = steps.configure;

  return (
    <main className="min-h-screen bg-[#050017] text-white">
      <Header />

      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#050017]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0034] via-[#050017] to-[#050017]" />
          <div className="absolute -left-52 top-10 h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute right-[-14rem] top-24 h-[36rem] w-[36rem] rounded-full bg-secondary-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,86,242,0.35),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                {createStep?.badge ? (
                  <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1">
                    {createStep.badge}
                  </span>
                ) : null}
                {configureStep?.badge ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
                    {configureStep.badge}
                  </span>
                ) : null}
                {hero.eyebrow ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-primary-200">
                    {hero.eyebrow}
                  </span>
                ) : null}
              </div>

              <div>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{hero.title}</span>
                  {hero.highlight ? (
                    <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-100 to-white bg-clip-text text-transparent">
                      {hero.highlight}
                    </span>
                  ) : null}
                </h1>
                {hero.description ? (
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    {hero.description}
                  </p>
                ) : null}

                {hero.checklist && hero.checklist.length > 0 ? (
                  <ul className="mt-8 space-y-3 text-sm text-white/70">
                    {hero.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {(hero.cta || hero.secondaryCta || hero.note) ? (
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    {hero.cta ? (
                      <Link
                        href={hero.cta.href}
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
                      >
                        <span>{hero.cta.label}</span>
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
                    ) : null}
                    {hero.secondaryCta ? (
                      <Link
                        href={hero.secondaryCta.href}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors duration-300 hover:border-white/40 hover:text-white"
                      >
                        {hero.secondaryCta.label}
                      </Link>
                    ) : null}
                    {hero.note ? (
                      <span className="text-sm text-white/60">{hero.note}</span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {createStep ? (
                <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-primary-800/40 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent" />
                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                          {createStep.badge}
                        </span>
                        <h3 className="mt-4 text-2xl font-semibold text-white">{createStep.title}</h3>
                        {createStep.description ? (
                          <p className="mt-2 text-sm text-white/70">{createStep.description}</p>
                        ) : null}
                      </div>
                    </div>

                    {createStep.promptLabel ? (
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                          {createStep.promptLabel}
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/60">
                          {createStep.promptPlaceholder}
                        </div>
                      </div>
                    ) : null}

                    {createStep.fields && createStep.fields.length > 0 ? (
                      <div className="space-y-3">
                        {createStep.fields.map((field) => (
                          <div
                            key={`${field.label}-${field.value}`}
                            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm"
                          >
                            <p className="text-xs uppercase tracking-[0.22em] text-white/45">{field.label}</p>
                            <p className="mt-2 text-white/75">{field.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {createStep.tags && createStep.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {createStep.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary-400/50 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-700/40 transition-transform duration-300 hover:scale-[1.02]">
                        {createStep.cta}
                      </button>
                      {createStep.helper ? (
                        <span className="text-xs text-white/50">{createStep.helper}</span>
                      ) : null}
                    </div>
                  </div>
                </article>
              ) : null}

              {configureStep ? (
                <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-secondary-900/40 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/15 via-transparent to-transparent" />
                  <div className="relative space-y-6">
                    <div>
                      <span className="rounded-full border border-white/15 bg-secondary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-100">
                        {configureStep.badge}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{configureStep.title}</h3>
                      {configureStep.description ? (
                        <p className="mt-2 text-sm text-white/70">{configureStep.description}</p>
                      ) : null}
                    </div>

                    {configureStep.route ? (
                      <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                          <span className="rounded-full bg-secondary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-100">
                            {configureStep.route.method}
                          </span>
                          <span className="font-mono text-sm text-white/70">{configureStep.route.path}</span>
                        </div>
                      </div>
                    ) : null}

                    {configureStep.requestSections && configureStep.requestSections.length > 0 ? (
                      <div className="grid gap-4 md:grid-cols-2">
                        {configureStep.requestSections.map((section) => (
                          <div
                            key={`${section.label}-${section.items.join('-')}`}
                            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                              {section.label}
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-white/70">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {configureStep.policies && configureStep.policies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {configureStep.policies.map((policy) => (
                          <span
                            key={policy}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                          >
                            {policy}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button className="inline-flex items-center justify-center rounded-full border border-secondary-500/40 bg-secondary-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-secondary-50 transition-colors duration-300 hover:border-secondary-300/70 hover:text-white">
                        {configureStep.cta}
                      </button>
                      {configureStep.helper ? (
                        <span className="text-xs text-white/50">{configureStep.helper}</span>
                      ) : null}
                    </div>
                  </div>
                </article>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SimulationProductPage;

