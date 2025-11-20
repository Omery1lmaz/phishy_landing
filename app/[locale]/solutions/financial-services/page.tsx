'use client';

export const runtime = 'edge';

import React from 'react';
import {Link} from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTriplet} from '../../../components/shared/ProblemsTargetsSection';
import FAQSection from '../../../components/shared/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem, CenterCard} from '../../../components/shared/KpiSection';
import SecuritySection from '../../../components/shared/SecuritySection';

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
  DollarSign,
} from 'lucide-react';

const SolutionsFinancialServicesPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'BEC Risk',
      icon: TrendingDown,
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
      label: 'Verification',
      icon: TrendingUp,
      badge: 'Increase',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 85,
      startDelta: 0,
      endDelta: 85,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Compliance',
      icon: FileText,
      badge: 'Evidence',
      color: 'text-white/70',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Losses',
    description: 'Average BEC loss',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 130,
      unit: 'K',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Financial Services"
        title="BEC-Focused Scenarios with Approval Culture & Compliance Evidence"
        description="Test and improve approval workflows. BEC scenario testing for finance teams. Compliance evidence for regulatory requirements. Protect against financial fraud."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing financial services challenges with BEC protection, verification culture, and regulatory compliance"
        triplets={[
          {
            problem: 'BEC attacks target financial transactions',
            impact: 'Average loss $130K per incident. Reputation damage. Regulatory scrutiny.',
            result: 'BEC risk reduced 80-95%. Verification rate increases 70-85%. Zero financial losses.',
          },
          {
            problem: 'Approval workflows lack verification culture',
            impact: 'Employees approve without verification. Processes vulnerable. Culture risky.',
            result: 'Approval verification culture established. Verification rate increases 70-85%.',
          },
          {
            problem: 'Regulatory compliance evidence missing',
            impact: 'Audit failures. Regulatory penalties. Compliance gaps identified.',
            result: 'Compliance evidence generated automatically. Audit-ready documentation. Regulatory requirements met.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure BEC scenarios. Set approval workflow tests. Define compliance requirements.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy BEC simulations. Test approval workflows. Measure verification rates.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Analyze',
                description: 'Analyze approval responses. Identify verification gaps. Flag high-risk approvers.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Improve',
                description: 'Approval workflow training. Verification process reinforcement. Culture shift.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Comply',
                description: 'Generate compliance evidence. Regulatory reports. Audit documentation.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for financial services"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'BEC scenario configuration', description: 'Configure BEC scenarios. Set approval workflow tests. Define compliance requirements.'},
          {time: 'Week 2', title: 'BEC simulation deployment', description: 'Deploy BEC scenarios to finance teams. Test approval workflows. Measure responses.'},
          {time: 'Week 2-3', title: 'Approval analysis', description: 'Analyze approval responses. Identify verification gaps. Flag high-risk approvers.'},
          {time: 'Week 3-4', title: 'Training & culture shift', description: 'Deploy approval workflow training. Reinforce verification process. Shift culture.'},
          {time: 'Month-end', title: 'Compliance evidence', description: 'Generate compliance evidence. Regulatory reports. Audit documentation.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'BEC Risk', value: '↓', direction: 'down', tooltip: 'BEC risk reduced 80-95%'},
          {label: 'Approval Verification', value: '↑', direction: 'up', tooltip: 'Verification rate increases 70-85%'},
          {label: 'Financial Loss', value: '↓', direction: 'down', tooltip: 'BEC-related financial losses eliminated'},
          {label: 'Compliance Evidence', value: '↑', direction: 'up', tooltip: 'Compliance evidence completeness increases to 100%'},
          {label: 'Regulatory Pass Rate', value: '↑', direction: 'up', tooltip: 'Regulatory audit pass rate increases to 100%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented BEC incidents × Average loss ($130K) + Avoided regulatory penalties = ROI estimate',
          content: 'Example: 5 prevented BEC attacks × $130K = $650K annual savings. Avoided regulatory penalties ($50K-200K). Program cost typically $75K-150K annually. Industry benchmark: Financial services with BEC testing see 80-95% reduction in successful BEC attacks.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your financial services security with quantifiable results that prevent BEC attacks."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Financial standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'PCI DSS',subtitle:'Compliant',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What BEC scenarios are available for financial services?',
                answer:
                  'CEO fraud, IBAN change requests, invoice manipulation, vendor impersonation, executive assistant requests. All scenarios are customizable for financial workflows.',
              },
              {
                question: 'How does approval workflow testing work?',
                answer:
                  'BEC scenarios test actual approval workflows. Track approval responses. Measure verification rates. Identify gaps in processes.',
              },
              {
                question: 'What compliance frameworks are supported?',
                answer:
                  'FFIEC, GLBA, PCI-DSS, SOX, GDPR, and more. Compliance evidence generated automatically. Regulatory reports available.',
              },
              {
                question: 'Can we integrate with banking systems?',
                answer:
                  'Yes. Phishy integrates with major banking systems and ERPs. Approval workflow testing can be configured for actual banking processes.',
              },
              {
                question: 'What happens when an employee approves a fraudulent request?',
                answer:
                  'Approval is logged immediately. User receives instant feedback. Training assigned. Security team notified. Case created for review.',
              },
              {
                question: 'How is compliance evidence generated?',
                answer:
                  'Compliance evidence includes BEC testing results, approval workflow tests, training records, and audit trails. Generated automatically in PDF/CSV format.',
              },
              {
                question: 'What regulatory reporting is available?',
                answer:
                  'Regulatory reports for FFIEC, GLBA, PCI-DSS, SOX. Custom reports available. Audit-ready documentation. Evidence packages.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how BEC scenario testing prevents financial losses and ensures regulatory compliance.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsFinancialServicesPage;

