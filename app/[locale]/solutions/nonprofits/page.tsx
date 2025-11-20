'use client';

export const runtime = 'edge';

import React from 'react';
import {Link} from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTriplet} from '../../../components/shared/ProblemsTargetsSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem, CenterCard} from '../../../components/shared/KpiSection';
import SecuritySection, {
  DataProtectionCard,
  AccessControlCard,
  ComplianceCard,
  MonitoringCard,
  SecurityManagementCard,
} from '../../../components/shared/SecuritySection';
import FAQSection from '../../../components/shared/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';
import {
  Shield,
  TrendingDown,
  TrendingUp,
  Clock,
  Target,
  BarChart3,
  FileText,
  Users,
  Zap,
  CheckCircle2,
  Lock,
  Server,
  Heart,
  DollarSign,
} from 'lucide-react';

const SolutionsNonprofitsPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Mission Alignment',
      icon: Heart,
      badge: 'Coverage',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Affordability',
      icon: DollarSign,
      badge: 'Pricing',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Volunteer Protection',
      icon: Users,
      badge: 'Coverage',
      color: 'text-white/70',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
  ];

  const heroCenterCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Incidents',
    description: 'Average incident cost',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 50,
      unit: 'K',
      direction: 'up',
    },
  };

  const problemTriplets: ProblemTriplet[] = [
    {
      problem: 'Enterprise solutions too expensive for nonprofits',
      impact: 'Budget constraints prevent security awareness. Volunteers and staff unprotected.',
      result: 'Special pricing for nonprofits. Ethical licensing. Affordable security awareness.',
    },
    {
      problem: 'Solutions don\'t align with nonprofit mission and values',
      impact: 'Tools feel corporate. Mission disconnect. Low adoption.',
      result: 'Mission-focused security. Values-aligned solutions. High adoption.',
    },
    {
      problem: 'Volunteer and staff security awareness gaps',
      impact: 'Volunteers vulnerable. Staff unprotected. Incidents occur.',
      result: 'Volunteer and staff training. Security awareness improved. Incidents prevented.',
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      key: 'plan',
        icon: Target,
      label: 'Plan',
      description: 'Configure nonprofit-focused program. Special pricing applied. Mission-aligned content selected.',
      video: 'https://www.pexels.com/download/video/5377697/',
    },
    {
      key: 'run',
      icon: Zap,
      label: 'Run',
      description: 'Deploy security awareness campaigns. Include volunteers and staff. Track participation.',
      video: 'https://www.pexels.com/download/video/4709300/',
    },
    {
      key: 'train',
        icon: Users,
      label: 'Train',
      description: 'Deliver mission-focused training. Volunteer-friendly content. Staff education.',
      video: 'https://www.pexels.com/download/video/5495781/',
    },
    {
      key: 'protect',
      icon: Shield,
      label: 'Protect',
      description: 'Protect volunteers and staff. Reduce incidents. Maintain mission focus.',
      video: 'https://www.pexels.com/download/video/5377700/',
    },
    {
      key: 'report',
      icon: BarChart3,
      label: 'Report',
      description: 'Nonprofit-friendly reporting. Impact metrics. Mission alignment demonstrated.',
      video: 'https://www.pexels.com/download/video/5495898/',
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    {time: 'Week 1', title: 'Program setup', description: 'Configure nonprofit-focused program. Apply special pricing. Select mission-aligned content.'},
    {time: 'Week 1-2', title: 'Volunteer & staff onboarding', description: 'Onboard volunteers and staff. Deploy initial training. Track participation.'},
    {time: 'Week 2-3', title: 'Security awareness campaigns', description: 'Deploy security awareness campaigns. Include all stakeholders. Measure engagement.'},
    {time: 'Week 3-4', title: 'Training deployment', description: 'Deliver mission-focused training. Volunteer-friendly content. Staff education.'},
    {time: 'Month-end', title: 'Impact reporting', description: 'Review impact metrics. Demonstrate mission alignment. Show value to stakeholders.'},
  ];

  const kpis: KpiItem[] = [
    {label: 'Affordability', value: '↑', direction: 'up', tooltip: 'Special pricing makes security awareness affordable'},
    {label: 'Mission Alignment', value: '↑', direction: 'up', tooltip: 'Solutions align with nonprofit mission and values'},
    {label: 'Volunteer Protection', value: '↑', direction: 'up', tooltip: 'Volunteers protected with security awareness'},
    {label: 'Staff Security', value: '↑', direction: 'up', tooltip: 'Staff security awareness improved'},
    {label: 'Incident Reduction', value: '↓', direction: 'down', tooltip: 'Security incidents reduced 50-70%'},
  ];

  const centerCard: CenterCard = {
    badge: 'ROI Model',
    title: 'ROI Formula',
    description: 'Prevented incidents × Average incident cost + Protected mission = ROI estimate',
    content: 'Example: 5 prevented incidents × $50K average cost = $250K annual savings. Protected mission value (priceless). Program cost typically $20K-50K annually with special pricing. Industry benchmark: Nonprofits with security awareness see 50-70% reduction in incidents.',
  };

  const dataProtection: DataProtectionCard = {
    title: 'Data Protection',
    subtitle: 'Enterprise-grade encryption',
    icon: Shield,
    chartData: [
      { day: 'Mon', encryption: 95, access: 98, audit: 90 },
      { day: 'Tue', encryption: 97, access: 99, audit: 92 },
      { day: 'Wed', encryption: 96, access: 97, audit: 91 },
      { day: 'Thu', encryption: 98, access: 99, audit: 93 },
      { day: 'Fri', encryption: 99, access: 100, audit: 95 },
      { day: 'Sat', encryption: 97, access: 98, audit: 92 },
      { day: 'Sun', encryption: 99, access: 100, audit: 94 },
    ],
    chartConfig: {
      encryption: {
        label: 'Encryption',
        color: 'rgba(147, 51, 234, 0.8)',
      },
      access: {
        label: 'Access Control',
        color: 'rgba(168, 85, 247, 0.8)',
      },
      audit: {
        label: 'Audit Logs',
        color: 'rgba(147, 51, 234, 0.6)',
      },
    },
    features: [
      {
        icon: FileText,
        title: 'End-to-End Encryption',
        subtitle: 'AES-256',
        color: 'primary',
      },
      {
        icon: Server,
        title: 'On-Premise Deployment',
        subtitle: 'Available',
        color: 'purple',
      },
    ],
  };

  const accessControl: AccessControlCard = {
    title: 'Access Control',
    subtitle: 'Enterprise authentication',
    icon: Lock,
    chartData: [
      { day: 'Mon', mfa: 95, sso: 92, rbac: 98 },
      { day: 'Tue', mfa: 96, sso: 93, rbac: 99 },
      { day: 'Wed', mfa: 95, sso: 92, rbac: 98 },
      { day: 'Thu', mfa: 97, sso: 94, rbac: 99 },
      { day: 'Fri', mfa: 98, sso: 95, rbac: 100 },
      { day: 'Sat', mfa: 96, sso: 93, rbac: 99 },
      { day: 'Sun', mfa: 98, sso: 95, rbac: 100 },
    ],
    chartConfig: {
      mfa: {
        label: 'MFA',
        color: 'rgba(147, 51, 234, 0.8)',
      },
      sso: {
        label: 'SSO',
        color: 'rgba(168, 85, 247, 0.8)',
      },
      rbac: {
        label: 'RBAC',
        color: 'rgba(147, 51, 234, 0.6)',
      },
    },
    stats: [
      {
        label: 'MFA Enabled',
        value: '98%',
        color: 'primary',
      },
      {
        label: 'SSO Active',
        value: '95%',
        color: 'purple',
      },
      {
        label: 'RBAC',
        value: '100%',
        color: 'primary',
      },
    ],
    yAxisDomain: [90, 100],
  };

  const compliance: ComplianceCard = {
    title: 'Compliance Status',
    subtitle: 'Enterprise standards',
    icon: CheckCircle2,
    items: [
      {
        icon: FileText,
        title: 'SOC2',
        subtitle: 'Type II',
        percentage: 100,
        color: 'primary',
      },
      {
        icon: Shield,
        title: 'GDPR',
        subtitle: 'CCPA',
        percentage: 100,
        color: 'purple',
      },
      {
        icon: CheckCircle2,
        title: 'ISO 27001',
        subtitle: 'Security',
        percentage: 100,
        color: 'primary',
      },
      {
        icon: Lock,
        title: 'SOC2',
        subtitle: 'Coming',
        percentage: 95,
        color: 'purple',
      },
    ],
  };

  const monitoring: MonitoringCard = {
    title: 'Real-time Monitoring',
    subtitle: '24/7 security oversight',
    icon: BarChart3,
    uptimePercentage: '99.9%',
    uptimeLabel: 'Uptime SLA',
    statusItems: [
      {
        icon: Shield,
        title: 'Encryption',
        subtitle: 'Active',
        color: 'primary',
      },
      {
        icon: Lock,
        title: 'MFA',
        subtitle: 'Enabled',
        color: 'purple',
      },
      {
        icon: FileText,
        title: 'Audit Logs',
        subtitle: '24/7',
        color: 'primary',
      },
    ],
  };

  const securityManagement: SecurityManagementCard = {
    title: 'Security Management',
    subtitle: 'Enterprise-grade platform',
    icon: Server,
    description: 'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',
    stats: [
      {
        value: '99.9%',
        label: 'Uptime',
        color: 'primary',
      },
      {
        value: '24/7',
        label: 'Monitoring',
        color: 'purple',
      },
      {
        value: '100%',
        label: 'Secure',
        color: 'primary',
      },
      {
        value: 'Zero',
        label: 'Breaches',
        color: 'purple',
      },
    ],
  };

  const faqs = [
    {
      question: 'What special pricing is available for nonprofits?',
      answer:
        'Special nonprofit pricing available. Ethical licensing options. Discounted rates for mission-driven organizations. Contact us for details.',
    },
    {
      question: 'How does mission-focused security work?',
      answer:
        'Security awareness content aligned with nonprofit values. Mission-focused messaging. Values-driven approach. Respectful of nonprofit culture.',
    },
    {
      question: 'Can we include volunteers in training?',
      answer:
        'Yes. Volunteer-friendly training available. Easy onboarding. Accessible content. Track volunteer participation.',
    },
    {
      question: 'What training content is available for nonprofits?',
      answer:
        'Mission-aligned training content. Nonprofit-specific scenarios. Volunteer-friendly modules. Customizable for your organization.',
    },
    {
      question: 'How do we protect volunteers and staff?',
      answer:
        'Security awareness training for all stakeholders. Phishing simulations. Incident response. Protection for everyone.',
    },
    {
      question: 'What reporting is available?',
      answer:
        'Nonprofit-friendly reporting. Impact metrics. Mission alignment demonstrated. Stakeholder reports available.',
    },
    {
      question: 'Can we customize for our nonprofit?',
      answer:
        'Yes. All content is customizable. Add your mission, values, and branding. Nonprofit-specific scenarios available.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Nonprofits"
        title="Mission-Focused Security Awareness for Nonprofits"
        description="Special pricing for nonprofits. Mission-aligned security awareness. Protect volunteers and staff. Stay true to your mission while staying secure."
        centerCard={heroCenterCard}
        metrics={heroMetrics}
      />

      {/* Problem Section */}
      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing nonprofit challenges with mission-focused, affordable security awareness solutions"
        triplets={problemTriplets}
      />

      {/* Workflow Section */}
      <WorkflowSection
        badge="How It Works"
        title="5-step operational flow for nonprofit organizations"
        steps={workflowSteps}
      />

      {/* Timeline Section */}
      <TimelineSection
        badge="Timeline"
        heading="Deployment & Impact Timeline"
        subheading="See how quickly you can achieve results"
        events={timelineEvents}
      />

      {/* KPI & ROI Section */}
      <KpiSection
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your nonprofit security with quantifiable results that protect your mission and stakeholders."
        kpis={kpis}
        centerCard={centerCard}
      />

      {/* Security & Privacy Section */}
      <SecuritySection
        badge="Security & Privacy"
        heading="Enterprise-Grade Security"
        description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models."
        dataProtection={dataProtection}
        accessControl={accessControl}
        compliance={compliance}
        monitoring={monitoring}
        securityManagement={securityManagement}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how mission-focused security awareness protects your nonprofit.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      {/* Final CTA Section */}
      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsNonprofitsPage;
