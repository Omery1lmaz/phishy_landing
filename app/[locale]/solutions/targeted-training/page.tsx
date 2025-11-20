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
  GraduationCap,
  CheckCircle2,
  Lock,
  Server,
  AlertTriangle,
} from 'lucide-react';

const SolutionsTargetedTrainingPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Click Rate',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-primary-300',
      startValue: 100,
      endValue: 30,
      startDelta: 0,
      endDelta: -70,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Improvement Score',
      icon: TrendingUp,
      badge: 'Increase',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 80,
      startDelta: 0,
      endDelta: 80,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Training Efficiency',
      icon: Users,
      badge: 'Improvement',
      color: 'text-white/70',
      startValue: 0,
      endValue: 500,
      startDelta: 0,
      endDelta: 500,
      unit: '%',
      direction: 'up',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Incidents',
    description: 'High-risk users',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 100,
      unit: 'K',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Use Case / Targeted Training"
        title="Targeted Training for High-Risk Groups"
        description="Identify clickers segment automatically. Deploy micro training to high-risk users. Track improvement scores. Focus resources where they matter most."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing training efficiency challenges with risk-based targeting and measurable improvement"
        triplets={[
          {
            problem: 'One-size-fits-all training wastes resources',
            impact: 'Low-risk users over-trained. High-risk users under-trained. ROI decreases.',
            result: 'Training focused on high-risk users. Click rate decreases 50-70% in target segment.',
          },
          {
            problem: 'High-risk users not identified automatically',
            impact: 'Clickers segment unknown. Training deployed broadly. Resources wasted.',
            result: 'Clickers segment identified automatically. Risk-based targeting active.',
          },
          {
            problem: 'Training effectiveness not measured',
            impact: 'No improvement tracking. Training impact unknown. ROI unclear.',
            result: 'Improvement scores tracked. Training effectiveness measured. ROI visible.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure clicker identification rules. Set risk thresholds. Select micro training modules for high-risk users.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Simulation runs. Clickers identified automatically. High-risk segment created dynamically.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Analyze clicker data. Risk scores calculated. Training priority assigned.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: GraduationCap,
                label: 'Train',
                description: 'Micro training deployed to clickers. Role-specific content. Improvement tracked.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Improvement scores calculated. Training effectiveness measured. ROI visible.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for targeted training"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'KPI setup & segmentation', description: 'Define clicker identification rules. Set risk thresholds. Configure segments.'},
          {time: 'Week 2', title: 'Simulation deployment', description: 'Deploy phishing simulation. Collect click data. Identify clickers automatically.'},
          {time: 'Week 2-3', title: 'Clicker analysis', description: 'Analyze clicker segment. Calculate risk scores. Prioritize training targets.'},
          {time: 'Week 3-4', title: 'Micro training deployment', description: 'Deploy targeted training to clickers. Role-specific content. Track completion.'},
          {time: 'Month-end', title: 'Improvement assessment', description: 'Calculate improvement scores. Measure training effectiveness. Validate ROI.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your targeted training with quantifiable results that reduce click rates and improve training efficiency."
        kpis={[
          {label: 'Click Rate', value: '↓', direction: 'down', tooltip: 'Click rate decreases 50-70% in target segment'},
          {label: 'Improvement Score', value: '↑', direction: 'up', tooltip: 'Improvement score increases 60-80%'},
          {label: 'Training Efficiency', value: '↑', direction: 'up', tooltip: 'Training efficiency increases 3-5x'},
          {label: 'Resource Utilization', value: '↑', direction: 'up', tooltip: 'Resources focused on high-risk users'},
          {label: 'Completion Rate', value: '↑', direction: 'up', tooltip: 'Training completion rate increases to 85-95%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Reduced incidents × Average incident cost ($50K-250K) = ROI estimate',
          content: 'Example: 20 high-risk users × 60% click rate reduction × $100K average cost = $1.2M annual savings. Training cost typically $10K-30K annually. Industry benchmark: Organizations with targeted training see 50-70% reduction in click rates for high-risk segments.',
        }}
      />

      {/* Security & Privacy Section */}
      <SecuritySection
        badge="Security & Privacy"
        heading="Enterprise-Grade Security"
        description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models."
        dataProtection={{
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
            encryption: { label: 'Encryption', color: 'rgba(147, 51, 234, 0.8)' },
            access: { label: 'Access Control', color: 'rgba(168, 85, 247, 0.8)' },
            audit: { label: 'Audit Logs', color: 'rgba(147, 51, 234, 0.6)' },
          },
          features: [
            { icon: FileText, title: 'End-to-End Encryption', subtitle: 'AES-256', color: 'primary' },
            { icon: Server, title: 'On-Premise Deployment', subtitle: 'Available', color: 'purple' },
          ],
        }}
        accessControl={{
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
            mfa: { label: 'MFA', color: 'rgba(147, 51, 234, 0.8)' },
            sso: { label: 'SSO', color: 'rgba(168, 85, 247, 0.8)' },
            rbac: { label: 'RBAC', color: 'rgba(147, 51, 234, 0.6)' },
          },
          stats: [
            { label: 'MFA Enabled', value: '98%', color: 'primary' },
            { label: 'SSO Active', value: '95%', color: 'purple' },
            { label: 'RBAC', value: '100%', color: 'primary' },
          ],
          yAxisDomain: [90, 100],
        }}
        compliance={{
          title: 'Compliance Status',
          subtitle: 'Enterprise standards',
          icon: CheckCircle2,
          items: [
            { icon: FileText, title: 'SOC2', subtitle: 'Type II', percentage: 100, color: 'primary' },
            { icon: Shield, title: 'GDPR', subtitle: 'CCPA', percentage: 100, color: 'purple' },
            { icon: CheckCircle2, title: 'ISO 27001', subtitle: 'Security', percentage: 100, color: 'primary' },
            { icon: Lock, title: 'SOC2', subtitle: 'Coming', percentage: 95, color: 'purple' },
          ],
        }}
        monitoring={{
          title: 'Real-time Monitoring',
          subtitle: '24/7 security oversight',
          icon: BarChart3,
          uptimePercentage: '99.9%',
          uptimeLabel: 'Uptime SLA',
          statusItems: [
            { icon: Shield, title: 'Encryption', subtitle: 'Active', color: 'primary' },
            { icon: Lock, title: 'MFA', subtitle: 'Enabled', color: 'purple' },
            { icon: FileText, title: 'Audit Logs', subtitle: '24/7', color: 'primary' },
          ],
        }}
        securityManagement={{
          title: 'Security Management',
          subtitle: 'Enterprise-grade platform',
          icon: Server,
          description: 'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',
          stats: [
            { value: '99.9%', label: 'Uptime', color: 'primary' },
            { value: '24/7', label: 'Monitoring', color: 'purple' },
            { value: '100%', label: 'Secure', color: 'primary' },
            { value: 'Zero', label: 'Breaches', color: 'purple' },
          ],
        }}
      />

      <FAQSection
        faqs={[
              {
                question: 'How are clickers identified?',
                answer:
                  'Clickers are identified automatically from simulation data. Users who click on phishing emails are flagged. Risk scores calculated. Segments created dynamically.',
              },
              {
                question: 'What is micro training?',
                answer:
                  'Short, focused training modules (2-5 minutes) delivered to high-risk users. Role-specific content. Just-in-time learning. Completion tracked automatically.',
              },
              {
                question: 'How is improvement score calculated?',
                answer:
                  'Improvement score measures behavior change over time. Compares click rates before and after training. Tracks progress across multiple simulations. Score increases as risk decreases.',
              },
              {
                question: 'Can we customize training content?',
                answer:
                  'Yes. All training modules are fully customizable. Add your own content, branding, and scenarios. Role-specific modules available.',
              },
              {
                question: 'How often should we deploy targeted training?',
                answer:
                  'Recommended monthly or quarterly. Frequency depends on risk level. High-risk users may need more frequent training.',
              },
              {
                question: 'What reporting is available?',
                answer:
                  'Clicker segment reports, improvement score trends, training completion rates, ROI metrics. Executive dashboards available.',
              },
              {
                question: 'Can we integrate with our LMS?',
                answer:
                  'Yes. Phishy integrates with major LMS platforms. Training completion synced. Certificates generated automatically.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how targeted training reduces risk and improves training efficiency.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsTargetedTrainingPage;

