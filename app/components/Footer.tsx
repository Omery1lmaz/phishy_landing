'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Modules', href: '#modules' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Docs', href: '#' },
    ],
    Support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-primary-600/20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">Phishy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              From awareness to action - Secure Every Click
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and Bottom Bar */}
        <div className="border-t border-primary-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1 max-w-md w-full">
              <h4 className="font-semibold text-white mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-primary-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-600/50 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              © {currentYear} Phishy. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

