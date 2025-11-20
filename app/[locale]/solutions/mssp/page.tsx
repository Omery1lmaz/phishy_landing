'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Target, Zap, Shield, Users, BarChart3, Building2, DollarSign, Clock, TrendingDown, Lock, CheckCircle2, FileText, Server, Eye} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import OverviewSection from '../../../components/solutions/mssp/OverviewSection';
import ProblemsTargetsSection, {ProblemTargetPair} from '../../../components/shared/ProblemsTargetsSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import ModuleMappingSection from '../../../components/solutions/mssp/ModuleMappingSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem} from '../../../components/shared/KpiSection';
import EvidenceSection from '../../../components/solutions/mssp/EvidenceSection';
import SecuritySection, {
  DataProtectionCard,
  AccessControlCard,
  ComplianceCard,
  MonitoringCard,
  SecurityManagementCard,
} from '../../../components/shared/SecuritySection';
import FAQSection from '../../../components/solutions/mssp/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';

const msspWorkflowSteps: WorkflowStep[] = [
  {
    key: 'plan',
    icon: Target,
    label: 'Plan',
    description: 'Onboard new client. Configure tenant. Set up white-label branding. Define service packages.',
    video: 'https://www.pexels.com/download/video/5377697/',
  },
  {
    key: 'run',
    icon: Zap,
    label: 'Run',
    description: 'Deploy security awareness services. Manage multiple clients from one platform. Monitor all tenants.',
    video: 'https://www.pexels.com/download/video/4709300/',
  },
  {
    key: 'monitor',
    icon: Shield,
    label: 'Monitor',
    description: 'Monitor all client activities. Track performance across tenants. Identify issues proactively.',
    video: 'https://www.pexels.com/download/video/5495781/',
  },
  {
    key: 'report',
    icon: Users,
    label: 'Report',
    description: 'Generate monthly summaries automatically. Client-specific reports. White-label format.',
    video: 'https://www.pexels.com/download/video/5377700/',
  },
  {
    key: 'bill',
    icon: BarChart3,
    label: 'Bill',
    description: 'Automated billing integration. Usage-based or fixed pricing. Revenue recognition.',
    video: 'https://www.pexels.com/download/video/5495898/',
  },
];

const SolutionsMSSPPage: React.FC = () => {
  const t = useTranslations('Pages.SolutionsMSSP');

  const heroMetrics: HeroMetric[] = [
    {
      label: 'Client Management',
      icon: Building2,
      badge: 'Efficiency',
      color: 'text-primary-300',
      startValue: 1,
      endValue: 10,
      startDelta: 0,
      endDelta: 5,
      unit: 'x',
      direction: 'up',
    },
    {
      label: 'Revenue Efficiency',
      icon: DollarSign,
      badge: 'Growth',
      color: 'text-secondary-300',
      startValue: 1,
      endValue: 5,
      startDelta: 0,
      endDelta: 3,
      unit: 'x',
      direction: 'up',
    },
    {
      label: 'Operational Time',
      icon: Clock,
      badge: 'Speed',
      color: 'text-white',
      startValue: 100,
      endValue: 20,
      startDelta: 0,
      endDelta: -80,
      unit: '%',
      direction: 'down',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'Live',
    title: 'MSSP',
    description: 'Multi-tenant management platform with white-label capabilities.',
    valueLabel: 'Client Management',
    value: {
      startValue: 1,
      endValue: 10,
      unit: 'x',
      direction: 'up',
    },
  };

  const msspTimelineEvents: TimelineEvent[] = [
    {
      time: t('timeline.events.1.time'),
      title: t('timeline.events.1.title'),
      description: t('timeline.events.1.description'),
    },
    {
      time: t('timeline.events.2.time'),
      title: t('timeline.events.2.title'),
      description: t('timeline.events.2.description'),
    },
    {
      time: t('timeline.events.3.time'),
      title: t('timeline.events.3.title'),
      description: t('timeline.events.3.description'),
      highlight: true,
    },
    {
      time: t('timeline.events.4.time'),
      title: t('timeline.events.4.title'),
      description: t('timeline.events.4.description'),
    },
    {
      time: t('timeline.events.5.time'),
      title: t('timeline.events.5.title'),
      description: t('timeline.events.5.description'),
    },
  ];

  const problemTargetPairs: ProblemTargetPair[] = [
    {
      problem: {
        title: 'Multi-client management is manual and time-consuming',
        description: 'Managing multiple clients requires separate logins and interfaces.',
        icon: Clock,
        color: 'text-primary-300',
      },
      target: {
        title: 'Multi-tenant platform manages all clients',
        description: 'Single interface for managing multiple clients efficiently.',
        icon: Clock,
        color: 'text-secondary-300',
      },
    },
    {
      problem: {
        title: 'No white-label options for client branding',
        description: 'Clients see vendor branding instead of professional white-label interface.',
        icon: Users,
        color: 'text-primary-300',
      },
      target: {
        title: 'White-label interface available',
        description: 'Professional branding with custom logos and colors.',
        icon: TrendingDown,
        color: 'text-secondary-300',
      },
    },
    {
      problem: {
        title: 'Monthly reporting and billing is manual',
        description: 'Creating reports and billing for each client takes significant time.',
        icon: BarChart3,
        color: 'text-primary-300',
      },
      target: {
        title: 'Automated monthly summaries',
        description: 'Generate reports and billing automatically for all clients.',
        icon: Zap,
        color: 'text-secondary-300',
      },
    },
  ];

  const dataProtection: DataProtectionCard = {
    title: 'Data Protection',
    subtitle: 'Real-time security visibility',
    icon: Shield,
    chartData: [
      { day: 'Mon', encryption: 85, access: 92, audit: 78 },
      { day: 'Tue', encryption: 88, access: 95, audit: 82 },
      { day: 'Wed', encryption: 90, access: 93, audit: 85 },
      { day: 'Thu', encryption: 92, access: 97, audit: 88 },
      { day: 'Fri', encryption: 95, access: 98, audit: 90 },
      { day: 'Sat', encryption: 93, access: 96, audit: 87 },
      { day: 'Sun', encryption: 97, access: 99, audit: 92 },
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
        icon: Shield,
        title: 'Data Residency',
        subtitle: 'Region-based',
        color: 'purple',
      },
    ],
  };

  const accessControl: AccessControlCard = {
    title: 'Access Control',
    subtitle: 'Analytics & insights',
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
        value: '92%',
        color: 'primary',
      },
      {
        label: 'SSO Active',
        value: '88%',
        color: 'purple',
      },
      {
        label: 'RBAC',
        value: '95%',
        color: 'primary',
      },
    ],
    yAxisDomain: [80, 100],
  };

  const compliance: ComplianceCard = {
    title: 'Compliance Status',
    subtitle: 'Automated compliance tools',
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
        title: 'HIPAA',
        subtitle: 'Healthcare',
        percentage: 95,
        color: 'purple',
      },
    ],
  };

  const monitoring: MonitoringCard = {
    title: 'Real-time Monitoring',
    subtitle: 'Automated security management',
    icon: Eye,
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
    subtitle: 'Future-ready security platform',
    icon: Server,
    description: 'Real-time data. Seamless automation. Total control all with features that keep your security engine running smooth.',
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

  const msspKpis: KpiItem[] = [
    {
      label: 'Client Management',
      value: '↑',
      direction: 'up',
      tooltip: 'Client management efficiency increases 5-10x',
    },
    {
      label: 'Revenue Efficiency',
      value: '↑',
      direction: 'up',
      tooltip: 'Revenue per employee increases 3-5x',
    },
    {
      label: 'Operational Time',
      value: '↓',
      direction: 'down',
      tooltip: 'Operational time reduced 80%',
    },
    {
      label: 'Client Satisfaction',
      value: '↑',
      direction: 'up',
      tooltip: 'Client satisfaction increases with white-label',
    },
    {
      label: 'Scalability',
      value: '↑',
      direction: 'up',
      tooltip: 'Client capacity increases 10x+',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <HeroSection
        badge="By Role / MSSP & White-Label"
        title="Multi-Tenant Management with White-Label Capabilities"
        description="Manage multiple clients from one platform. Branded or unbranded interfaces. Monthly summary reports and automated billing. Scale your security awareness services."
        centerCard={centerCard}
        metrics={heroMetrics}
        arrowImage="/arrow.png"
        angles={[-90, 45, 180]}
      />
    {/*   <OverviewSection /> */}
      <ProblemsTargetsSection
        badge="Problems → Impact → Target Results"
        heading="Problems and Target Results"
        description="Each problem maps to a clear target result; the journey is visualized in one seamless flow."
        pairs={problemTargetPairs}
      />
      <WorkflowSection
        steps={msspWorkflowSteps}
        badge="Workflow"
        title="How It Works"
        description="5-step operational flow for MSSP management"
      />
      {/* <ModuleMappingSection /> */}
      <TimelineSection
        events={msspTimelineEvents}
        badge={t('timeline.badge')}
        heading={t('timeline.heading')}
        subheading={t('timeline.subheading')}
      />
      <KpiSection
        kpis={msspKpis}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Time saved × Team cost + Scaling revenue = ROI',
          content: 'Industry benchmark: MSSPs with multi-tenant platforms see 5-10x improvement in operational efficiency and 10x+ increase in client capacity. Example: 200 hours saved per month × $150/hour = $30K per month. Additional revenue from 10x client capacity ($100K-500K annually). Annual ROI: $460K-930K+.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your MSSP operations with quantifiable results that drive real business growth."
      />
  {/*     <EvidenceSection /> */}
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
      <FAQSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default SolutionsMSSPPage;

