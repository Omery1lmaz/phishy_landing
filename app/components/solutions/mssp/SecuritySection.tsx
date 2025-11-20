'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import { LucideIcon } from 'lucide-react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface ChartConfigItem {
  label: string;
  color: string;
}

export interface DataProtectionFeature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color?: 'primary' | 'purple';
}

export interface DataProtectionCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  chartData: ChartDataPoint[];
  chartConfig: Record<string, ChartConfigItem>;
  features: DataProtectionFeature[];
}

export interface AccessControlStat {
  label: string;
  value: string;
  color?: 'primary' | 'purple';
}

export interface AccessControlCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  chartData: ChartDataPoint[];
  chartConfig: Record<string, ChartConfigItem>;
  stats: AccessControlStat[];
  yAxisDomain?: [number, number];
}

export interface ComplianceItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  percentage: number;
  color?: 'primary' | 'purple';
}

export interface ComplianceCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: ComplianceItem[];
}

export interface MonitoringStatusItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color?: 'primary' | 'purple';
}

export interface MonitoringCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  uptimePercentage: string;
  uptimeLabel: string;
  statusItems: MonitoringStatusItem[];
}

export interface SecurityStat {
  value: string;
  label: string;
  color?: 'primary' | 'purple';
}

export interface SecurityManagementCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  stats: SecurityStat[];
}

export interface SecuritySectionProps {
  badge: string;
  heading: string;
  description: string;
  dataProtection: DataProtectionCard;
  accessControl: AccessControlCard;
  compliance: ComplianceCard;
  monitoring: MonitoringCard;
  securityManagement: SecurityManagementCard;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({
  badge,
  heading,
  description,
  dataProtection,
  accessControl,
  compliance,
  monitoring,
  securityManagement,
}) => {
  const protectionChartConfig = dataProtection.chartConfig as ChartConfig;
  const accessControlChartConfig = accessControl.chartConfig as ChartConfig;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-[#050505]">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="securityGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="securityGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="securityGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#securityGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#securityGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#securityGradient3)"
            strokeWidth="2"
            className="animate-draw-line-3"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Connecting lines */}
          <line
            x1="200"
            y1="0"
            x2="300"
            y2="1000"
            stroke="rgba(147, 51, 234, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="700"
            y1="0"
            x2="800"
            y2="1000"
            stroke="rgba(99, 102, 241, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-2"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="1200"
            y1="0"
            x2="1100"
            y2="1000"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-1"
            style={{animationDelay: '1s'}}
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated circles */}
          <circle
            cx="200"
            cy="300"
            r="4"
            fill="rgba(147, 51, 234, 0.5)"
            className="animate-pulse-glow"
          />
          <circle
            cx="700"
            cy="500"
            r="5"
            fill="rgba(99, 102, 241, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="1200"
            cy="700"
            r="4.5"
            fill="rgba(168, 85, 247, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
          />
          <circle
            cx="400"
            cy="150"
            r="3"
            fill="rgba(59, 130, 246, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1.5s'}}
          />
          <circle
            cx="1000"
            cy="850"
            r="3.5"
            fill="rgba(147, 51, 234, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.3s'}}
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-float-particle" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary-400/50 rounded-full animate-float-particle" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary-300/50 rounded-full animate-float-particle" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-secondary-300/50 rounded-full animate-float-particle" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary-500/50 rounded-full animate-float-particle" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary-500/50 rounded-full animate-float-particle" style={{animationDelay: '0.8s'}} />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-block mb-3">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {badge}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl mb-3">
            {heading}
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Dashboard Grid - 3+2 Layout - Transparent Cards */}
        <div className="space-y-4">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Data Protection with Shadcn Chart */}
            <Card className="group relative rounded-xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{dataProtection.title}</h3>
                    <p className="text-xs text-white/50">
                      {dataProtection.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center">
                    <dataProtection.icon className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
                
                {/* Shadcn Bar Chart */}
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 text-[10px] text-white/40 z-10">Last 7 days</div>
                  <div className="bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent rounded-xl border border-white/10 p-3">
                    <ChartContainer config={protectionChartConfig} className="h-[140px] w-full">
                      <BarChart
                        data={dataProtection.chartData}
                        margin={{
                          left: 0,
                          right: 0,
                          top: 5,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                          dataKey="day"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          className="text-[10px] fill-white/40"
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          className="text-[10px] fill-white/40"
                          domain={[0, 100]}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="bg-black/90 border-white/10 text-white"
                              indicator="dot"
                            />
                          }
                        />
                        {Object.keys(dataProtection.chartConfig).map((key) => (
                          <Bar
                            key={key}
                            dataKey={key}
                            fill={`var(--color-${key})`}
                            radius={[4, 4, 0, 0]}
                            className="opacity-90"
                          />
                        ))}
                      </BarChart>
                    </ChartContainer>
                  </div>
                </div>
                
                {/* Protection Features List */}
                <div className="space-y-2 mb-4">
                  {dataProtection.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    const isPurple = feature.color === 'purple';
                    return (
                      <div key={index} className={`flex items-center justify-between p-2 rounded-lg border border-white/10 transition-all group/item ${
                        isPurple 
                          ? 'bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent hover:border-purple-500/30' 
                          : 'bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent hover:border-primary-500/30'
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg border flex items-center justify-center group-hover/item:scale-110 transition-transform ${
                            isPurple
                              ? 'bg-gradient-to-br from-purple-500/30 to-purple-600/20 border-purple-500/30'
                              : 'bg-gradient-to-br from-primary-500/30 to-primary-600/20 border-primary-500/30'
                          }`}>
                            <FeatureIcon className={`h-3.5 w-3.5 ${isPurple ? 'text-purple-300' : 'text-primary-300'}`} />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs text-white/80">{feature.title}</span>
                            <div className="text-[10px] text-white/50 mt-0.5">{feature.subtitle}</div>
                          </div>
                        </div>
                        <div className={`h-3.5 w-3.5 ${isPurple ? 'text-purple-400' : 'text-primary-400'}`}>
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Access Control with Modern Line Chart */}
            <Card className="group relative rounded-xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{accessControl.title}</h3>
                    <p className="text-xs text-white/50">
                      {accessControl.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center">
                    <accessControl.icon className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
                
                {/* Shadcn Area Chart with Purple Theme */}
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 text-[10px] text-white/40 z-10">Last 7 days</div>
                  <div className="bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent rounded-xl border border-white/10 p-3">
                    <ChartContainer config={accessControlChartConfig} className="h-[130px] w-full">
                      <AreaChart
                        data={accessControl.chartData}
                        margin={{
                          left: 0,
                          right: 0,
                          top: 5,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                          dataKey="day"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          className="text-[10px] fill-white/40"
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          className="text-[10px] fill-white/40"
                          domain={accessControl.yAxisDomain || [80, 100]}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="bg-black/90 border-white/10 text-white"
                              indicator="dot"
                            />
                          }
                        />
                        {Object.keys(accessControl.chartConfig).map((key) => (
                          <Area
                            key={key}
                            dataKey={key}
                            type="natural"
                            fill={`var(--color-${key})`}
                            fillOpacity={0.3}
                            stroke={`var(--color-${key})`}
                            strokeWidth={2}
                            stackId="a"
                          />
                        ))}
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </div>
                
                {/* Modern Stats with Purple Theme */}
                <div className="space-y-2">
                  {accessControl.stats.map((stat, index) => {
                    const isPurple = stat.color === 'purple';
                    return (
                      <div key={index} className={`flex items-center justify-between p-2 rounded-lg border border-white/10 transition-all ${
                        isPurple
                          ? 'bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent hover:border-purple-500/30'
                          : 'bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent hover:border-primary-500/30'
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full animate-pulse ${isPurple ? 'bg-purple-400' : 'bg-primary-400'}`}></div>
                          <span className="text-xs text-white/70">{stat.label}</span>
                        </div>
                        <span className={`text-xs font-semibold ${isPurple ? 'text-purple-300' : 'text-primary-300'}`}>{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Compliance Status - Modern Progress Bars */}
            <Card className="group relative rounded-xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{compliance.title}</h3>
                    <p className="text-xs text-white/50">
                      {compliance.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center">
                    <compliance.icon className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
                
                {/* Modern Compliance Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {compliance.items.map((item, index) => {
                    const ItemIcon = item.icon;
                    const isPurple = item.color === 'purple';
                    return (
                      <div key={index} className={`group/item relative p-3 rounded-xl border border-white/10 transition-all overflow-hidden ${
                        isPurple
                          ? 'bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent hover:border-purple-500/30'
                          : 'bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent hover:border-primary-500/30'
                      }`}>
                        <div className={`absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity ${
                          isPurple ? 'bg-gradient-to-br from-purple-500/10 to-transparent' : 'bg-gradient-to-br from-primary-500/10 to-transparent'
                        }`}></div>
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                              isPurple
                                ? 'bg-gradient-to-br from-purple-500/30 to-purple-600/20 border-purple-500/30'
                                : 'bg-gradient-to-br from-primary-500/30 to-primary-600/20 border-primary-500/30'
                            }`}>
                              <ItemIcon className={`h-4 w-4 ${isPurple ? 'text-purple-300' : 'text-primary-300'}`} />
                            </div>
                            <div className={`h-4 w-4 ${isPurple ? 'text-purple-400' : 'text-primary-400'}`}>
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-white mb-1">{item.title}</div>
                          <div className="text-[10px] text-white/50 mb-2">{item.subtitle}</div>
                          <div className="flex items-center gap-1.5">
                            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                              <div className={`h-full rounded-full ${
                                isPurple ? 'bg-gradient-to-r from-purple-500 to-primary-500' : 'bg-gradient-to-r from-primary-500 to-purple-500'
                              }`} style={{width: `${item.percentage}%`}}></div>
                            </div>
                            <span className={`text-xs font-bold ${isPurple ? 'text-purple-300' : 'text-primary-300'}`}>{item.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 4: Real-time Security Monitoring - Modern */}
            <Card className="group relative rounded-xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{monitoring.title}</h3>
                    <p className="text-xs text-white/50">
                      {monitoring.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center">
                    <monitoring.icon className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Large Number with Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl blur-xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent rounded-xl border border-white/10 p-4">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-300 via-purple-300 to-primary-300 bg-clip-text text-transparent mb-1">{monitoring.uptimePercentage}</div>
                      <div className="text-xs text-white/50">{monitoring.uptimeLabel}</div>
                      <div className="flex items-center gap-1 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></div>
                        <span className="text-[10px] text-white/60">Live</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modern Status List */}
                  <div className="space-y-2">
                    {monitoring.statusItems.map((item, index) => {
                      const StatusIcon = item.icon;
                      const isPurple = item.color === 'purple';
                      return (
                        <div key={index} className={`group/item flex items-center justify-between p-2.5 rounded-lg border border-white/10 transition-all ${
                          isPurple
                            ? 'bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent hover:border-purple-500/30'
                            : 'bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent hover:border-primary-500/30'
                        }`}>
                          <div className="flex items-center gap-2.5">
                            <div className={`relative w-8 h-8 rounded-lg border flex items-center justify-center group-hover/item:scale-110 transition-transform ${
                              isPurple
                                ? 'bg-gradient-to-br from-purple-500/30 to-purple-600/20 border-purple-500/30'
                                : 'bg-gradient-to-br from-primary-500/30 to-primary-600/20 border-primary-500/30'
                            }`}>
                              <StatusIcon className={`h-4 w-4 ${isPurple ? 'text-purple-400' : 'text-primary-400'}`} />
                              <div className={`absolute inset-0 rounded-lg animate-pulse ${isPurple ? 'bg-purple-400/20' : 'bg-primary-400/20'}`}></div>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-white">{item.title}</div>
                              <div className="text-[10px] text-white/50">{item.subtitle}</div>
                            </div>
                          </div>
                          <div className={`h-4 w-4 animate-pulse ${isPurple ? 'text-purple-400' : 'text-primary-400'}`}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Security Management - Modern Stats */}
            <Card className="group relative rounded-xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{securityManagement.title}</h3>
                    <p className="text-xs text-white/50">
                      {securityManagement.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center">
                    <securityManagement.icon className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
                
                <p className="text-xs text-white/60 mb-4 leading-relaxed">
                  {securityManagement.description}
                </p>
                
                {/* Modern Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {securityManagement.stats.map((stat, index) => {
                    const isPurple = stat.color === 'purple';
                    return (
                      <div key={index} className={`p-3 rounded-lg border border-white/10 transition-all ${
                        isPurple
                          ? 'bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent hover:border-purple-500/30'
                          : 'bg-gradient-to-br from-white/5 via-primary-500/5 to-transparent hover:border-primary-500/30'
                      }`}>
                        <div className={`text-lg font-bold bg-clip-text text-transparent ${
                          isPurple ? 'bg-gradient-to-r from-purple-300 to-primary-300' : 'bg-gradient-to-r from-primary-300 to-purple-300'
                        }`}>{stat.value}</div>
                        <div className="text-[10px] text-white/50 mt-1">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Animated Decorative Gradient Swirls */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-primary-500/30 via-purple-500/30 to-primary-500/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 via-primary-500/20 to-purple-500/20 rounded-full blur-2xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
