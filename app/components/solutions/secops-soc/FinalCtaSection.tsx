'use client';

import React, {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {ArrowRight} from 'lucide-react';
import {GlowBadge} from '@/app/components/ui/glow-badge';

interface FAQItem {
  question: string;
  answer: string;
}

const FinalCtaSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsSecOps');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Playbook\'ları nasıl özelleştirebiliriz?',
      answer:
        'Playbook\'ları tamamen özelleştirebilir, kendi süreçlerinize göre yapılandırabilirsiniz.',
    },
    {
      question: 'Hangi entegrasyonlar mevcut?',
      answer:
        'SIEM, ticketing sistemleri ve e-posta güvenlik çözümleri ile entegrasyon mevcuttur.',
    },
    {
      question: 'Otomasyon seviyesi ne kadar?',
      answer:
        'Otomasyon seviyesini ihtiyacınıza göre ayarlayabilir, manuel onay noktaları ekleyebilirsiniz.',
    },
    {
      question: 'Yanlış pozitifleri nasıl azaltır?',
      answer:
        'IOC çıkarımı, zenginleştirme ve playbook\'lar ile yanlış pozitifleri otomatik olarak filtreler.',
    },
    {
      question: 'Eğitim ve destek nasıl?',
      answer:
        'Kapsamlı eğitim ve 7/24 destek hizmeti sunuyoruz. Detaylar için iletişime geçin.',
    },
  ] as const;
  

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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              FAQ&apos;s
            </GlowBadge>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                {t('cta.heading', {defaultMessage: 'Hazır mısınız?'})}
              </p>
              <h2 className="text-4xl font-semibold text-white lg:text-5xl">
                {t('cta.description', {
                  defaultMessage: 'SecOps panelinizi canlı görmek için bir demo planlayalım.',
                })}
              </h2>
              <p className="text-lg text-white/70">
                {t('cta.copy', {
                  defaultMessage:
                    'Aşağıdaki sık sorulan sorularla sürecin nasıl ilerlediğini öğrenin. Ek detaylar için bize ulaşın.',
                })}
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/request-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
              >
                <span>{t('cta.primary', {defaultMessage: 'Demo iste'})}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
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
                      <p className="text-sm uppercase tracking-[0.25em] text-white/40">Soru</p>
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
      </div>
    </section>
  );
};

export default FinalCtaSection;

