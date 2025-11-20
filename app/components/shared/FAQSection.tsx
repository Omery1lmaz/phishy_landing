'use client';

import React, { useState } from 'react';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import RequestDemoButton from './RequestDemoButton';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAConfig {
  badge?: string;
  heading?: string;
  description?: string;
  copy?: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface FAQSectionProps {
  faqs: FAQItem[];
  badge?: string;
  heading?: string;
  description?: string;
  cta?: CTAConfig;
  questionLabel?: string;
  showGridLayout?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  badge = "FAQ's",
  heading,
  description,
  cta,
  questionLabel = 'Soru',
  showGridLayout = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary-600/15 to-secondary-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-primary-600/15 to-secondary-600/15 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        {showGridLayout && cta ? (
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <GlowBadge variant="primary" className="px-4 py-1.5">
                {cta.badge || badge}
              </GlowBadge>
              <div className="space-y-4">
                {cta.heading && (
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                    {cta.heading}
                  </p>
                )}
                {cta.description && (
                  <h2 className="text-4xl font-semibold text-white lg:text-5xl">
                    {cta.description}
                  </h2>
                )}
                {cta.copy && (
                  <p className="text-lg text-white/70">
                    {cta.copy}
                  </p>
                )}
              </div>
              {cta.buttonText && cta.buttonHref && (
                <div className="pt-4">
                  <RequestDemoButton
                    href={cta.buttonHref}
                    text={cta.buttonText}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-primary-900/20"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                          {questionLabel}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 ${
                          openIndex === index ? 'rotate-45 border-primary-400 text-primary-300' : ''
                        }`}
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-base text-white/70">{faq.answer}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {heading || description ? (
              <div className="space-y-6">
                <GlowBadge variant="primary" className="px-4 py-1.5">
                  {badge}
                </GlowBadge>
                <div className="space-y-4">
                  {heading && (
                    <h2 className="text-4xl font-semibold text-white lg:text-5xl">
                      {heading}
                    </h2>
                  )}
                  {description && (
                    <p className="text-lg text-white/70">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            ) : null}

            <div className={`space-y-4 ${heading || description ? '' : 'lg:col-span-2'}`}>
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-primary-900/20"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                          {questionLabel}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 ${
                          openIndex === index ? 'rotate-45 border-primary-400 text-primary-300' : ''
                        }`}
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-base text-white/70">{faq.answer}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;

