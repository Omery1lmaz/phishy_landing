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
  Server,
  CheckCircle2,
  Lock,
  AlertTriangle,
  Search,
} from 'lucide-react';

const SolutionsPhishySafePage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Bypass Rate',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-primary-300',
      startValue: 100,
      endValue: 20,
      startDelta: 0,
      endDelta: -80,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Detection Rate',
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
      label: 'Infrastructure Security',
      icon: Shield,
      badge: 'Improvement',
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

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Use Case / Email Infrastructure Testing"
        title="Email Infrastructure Security Testing (PhishySafe)"
        description="Test your email security infrastructure against bypass techniques. Identify gaps in SEG/antispam filtering. Get actionable recommendations. Retest after improvements."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing email security infrastructure challenges with systematic testing and actionable recommendations"
        triplets={[
          {
            problem: 'Email security infrastructure gaps unknown',
            impact: 'Sophisticated attacks bypass filters. Malicious emails reach inboxes. Incidents increase.',
            result: 'Bypass techniques identified. Gaps documented. Detection rate increases 60-80%.',
          },
          {
            problem: 'No systematic testing of SEG/antispam',
            impact: 'Filter effectiveness unknown. Configuration issues undetected. False confidence.',
            result: 'Regular testing schedule. Bypass rate tracked. Infrastructure security improved.',
          },
          {
            problem: 'No actionable recommendations for improvement',
            impact: 'Gaps identified but not fixed. Infrastructure remains vulnerable. Risk persists.',
            result: 'Actionable recommendations provided. Retesting validates improvements. Continuous improvement cycle.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure test scenarios. Select bypass techniques to test. Define target email infrastructure.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy test emails with bypass techniques. Send through SEG/antispam infrastructure. Track delivery status.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Analyze bypass results. Identify which techniques succeeded. Document gaps in filtering.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
            key: 'recommend',
                icon: Users,
                label: 'Recommend',
                description: 'Generate actionable recommendations. Prioritize fixes. Provide configuration guidance.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
            key: 'retest',
                icon: BarChart3,
                label: 'Retest',
                description: 'Retest after improvements. Validate fixes. Track improvement over time. Continuous testing cycle.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for email infrastructure testing"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Test configuration', description: 'Configure test scenarios. Select bypass techniques. Define target infrastructure.'},
          {time: 'Week 1-2', title: 'Initial testing', description: 'Deploy test emails. Track bypass results. Identify infrastructure gaps.'},
          {time: 'Week 2', title: 'Analysis & recommendations', description: 'Analyze results. Generate recommendations. Prioritize fixes.'},
          {time: 'Week 3-4', title: 'Implementation', description: 'Implement recommended fixes. Configure SEG/antispam improvements.'},
          {time: 'Month-end', title: 'Retesting & validation', description: 'Retest infrastructure. Validate improvements. Track progress over time.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your email infrastructure security with quantifiable results that reduce bypass rates and improve detection."
        kpis={[
          {label: 'Bypass Rate', value: '↓', direction: 'down', tooltip: 'Bypass rate decreases 60-80%'},
          {label: 'Detection Rate', value: '↑', direction: 'up', tooltip: 'Detection rate increases 60-80%'},
          {label: 'Infrastructure Security', value: '↑', direction: 'up', tooltip: 'Overall infrastructure security improves'},
          {label: 'False Positive Rate', value: '↓', direction: 'down', tooltip: 'False positive rate decreases with tuning'},
          {label: 'Time to Fix', value: '↓', direction: 'down', tooltip: 'Time to fix infrastructure gaps decreases'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented incidents × Average incident cost ($50K-250K) = ROI estimate',
          content: 'Example: 10 prevented incidents × $100K average cost = $1M annual savings. Infrastructure testing cost typically $20K-50K annually. Industry benchmark: Organizations with regular infrastructure testing see 60-80% reduction in email-borne incidents.',
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
                question: 'What bypass techniques are tested?',
                answer:
                  'Domain spoofing, display name spoofing, URL obfuscation, attachment evasion, social engineering techniques, and more. Custom bypass techniques can be configured.',
              },
              {
                question: 'How does PhishySafe test email infrastructure?',
                answer:
                  'PhishySafe sends test emails with various bypass techniques through your email infrastructure. It tracks which emails bypass filters and reach inboxes. Results are analyzed and recommendations provided.',
              },
              {
                question: 'Can we test specific SEG/antispam platforms?',
                answer:
                  'Yes. PhishySafe supports testing against Proofpoint, Mimecast, Microsoft Defender, and other major SEG/antispam platforms. Custom platforms can be configured.',
              },
              {
                question: 'What recommendations are provided?',
                answer:
                  'Actionable recommendations include configuration changes, policy updates, rule adjustments, and best practices. Recommendations are prioritized by impact and ease of implementation.',
              },
              {
                question: 'How often should we test?',
                answer:
                  'Recommended quarterly testing. More frequent testing available. Continuous testing cycles can be configured for ongoing validation.',
              },
              {
                question: 'Can we retest after implementing fixes?',
                answer:
                  'Yes. Retesting validates improvements. Track progress over time. Compare before/after results. Continuous improvement cycle.',
              },
              {
                question: 'What reporting is available?',
                answer:
                  'Detailed test reports show bypass rates, detection rates, infrastructure gaps, recommendations, and improvement tracking. Executive summaries available.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how email infrastructure testing identifies gaps and improves security.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsPhishySafePage;

