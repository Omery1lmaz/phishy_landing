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
  TrendingUp as TrendingUpIcon,
} from 'lucide-react';

const SolutionsExecutiveReportsPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'ROI Visibility',
      icon: TrendingUpIcon,
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
      label: 'Report Time',
      icon: Clock,
      badge: 'Reduction',
      color: 'text-secondary-300',
      startValue: 100,
      endValue: 5,
      startDelta: 0,
      endDelta: -95,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Board Readiness',
      icon: BarChart3,
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

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Time Saved',
    description: 'Report generation',
    valueLabel: 'Per Quarter',
    value: {
      startValue: 0,
      endValue: 40,
      unit: ' hrs',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Use Case / Executive Reports"
        title="Executive & Board Reports with ROI Visibility"
        description="Generate board-ready reports with trend summaries, threshold breach signals, and ROI calculations. Automate quarterly executive briefings. Show security program value in business terms."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing executive reporting challenges with automated reports, ROI visibility, and real-time alerts"
        triplets={[
          {
            problem: 'Manual report creation takes days',
            impact: 'Executive briefings delayed. Board presentations rushed. Data accuracy suffers.',
            result: 'Board-ready reports generated automatically. Report creation time reduced 95%.',
          },
          {
            problem: 'ROI not visible to executives',
            impact: 'Security program value unclear. Budget requests denied. Program support wanes.',
            result: 'ROI calculations visible. Business value demonstrated. Budget support increases.',
          },
          {
            problem: 'Threshold breaches not signaled',
            impact: 'Risk escalates unnoticed. Executive awareness delayed. Incidents occur.',
            result: 'Automatic threshold breach alerts. Executive notifications. Risk visibility real-time.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure executive dashboard. Set threshold alerts. Define ROI calculation parameters. Select report templates.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Security awareness activities run. Metrics collected automatically. Data aggregated for reporting.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Analyze',
                description: 'Trend analysis performed. Threshold breaches detected. ROI calculated automatically.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: BarChart3,
                label: 'Generate',
                description: 'Board-ready reports generated. Trend summaries created. ROI visualizations included.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: FileText,
                label: 'Deliver',
                description: 'Reports delivered automatically. Executive briefings scheduled. Board presentations prepared.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="How It Works"
        description="5-step operational flow for executive reporting"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Dashboard configuration', description: 'Configure executive dashboard. Set threshold alerts. Define ROI parameters.'},
          {time: 'Week 1-2', title: 'Report template setup', description: 'Select report templates. Customize format. Configure delivery schedule.'},
          {time: 'Week 2-3', title: 'Data collection', description: 'Security activities run. Metrics collected. Data aggregated automatically.'},
          {time: 'Week 3-4', title: 'Initial report generation', description: 'Generate first executive report. Review format. Validate accuracy.'},
          {time: 'Month-end', title: 'Quarterly briefing', description: 'Quarterly executive report generated. Board presentation prepared. ROI demonstrated.'},
        ]}
        badge="Timeline"
        heading="Implementation Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'ROI Visibility', value: '↑', direction: 'up', tooltip: 'ROI visibility increases to 100%'},
          {label: 'Report Generation Time', value: '↓', direction: 'down', tooltip: 'Report generation time reduced 95%'},
          {label: 'Board Readiness', value: '↑', direction: 'up', tooltip: 'Board readiness increases to 100%'},
          {label: 'Threshold Alert Time', value: '↓', direction: 'down', tooltip: 'Threshold alert time reduced to real-time'},
          {label: 'Executive Satisfaction', value: '↑', direction: 'up', tooltip: 'Executive satisfaction increases with clear ROI'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Time saved × Executive time cost + Improved budget support = ROI estimate',
          content: 'Example: 40 hours saved per quarter × $200/hour = $8K per quarter. Improved budget support ($50K-200K annually). Annual ROI: $82K-232K+. Industry benchmark: Organizations with automated executive reporting see 95% reduction in report generation time and 100% board satisfaction.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your executive reporting with quantifiable results that demonstrate ROI."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'SOC2',subtitle:'Coming',percentage:95,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What metrics are included in executive reports?',
                answer:
                  'Click rates, report rates, improvement scores, training completion, incident response metrics, ROI calculations, trend analysis, threshold breach alerts, and more. Custom metrics can be added.',
              },
              {
                question: 'How is ROI calculated?',
                answer:
                  'ROI is calculated based on reduced incidents, time savings, and cost avoidance. Formula: (Reduced incidents × Average cost) + (Time saved × Hourly rate) - Program cost. Custom ROI calculations available.',
              },
              {
                question: 'What threshold breach alerts are available?',
                answer:
                  'Threshold breach alerts notify executives when key metrics exceed or fall below defined thresholds. Alerts can be configured for click rates, report rates, incident volumes, and more.',
              },
              {
                question: 'Can we customize report format?',
                answer:
                  'Yes. Report templates are fully customizable. Add your branding, format, and specific metrics. PDF and PowerPoint exports available.',
              },
              {
                question: 'How often are reports generated?',
                answer:
                  'Reports can be generated on-demand or scheduled (weekly, monthly, quarterly). Automatic delivery to executives available.',
              },
              {
                question: 'What trend analysis is included?',
                answer:
                  'Trend analysis shows metric changes over time. Period-over-period comparisons. Year-over-year trends. Visualizations included.',
              },
              {
                question: 'Can we integrate with business intelligence tools?',
                answer:
                  'Yes. Phishy integrates with major BI platforms (Tableau, Power BI, Qlik) via API. Data can be exported for custom analysis.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how executive reports demonstrate ROI and improve board communication.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsExecutiveReportsPage;

