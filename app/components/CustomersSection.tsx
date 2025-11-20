'use client';

import React from 'react';

interface Customer {
  name: string;
  logo: string;
  icon: React.ReactNode;
  color: string;
}

const CustomersSection: React.FC = () => {
  const customers: Customer[] = [
    {
      name: 'Duolingo',
      logo: 'Duolingo',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z"/>
        </svg>
      ),
      color: '#58CC02',
    },
    {
      name: 'GM',
      logo: 'GM',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="7" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M5 10H19M5 13H19M5 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: '#FFFFFF',
    },
    {
      name: 'Mercado Libre',
      logo: 'Mercado Libre',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z"/>
        </svg>
      ),
      color: '#FFF159',
    },
    {
      name: 'Shopify',
      logo: 'Shopify',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3L19.5 4.5L18 7.5L16.5 6L15 7.5L13.5 6L12 7.5L10.5 6L9 7.5L7.5 6L6 7.5L4.5 6L3 7.5L4.5 4.5L7.5 3L10.5 4.5L13.5 3L16.5 3Z"/>
          <path d="M6 9L12 21L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      color: '#96BF48',
    },
    {
      name: 'Stripe',
      logo: 'Stripe',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.424 2.957 6.309 7.206 7.81 2.355.94 3.356 1.61 3.356 2.785 0 .98-.84 1.545-2.354 1.545-1.905 0-4.515-.927-6.269-1.821l-.89 5.425C5.653 23.022 8.529 24 12.166 24c2.633 0 4.771-.685 6.268-1.978 1.561-1.355 2.351-3.225 2.351-5.525 0-4.952-3.194-6.935-7.809-8.347z"/>
        </svg>
      ),
      color: '#635BFF',
    },
    {
      name: 'Coca-Cola',
      logo: 'Coca-Cola',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M8 10C8 10 10 12 12 12C14 12 16 10 16 10M8 14C8 14 10 12 12 12C14 12 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: '#F40009',
    },
  ];

  // Duplicate customers multiple times for seamless infinite scroll
  const duplicatedCustomers = [...customers, ...customers, ...customers];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* SVG Filter for Frosted Glass Effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="frosted">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle base background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Top left gradient orb */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Top right gradient orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-600/30 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Bottom center gradient orb */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl translate-y-1/4 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Gradient Badge - Hero style */}
        <div className="flex justify-center mb-16 animate-fade-in">
          <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-secondary-600/20 backdrop-blur-sm animate-badge-glow overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animate-gradient-shift opacity-20" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-50 animate-pulse" />
                <div className="relative w-2 h-2 bg-primary-400 rounded-full" />
              </div>
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider group-hover:text-primary-300 transition-colors duration-300">
                Trusted By Industry Leaders
              </span>
              <svg 
                className="w-4 h-4 text-primary-400 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Customer logos carousel */}
        <div className="relative z-10">
          {/* Gradient overlays for fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black to-transparent z-20 pointer-events-none" />
          
          {/* Animated scrolling container */}
          <div className="flex gap-8 items-center overflow-hidden group cursor-default px-6">
            <div className="flex gap-8 items-center animate-customer-scroll will-change-transform">
              {duplicatedCustomers.map((customer, index) => (
                <div
                  key={`${customer.name}-${index}`}
                  className="group/item flex-shrink-0 liquid-card rounded-2xl p-8 md:p-10 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/30 relative overflow-hidden min-w-[180px] md:min-w-[220px]"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-primary-500/0 to-secondary-600/0 group-hover/item:from-primary-600/30 group-hover/item:via-primary-500/15 group-hover/item:to-secondary-600/30 transition-all duration-500 rounded-2xl blur-xl" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    {/* Icon with glow effect */}
                    <div 
                      className="transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-6 relative"
                      style={{ color: customer.color }}
                    >
                      {/* Icon glow background */}
                      <div 
                        className="absolute inset-0 rounded-full blur-md opacity-0 group-hover/item:opacity-50 transition-opacity duration-500"
                        style={{ backgroundColor: customer.color }}
                      />
                      <div className="relative">
                        {customer.icon}
                      </div>
                    </div>
                    
                    {/* Logo text */}
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 group-hover/item:text-white transition-colors duration-300 whitespace-nowrap text-center"
                      style={{ 
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {customer.logo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative gradient */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;

