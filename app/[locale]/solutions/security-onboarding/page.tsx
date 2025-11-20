'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTriplet} from '../../../components/shared/ProblemsTargetsSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem, CenterCard} from '../../../components/shared/KpiSection';
import SecuritySection from '../../../components/shared/SecuritySection';
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
  UserPlus,
  GraduationCap,
  CheckCircle2,
  Lock,
  Server,
  Mail,
} from 'lucide-react';

const SolutionsSecurityOnboardingPage: React.FC = () => {
  const t = useTranslations('Pages.SolutionsSecurityOnboarding');

  const heroMetrics: HeroMetric[] = [
    {
      label: 'Completion Rate',
      icon: TrendingUp,
      badge: 'Increase',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Onboarding Risk',
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
      label: 'Time-to-Compliance',
      icon: Clock,
      badge: 'Reduction',
      color: 'text-white/70',
      startValue: 100,
      endValue: 10,
      startDelta: 0,
      endDelta: -90,
      unit: '%',
      direction: 'down',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Incidents',
    description: 'New employee incidents',
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
        badge="By Use Case / Security Onboarding"
        title="Build Security Awareness from Day One"
        description="Automate first-day security training, policy acknowledgment, and baseline risk assessment. Establish security culture before employees access critical systems."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing security onboarding challenges with automated training and risk-based access control"
        triplets={[
          {
            problem: 'Manual onboarding training is inconsistent',
            impact: 'New hires miss critical security policies. Compliance gaps increase.',
            result: '100% completion rate with automated first-day training. Policy acknowledgment tracked.',
          },
          {
            problem: 'No baseline risk assessment for new employees',
            impact: 'High-risk users gain system access without awareness. First-click incidents spike.',
            result: 'Baseline phishing simulation on day 1. Risk score assigned before access granted.',
          },
          {
            problem: 'Training completion not tied to access provisioning',
            impact: 'Employees access systems before security training. Audit failures occur.',
            result: 'Training completion triggers access. Zero exceptions. Full audit trail.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure onboarding template: select training modules, policy documents, baseline simulation.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'New employee triggers onboarding campaign. First-day email sent with training links and policy acknowledgment.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Baseline phishing simulation runs automatically. Risk score calculated from first interaction.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: GraduationCap,
                label: 'Train',
                description: 'Micro training modules assigned based on role. Policy acknowledgment captured with timestamp.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Onboarding dashboard shows completion rates, risk scores, and compliance status per new hire.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for security onboarding"
      />

      <TimelineSection
        events={[
          {time: 'Day 1', title: 'Onboarding campaign triggered', description: 'New employee data synced. First-day email sent with training links and policy acknowledgment.'},
          {time: 'Day 1', title: 'Baseline simulation runs', description: 'Initial phishing simulation delivered. Risk score calculated from first interaction.'},
          {time: 'Day 1-2', title: 'Training completion required', description: 'Security training modules assigned. Policy acknowledgment captured. Completion verified.'},
          {time: 'Day 2-3', title: 'Access provisioning', description: 'System access granted only after training completion. Audit trail generated.'},
          {time: 'Week 1', title: 'Follow-up assessment', description: 'Second simulation to measure improvement. Risk score updated. Enhanced training if needed.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your security onboarding with quantifiable results that reduce risk from day one."
        kpis={[
          {label: 'Completion Rate', value: '↑', direction: 'up', tooltip: 'Training completion rate increases to 100%'},
          {label: 'Onboarding Risk', value: '↓', direction: 'down', tooltip: 'Baseline risk score decreases by 40-60%'},
          {label: 'Time-to-Compliance', value: '↓', direction: 'down', tooltip: 'Onboarding compliance time reduced from days to hours'},
          {label: 'First-Click Incidents', value: '↓', direction: 'down', tooltip: 'New employee phishing incidents reduced by 70-85%'},
          {label: 'Policy Acknowledgment', value: '↑', direction: 'up', tooltip: '100% policy acknowledgment rate with audit trail'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Reduced onboarding incidents × Average incident cost ($50K-250K) = ROI estimate',
          content: 'Example: 100 new hires/year × 70% reduction in incidents × $100K average cost = $7M annual savings. Industry benchmark: Organizations with automated security onboarding see 65-80% reduction in new employee-related security incidents.',
        }}
      />

      <SecuritySection
        badge="Security & Privacy"
        heading="Enterprise-Grade Security"
        description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models."
        dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}}
        accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}}
        compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'SOC2',subtitle:'Coming',percentage:95,color:'purple'}]}}
        monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}}
        securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}}
      />

      <FAQSection
        faqs={[
              {
                question: 'How long does onboarding setup take?',
                answer:
                  'Initial configuration takes 2-4 hours. Template customization adds 1-2 days. Integration with HRIS systems typically requires 1-2 weeks depending on your systems. Phishy provides dedicated onboarding support.',
              },
              {
                question: 'Can we customize training content for our organization?',
                answer:
                  'Yes. All training modules are fully customizable. Add your company policies, branding, and specific security requirements. Content library includes 50+ ready-made modules covering common security topics.',
              },
              {
                question: 'What happens if a new employee fails the baseline simulation?',
                answer:
                  'High-risk users are flagged automatically. Enhanced training modules are assigned. Security team receives notification. Access provisioning can be delayed until risk score improves. Full audit trail maintained.',
              },
              {
                question: 'Does this integrate with our HRIS (Workday, BambooHR, etc.)?',
                answer:
                  'Yes. Phishy integrates with major HRIS platforms via API. New employee data syncs automatically. Onboarding campaigns trigger from HRIS events. Custom integrations available for proprietary systems.',
              },
              {
                question: 'What compliance frameworks are supported?',
                answer:
                  'ISO 27001, NIST CSF, GDPR, HIPAA, PCI-DSS. Policy acknowledgment forms can be mapped to specific compliance requirements. Evidence packages generated automatically for audits.',
              },
              {
                question: 'Can we use this for contractors and temporary employees?',
                answer:
                  'Yes. Onboarding templates can be configured for different employee types. Contractors receive abbreviated training. Temporary employees get role-specific modules. All tracked in the same dashboard.',
              },
              {
                question: 'What reporting is available for management?',
                answer:
                  'Executive dashboard shows completion rates, risk trends, and compliance status. Monthly reports sent automatically. Custom reports available. All data exportable to PDF/CSV for board presentations.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how automated security onboarding reduces risk from day one.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsSecurityOnboardingPage;

