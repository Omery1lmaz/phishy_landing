import * as React from 'react';
import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

interface GlowBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const GlowBadge = React.forwardRef<HTMLDivElement, GlowBadgeProps>(
  ({className, variant = 'primary', children, ...props}, ref) => {
    const isPrimary = variant === 'primary';
    
    return (
      <Badge
        ref={ref}
        variant="outline"
        className={cn(
          'relative group/badge',
          isPrimary
            ? 'border-primary-500/50 text-primary-300 bg-primary-500/10 hover:bg-primary-500/10 hover:border-primary-400/70 shadow-lg shadow-primary-500/20'
            : 'border-secondary-500/50 text-secondary-300 bg-secondary-500/10 hover:bg-secondary-500/10 hover:border-secondary-400/70 shadow-lg shadow-secondary-500/20',
          'px-3 py-1 text-xs font-semibold uppercase tracking-wider',
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span
          className={cn(
            'absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 blur-sm',
            isPrimary
              ? 'bg-gradient-to-r from-primary-500/30 via-primary-400/30 to-secondary-500/30'
              : 'bg-gradient-to-r from-secondary-500/30 via-secondary-400/30 to-primary-500/30'
          )}
        />
        <span
          className={cn(
            'absolute -inset-1 rounded-full blur-lg opacity-50 animate-pulse',
            isPrimary
              ? 'bg-gradient-to-r from-primary-500/20 via-primary-400/20 to-secondary-500/20'
              : 'bg-gradient-to-r from-secondary-500/20 via-secondary-400/20 to-primary-500/20'
          )}
        />
      </Badge>
    );
  }
);

GlowBadge.displayName = 'GlowBadge';

export {GlowBadge};

