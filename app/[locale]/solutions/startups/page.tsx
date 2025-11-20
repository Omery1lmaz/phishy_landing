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
  Rocket,
  Cloud,
} from 'lucide-react';

const SolutionsStartupsPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Setup Time',
      icon: Rocket,
      badge: 'Reduction',
      color: 'text-primary-300',
      startValue: 100,
      endValue: 5,
      startDelta: 0,
      endDelta: -95,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Cloud SaaS',
        icon: Cloud,
      badge: 'Deployment',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Affordability',
      icon: Shield,
      badge: 'Pricing',
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
    title: 'Setup Time',
    description: 'Days to launch',
    valueLabel: 'Time Saved',
    value: {
      startValue: 90,
      endValue: 7,
      unit: ' days',
      direction: 'down',
    },
  };

  const problemTriplets: ProblemTriplet[] = [
    {
      problem: 'Complex enterprise tools take months to implement',
      impact: 'Program launch delayed. Resources wasted. ROI delayed.',
      result: 'Quick setup in days. Program live in 1-2 weeks. Time to value accelerated.',
    },
    {
      problem: 'Enterprise pricing too expensive for startups',
      impact: 'Budget constraints prevent security awareness. Employees unprotected.',
      result: 'Affordable pricing for startups. Cloud SaaS. Zero setup. Start using instantly.',
    },
    {
      problem: 'No time for complex security programs while growing',
      impact: 'Security awareness skipped. Employees vulnerable. Incidents occur.',
      result: 'Automated security awareness. Minimal time required. Stay informed. Minimize risk.',
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      key: 'plan',
      icon: Target,
      label: 'Plan',
      description: 'Quick onboarding. Select ready templates. Configure basic settings. Minimal setup required.',
      video: 'https://www.pexels.com/download/video/5377697/',
    },
    {
      key: 'run',
      icon: Zap,
      label: 'Run',
      description: 'Deploy ready templates. Launch campaigns quickly. Automated workflows active.',
      video: 'https://www.pexels.com/download/video/4709300/',
    },
    {
      key: 'train',
      icon: Users,
      label: 'Train',
      description: 'Automated training assignment. Minimal time required. Employees protected.',
      video: 'https://www.pexels.com/download/video/5495781/',
    },
    {
      key: 'monitor',
      icon: Shield,
      label: 'Monitor',
      description: 'Stay informed about current threats. Track metrics. Monitor risk.',
      video: 'https://www.pexels.com/download/video/5377700/',
    },
    {
      key: 'scale',
      icon: Rocket,
      label: 'Scale',
      description: 'Scale as you grow. Add users easily. Maintain security awareness.',
      video: 'https://www.pexels.com/download/video/5495898/',
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    {time: 'Day 1', title: 'Quick setup', description: 'Sign up. Configure basic settings. Select ready templates.'},
    {time: 'Day 1-2', title: 'First campaign', description: 'Launch first campaign. Deploy ready templates. Track results.'},
    {time: 'Week 1', title: 'Training deployment', description: 'Automated training assigned. Employees protected. Minimal time required.'},
    {time: 'Week 2', title: 'Program active', description: 'Security awareness program active. Risk minimized. Stay informed.'},
    {time: 'Month-end', title: 'Scale & optimize', description: 'Review metrics. Optimize campaigns. Scale as you grow.'},
  ];

  const kpis: KpiItem[] = [
    {label: 'Setup Time', value: '↓', direction: 'down', tooltip: 'Setup time reduced from months to days'},
    {label: 'Time to Value', value: '↓', direction: 'down', tooltip: 'Time to value reduced to 1-2 weeks'},
    {label: 'Affordability', value: '↑', direction: 'up', tooltip: 'Affordable pricing for startups'},
    {label: 'Employee Protection', value: '↑', direction: 'up', tooltip: 'Employees protected with security awareness'},
    {label: 'Risk Reduction', value: '↓', direction: 'down', tooltip: 'Security risk reduced 50-70%'},
  ];

  const centerCard: CenterCard = {
    badge: 'ROI Model',
    title: 'ROI Formula',
    description: 'Prevented incidents × Average incident cost + Time saved = ROI estimate',
    content: 'Example: 3 prevented incidents × $75K average cost = $225K annual savings. Time saved from automation ($20K-50K). Program cost typically $10K-30K annually. Industry benchmark: Startups with security awareness see 50-70% reduction in incidents.',
  };

  const dataProtection: DataProtectionCard = {
    title: 'Data Protection',
    subtitle: 'Cloud-based security',
    icon: Shield,
    chartData: [
      { day: 'Mon', encryption: 90, access: 93, audit: 85 },
      { day: 'Tue', encryption: 92, access: 95, audit: 88 },
      { day: 'Wed', encryption: 91, access: 94, audit: 86 },
      { day: 'Thu', encryption: 94, access: 96, audit: 90 },
      { day: 'Fri', encryption: 95, access: 97, audit: 92 },
      { day: 'Sat', encryption: 93, access: 95, audit: 89 },
      { day: 'Sun', encryption: 96, access: 98, audit: 93 },
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
        icon: Cloud,
        title: 'Cloud SaaS',
        subtitle: 'Zero setup',
        color: 'purple',
      },
    ],
  };

  const accessControl: AccessControlCard = {
    title: 'Access Control',
    subtitle: 'Enterprise authentication',
    icon: Lock,
    chartData: [
      { day: 'Mon', mfa: 88, sso: 85, rbac: 90 },
      { day: 'Tue', mfa: 90, sso: 87, rbac: 92 },
      { day: 'Wed', mfa: 89, sso: 86, rbac: 91 },
      { day: 'Thu', mfa: 92, sso: 89, rbac: 94 },
      { day: 'Fri', mfa: 93, sso: 90, rbac: 95 },
      { day: 'Sat', mfa: 91, sso: 88, rbac: 93 },
      { day: 'Sun', mfa: 94, sso: 91, rbac: 96 },
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
        value: '94%',
        color: 'primary',
      },
      {
        label: 'SSO Active',
        value: '91%',
        color: 'purple',
      },
      {
        label: 'RBAC',
        value: '96%',
        color: 'primary',
      },
    ],
    yAxisDomain: [80, 100],
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
        percentage: 98,
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
    subtitle: 'Cloud-based platform',
    icon: Cloud,
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
      question: 'How quickly can we get started?',
      answer:
        'Sign up and start using instantly. Zero setup required. First campaign can launch within hours. Program fully active in 1-2 weeks.',
    },
    {
      question: 'What is the pricing for startups?',
      answer:
        'Affordable pricing designed for startups. Cloud SaaS model. Pay as you grow. Contact us for startup pricing details.',
    },
    {
      question: 'Do we need IT resources to set up?',
      answer:
        'No. Zero setup required. Cloud SaaS. No IT resources needed. Start using instantly.',
    },
    {
      question: 'What ready templates are available?',
      answer:
        '50+ ready templates covering common attack vectors. Customizable. Launch campaigns quickly.',
    },
    {
      question: 'How much time does it require?',
      answer:
        'Minimal time required. Automated workflows. Campaigns run automatically. Training assigned automatically.',
    },
    {
      question: 'Can we scale as we grow?',
      answer:
        'Yes. Scale easily as you grow. Add users quickly. Maintain security awareness at any size.',
    },
    {
      question: 'What support is available?',
      answer:
        'Dedicated startup support. Quick onboarding. Best practices guidance. Help when you need it.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Startups"
        title="Affordable Security Awareness While Growing"
        description="Cloud SaaS with zero setup. Affordable pricing for startups. Quick setup in days. Stay informed about current threats. Minimize risk while growing."
        centerCard={heroCenterCard}
        metrics={heroMetrics}
      />

      {/* Problem Section */}
      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing startup challenges with quick setup, affordable pricing, and automated security awareness"
        triplets={problemTriplets}
      />

      {/* Workflow Section */}
      <WorkflowSection
        badge="How It Works"
        title="5-step operational flow for startups"
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
        description="Transform your startup security with quantifiable results that protect employees while growing."
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
          description: 'Let\'s schedule your live demo. See how affordable security awareness protects your startup while growing.',
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

export default SolutionsStartupsPage;
