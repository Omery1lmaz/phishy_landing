'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is Phishy and how does it protect against phishing attacks?',
      answer: 'Phishy is a comprehensive cybersecurity platform that combines advanced phishing simulation, employee training, and AI-powered detection to protect your organization. Our platform helps you identify vulnerabilities, train your team through realistic phishing scenarios, and detect threats in real-time using cutting-edge machine learning algorithms.',
    },
    {
      question: 'How does the phishing simulation engine work?',
      answer: 'Our simulation engine creates realistic phishing scenarios using 50+ pre-built templates based on real-world attack patterns. It safely tests your employees\' awareness levels, tracks their responses, and provides detailed analytics. All simulations are conducted in a controlled environment without exposing your organization to actual threats.',
    },
    {
      question: 'What types of training modules are available?',
      answer: 'We offer gamified cybersecurity training sessions that cover various topics including email security, social engineering recognition, password management, and safe browsing practices. Our interactive modules adapt to each employee\'s learning pace and provide personalized feedback to improve their security awareness.',
    },
    {
      question: 'How quickly can the AI detection system identify phishing attempts?',
      answer: 'Our AI-powered detection system can identify phishing attempts in just 10 seconds. It analyzes email headers, content, URLs, and behavioral patterns using advanced machine learning models trained on millions of phishing samples. The system continuously learns and adapts to new attack vectors.',
    },
    {
      question: 'What kind of analytics and reporting does Phishy provide?',
      answer: 'Phishy provides comprehensive real-time analytics including detailed reports on simulation results, training progress, risk scores by department, and threat detection metrics. You can track individual employee progress, identify high-risk areas, and measure the overall improvement in your organization\'s security posture over time.',
    },
    {
      question: 'Is Phishy suitable for organizations of all sizes?',
      answer: 'Yes, Phishy is designed to scale with organizations of all sizes, from small businesses to large enterprises. Our platform offers flexible pricing plans and can be customized to meet your specific needs. We support multi-tenant deployments and can integrate with your existing security infrastructure.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Description */}
            <div className="space-y-6">
              {/* FAQ's Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
                  FAQ&apos;s
                </span>
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Frequently Asked Questions
              </h2>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Stay informed with our most recent reports, market updates, and expert insights.
              </p>
            </div>
            
            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  {/* FAQ Item */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Question */}
                      <h3 className="text-lg font-semibold text-white pr-8">
                        {faq.question}
                      </h3>
                      
                      {/* Expand Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45 border-primary-400' : ''}`}>
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-300 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
