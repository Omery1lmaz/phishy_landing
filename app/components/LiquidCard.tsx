'use client';

import React from 'react';

interface LiquidCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  position?: 'top-right' | 'bottom-left' | 'bottom-right' | 'top-left';
  delay?: number;
}

const LiquidCard: React.FC<LiquidCardProps> = ({
  title,
  description,
  icon,
  position = 'top-right',
  delay = 0,
}) => {
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'top-left': 'top-0 left-0',
  };

  return (
    <div
      className={`liquid-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${positionClasses[position]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="flex items-center gap-3 mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/20 to-secondary-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default LiquidCard;

