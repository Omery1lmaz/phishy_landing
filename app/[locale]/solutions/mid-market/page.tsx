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
  Rocket,
} from 'lucide-react';

const SolutionsMidMarketPage: React.FC = () => {
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
      label: 'Time to Value',
      icon: TrendingUp,
      badge: 'Improvement',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 95,
      startDelta: 0,
      endDelta: 95,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'User Adoption',
      icon: Users,
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

  const centerCard: CenterCardData = {
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

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Company Size / Mid-Market"
        title="Quick Setup with Ready Templates & Simple Reports"
        description="Get started in days, not months. Ready-made templates for common scenarios. Simple, actionable reports. Perfect balance of features and ease-of-use for growing organizations."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing mid-market challenges with quick setup, ready templates, and simple reporting"
        triplets={[
          {
            problem: 'Complex enterprise tools take months to implement',
            impact: 'Program launch delayed. Resources wasted. ROI delayed.',
            result: 'Quick setup in days. Program live in 1-2 weeks. Time to value accelerated.',
          },
          {
            problem: 'No ready templates for common scenarios',
            impact: 'Campaign creation takes weeks. Inconsistent quality. Scaling difficult.',
            result: '50+ ready templates. Campaigns live in minutes. Consistent quality.',
          },
          {
            problem: 'Reports are too complex for mid-market needs',
            impact: 'Data overload. Key insights missed. Decision-making delayed.',
            result: 'Simple, actionable reports. Key metrics visible. Decisions faster.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
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
                key: 'triage',
                icon: Shield,
                label: 'Monitor',
                description: 'Simple dashboard shows key metrics. Click rates, report rates visible. Issues flagged.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'Automatic training on click. Ready content library. Completion tracked.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Simple reports generated. Key metrics highlighted. Executive summaries available.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for mid-market organizations"
      />

      <TimelineSection
        events={[
          {time: 'Day 1-2', title: 'Quick setup', description: 'Onboarding completed. Basic configuration. User sync configured.'},
          {time: 'Day 3-5', title: 'Template selection', description: 'Select ready templates. Customize if needed. Test campaigns.'},
          {time: 'Week 1-2', title: 'First campaign', description: 'Launch first campaign. Monitor results. Adjust as needed.'},
          {time: 'Week 2-3', title: 'Training deployment', description: 'Deploy training modules. Track completion. Generate certificates.'},
          {time: 'Month-end', title: 'Simple reporting', description: 'Generate first report. Review metrics. Plan next quarter.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Setup Time', value: '↓', direction: 'down', tooltip: 'Setup time reduced from months to days'},
          {label: 'Time to Value', value: '↑', direction: 'up', tooltip: 'Time to value accelerated to 1-2 weeks'},
          {label: 'User Adoption', value: '↑', direction: 'up', tooltip: 'User adoption increases with simplicity'},
          {label: 'Click Rate', value: '↓', direction: 'down', tooltip: 'Click rate decreases 40-60%'},
          {label: 'Report Rate', value: '↑', direction: 'up', tooltip: 'Report rate increases 3-5x'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Reduced incidents × Average incident cost ($50K-150K) = ROI estimate',
          content: 'Example: 5 prevented incidents × $100K average cost = $500K annual savings. Program cost typically $20K-50K annually. Industry benchmark: Mid-market organizations see 40-60% reduction in phishing incidents within first quarter.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your mid-market security with quantifiable results that deliver value fast."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'SOC2',subtitle:'Coming',percentage:95,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'How quick is the setup?',
                answer:
                  'Setup typically takes 1-3 days. Onboarding includes basic configuration, user sync, and template selection. Minimal technical expertise required.',
              },
              {
                question: 'What ready templates are available?',
                answer:
                  '50+ ready templates covering common phishing scenarios: credential theft, malware delivery, CEO fraud, invoice scams, and more. All customizable.',
              },
              {
                question: 'What reports are included?',
                answer:
                  'Simple reports show key metrics: click rates, report rates, training completion, improvement trends. Executive summaries available. No data overload.',
              },
              {
                question: 'Can we customize templates?',
                answer:
                  'Yes. All templates are fully customizable. Modify content, branding, and scenarios. Custom templates can be created.',
              },
              {
                question: 'What support is available?',
                answer:
                  'Dedicated onboarding support. Email and chat support. Knowledge base. Training resources. Community forum.',
              },
              {
                question: 'How does pricing work?',
                answer:
                  'Affordable pricing based on number of users. Transparent pricing. No hidden fees. Annual or monthly billing available.',
              },
              {
                question: 'Can we upgrade to enterprise features later?',
                answer:
                  'Yes. Platform scales with your needs. Upgrade to enterprise features as you grow. No migration required.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how quick setup and ready templates launch your security awareness program fast.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsMidMarketPage;

