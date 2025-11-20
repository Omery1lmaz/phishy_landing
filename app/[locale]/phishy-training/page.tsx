'use client';

export const runtime = 'edge';

import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/phishy-training/HeroSection';
import {useTranslations} from 'next-intl';

type RunSimulationsFeature = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  bullets: string[];
};

type ChartPoint = {
  x: number;
  y: number;
  label: string;
};

type EngagementMetric = {
  label: string;
  value: string;
};

type IncidentStat = {
  value: string;
  label: string;
};

type AnalyticsCard = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
};

type StatisticsCard = {
  title: string;
  metricLabel: string;
  metricValue: string;
  metricDelta: string;
  barHeights: number[];
  chart: {
    yAxisTicks: number[];
    clicks: ChartPoint[];
    reports: ChartPoint[];
    legend: {
      clicks: string;
      reports: string;
    };
  };
};

type EngagementCard = {
  title: string;
  donut: {
    percentage: number;
    centerLabel: string;
    centerSubLabel: string;
    callout: string;
  };
  metrics: EngagementMetric[];
};

type IncidentCard = {
  badge: string;
  title: string;
  description: string;
  stats: IncidentStat[];
};

// Run Simulations Section Component
const RunSimulationsSection: React.FC = () => {
  const t = useTranslations('Pages.PhishyTrainingPage');
  const section = 'RunSimulations' as const;
  const features = [
    {key: 'liveMonitoring', image: '/LiveCampaignMonitoring.png'},
    {key: 'interactionTracking', image: '/ClickandInteractionTracking.png'},
    {key: 'fileTracking', image: '/File Download Tracking.png'},
    {key: 'statistics', image: '/CampaignStatistics.png'},
  ].map(
    (config) => ({
      title: t(`${section}.features.${config.key}.title`),
      description: t(`${section}.features.${config.key}.description`),
      longDescription: t(`${section}.features.${config.key}.longDescription`),
      image: config.image,
      bullets: (() => {
        const raw = t.raw(`${section}.features.${config.key}.bullets`);
        return Array.isArray(raw) ? raw : [];
      })(),
    }) satisfies RunSimulationsFeature,
  );

  return (
    <section
      id="run-simulations"
      className="py-24 relative overflow-hidden"
    >
      {/* Background - Almost black */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Top gradient transition - connects from prepare section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary-600/10 via-primary-600/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary-600/8 via-secondary-600/5 to-transparent pointer-events-none z-0" />
      
      {/* Multiple Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-secondary-600/12 to-primary-600/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-primary-600/5 to-primary-600/10 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-secondary-600/5 to-secondary-600/8 pointer-events-none z-0" />
      
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(127,61,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(127,61,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Animated particles/dots with glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { size: 5.8, left: 41.2, top: 10, duration: 6.5, delay: 1.5, isPrimary: true },
          { size: 9.9, left: 98.8, top: 4, duration: 13.8, delay: 1.6, isPrimary: false },
          { size: 9.3, left: 64.2, top: 32.8, duration: 8.4, delay: 2.9, isPrimary: true },
          { size: 6.3, left: 60.1, top: 73.1, duration: 11.4, delay: 2.2, isPrimary: false },
          { size: 8.3, left: 2.3, top: 57.5, duration: 6.2, delay: 2.5, isPrimary: true },
          { size: 5.3, left: 29.4, top: 5.2, duration: 6.2, delay: 2.9, isPrimary: false },
          { size: 5.9, left: 93.8, top: 15.3, duration: 12.1, delay: 2.5, isPrimary: true },
          { size: 9.9, left: 14.9, top: 76.8, duration: 12.2, delay: 0.2, isPrimary: false },
          { size: 8.0, left: 64.2, top: 88.8, duration: 13.9, delay: 1.0, isPrimary: true },
          { size: 8.6, left: 43.6, top: 93.8, duration: 8.7, delay: 2.8, isPrimary: false },
          { size: 5.8, left: 90.9, top: 72.4, duration: 13.7, delay: 0.9, isPrimary: true },
          { size: 6.7, left: 13.5, top: 77.1, duration: 8.4, delay: 2.3, isPrimary: false },
          { size: 4.9, left: 97.5, top: 47.5, duration: 8.3, delay: 2.2, isPrimary: true },
          { size: 9.2, left: 9.8, top: 37.6, duration: 6.2, delay: 0.8, isPrimary: false },
          { size: 4.8, left: 49.9, top: 55.9, duration: 10.6, delay: 0.2, isPrimary: true },
          { size: 9.8, left: 77.5, top: 32, duration: 13.1, delay: 1.5, isPrimary: false },
          { size: 4.8, left: 0.1, top: 3.1, duration: 13.4, delay: 1.8, isPrimary: true },
          { size: 4.0, left: 44.3, top: 99.7, duration: 13.3, delay: 1.8, isPrimary: false },
          { size: 8.9, left: 56.5, top: 59.6, duration: 10.7, delay: 1.5, isPrimary: true },
          { size: 4.2, left: 45.6, top: 40.2, duration: 6.0, delay: 2.8, isPrimary: false },
          { size: 6.8, left: 18.3, top: 71.2, duration: 11.7, delay: 2.3, isPrimary: true },
          { size: 6.7, left: 42.9, top: 7.3, duration: 12.7, delay: 2.7, isPrimary: false },
          { size: 4.4, left: 59.3, top: 36.2, duration: 13.9, delay: 1.4, isPrimary: true },
          { size: 9.3, left: 4.2, top: 89.5, duration: 12.9, delay: 2.6, isPrimary: false },
          { size: 8.7, left: 62.1, top: 94.5, duration: 11.3, delay: 2.1, isPrimary: true },
          { size: 4.2, left: 34.5, top: 58.5, duration: 13.3, delay: 2.4, isPrimary: false },
          { size: 8.9, left: 53.2, top: 57.5, duration: 8.0, delay: 2.0, isPrimary: true },
          { size: 6.3, left: 41.5, top: 8.8, duration: 6.1, delay: 1.5, isPrimary: false },
          { size: 5.2, left: 9.5, top: 9.8, duration: 10.3, delay: 0.8, isPrimary: true },
          { size: 4.7, left: 58.0, top: 4.4, duration: 8.3, delay: 1.2, isPrimary: false },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              background: dot.isPrimary 
                ? 'radial-gradient(circle, rgba(127, 61, 255, 0.8) 0%, rgba(127, 61, 255, 0.4) 50%, transparent 100%)'
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
              animation: `dot-float ${dot.duration}s ease-in-out infinite, ${dot.isPrimary ? 'dot-glow' : 'dot-glow-blue'} ${dot.duration * 0.8}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-600/5 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-600/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t(`${section}.title`)}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t(`${section}.subtitle`)}
          </p>
        </div>

        {/* Features Grid - Separate Cards and Images */}
        <div className="max-w-7xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Card */}
              <div className="relative group h-full rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-white/0 backdrop-blur-sm group-hover:scale-[1.02] min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-6"
                  priority={false}
                />
              </div>
              
              {/* Content Card */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
                <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full min-h-[400px] flex flex-col overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-white/0 backdrop-blur-sm group-hover:scale-[1.02] p-6 lg:p-8">
                  {/* Badge/Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-primary-500/30 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-600/50 to-transparent" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 drop-shadow-md">
                    {feature.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {feature.bullets.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5" />
                        <span className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Donut chart for email engagement - moved outside to avoid creating during render
const DonutChart = ({
    percentage,
    centerLabel,
    centerSubLabel,
  }: {
    percentage: number;
    centerLabel: string;
    centerSubLabel: string;
  }) => {
    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#donutGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          <defs>
            <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F3DFF" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">{centerLabel}</div>
          <div className="text-sm text-gray-400 mt-1">{centerSubLabel}</div>
        </div>
      </div>
    );
};

// Line chart for campaign activity - moved outside to avoid creating during render
const LineChart = ({
    clicksData,
    reportsData,
    yAxisTicks,
    legend,
  }: {
    clicksData: ChartPoint[];
    reportsData: ChartPoint[];
    yAxisTicks: number[];
    legend: {
      clicks: string;
      reports: string;
    };
  }) => {
    const width = 600;
    const height = 200;
    const padding = {top: 15, right: 40, bottom: 30, left: 40};
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const scaleX = (val: number) => padding.left + (val / 100) * chartWidth;
    const scaleY = (val: number) => padding.top + chartHeight - (val / 100) * chartHeight;

    const createSmoothPath = (points: ChartPoint[]) => {
      if (points.length === 0) return '';

      let path = `M ${scaleX(points[0].x)} ${scaleY(points[0].y)}`;

      for (let i = 1; i < points.length; i++) {
        const prevPoint = points[i - 1];
        const currentPoint = points[i];
        const nextPoint = points[i + 1];

        if (nextPoint) {
          const cp1x = scaleX(prevPoint.x + (currentPoint.x - prevPoint.x) * 0.5);
          const cp1y = scaleY(prevPoint.y);
          const cp2x = scaleX(currentPoint.x - (nextPoint.x - currentPoint.x) * 0.5);
          const cp2y = scaleY(currentPoint.y);
          path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${scaleX(currentPoint.x)} ${scaleY(currentPoint.y)}`;
        } else {
          path += ` L ${scaleX(currentPoint.x)} ${scaleY(currentPoint.y)}`;
        }
      }

      return path;
    };

    const createAreaPath = (points: ChartPoint[]) => {
      if (points.length === 0) return '';
      const linePath = createSmoothPath(points);
      const firstPoint = points[0];
      const lastPoint = points[points.length - 1];
      return `${linePath} L ${scaleX(lastPoint.x)} ${scaleY(0)} L ${scaleX(firstPoint.x)} ${scaleY(0)} Z`;
    };

    return (
      <svg 
        className="w-full" 
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ height: 'auto', minHeight: '120px' }}
      >
        <defs>
          {/* Primary gradient - purple to blue */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F3DFF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          {/* Secondary gradient - blue with transparency */}
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
          </linearGradient>
          
          {/* Area gradient fill */}
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7F3DFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7F3DFF" stopOpacity="0.05" />
          </linearGradient>
          
          {/* Glow filter for lines */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Grid lines */}
        {yAxisTicks.map((y) => (
          <line
            key={y}
            x1={padding.left}
            y1={scaleY(y)}
            x2={width - padding.right}
            y2={scaleY(y)}
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth={1}
            strokeDasharray={y === 0 ? '0' : '4,4'}
          />
        ))}
        
        {/* Y-axis labels */}
        {yAxisTicks.map((y) => (
          <text
            key={`y-${y}`}
            x={padding.left - 10}
            y={scaleY(y) + 5}
            fill="rgba(255, 255, 255, 0.4)"
            fontSize="11"
            textAnchor="end"
            fontFamily="Inter, sans-serif"
          >
            {y}
          </text>
        ))}
        
        {/* Area fill for clicks data */}
        <path
          d={createAreaPath(clicksData)}
          fill="url(#areaGradient)"
          opacity="0.6"
        />
        
        {/* Main clicks line */}
        <path
          d={createSmoothPath(clicksData)}
          fill="none"
          stroke="url(#primaryGradient)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        
        {/* Reports line */}
        <path
          d={createSmoothPath(reportsData)}
          fill="none"
          stroke="url(#secondaryGradient)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points for clicks */}
        {clicksData.map((point, i) => (
          <g key={`click-${i}`}>
            <circle
              cx={scaleX(point.x)}
              cy={scaleY(point.y)}
              r={5}
              fill="#7F3DFF"
              stroke="#ffffff"
              strokeWidth={2}
              opacity="0.9"
            />
            <circle
              cx={scaleX(point.x)}
              cy={scaleY(point.y)}
              r={8}
              fill="#7F3DFF"
              opacity="0.2"
            />
          </g>
        ))}
        
        {/* Data points for reports */}
        {reportsData.map((point, i) => (
          <g key={`report-${i}`}>
            <circle
              cx={scaleX(point.x)}
              cy={scaleY(point.y)}
              r={4}
              fill="#3B82F6"
              stroke="#ffffff"
              strokeWidth={1.5}
              opacity="0.9"
            />
          </g>
        ))}
        
        {/* X-axis labels */}
        {clicksData.map((point, i) => (
          <text
            key={`x-${i}`}
            x={scaleX(point.x)}
            y={height - 8}
            fill="rgba(255, 255, 255, 0.4)"
            fontSize="11"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
          >
            {point.label}
          </text>
        ))}
        
        {/* Legend */}
        <g transform={`translate(${width - padding.right - 100}, ${padding.top + 10})`}>
          <line
            x1={0}
            y1={8}
            x2={16}
            y2={8}
            stroke="url(#primaryGradient)"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <text
            x={20}
            y={12}
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="11"
            fontFamily="Inter, sans-serif"
          >
            {legend.clicks}
          </text>
          
          <line
            x1={0}
            y1={26}
            x2={16}
            y2={26}
            stroke="url(#secondaryGradient)"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <text
            x={20}
            y={30}
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="11"
            fontFamily="Inter, sans-serif"
          >
            {legend.reports}
          </text>
        </g>
      </svg>
    );
};

// See Results Section Component - Using DashboardSection style
const SeeResultsSection: React.FC = () => {
  const t = useTranslations('Pages.PhishyTrainingPage');
  const section = 'SeeResults' as const;
  const analyticsCard = t.raw(`${section}.cards.analytics`) as AnalyticsCard;
  const statisticsCard = t.raw(`${section}.cards.statistics`) as StatisticsCard;
  const engagementCard = t.raw(`${section}.cards.engagement`) as EngagementCard;
  const incidentCard = t.raw(`${section}.cards.incident`) as IncidentCard;

  return (
    <section
      id="see-results"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Top gradient transition - connects from run simulations section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary-600/10 via-primary-600/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary-600/8 via-secondary-600/5 to-transparent pointer-events-none z-0" />
      
      {/* Continuous gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-600/12 via-primary-600/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Top-Left Card: Email Engagement Analytics */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl h-full p-8 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5">
              {/* Badge */}
              <div className="relative inline-flex items-center px-4 py-2 rounded-lg mb-6 group/badge">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 opacity-90 group-hover/badge:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-600/60 via-primary-500/60 to-secondary-600/60 blur-xl opacity-70 group-hover/badge:opacity-100 group-hover/badge:blur-2xl transition-all duration-300 -z-10" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/30 via-secondary-400/30 to-primary-400/30 opacity-50 group-hover/badge:opacity-70 transition-opacity duration-300" />
                <span className="relative z-10 text-xs font-semibold text-white drop-shadow-sm">{analyticsCard.badge}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                {analyticsCard.title}
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-base">
                {analyticsCard.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {analyticsCard.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 font-semibold text-white text-base hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-100">
                {analyticsCard.cta}
              </button>
            </div>
          </div>

          {/* Top-Right Card: Campaign Statistics */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-primary-500/8 to-white/0 backdrop-blur-sm h-full p-6 shadow-lg shadow-primary-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-60" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">{statisticsCard.title}</h3>
                
                <div className="mb-6 bg-black/30 rounded-lg p-4">
                  <LineChart
                    clicksData={statisticsCard.chart.clicks}
                    reportsData={statisticsCard.chart.reports}
                    yAxisTicks={statisticsCard.chart.yAxisTicks}
                    legend={statisticsCard.chart.legend}
                  />
                </div>
                
                <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 shadow-lg shadow-primary-500/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{statisticsCard.metricLabel}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{statisticsCard.metricValue}</div>
                  <div className="text-sm text-gray-400 mb-4">{statisticsCard.metricDelta}</div>
                  
                  <div className="flex items-end gap-2 h-12">
                    {statisticsCard.barHeights.map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t"
                        style={{height: `${height}%`}}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left Card: Engagement Metrics */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-secondary-500/8 to-white/0 backdrop-blur-sm h-full p-6 shadow-lg shadow-primary-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-60" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">{engagementCard.title}</h3>
                
                <div className="relative flex justify-center mb-8">
                  <DonutChart
                    percentage={engagementCard.donut.percentage}
                    centerLabel={engagementCard.donut.centerLabel}
                    centerSubLabel={engagementCard.donut.centerSubLabel}
                  />
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
                    <div className="relative">
                      <div className="text-xs text-white font-semibold bg-primary-500/80 px-2 py-1 rounded whitespace-nowrap">
                        {engagementCard.donut.callout}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-500/50" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {engagementCard.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-gray-300">{metric.label}</span>
                      </div>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Right Card: Incident Reporting Effectiveness */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl h-full p-8 bg-gradient-to-br from-secondary-500/5 via-transparent to-primary-500/5">
              {/* Badge */}
              <div className="relative inline-flex items-center px-4 py-2 rounded-lg mb-6 group/badge">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 opacity-90 group-hover/badge:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-600/60 via-primary-500/60 to-secondary-600/60 blur-xl opacity-70 group-hover/badge:opacity-100 group-hover/badge:blur-2xl transition-all duration-300 -z-10" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/30 via-secondary-400/30 to-primary-400/30 opacity-50 group-hover/badge:opacity-70 transition-opacity duration-300" />
                <span className="relative z-10 text-xs font-semibold text-white drop-shadow-sm">{incidentCard.badge}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                {incidentCard.title}
              </h3>
              
              <p className="text-gray-300 mb-10 leading-relaxed text-base">
                {incidentCard.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {incidentCard.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhishingSimulationPage = () => {
  const t = useTranslations('Pages.PhishyTrainingPage');
  const prepare = (key: 'title' | 'description' | 'cta' | 'imageAlt') => t(`Prepare.${key}`);
  const prepareFeaturesRaw = t.raw('Prepare.features');
  const prepareFeatures = Array.isArray(prepareFeaturesRaw) ? prepareFeaturesRaw : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      

      <HeroSection />

      {/* Prepare Simulations Section - Using WhatWeDoSection style */}
      <section id="prepare-simulations" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Top gradient transition - connects from hero */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary-600/10 via-primary-600/5 to-transparent pointer-events-none z-0" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary-600/8 via-secondary-600/5 to-transparent pointer-events-none z-0" />
        
        {/* Continuous gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-600/12 via-primary-600/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-primary-600/5 to-primary-600/10 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-secondary-600/5 to-secondary-600/8 pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-secondary-600/8 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
              <div className="relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-visible bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="flex flex-col justify-between">
                    <div className="mb-8">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {prepare('title')}
                      </h2>
                      <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                        {prepare('description')}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {prepareFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white">
                          <div className="w-2 h-2 bg-primary-500 rounded-sm flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="group relative px-6 py-3 rounded-lg font-medium text-white border border-gray-400/30 hover:border-gray-400/50 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm w-fit">
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        {prepare('cta')}
                      </span>
                    </button>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative w-full h-80 rounded-xl overflow-hidden ">
                      <Image
                        src="/prepare.png"
                        alt={prepare('imageAlt')}
                        fill
                        className="object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Run Simulations Section */}
      <RunSimulationsSection />

      {/* See Results Section */}
      <SeeResultsSection />

      <Footer />

    </main>
  );
};

export default PhishingSimulationPage;