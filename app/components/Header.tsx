'use client';

import React, {useEffect, useRef, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {useIsMobile} from '@/hooks/use-mobile';
import {useParams} from 'next/navigation';

import {Link, locales as supportedLocales, usePathname, useRouter, getPathname} from '@/i18n/routing';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {cn} from '@/lib/utils';

type DropdownItem = {
  title: string;
  description: string;
  href?: string;
  icon?: string;
};

type DropdownSection = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  items?: DropdownItem[];
};

type NavVariant = 'default' | 'primary';

interface NavItem {
  label: string;
  href?: string;
  variant?: NavVariant;
  dropdown?: {
    title: string;
    description: string;
    sections?: DropdownSection[];
  };
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocaleDropdownOpen, setIsLocaleDropdownOpen] = useState(false);
  const [activePlatformTab, setActivePlatformTab] = useState(0);
  // Use lazy initialization instead of setState in effect
  const [isMounted] = useState(true);
  const localeCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (localeCloseTimeoutRef.current) {
        clearTimeout(localeCloseTimeoutRef.current);
      }
    };
  }, []);

  const createSections = (value: Record<string, unknown>): DropdownSection[] =>
    Object.values(value).map((section) => {
      const record = section as Record<string, unknown>;
      const items = record.items as Record<string, unknown> | undefined;

      return {
        title: String((record.title as {toString(): string})?.toString() ?? ''),
        description: String((record.description as {toString(): string})?.toString() ?? ''),
        icon: record.icon ? String(record.icon) : undefined,
        href: record.href ? String(record.href) : undefined,
        items: items
          ? Object.values(items).map((item) => {
              const itemRecord = item as Record<string, unknown>;
              return {
                title: String((itemRecord.title as {toString(): string})?.toString() ?? ''),
                description: String((itemRecord.description as {toString(): string})?.toString() ?? ''),
                href: itemRecord.href ? String(itemRecord.href) : undefined,
              } satisfies DropdownItem;
            })
          : undefined,
      } satisfies DropdownSection;
    });

  const flattenProductSections = (sections: DropdownSection[]): DropdownSection[] =>
    sections.flatMap((section): DropdownSection[] => {
      if (section.items && section.items.length > 0) {
        return section.items.map((item) => ({
          title: item.title,
          description: item.description,
          icon: section.icon,
          href: item.href,
        }));
      }
      return [section];
    });

  const createDropdown = (path: string): NavItem['dropdown'] => {
    const title = t(`${path}.title`);
    const description = t(`${path}.description`);
    const rawSections = t.raw(`${path}.sections`) as unknown;

    let sections: DropdownSection[] | undefined;
    if (rawSections && typeof rawSections === 'object') {
      const parsedSections = createSections(rawSections as Record<string, unknown>);
      sections = path === 'nav.products.dropdown' ? flattenProductSections(parsedSections) : parsedSections;
    }

    return {
      title,
      description,
      ...(sections ? {sections} : {}),
    };
  };

  const renderSectionIcon = (iconName?: string) => {
    const baseIconProps = {className: 'h-5 w-5', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round'} as const;

    switch (iconName) {
      case 'sparkle':
        return (
          <svg {...baseIconProps}>
            <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95 5.636 18.364m0-12.728 1.414 1.414m10.607 10.607 1.414 1.414" />
            <path d="M12 8.5 13.75 13 18 14.75 13.75 16.5 12 21l-1.75-4.5L6 14.75 10.25 13z" />
          </svg>
        );
      case 'target':
        return (
          <svg {...baseIconProps}>
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 5V3m7 9h2M12 21v-2M5 12H3" />
          </svg>
        );
      case 'shield':
        return (
          <svg {...baseIconProps}>
            <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'layers':
        return (
          <svg {...baseIconProps}>
            <path d="m12 3 9 5-9 5-9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 17 9 5 9-5" />
          </svg>
        );
      case 'compass':
        return (
          <svg {...baseIconProps}>
            <circle cx="12" cy="12" r="9" />
            <path d="m14.121 9.879-4.242 1.414-1.414 4.242 4.242-1.414z" />
          </svg>
        );
      case 'bolt':
        return (
          <svg {...baseIconProps}>
            <path d="m13 2-7 12h6l-1 8 7-12h-6Z" />
          </svg>
        );
      case 'globe':
        return (
          <svg {...baseIconProps}>
            <circle cx="12" cy="12" r="9" />
            <path d="M2.5 9h19M2.5 15h19M12 3c3 4 3 14 0 18-3-4-3-14 0-18Z" />
          </svg>
        );
      case 'users':
        return (
          <svg {...baseIconProps}>
            <path d="M7 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
            <circle cx="9" cy="8" r="4" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'puzzle':
        return (
          <svg {...baseIconProps}>
            <path d="M9.5 2H8a2 2 0 0 0-2 2v1.5a1.5 1.5 0 1 0 0 3V10l-2.5 1.5V14a2 2 0 0 0 2 2H7l2.5-1.5V16a2 2 0 0 0 2 2H13l1.5-2.5H14a1.5 1.5 0 1 1 0-3h1.5l1.5-2.5V8a2 2 0 0 0-2-2h-1.5a1.5 1.5 0 1 1 0-3H12Z" />
          </svg>
        );
      case 'handshake':
        return (
          <svg {...baseIconProps}>
            <path d="m3 12 7-7a4 4 0 0 1 5.657 0L21 10.343" />
            <path d="m8 17 4-4 3 3a2 2 0 1 0 3-3l-4-4" />
            <path d="m2 16 6 6" />
            <path d="m12 8-4 4" />
          </svg>
        );
      case 'chart':
        return (
          <svg {...baseIconProps}>
            <path d="M3 3v18h18" />
            <path d="M7 13l3 3 4-6 4 4" />
          </svg>
        );
      case 'building':
        return (
          <svg {...baseIconProps}>
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12h12" />
            <path d="M6 16h12" />
            <path d="M6 20h12" />
            <path d="M10 6h4" />
            <path d="M10 8h4" />
          </svg>
        );
      case 'rocket':
        return (
          <svg {...baseIconProps}>
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        );
      case 'heart':
        return (
          <svg {...baseIconProps}>
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        );
      case 'server':
        return (
          <svg {...baseIconProps}>
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
          </svg>
        );
      case 'dollar':
        return (
          <svg {...baseIconProps}>
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'phone':
        return (
          <svg {...baseIconProps}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case 'message':
        return (
          <svg {...baseIconProps}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'qr':
        return (
          <svg {...baseIconProps}>
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3" />
            <path d="M21 21h-3" />
            <path d="M12 7v3" />
            <path d="M7 12h3" />
          </svg>
        );
      case 'ai':
        return (
          <svg {...baseIconProps}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        );
      case 'book':
        return (
          <svg {...baseIconProps}>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        );
      case 'video':
        return (
          <svg {...baseIconProps}>
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
        );
      case 'quiz':
        return (
          <svg {...baseIconProps}>
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        );
      case 'file':
        return (
          <svg {...baseIconProps}>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
      case 'game':
        return (
          <svg {...baseIconProps}>
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg {...baseIconProps}>
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'trending-up':
        return (
          <svg {...baseIconProps}>
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        );
      case 'shield-alert':
        return (
          <svg {...baseIconProps}>
            <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        );
      default:
        return (
          <svg {...baseIconProps}>
            <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5Z" />
          </svg>
        );
    }
  };

  const navigationItems: NavItem[] = [
    {
      label: 'Platform',
      dropdown: {
        title: 'Platform',
        description: 'Comprehensive security solutions for your organization.',
        sections: [
          {
            title: 'Simulation',
            description: 'Realistic phishing attack simulations',
            icon: 'target',
            items: [
              { title: 'Phishing', description: 'Email-based phishing simulations', href: '/products/simulation', icon: 'target' },
              { title: 'Vishing', description: 'Voice call phishing simulations', href: '/products/simulation', icon: 'phone' },
              { title: 'Smishing', description: 'SMS-based phishing simulations', href: '/products/simulation', icon: 'message' },
              { title: 'QR Phishing', description: 'QR code phishing attacks', href: '/products/simulation', icon: 'qr' },
              { title: 'Deepfake Phishing', description: 'AI-powered deepfake attacks', href: '/products/simulation', icon: 'ai' },
            ],
          },
          {
            title: 'Training',
            description: 'Interactive security training modules',
            icon: 'sparkle',
            items: [
              { title: 'Courses', description: 'Comprehensive security courses', href: '/products/training', icon: 'book' },
              { title: 'Videos', description: 'Educational video content', href: '/products/training', icon: 'video' },
              { title: 'Quizzes', description: 'Knowledge assessment quizzes', href: '/products/training', icon: 'quiz' },
              { title: 'Attachments', description: 'Downloadable training materials', href: '/products/training', icon: 'file' },
              { title: 'Games', description: 'Gamified learning experiences', href: '/products/training', icon: 'game' },
            ],
          },
          {
            title: 'Incident Response',
            description: 'Rapid threat response and management',
            icon: 'shield',
            items: [
              { title: 'Addon', description: 'Additional response capabilities', href: '/products/incident-response', icon: 'puzzle' },
              { title: 'Case Management', description: 'Organize and track security incidents', href: '/products/incident-response', icon: 'briefcase' },
            ],
          },
          {
            title: 'PhishySafe',
            description: 'Email infrastructure security testing',
            icon: 'layers',
            items: [
              { title: 'Email Infrastructure Testing', description: 'Test your email security infrastructure', href: '/products/phishypot', icon: 'server' },
            ],
          },
        ],
      },
    },
    {
      label: 'Solution',
      dropdown: {
        title: 'Solution',
        description: 'Tailored solutions for your organization.',
        sections: [
          {
            title: 'By Role',
            description: 'Solutions tailored to your role',
            icon: 'users',
            items: [
              { title: 'CISO & Risk Leaders', description: 'Program KPIs, quarterly goals, management reports', href: '/solutions/ciso-risk-leaders', icon: 'shield' },
              { title: 'SecOps / SOC', description: 'Triage & playbook, automation, false positive reduction', href: '/solutions/secops-soc', icon: 'shield-check' },
              { title: 'L&D / Training', description: 'Micro content plan, completion/certification, segmentation', href: '/solutions/ld-training', icon: 'book' },
              { title: 'MSSP & White-Label', description: 'Multi-tenant management, branded/unbranded interface, monthly summary & billing', href: '/solutions/mssp', icon: 'handshake' },
            ],
          },
          {
            title: 'By Company Size',
            description: 'Solutions scaled for your organization',
            icon: 'chart',
            items: [
              { title: 'Enterprises', description: 'Automation, integration, role-based dashboards', href: '/solutions/enterprises', icon: 'building' },
              { title: 'Mid-market', description: 'Quick setup, ready templates, simple reports', href: '/solutions/mid-market', icon: 'chart' },
              { title: 'Startups / SMB', description: 'Affordable pricing, easy use, basic metrics', href: '/solutions/startups', icon: 'rocket' },
              { title: 'Nonprofits', description: 'Special pricing, guide content, sustainable program', href: '/solutions/nonprofits', icon: 'heart' },
            ],
          },
          {
            title: 'By Use Case',
            description: 'Solutions for specific security needs',
            icon: 'compass',
            items: [
              { title: 'Phishing / Smishing / Vishing Programs', description: 'Ready templates, segment-based sending, training triggers', href: '/solutions/phishing-programs', icon: 'target' },
              { title: 'BEC (CEO Fraud) Scenarios', description: 'IBAN change, approval flow, management summary', href: '/solutions/bec-scenarios', icon: 'shield-alert' },
              { title: 'Incident Management & Triage', description: 'Auto enrichment, IOC extraction, close/escalate', href: '/solutions/incident-management', icon: 'shield' },
              { title: 'Email Infrastructure Testing (PhishySafe)', description: 'Bypass detection, recommendation set, retest', href: '/solutions/phishysafe', icon: 'server' },
              { title: 'Targeted Training (High Risk Groups)', description: 'Clickers segment, micro training, improvement score', href: '/solutions/targeted-training', icon: 'trending-up' },
              { title: 'Security Onboarding for New Employees', description: 'First-day security training, policy acknowledgment, baseline assessment', href: '/solutions/security-onboarding', icon: 'users' },
              { title: 'Compliance Reporting', description: 'ISO/NIST/KVKK mapping, evidence packages (PDF/CSV), audit trail', href: '/solutions/compliance-reporting', icon: 'file' },
              { title: 'Executive & Board Reports', description: 'Trend summary, threshold breach signals, ROI visibility', href: '/solutions/executive-reports', icon: 'chart' },
            ],
          },
          {
            title: 'By Industry',
            description: 'Industry-specific security solutions',
            icon: 'globe',
            items: [
              { title: 'Financial Services', description: 'BEC-focused scenarios, approval culture, compliance evidence', href: '/solutions/financial-services', icon: 'dollar' },
              { title: 'Government / Public Sector', description: 'On-prem/air-gapped, transparent reporting, accessible UX', href: '/solutions/government', icon: 'building' },
              { title: 'Energy & Critical Infrastructure', description: 'Field-focused micro training, incident mitigation, risky moments', href: '/solutions/energy', icon: 'bolt' },
              { title: 'Telecom & ISP', description: 'Large user base, segmentation, centralized reports', href: '/solutions/telecom', icon: 'phone' },
              { title: 'Healthcare / Hospitals', description: 'Short content for clinical teams, PHI sensitivity, audit requirements', href: '/solutions/healthcare', icon: 'heart' },
            ],
          },
        ],
      },
    },
    {
      label: 'Resources',
      dropdown: {
        title: 'Resources',
        description: 'Educational content and resources.',
        sections: [
          {
            title: 'Docs',
            description: 'Comprehensive documentation and guides',
            icon: 'file',
            items: [
              { title: 'Documentation', description: 'Complete API and user guides', href: '/docs', icon: 'file' },
            ],
          },
          {
            title: 'Blog',
            description: 'Latest security insights and updates',
            icon: 'sparkle',
            items: [
              { title: 'Blog Posts', description: 'Security articles and insights', href: '/blog', icon: 'sparkle' },
            ],
          },
          {
            title: 'Newsletter',
            description: 'Stay updated with security news',
            icon: 'message',
            items: [
              { title: 'Subscribe', description: 'Get weekly security updates', href: '/newsletter', icon: 'message' },
            ],
          },
        ],
      },
    },
    {
      label: 'Partnerships',
      dropdown: {
        title: 'Partnerships',
        description: 'Partner with Phishy.',
        sections: [
          {
            title: 'MSSP Partnerships',
            description: 'Managed Security Service Provider partnerships',
            icon: 'handshake',
            items: [
              { title: 'MSSP Program', description: 'Join our MSSP partner program', href: '/partnerships/mssp', icon: 'handshake' },
            ],
          },
          {
            title: 'Pentesters',
            description: 'Partner with penetration testing professionals',
            icon: 'shield',
            items: [
              { title: 'Pentester Program', description: 'Partner with security experts', href: '/partnerships/pentesters', icon: 'shield' },
            ],
          },
        ],
      },
    },
    {
      label: 'Company',
      dropdown: {
        title: 'Company',
        description: 'Learn more about Phishy.',
        sections: [
          {
            title: 'About Us',
            description: 'Our mission, story, and leadership team',
            icon: 'users',
            items: [
              { title: 'About Phishy', description: 'Learn about our mission and team', href: '/company/about', icon: 'users' },
            ],
          },
        ],
      },
    },
    {
      label: t('nav.contact.label'),
      href: '/contact-us',
    },
  ];

  const openLocaleDropdown = () => {
    if (localeCloseTimeoutRef.current) {
      clearTimeout(localeCloseTimeoutRef.current);
    }
    setIsLocaleDropdownOpen(true);
  };

  const closeLocaleDropdown = () => {
    if (localeCloseTimeoutRef.current) {
      clearTimeout(localeCloseTimeoutRef.current);
    }
    setIsLocaleDropdownOpen(false);
  };

  const scheduleLocaleDropdownClose = () => {
    if (localeCloseTimeoutRef.current) {
      clearTimeout(localeCloseTimeoutRef.current);
    }
    localeCloseTimeoutRef.current = setTimeout(() => {
      setIsLocaleDropdownOpen(false);
    }, 150);
  };

  const toggleLocaleDropdown = () => {
    if (isLocaleDropdownOpen) {
      closeLocaleDropdown();
      return;
    }
    openLocaleDropdown();
  };

  const handleLocaleChange = async (nextLocale: string) => {
    if (nextLocale === locale) {
      closeLocaleDropdown();
      return;
    }

    // Get the actual pathname from window.location if available (client-side)
    let actualPathname: string = typeof pathname === 'string' ? pathname : String(pathname);
    if (typeof window !== 'undefined' && window.location.pathname) {
      actualPathname = window.location.pathname;
    }
    
    // Remove locale prefix from pathname if present (e.g., /tr/blog/slug -> /blog/slug)
    const pathWithoutLocale = actualPathname.replace(/^\/(tr|en)/, '') || '/';
    
    // If we're on a blog post page, include the slug parameter
    if (pathname === '/blog/[slug]' || pathWithoutLocale.startsWith('/blog/')) {
      // Extract slug from actual pathname - try multiple methods
      let currentSlug: string | undefined;
      
      // Method 1: Try from params
      if (params?.slug && typeof params.slug === 'string') {
        currentSlug = params.slug;
      }
      
      // Method 2: Extract from pathname
      if (!currentSlug && pathWithoutLocale.startsWith('/blog/')) {
        const parts = pathWithoutLocale.split('/blog/');
        if (parts.length > 1 && parts[1]) {
          currentSlug = parts[1].split('/')[0]; // Get first part after /blog/
        }
      }
      
      // Method 3: Try from actualPathname directly
      if (!currentSlug && actualPathname.includes('/blog/')) {
        const parts = actualPathname.split('/blog/');
        if (parts.length > 1 && parts[1]) {
          currentSlug = parts[1].split('/')[0];
        }
      }
      
      if (currentSlug && currentSlug !== '[slug]' && currentSlug.length > 0) {
        // Get corresponding slug in target locale
        try {
          const response = await fetch(
            `/api/blog/slug?slug=${encodeURIComponent(currentSlug)}&currentLocale=${locale}&targetLocale=${nextLocale}`
          );
          
          if (response.ok) {
            const data = await response.json();
            const targetSlug = data.slug;
            
            if (targetSlug) {
              // Use pathname template - router.replace will add locale prefix automatically
              // Don't include locale in the pathname, just pass it as option
              router.replace(`/blog/${targetSlug}`, {locale: nextLocale});
              closeLocaleDropdown();
              return;
            }
          }
        } catch (error) {
          console.error('Error fetching corresponding blog slug:', error);
        }
        
        // Fallback: try with current slug (might work if slugs are the same)
        router.replace(`/blog/${currentSlug}`, {locale: nextLocale});
      } else {
        // Fallback: just change locale on current path
        router.replace(pathname, {locale: nextLocale});
      }
    } else {
      router.replace(pathname, {locale: nextLocale});
    }
    closeLocaleDropdown();
  };

  return (
    <header
      className={`fixed  overflow-y-visible z-99999 w-fit m-auto mt-3 rounded-xl top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-transparent backdrop-blur-xl border-b border-primary-600/30 shadow-2xl shadow-primary-600/10'
          : 'bg-transparent'
      }`}
    >
      {/* Navigation Bar */}
      <nav className="container  mx-auto px-4 lg:px-6 py-4 flex items-center justify-center relative z-10 gap-8 lg:gap-12">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="text-xl lg:text-2xl font-bold gradient-text cursor-pointer">
            {t('brand')}
          </Link>
        </div>
        
        {/* Navigation Links - Centered */}
        <div className="hidden lg:flex items-center gap-1 max-w-xl">
          {isMounted ? (
            <NavigationMenu viewport={!isMobile}>
            <NavigationMenuList className="flex-wrap gap-1">
          {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 text-gray-300 hover:text-white bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent",
                        item.variant === 'primary' && 'bg-gradient-to-r from-primary-600/80 to-secondary-600/80 text-white border border-primary-600/40 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-[1.02]'
                      )}>
                  {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className={cn(
                          "relative rounded-lg border bg-popover/95 backdrop-blur-xl text-popover-foreground shadow-lg",
                          item.label === 'Platform' ? 'w-[900px] p-0' : 
                          item.label === 'Solution' ? 'w-[1000px] max-w-[95vw] p-4' : 
                          item.label === 'Resources' || item.label === 'Partnerships' ? 'w-[400px] p-4' :
                          item.label === 'Company' ? 'w-auto min-w-[280px] p-4' :
                          'w-[500px] p-8'
                        )}>
                          {/* Platform Menu - Tab Layout with CTA */}
                          {item.label === 'Platform' ? (
                            <div className="flex flex-col">
                              {/* Tab Content */}
                              <div className="flex">
                                {/* Left Sidebar - Tabs */}
                                <div className="w-80 border-r p-4 space-y-1">
                                  {item.dropdown.sections?.map((section, sectionIndex) => (
                                    <button
                                      key={sectionIndex}
                                      type="button"
                                      onClick={() => setActivePlatformTab(sectionIndex)}
                                      className={cn(
                                        "w-full text-left rounded-md px-3 py-2.5 transition-colors",
                                        activePlatformTab === sectionIndex
                                          ? "bg-accent text-accent-foreground"
                                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                                      )}
                                    >
                                      <div className="flex items-center gap-2.5">
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                                          {renderSectionIcon(section.icon)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium leading-none whitespace-nowrap">{section.title}</div>
                                          <p className="text-xs text-muted-foreground leading-snug whitespace-nowrap truncate">{section.description}</p>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 p-6">
                                  {item.dropdown.sections?.[activePlatformTab] && (
                                    <ul className="space-y-1.5">
                                      {item.dropdown.sections[activePlatformTab].items?.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <NavigationMenuLink asChild>
                                            <Link
                                              href={subItem.href || '#'}
                                              className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                            >
                                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                                                {renderSectionIcon(subItem.icon || item.dropdown?.sections?.[activePlatformTab]?.icon)}
                                              </div>
                                              <div className="flex-1 min-w-0 space-y-0.5">
                                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                                <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{subItem.description}</p>
                                              </div>
                                            </Link>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                      </div>

                              {/* Bottom CTA */}
                              <Link
                                href="/request-demo"
                                className="inline-flex items-center justify-center gap-2 rounded-b-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-primary-500 hover:via-primary-400 hover:to-secondary-500 transition-all"
                              >
                                <span>Try Free - Get Started</span>
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </Link>
                            </div>
                          ) : item.label === 'Solution' ? (
                            /* Solution Menu - 3 Column Layout: By Role+Size (left), By Use Case (middle), By Industry (right) */
                            <div className="grid grid-cols-3 gap-4">
                              {/* Left Column: By Role + By Company Size stacked */}
                              <div className="space-y-4">
                                {item.dropdown.sections?.slice(0, 2).map((section, sectionIndex) => (
                                  <div key={sectionIndex} className="space-y-2">
                                    <h4 className="text-xs font-semibold leading-none h-6 flex items-center uppercase tracking-wide">{section.title}</h4>
                                    <ul className="space-y-1">
                                      {section.items?.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <NavigationMenuLink asChild>
                                            <Link
                                              href={subItem.href || '#'}
                                              className="group flex items-start gap-2 rounded-md px-1.5 py-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                            >
                                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground mt-0.5">
                                                {renderSectionIcon(subItem.icon || section.icon)}
                                              </div>
                                              <div className="flex-1 min-w-0 space-y-0.5">
                                                <div className="text-xs font-medium leading-tight">{subItem.title}</div>
                                                <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">{subItem.description}</p>
                                              </div>
                                            </Link>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              {/* Middle and Right Columns: By Use Case and By Industry */}
                              {item.dropdown.sections?.slice(2).map((section, sectionIndex) => (
                                <div key={sectionIndex + 2} className="space-y-2">
                                  <h4 className="text-xs font-semibold leading-none h-6 flex items-center uppercase tracking-wide">{section.title}</h4>
                                  <ul className="space-y-1">
                                    {section.items?.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <NavigationMenuLink asChild>
                                          <Link
                                            href={subItem.href || '#'}
                                            className="group flex items-start gap-2 rounded-md px-1.5 py-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                          >
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground mt-0.5">
                                              {renderSectionIcon(subItem.icon || section.icon)}
                                            </div>
                                            <div className="flex-1 min-w-0 space-y-0.5">
                                              <div className="text-xs font-medium leading-tight">{subItem.title}</div>
                                              <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">{subItem.description}</p>
                                            </div>
                                          </Link>
                                        </NavigationMenuLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : item.label === 'Resources' || item.label === 'Partnerships' || item.label === 'Company' ? (
                            /* Resources, Partnerships, Company - Same font sizes as Solution */
                            <ul className="space-y-1.5">
                              {item.dropdown.sections?.flatMap((section, sectionIndex) => 
                                section.items?.map((subItem, subIndex) => (
                                  <li key={`${sectionIndex}-${subIndex}`}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={subItem.href || '#'}
                                        className="group flex items-center gap-2 rounded-md px-1.5 py-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                      >
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                                          {renderSectionIcon(subItem.icon || section.icon)}
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-0.5">
                                          <div className="text-xs font-medium leading-tight">{subItem.title}</div>
                                          <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">{subItem.description}</p>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                )) || []
                              )}
                            </ul>
                          ) : (
                            /* Other Menus - Standard Layout */
                            <>
                              {/* Header Section - Only for non-Solution menus */}
                              <div className="mb-6 pb-4 border-b">
                                <h3 className="text-lg font-semibold leading-none mb-2">{item.dropdown.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.dropdown.description}</p>
                              </div>
                              <ul className={cn(
                                "grid gap-4",
                                item.label === 'Platform' ? 'grid-cols-2' : 'grid-cols-1'
                              )}>
                                {item.dropdown.sections?.map((section, sectionIndex) => (
                                  <li key={sectionIndex}>
                                    {section.href ? (
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={section.href}
                                          className="group flex items-start gap-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                        >
                                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                                            {renderSectionIcon(section.icon)}
                                          </div>
                                          <div className="flex-1 space-y-1">
                                            <div className="text-sm font-semibold leading-none">{section.title}</div>
                                            <p className="text-xs text-muted-foreground leading-snug">{section.description}</p>
                              </div>
                            </Link>
                                      </NavigationMenuLink>
                          ) : (
                                      <div className="group rounded-md p-4">
                              <div className="flex items-start gap-4">
                                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                                  {renderSectionIcon(section.icon)}
                                </div>
                                          <div className="flex-1 space-y-2">
                                  <div>
                                              <h4 className="text-sm font-semibold leading-none mb-1">{section.title}</h4>
                                              <p className="text-xs text-muted-foreground leading-snug">{section.description}</p>
                                  </div>
                                  {/* Sub-items */}
                                  {section.items && section.items.length > 0 && (
                                              <ul className="space-y-2 pt-3 border-t">
                                      {section.items.map((subItem, subIndex) => (
                                                  <li key={subIndex}>
                                                    {subItem.href ? (
                                                      <NavigationMenuLink asChild>
                                          <Link
                                            href={subItem.href}
                                                          className="block rounded-sm px-2 py-1.5 text-xs hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                          >
                                                          <div className="font-medium leading-none">{subItem.title}</div>
                                                          <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{subItem.description}</p>
                                          </Link>
                                                      </NavigationMenuLink>
                                                    ) : (
                                                      <div className="block rounded-sm px-2 py-1.5 text-xs">
                                                        <div className="font-medium leading-none">{subItem.title}</div>
                                                        <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{subItem.description}</p>
                                                      </div>
                                                    )}
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </div>
                                        </div>
                                    </div>
                                  )}
                                  </li>
                                ))}
                              </ul>
                            </>
                        )}
                      </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={cn(
                      navigationMenuTriggerStyle(),
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 text-gray-300 hover:text-white bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent",
                      item.variant === 'primary' && 'bg-gradient-to-r from-primary-600/80 to-secondary-600/80 text-white border border-primary-600/40 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-[1.02]'
                    )}>
                      <Link href={item.href || '#'}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          ) : (
            <div className="flex items-center gap-1">
              {navigationItems.map((item, index) => (
                <div key={index} className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300">
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dashboard Link & Get Demo Button - Right */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div
            className="relative group"
            onMouseEnter={openLocaleDropdown}
            onMouseLeave={scheduleLocaleDropdownClose}
          >
            <span className="sr-only">{t('languageSwitcher.label')}</span>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isLocaleDropdownOpen}
              onClick={(event) => {
                event.preventDefault();
                toggleLocaleDropdown();
              }}
              className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-200 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span>{t(`languageSwitcher.options.${locale}`)}</span>
              <svg
                className={`h-3 w-3 transition-transform duration-300 ${isLocaleDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isLocaleDropdownOpen && (
              <div
                className="absolute right-0 top-full z-[9999] w-56 pt-2 animate-fade-in"
                onMouseEnter={openLocaleDropdown}
                onMouseLeave={scheduleLocaleDropdownClose}
              >
                <div className="absolute top-0 left-0 right-0 h-2" />
                <div className="relative rounded-2xl border border-white/10 p-4 shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/95 via-gray-950/98 to-black/95 backdrop-blur-2xl border border-white/20" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/15 via-transparent to-secondary-600/15" />
                  <div className="relative z-10 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-300">
                      {t('languageSwitcher.label')}
                    </p>
                    <div className="space-y-2">
                      {supportedLocales.map((availableLocale) => {
                        const isActive = availableLocale === locale;

                        return (
                          <button
                            key={availableLocale}
                            type="button"
                            role="option"
                            aria-selected={isActive}
                            onClick={(event) => {
                              event.preventDefault();
                              handleLocaleChange(availableLocale);
                            }}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                              isActive
                                ? 'bg-white/15 text-white border border-primary-600/40 shadow-inner'
                                : 'bg-white/8 text-gray-200 hover:text-white border border-transparent hover:border-primary-600/40 hover:bg-white/15'
                            }`}
                          >
                            <span className="truncate">
                              {t(`languageSwitcher.options.${availableLocale}`)}
                            </span>
                            {isActive ? (
                              <svg
                                className="h-3.5 w-3.5 text-primary-300"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.5 8.5 6.5 11.5 12.5 5.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/0 via-primary-600/5 to-secondary-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            )}
          </div>
          <a 
            href="#demo" 
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 cursor-pointer"
          >
            {t('cta.getDemo')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
