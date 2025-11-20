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
  Brain,
  Lightbulb,
} from 'lucide-react';

const SolutionsCyberAwarenessPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Awareness Level',
      icon: Brain,
      badge: 'Increase',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 80,
      startDelta: 0,
      endDelta: 80,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Click Rate',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-secondary-300',
      startValue: 100,
      endValue: 40,
      startDelta: 0,
      endDelta: -60,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Training Completion',
      icon: Lightbulb,
      badge: 'Increase',
      color: 'text-white/70',
      startValue: 0,
      endValue: 90,
      startDelta: 0,
      endDelta: 90,
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
      endValue: 100,
      unit: 'K',
      direction: 'up',
    },
  };

  const problemTriplets: ProblemTriplet[] = [
    {
      problem: 'Low security awareness across organization',
      impact: 'Employees vulnerable to phishing. Click rates high. Incidents increase.',
      result: 'Security awareness increases 60-80%. Click rate decreases 40-60%. Culture shifts.',
    },
    {
      problem: 'Training not engaging or relevant',
      impact: 'Low completion rates. Knowledge not retained. Behavior unchanged.',
      result: 'Engaging micro training increases completion 80-90%. Behavior improves.',
    },
    {
      problem: 'No measurement of awareness improvement',
      impact: 'Program effectiveness unknown. ROI unclear. Budget support wanes.',
      result: 'Awareness metrics tracked. Improvement scores visible. ROI demonstrated.',
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      key: 'plan',
      icon: Target,
      label: 'Plan',
      description: 'Configure awareness program. Select training modules. Set simulation schedule. Define metrics.',
      video: 'https://www.pexels.com/download/video/5377697/',
    },
    {
      key: 'run',
      icon: Zap,
      label: 'Run',
      description: 'Deploy phishing simulations. Measure baseline awareness. Track click rates.',
      video: 'https://www.pexels.com/download/video/4709300/',
    },
    {
      key: 'train',
      icon: Users,
      label: 'Train',
      description: 'Deliver engaging micro training. Role-specific content. Just-in-time learning.',
      video: 'https://www.pexels.com/download/video/5495781/',
    },
    {
      key: 'measure',
      icon: BarChart3,
      label: 'Measure',
      description: 'Track awareness metrics. Calculate improvement scores. Monitor trends.',
      video: 'https://www.pexels.com/download/video/5377700/',
    },
    {
      key: 'improve',
      icon: Shield,
      label: 'Improve',
      description: 'Continuous improvement cycle. Refine training. Adjust campaigns. Culture shift.',
      video: 'https://www.pexels.com/download/video/5495898/',
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    {time: 'Week 1', title: 'Program setup', description: 'Configure awareness program. Select training modules. Set baseline metrics.'},
    {time: 'Week 2', title: 'Baseline simulation', description: 'Deploy initial phishing simulation. Measure current awareness level.'},
    {time: 'Week 2-3', title: 'Training deployment', description: 'Deliver engaging micro training. Track completion rates.'},
    {time: 'Week 3-4', title: 'Follow-up simulation', description: 'Deploy follow-up simulation. Measure improvement.'},
    {time: 'Month-end', title: 'Metrics & reporting', description: 'Review awareness metrics. Calculate improvement scores. Generate reports.'},
  ];

  const kpis: KpiItem[] = [
    {label: 'Awareness Level', value: '↑', direction: 'up', tooltip: 'Security awareness increases 60-80%'},
    {label: 'Click Rate', value: '↓', direction: 'down', tooltip: 'Click rate decreases 40-60%'},
    {label: 'Training Completion', value: '↑', direction: 'up', tooltip: 'Training completion increases to 80-90%'},
    {label: 'Improvement Score', value: '↑', direction: 'up', tooltip: 'Improvement score increases 60-80%'},
    {label: 'Incident Rate', value: '↓', direction: 'down', tooltip: 'Phishing incidents decrease 50-70%'},
  ];

  const centerCard: CenterCard = {
    badge: 'ROI Model',
    title: 'ROI Formula',
    description: 'Reduced incidents × Average incident cost ($50K-250K) + Time saved = ROI estimate',
    content: 'Example: 10 prevented incidents × $100K average cost = $1M annual savings. Time saved from reduced incidents ($50K-150K). Program cost typically $40K-100K annually. Industry benchmark: Organizations with comprehensive awareness programs see 50-70% reduction in phishing incidents.',
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
        title: 'HIPAA',
        subtitle: 'Healthcare',
        percentage: 98,
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
      question: 'What is cyber awareness training?',
      answer:
        'Cyber awareness training educates employees about cybersecurity threats, best practices, and how to recognize and respond to attacks. It includes phishing simulations, micro training modules, and continuous education.',
    },
    {
      question: 'How often should we run awareness campaigns?',
      answer:
        'Recommended monthly or quarterly campaigns. Frequency depends on risk level and organizational needs. Continuous awareness programs provide best results.',
    },
    {
      question: 'What training content is available?',
      answer:
        '50+ ready-made training modules covering phishing, password security, social engineering, data handling, and more. All content is customizable. Role-specific modules available.',
    },
    {
      question: 'How do we measure awareness improvement?',
      answer:
        'Awareness metrics include click rates, report rates, improvement scores, training completion, and incident trends. Dashboards show progress over time.',
    },
    {
      question: 'Can we customize training for our industry?',
      answer:
        'Yes. All training content is fully customizable. Industry-specific scenarios available. Custom modules can be created.',
    },
    {
      question: 'What reporting is available?',
      answer:
        'Executive dashboards, awareness metrics, improvement trends, training completion reports, and ROI calculations. Custom reports exportable to PDF/CSV.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Initial improvements visible within 1-2 months. Significant awareness improvement typically achieved within 3-6 months. Continuous improvement over time.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Solution / Cyber Awareness"
        title="Build Stronger Security Awareness Across Your Organization"
        description="Increase security awareness with engaging micro training. Measure improvement. Reduce phishing incidents. Build a security-first culture."
        centerCard={heroCenterCard}
        metrics={heroMetrics}
      />

      {/* Problem Section */}
      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing security awareness challenges with engaging training and measurable improvement"
        triplets={problemTriplets}
      />

      {/* Workflow Section */}
      <WorkflowSection
        badge="How It Works"
        title="5-step operational flow for cyber awareness programs"
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
        description="Transform your cyber awareness with quantifiable results that reduce incidents and build security culture."
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
          description: 'Let\'s schedule your live demo. See how cyber awareness training reduces incidents and builds security culture.',
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

export default SolutionsCyberAwarenessPage;
