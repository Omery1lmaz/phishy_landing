'use client';

import React from 'react';
import Image from 'next/image';

// Donut chart SVG component - moved outside to avoid creating during render
const DonutChart = ({ percentage = 67 }: { percentage?: number }) => {
    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
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
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">6M+</div>
          <div className="text-sm text-gray-400 mt-1">Total Supply</div>
        </div>
      </div>
    );
};

// Line chart SVG component - moved outside to avoid creating during render
const LineChart = () => {
    const width = 280;
    const height = 120;
    const padding = 20;
    const data = [
      { x: 0, y: 50 },
      { x: 25, y: 35 },
      { x: 50, y: 60 },
      { x: 75, y: 40 },
      { x: 100, y: 55 },
    ];
    const data2 = [
      { x: 0, y: 30 },
      { x: 25, y: 45 },
      { x: 50, y: 25 },
      { x: 75, y: 50 },
      { x: 100, y: 35 },
    ];

    const scaleX = (val: number) => padding + (val / 100) * (width - padding * 2);
    const scaleY = (val: number) => height - padding - (val / 100) * (height - padding * 2);

    const createPath = (points: typeof data) => {
      return points
        .map((point, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(point.x)} ${scaleY(point.y)}`)
        .join(' ');
    };

    return (
      <svg width={width} height={height} className="w-full">
        {/* Grid lines */}
        {[10, 15, 30, 60].map((y, i) => (
          <g key={i}>
            <line
              x1={padding}
              y1={scaleY(y)}
              x2={width - padding}
              y2={scaleY(y)}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth={1}
            />
            <text
              x={padding - 10}
              y={scaleY(y) + 4}
              fill="rgba(255, 255, 255, 0.4)"
              fontSize="10"
              textAnchor="end"
            >
              {y}
            </text>
          </g>
        ))}
        {/* Line 1 */}
        <path
          d={createPath(data)}
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Line 2 */}
        <path
          d={createPath(data2)}
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F3DFF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* X-axis label */}
        <text
          x={width - padding}
          y={height - 5}
          fill="rgba(255, 255, 255, 0.4)"
          fontSize="10"
          textAnchor="end"
        >
          Yesterday
        </text>
      </svg>
    );
};

const DashboardSection: React.FC = () => {
  return (
    <section
      id="dashboard"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Top-Left Card: Token Performance & Market Analytics */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl h-full p-8 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5">
              {/* Badge */}
              <div className="relative inline-flex items-center px-4 py-2 rounded-lg mb-6 group/badge">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 opacity-90 group-hover/badge:opacity-100 transition-opacity duration-300" />
                {/* Outer glow effect - spreads color around */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-600/60 via-primary-500/60 to-secondary-600/60 blur-xl opacity-70 group-hover/badge:opacity-100 group-hover/badge:blur-2xl transition-all duration-300 -z-10" />
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/30 via-secondary-400/30 to-primary-400/30 opacity-50 group-hover/badge:opacity-70 transition-opacity duration-300" />
                {/* Content */}
                <span className="relative z-10 text-xs font-semibold text-white drop-shadow-sm">RevGuard</span>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Token Performance & Market Analytics
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed text-base">
                Tracking price action, trading volume, liquidity, and volatility to gauge market sentiment and investor behavior.
              </p>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Track historical price charts.</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">Assess the ease of trading.</span>
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 font-semibold text-white text-base hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-100">
                Start Buying
              </button>
            </div>
          </div>

          {/* Top-Right Card: Token Stats */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-primary-500/8 to-white/0 backdrop-blur-sm h-full p-6 shadow-lg shadow-primary-500/10">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-60" />
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">Token Stats</h3>
                
                {/* Line Chart */}
                <div className="mb-6 bg-black/30 rounded-lg p-4">
                  <LineChart />
                </div>
                
                {/* Revenue Sub-Card */}
                <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 shadow-lg shadow-primary-500/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Total Revenue</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$1.89K</div>
                  <div className="text-sm text-gray-400 mb-4">45% Since last period</div>
                  
                  {/* Mini Bar Chart */}
                  <div className="flex items-end gap-2 h-12">
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '60%' }} />
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '85%' }} />
                    <div className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: '45%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left Card: RGD Progress */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-secondary-500/8 to-white/0 backdrop-blur-sm h-full p-6 shadow-lg shadow-primary-500/10">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-60" />
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">RGD Progress</h3>
                
                {/* Donut Chart */}
                <div className="relative flex justify-center mb-8">
                  <DonutChart percentage={67} />
                  {/* Label pointing to burned segment */}
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
                    <div className="relative">
                      <div className="text-xs text-white font-semibold bg-primary-500/80 px-2 py-1 rounded whitespace-nowrap">2M+ Burned</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-500/50" />
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span className="text-gray-300">Total Supply</span>
                    </div>
                    <span className="text-white font-semibold">6M+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span className="text-gray-300">Total Burned</span>
                    </div>
                    <span className="text-white font-semibold">2M+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span className="text-gray-300">Airdrop</span>
                    </div>
                    <span className="text-white font-semibold">1M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Right Card: Tokenomics & Supply Distribution */}
          <div className="dashboard-card relative group">
            <div className="relative rounded-2xl h-full p-8 bg-gradient-to-br from-secondary-500/5 via-transparent to-primary-500/5">
              {/* Badge */}
              <div className="relative inline-flex items-center px-4 py-2 rounded-lg mb-6 group/badge">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 opacity-90 group-hover/badge:opacity-100 transition-opacity duration-300" />
                {/* Outer glow effect - spreads color around */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-600/60 via-primary-500/60 to-secondary-600/60 blur-xl opacity-70 group-hover/badge:opacity-100 group-hover/badge:blur-2xl transition-all duration-300 -z-10" />
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/30 via-secondary-400/30 to-primary-400/30 opacity-50 group-hover/badge:opacity-70 transition-opacity duration-300" />
                {/* Content */}
                <span className="relative z-10 text-xs font-semibold text-white drop-shadow-sm">RevGuard</span>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Tokenomics & Supply Distribution
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-10 leading-relaxed text-base">
                Analyzing the total, circulating, and maximum supply, plus allocation schedules, to assess scarcity and long-term value drivers.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">6M+</div>
                  <div className="text-sm text-gray-400">Market Cap</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">2M+</div>
                  <div className="text-sm text-gray-400">Burned Tokens</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

