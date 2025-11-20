'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export interface ProblemItem {
  problem: string;
  impact: string;
  result: string;
}

export interface ProblemSectionProps {
  title?: string;
  problems: ProblemItem[];
  className?: string;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title = 'Problems → Impact → Target Results',
  problems,
  className = '',
}) => {
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${className}`}>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="space-y-6">
          {problems.map((row, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-red-500/30 bg-red-500/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <p className="text-white/90">{row.problem}</p>
                </CardContent>
              </Card>
              <Card className="border-orange-500/30 bg-orange-500/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <p className="text-white/90">{row.impact}</p>
                </CardContent>
              </Card>
              <Card className="border-green-500/30 bg-green-500/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <p className="text-white/90">{row.result}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

