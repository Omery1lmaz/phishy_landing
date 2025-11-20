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
  Search,
} from 'lucide-react';

const SolutionsIncidentManagementPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Triage Time',
      icon: Clock,
      badge: 'Reduction',
      color: 'text-primary-300',
      startValue: 100,
      endValue: 10,
      startDelta: 0,
      endDelta: -90,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'False Positives',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-secondary-300',
      startValue: 80,
      endValue: 15,
      startDelta: 0,
      endDelta: -65,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Case Resolution',
      icon: Shield,
      badge: 'Increase',
      color: 'text-white/70',
      startValue: 0,
      endValue: 80,
      startDelta: 0,
      endDelta: 80,
      unit: '%',
      direction: 'up',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Time Saved',
    description: 'Analyst productivity',
    valueLabel: 'Per Analyst',
    value: {
      startValue: 0,
      endValue: 80,
      unit: '%',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Solution / Incident Management"
        title="Automated Triage & Incident Response for SOC Teams"
        description="Reduce triage time from hours to minutes. Automate IOC extraction and threat intelligence lookup. Filter false positives. Improve SOC efficiency and response time."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing incident management challenges with automated triage, enrichment, and false positive filtering"
        triplets={[
          {
            problem: 'Manual triage takes hours per incident',
            impact: 'Analysts overwhelmed. Real threats delayed. Response time increases.',
            result: 'Triage time reduced from hours to minutes. 80-90% time savings.',
          },
          {
            problem: 'Context gathering fragmented across tools',
            impact: 'IOCs not extracted. Threat intelligence missing. Decisions made without data.',
            result: 'Auto-enrichment with IOCs, threat intel, and context. One-click decisions.',
          },
          {
            problem: 'False positives waste analyst time',
            impact: '60-80% of reports are false positives. Productivity decreases. Real threats missed.',
            result: 'False positive rate reduced 70-85%. Automated filtering. Focus on real threats.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure playbooks. Set enrichment rules. Define IOC extraction patterns. Configure escalation workflows.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'User reports suspicious email. Report automatically ingested. Case created instantly.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Auto-enrichment: IOCs extracted, threat intel queried, context gathered. Playbook automation executes. Risk score calculated.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'User receives feedback. Training assigned if needed. Security awareness improved.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Case closed or escalated. Metrics tracked. SOC dashboard updated. Executive reports generated.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for incident management"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Playbook configuration', description: 'Define enrichment rules. Configure IOC extraction. Set up playbook automation workflows.'},
          {time: 'Week 1-2', title: 'Integration setup', description: 'Connect SIEM, SOAR, ticketing systems. Configure threat intelligence feeds.'},
          {time: 'Week 2', title: 'Testing & tuning', description: 'Test auto-enrichment. Tune playbooks. Optimize false positive filtering.'},
          {time: 'Week 3', title: 'Production deployment', description: 'Go live with automated triage. Monitor performance. Adjust as needed.'},
          {time: 'Month-end', title: 'Metrics & optimization', description: 'Review triage time, false positive rate, resolution metrics. Optimize workflows.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Time-to-Triage', value: '↓', direction: 'down', tooltip: 'Triage time reduced from hours to minutes (80-90% reduction)'},
          {label: 'False Positive Rate', value: '↓', direction: 'down', tooltip: 'False positive rate reduced 70-85%'},
          {label: 'Case Resolution', value: '↑', direction: 'up', tooltip: 'Case resolution rate increases 60-80%'},
          {label: 'Analyst Productivity', value: '↑', direction: 'up', tooltip: 'Analyst productivity increases 3-5x'},
          {label: 'Response Time', value: '↓', direction: 'down', tooltip: 'Incident response time decreases 70-85%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Analyst time saved × Average analyst cost ($80K-150K/year) = ROI estimate',
          content: 'Example: 5 analysts × 80% time savings × $100K average cost = $400K annual savings. Faster response prevents incidents from escalating. Industry benchmark: Organizations with automated triage see 80-90% reduction in triage time and 70-85% reduction in false positives.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your incident management with quantifiable results that reduce triage time and false positives."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'SOC2',subtitle:'Coming',percentage:95,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What IOCs are automatically extracted?',
                answer:
                  'URLs, domains, IP addresses, file hashes, email addresses, sender information, attachment metadata. Custom IOC patterns can be configured.',
              },
              {
                question: 'How does auto-enrichment work?',
                answer:
                  'When a user reports an email, Phishy automatically extracts IOCs, queries threat intelligence feeds, gathers email context, and enriches the case with relevant data. All done in seconds.',
              },
              {
                question: 'Can we integrate with our SIEM?',
                answer:
                  'Yes. Phishy integrates with Splunk, QRadar, Sentinel, and other major SIEM platforms via API. Case data can be forwarded automatically.',
              },
              {
                question: 'What playbook automation is available?',
                answer:
                  'Automated risk scoring, false positive filtering, IOC enrichment, threat intelligence lookup, case assignment, escalation workflows. Custom playbooks can be created.',
              },
              {
                question: 'How do we reduce false positives?',
                answer:
                  'Automated filtering based on threat intelligence, IOC reputation, sender reputation, and pattern matching. Machine learning models identify likely false positives. Tuning available.',
              },
              {
                question: 'Can we customize playbooks?',
                answer:
                  'Yes. Playbooks are fully customizable. Define rules, actions, and workflows. Multi-step playbooks supported. Integration with external systems available.',
              },
              {
                question: 'What reporting is available?',
                answer:
                  'SOC dashboard shows triage time, false positive rate, resolution metrics, analyst productivity. Executive reports available. Custom reports exportable to PDF/CSV.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how automated triage reduces response time and improves SOC efficiency.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsIncidentManagementPage;

