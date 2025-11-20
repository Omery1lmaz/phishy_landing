import React from 'react';
import {useTranslations} from 'next-intl';

const HeroSection: React.FC = () => {
  const t = useTranslations('Pages.PhishyTrainingPage');

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-[36px] border border-white/10 bg-[#060014]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0120] via-[#14004c] to-[#4c38ff]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.35),rgba(27,13,82,0.4),transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_48%),linear-gradient(245deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:px-10 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
          {t('Hero.badge')}
        </span>

        <div className="mt-8 space-y-6">
          <h1 className="text-4xl font-semibold leading-snug tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.15]">
            {t('Hero.title')}
            <span className="block bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent">
              {t('Hero.subtitle')}
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {t('Hero.description')}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-[#12003c] shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-800/60">
            {t('Hero.primaryCta')}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10">
            {t('Hero.secondaryCta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

