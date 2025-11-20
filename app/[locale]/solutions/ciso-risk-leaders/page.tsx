'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Target, Zap, Shield, Users, BarChart3, FileText, GraduationCap, AlertCircle, TrendingDown, Clock, CheckCircle, TrendingUp} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTargetPair} from '../../../components/shared/ProblemsTargetsSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem} from '../../../components/shared/KpiSection';
import FAQSection, {FAQItem} from '../../../components/shared/FAQSection';
import FinalCtaSection from '@/app/components/solutions/mssp/FinalCtaSection';

const SolutionsCISOPage: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');

  const cisoWorkflowSteps: WorkflowStep[] = [
    {
      key: 'plan',
      icon: Target,
      label: t('howItWorks.steps.plan.label', {defaultMessage: 'Planla'}),
      description: t('howItWorks.steps.plan.description', {defaultMessage: 'Segment seç, hazır şablonları uygula.'}),
      video: 'https://www.pexels.com/download/video/5377697/',
    },
    {
      key: 'run',
      icon: Zap,
      label: t('howItWorks.steps.run.label', {defaultMessage: 'Çalıştır'}),
      description: t('howItWorks.steps.run.description', {defaultMessage: 'Kampanya ve bildirim akışları başlar.'}),
      video: 'https://www.pexels.com/download/video/4709300/',
    },
    {
      key: 'triage',
      icon: Shield,
      label: t('howItWorks.steps.triage.label', {defaultMessage: 'Triage'}),
      description: t('howItWorks.steps.triage.description', {defaultMessage: 'Raporlanan mailler otomatik zenginleştirilir, karar ver.'}),
      video: 'https://www.pexels.com/download/video/5495781/',
    },
    {
      key: 'train',
      icon: Users,
      label: t('howItWorks.steps.train.label', {defaultMessage: 'Eğit'}),
      description: t('howItWorks.steps.train.description', {defaultMessage: 'Tıklayanlara mikro içerik/quiz atanır.'}),
      video: 'https://www.pexels.com/download/video/5377700/',
    },
    {
      key: 'report',
      icon: BarChart3,
      label: t('howItWorks.steps.report.label', {defaultMessage: 'Raporla'}),
      description: t('howItWorks.steps.report.description', {defaultMessage: 'Yönetim paneli ve dışa aktarım (PDF/CSV).'}),
      video: 'https://www.pexels.com/download/video/5495898/',
    },
  ];

  const heroMetrics: HeroMetric[] = [
    {
      label: t('hero.metrics.clickRate.label', {defaultMessage: 'Click rate'}),
      icon: TrendingDown,
      badge: t('hero.metrics.clickRate.badge', {defaultMessage: 'Risk ↓'}),
      color: 'text-primary-300',
      startValue: 55,
      endValue: 43,
      startDelta: 0,
      endDelta: -12,
      unit: '%',
      direction: 'down',
    },
    {
      label: t('hero.metrics.reportRate.label', {defaultMessage: 'Report rate'}),
      icon: TrendingUp,
      badge: t('hero.metrics.reportRate.badge', {defaultMessage: 'Awareness'}),
      color: 'text-secondary-300',
      startValue: 53,
      endValue: 68,
      startDelta: 0,
      endDelta: 15,
      unit: '%',
      direction: 'up',
    },
    {
      label: t('hero.metrics.triageTime.label', {defaultMessage: 'Time-to-Triage'}),
      icon: Clock,
      badge: t('hero.metrics.triageTime.badge', {defaultMessage: 'Response'}),
      color: 'text-white',
      startValue: 30,
      endValue: 8,
      startDelta: 0,
      endDelta: -22,
      unit: 'm',
      direction: 'down',
    },
  ];

  const centerCard: CenterCardData = {
    badge: t('hero.centerCard.badge', {defaultMessage: 'Live'}),
    title: t('hero.centerCard.title', {defaultMessage: 'CISO Dashboard'}),
    description: t('hero.centerCard.description', {defaultMessage: 'Human-driven cybersecurity risks visible and measurable.'}),
    valueLabel: t('hero.centerCard.valueLabel', {defaultMessage: 'Click Rate'}),
    value: {
      startValue: 55,
      endValue: 43,
      unit: '%',
      direction: 'down',
    },
  };

  const cisoTimelineEvents: TimelineEvent[] = [
    {
      time: t('timeline.events.1.time', {defaultMessage: 'Hafta 1'}),
      title: t('timeline.events.1.title', {defaultMessage: 'Program KPI ve eşikler'}),
      description: t('timeline.events.1.description', {defaultMessage: 'Hedef metrikleri belirle ve eşik değerlerini ayarla.'}),
    },
    {
      time: t('timeline.events.2.time', {defaultMessage: 'Hafta 2–3'}),
      title: t('timeline.events.2.title', {defaultMessage: 'Segment bazlı simülasyon'}),
      description: t('timeline.events.2.description', {defaultMessage: 'Farklı kullanıcı gruplarına özel kampanyalar başlat.'}),
    },
    {
      time: t('timeline.events.3.time', {defaultMessage: 'Hafta 3'}),
      title: t('timeline.events.3.title', {defaultMessage: 'Triage & playbook'}),
      description: t('timeline.events.3.description', {defaultMessage: 'Raporlanan olayları otomatik triage et ve playbook uygula.'}),
      highlight: true,
    },
    {
      time: t('timeline.events.4.time', {defaultMessage: 'Hafta 4'}),
      title: t('timeline.events.4.title', {defaultMessage: 'Mikro eğitim + quiz'}),
      description: t('timeline.events.4.description', {defaultMessage: 'Tıklayan kullanıcılara anında eğitim içeriği gönder.'}),
    },
    {
      time: t('timeline.events.5.time', {defaultMessage: 'Ay sonu'}),
      title: t('timeline.events.5.title', {defaultMessage: 'Yönetim özeti & kanıt paketi'}),
      description: t('timeline.events.5.description', {defaultMessage: 'Raporları oluştur ve uyum kanıtlarını hazırla.'}),
    },
  ];

  const problemTargetPairs: ProblemTargetPair[] = [
    {
      problem: {
        title: t('problems.1.title', {defaultMessage: 'Fragmented management summaries'}),
        description: t('problems.1.description', {defaultMessage: 'Decision metrics are delayed.'}),
        icon: FileText,
        color: 'text-primary-300',
      },
      target: {
        title: t('targets.1.title', {defaultMessage: 'Reduce click rate, increase reporting'}),
        description: t('targets.1.description', {defaultMessage: 'Reduce click rate from X% → Y%, increase reporting rate.'}),
        icon: TrendingDown,
        color: 'text-secondary-300',
      },
    },
    {
      problem: {
        title: t('problems.2.title', {defaultMessage: 'Training impact not measured'}),
        description: t('problems.2.description', {defaultMessage: 'Training is completed but its impact on behavior is not measured.'}),
        icon: GraduationCap,
        color: 'text-primary-300',
      },
      target: {
        title: t('targets.2.title', {defaultMessage: 'Reduce triage time to minutes'}),
        description: t('targets.2.description', {defaultMessage: 'Ensure consistency with automation.'}),
        icon: Clock,
        color: 'text-secondary-300',
      },
    },
    {
      problem: {
        title: t('problems.3.title', {defaultMessage: 'Scattered incident processes'}),
        description: t('problems.3.description', {defaultMessage: 'Triage and closure time is long.'}),
        icon: AlertCircle,
        color: 'text-primary-300',
      },
      target: {
        title: t('targets.3.title', {defaultMessage: 'Compliance evidence at one click'}),
        description: t('targets.3.description', {defaultMessage: 'Link to quarterly goals with PDF/CSV.'}),
        icon: CheckCircle,
        color: 'text-secondary-300',
      },
    },
  ];

  const cisoKpis: KpiItem[] = [
    {
      label: t('kpi.labels.clickRate', {defaultMessage: 'Click rate'}),
      value: '↓',
      direction: 'down',
      tooltip: t('kpi.tooltips.clickRate', {defaultMessage: 'Tıklama oranı azalması'}),
    },
    {
      label: t('kpi.labels.reportRate', {defaultMessage: 'Report rate'}),
      value: '↑',
      direction: 'up',
      tooltip: t('kpi.tooltips.reportRate', {defaultMessage: 'Raporlama oranı artışı'}),
    },
    {
      label: t('kpi.labels.triageTime', {defaultMessage: 'Time-to-Triage'}),
      value: '↓',
      direction: 'down',
      tooltip: t('kpi.tooltips.triageTime', {defaultMessage: 'Triage süresi azalması'}),
    },
    {
      label: t('kpi.labels.completionRate', {defaultMessage: 'Tamamlama oranı'}),
      value: '↑',
      direction: 'up',
      tooltip: t('kpi.tooltips.completionRate', {defaultMessage: 'Eğitim tamamlama oranı'}),
    },
    {
      label: t('kpi.labels.improvementScore', {defaultMessage: 'Gelişim skoru'}),
      value: '↑',
      direction: 'up',
      tooltip: t('kpi.tooltips.improvementScore', {defaultMessage: 'Kullanıcı gelişim skoru'}),
    },
  ];

  const cisoFaqs: FAQItem[] = [
    {
      question: t('faq.items.1.question', {defaultMessage: 'Kurulum süresi ve veri güvenliği nasıl?'}),
      answer: t('faq.items.1.answer', {
        defaultMessage:
          'Kurulum süresi organizasyonunuzun büyüklüğüne göre değişir. Verileriniz tamamen güvende, on-premise seçeneği mevcuttur.',
      }),
    },
    {
      question: t('faq.items.2.question', {defaultMessage: 'Hangi entegrasyonlar mevcut (M365/Google/Exchange)?'}),
      answer: t('faq.items.2.answer', {
        defaultMessage: 'M365, Google Workspace ve Exchange entegrasyonları mevcuttur. Ayrıntılar için demo talep edin.',
      }),
    },
    {
      question: t('faq.items.3.question', {defaultMessage: 'Uyum kanıt paketinde neler yer alır?'}),
      answer: t('faq.items.3.answer', {
        defaultMessage: 'ISO/NIST/KVKK haritalama, kanıt paketleri (PDF/CSV) ve denetim izi dahildir.',
      }),
    },
    {
      question: t('faq.items.4.question', {defaultMessage: 'Eğitim içeriğini özelleştirebilir miyiz?'}),
      answer: t('faq.items.4.answer', {
        defaultMessage: 'Evet, eğitim içeriklerini tamamen özelleştirebilir ve kendi markanızla sunabilirsiniz.',
      }),
    },
    {
      question: t('faq.items.5.question', {defaultMessage: 'Lisanslama ve destek modeli nedir?'}),
      answer: t('faq.items.5.answer', {
        defaultMessage: 'Esnek lisanslama seçenekleri ve 7/24 destek hizmeti sunuyoruz. Detaylar için iletişime geçin.',
      }),
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <HeroSection
        badge={t('hero.badge', {defaultMessage: 'By Role / CISO & Risk Leaders'})}
        title={t('hero.headline', {defaultMessage: 'Make human-driven cybersecurity risks visible and measurable.'})}
        description={t('hero.description', {defaultMessage: 'Phishy collects and measures user behavior and incident processes in a single panel; connects metrics to your quarterly goals.'})}
        centerCard={centerCard}
        metrics={heroMetrics}
        arrowImage="/arrow.png"
        angles={[-90, 45, 180]}
      />
      <ProblemsTargetsSection
        badge={t('problems.badge', {defaultMessage: 'Problems → Impact → Target Results'})}
        heading={t('problems.heading', {defaultMessage: 'Problemler ve Hedef Sonuçlar'})}
        description={t('problems.subheading', {defaultMessage: 'Her risk net bir hedefle eşleşir; yolculuk tek akışta görünür.'})}
        pairs={problemTargetPairs}
      />
      <WorkflowSection
        steps={cisoWorkflowSteps}
        badge={t('howItWorks.badge', {defaultMessage: 'Workflow'})}
        title={t('howItWorks.heading', {defaultMessage: 'Nasıl Çalışır'})}
        description={t('howItWorks.subheading', {defaultMessage: '5 adımda program yönetimi'})}
      />
      <TimelineSection
        events={cisoTimelineEvents}
        badge={t('timeline.badge', {defaultMessage: 'Timeline'})}
        heading={t('timeline.heading', {defaultMessage: 'Örnek Senaryo Timeline'})}
        subheading={t('timeline.subheading', {defaultMessage: 'Uygulama zaman çizelgesi kurulumdan ölçeğe'})}
      />
      <KpiSection
        kpis={cisoKpis}
        centerCard={{
          badge: t('kpi.centerCard.badge', {defaultMessage: 'ROI Model'}),
          title: t('kpi.centerCard.title', {defaultMessage: 'ROI Formülü'}),
          description: t('kpi.centerCard.description', {defaultMessage: 'Azalan olay × Ortalama olay maliyeti = tahmini tasarruf'}),
          content: t('kpi.centerCard.content', {defaultMessage: 'Rapor, çeyrek kapanışında otomatik olarak yönetim ekibine e-posta edilebilir.'}),
        }}
        badge={t('kpi.badge', {defaultMessage: 'Program KPI Paneli'})}
        heading={t('kpi.heading', {defaultMessage: 'KPI & ROI'})}
        description={t('kpi.description', {defaultMessage: 'İnsan kaynaklı riskleri orbit dashboard\'da izleyin; KPI kartları çeyrek hedeflerinizle hizalanır.'})}
        directionLabels={{
          up: t('kpi.directionLabels.up', {defaultMessage: 'Artış'}),
          down: t('kpi.directionLabels.down', {defaultMessage: 'Azalış'}),
        }}
      />
      <FAQSection
        faqs={cisoFaqs}
        badge={t('faq.badge', {defaultMessage: "FAQ's"})}
        cta={{
          badge: t('faq.badge', {defaultMessage: "FAQ's"}),
          heading: t('cta.heading', {defaultMessage: 'Hazır mısınız?'}),
          description: t('cta.description', {
            defaultMessage: 'CISO panelinizi canlı görmek için bir demo planlayalım.',
          }),
          copy: t('cta.copy', {
            defaultMessage:
              'Aşağıdaki sık sorulan sorularla sürecin nasıl ilerlediğini öğrenin. Ek detaylar için bize ulaşın.',
          }),
          buttonText: t('cta.primary', {defaultMessage: 'Demo iste'}),
          buttonHref: '/request-demo',
        }}
        questionLabel={t('faq.questionLabel', {defaultMessage: 'Soru'})}
        showGridLayout={true}
      />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default SolutionsCISOPage;


