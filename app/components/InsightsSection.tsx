'use client';

import React from 'react';

const InsightsSection: React.FC = () => {
  // Monthly data for DeFi chart
  const monthlyData = [
    { month: 'Dec', value: 19, color: 'from-green-400 to-yellow-400' },
    { month: 'Jan', value: 32, color: 'from-red-600 to-orange-600' },
    { month: 'Feb', value: 46, color: 'from-green-300 to-green-500' },
    { month: 'Mar', value: 12, color: 'from-yellow-400 to-orange-400' },
    { month: 'Apr', value: 28, color: 'from-green-600 to-green-800' },
  ];

  // Liquidity chart data
  const liquidityBars = [85, 72, 65, 58, 45, 38, 28];

  return (
    <section className="py-24 relative overflow-hidden" id="insights">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Marvellous Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Save your team&apos;s precious time. Config replaces the lengthy process of manual BOM
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Success Transactions */}
          <div className="liquid-card rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">98.2%</div>
              <div className="text-sm text-gray-400 mb-6">Spots. WorldWide</div>
              
              {/* Globe visualization */}
              <div className="relative w-full h-48 mb-6 flex items-center justify-center">
                <div className="relative w-44 h-44">
                  {/* Wireframe globe circles */}
                  <div className="absolute inset-0 rounded-full border border-white/15 opacity-40" />
                  <div className="absolute inset-0 rounded-full border border-white/10 opacity-30" style={{ transform: 'rotate(45deg)' }} />
                  <div className="absolute inset-0 rounded-full border border-white/10 opacity-20" style={{ transform: 'rotate(90deg)' }} />
                  
                  {/* Vertical lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-white/10 opacity-30" style={{ transform: 'rotate(22.5deg)' }} />
                    <div className="w-full h-px bg-white/10 opacity-30" style={{ transform: 'rotate(-22.5deg)' }} />
                  </div>
                  
                  {/* Spots with labels */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg ring-2 ring-white/30" />
                    <span className="text-[10px] text-white/70 mt-1">Spot 1</span>
                  </div>
                  <div className="absolute bottom-10 left-1/4 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg ring-2 ring-white/30" />
                    <span className="text-[10px] text-white/70 mt-1">Spot 2</span>
                  </div>
                  <div className="absolute bottom-10 right-1/4 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg ring-2 ring-white/30" />
                    <span className="text-[10px] text-white/70 mt-1">Spot 3</span>
                  </div>
                  
                  {/* Curved connecting line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <path
                      d="M 88 24 Q 44 64 88 120 Q 132 64 88 24"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['K Opens Spots api dev', 'I Assign issue to experts', 'A Assign new', 'S C I'].map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Success Transactions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Innovative blockchain technology meets financial expertise to empower your investment journey.
              </p>
            </div>
          </div>

          {/* Card 2: Liquidity Labyrinth */}
          <div className="liquid-card rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-6">Liquidity Labyrinth</h3>
            
            {/* 3D Bar Chart */}
            <div className="relative h-64 mb-6 flex items-end justify-center gap-2">
              {liquidityBars.map((height, idx) => {
                const maxHeight = Math.max(...liquidityBars);
                const normalizedHeight = (height / maxHeight) * 100;
                return (
                  <div
                    key={idx}
                    className="relative flex-1 max-w-[50px] group"
                    style={{ height: `${normalizedHeight}%` }}
                  >
                    <div
                      className="w-full h-full rounded-t-md bg-gradient-to-t from-green-900/90 via-green-600/80 to-green-300/90 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                      style={{
                        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-t-md" />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Liquidity Labyrinth, where each turn reveals new opportunities
            </p>
          </div>

          {/* Card 3: Your Palette Financial Opportunities */}
          <div className="liquid-card rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* Two metrics side by side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Left metric */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
                <div className="pl-4">
                  <div className="text-xs text-gray-400 mb-1">Financial</div>
                  <div className="text-sm text-white mb-1">Growth</div>
                  <div className="text-3xl font-bold text-white mb-1">19.2</div>
                  <div className="text-sm text-gray-400">$2.7m</div>
                </div>
              </div>

              {/* Right metric */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
                <div className="pl-4">
                  <div className="text-xs text-gray-400 mb-1">Financial</div>
                  <div className="text-sm text-white mb-1">Growth</div>
                  <div className="text-3xl font-bold text-white mb-1">24</div>
                  <div className="text-sm text-gray-400">$3.2m</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Your Palette Financial Opportunities</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Watch your assets grow in a thriving ecosystem so easy
            </p>
          </div>

          {/* Card 4: DeFi Space. Opportunities */}
          <div className="liquid-card rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-2">DeFi Space. Opportunities</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Where each stroke is a smart contract and every color is a chance to build a portfolio
            </p>

            {/* Monthly Bar Chart */}
            <div className="relative h-48 mb-6">
              {/* Background wavy line */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <path
                  d="M 0 120 Q 100 100 200 120 T 400 120 T 600 120"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Bars */}
              <div className="relative h-full flex items-end justify-between gap-2 px-2">
                {monthlyData.map((item, idx) => {
                  const maxValue = Math.max(...monthlyData.map(d => d.value));
                  const barHeight = (item.value / maxValue) * 75;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center max-w-[80px]">
                      <div className="text-sm text-white font-semibold mb-2">{item.value}</div>
                      <div
                        className={`relative w-full rounded-t-md bg-gradient-to-t ${item.color} opacity-90 hover:opacity-100 transition-all duration-300 shadow-lg border border-white/10`}
                        style={{ height: `${barHeight}%`, minHeight: '20px' }}
                      >
                        {/* Glass effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent rounded-t-md" />
                      </div>
                      <div className="text-xs text-gray-400 mt-2">{item.month}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all ${
                    idx === 0 ? 'w-8 bg-white' : 'w-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

