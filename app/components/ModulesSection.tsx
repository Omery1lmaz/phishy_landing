'use client';

import React, { useRef } from 'react';

const ModulesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      title: 'Simulation',
      subtitle: 'Next-Gen Phishing Simulation',
      description: `Harness the power of Phishy's simulation suite with over 50 ready-to-use scenarios, or craft your custom simulations with our intuitive drag-and-drop editor—a unique feature that sets us apart. Monitor engagement in real time, tracking email opens, link clicks, data submissions, and file interactions. Plus, conduct simulations through your own mail server, gaining the flexibility to operate under any domain for a truly authentic experience.`,
      gradient: 'from-purple-600 to-pink-600',
      videoUrl: '', // Video URL buraya eklenecek
    },
    {
      title: 'Training',
      subtitle: 'Engaging Cybersecurity Training',
      description: `Elevate your team's learning experience with Phishy's gamified video sessions, averaging 2 minutes for maximum engagement without overwhelming your team. Assign specific training modules, track progress, and ensure completion. Non-skippable content guarantees full participation, and our persistent reminder system ensures no one falls behind, fostering a culture of continuous cybersecurity awareness.`,
      gradient: 'from-blue-600 to-cyan-600',
      videoUrl: '', // Video URL buraya eklenecek
    },
    {
      title: 'Incident Response',
      subtitle: 'Intelligent Phishing Detection',
      description: `Phishy's incident response tool integrates seamlessly with Outlook, enabling employees to report suspicious emails effortlessly. Each reported email undergoes a thorough analysis using our proprietary algorithms and cross-referencing with trusted third-party sources, completing this comprehensive analysis in just 10 seconds. We present the essential information needed for your analysts to determine the legitimacy of an email, streamlining the decision-making process for identifying phishing attacks or false positives.`,
      gradient: 'from-orange-600 to-red-600',
      videoUrl: '', // Video URL buraya eklenecek
    },
    {
      title: 'Phishypot',
      subtitle: 'Advanced Email Honeypot Protection',
      description: `Empower your cybersecurity defenses with Phishy's "PhishyPot"—a strategic honeypot email tool designed for proactive threat detection. Clients create and register a decoy email on their own server, which we then strategically expose on hacker forums and dark web sites. This bait attracts potential attackers directly into our surveillance system. PhishyPot continuously monitors these honeypot accounts, instantly analyzing and responding to any malicious activity. Enhance your security measures by turning potential attacks into opportunities for strengthening your defenses.`,
      gradient: 'from-yellow-600 to-orange-600',
      videoUrl: '', // Video URL buraya eklenecek
    },
  ];

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,61,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 mb-6 backdrop-blur-sm transition-all duration-500 hover:from-primary-600/40 hover:to-secondary-600/40 hover:border-primary-500/60 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse group-hover:bg-primary-400 group-hover:animate-none group-hover:scale-150 transition-all duration-300" />
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider group-hover:text-primary-300 transition-colors duration-300">
              Core Solutions
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Cybersecurity <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ana Modüller
          </p>
        </div>

        <div className="space-y-24">
          {modules.map((module, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-stretch ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Card Section */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="relative group">
                    {/* Modern Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                      {/* Subtle Gradient Accent */}
                      <div 
                        className={`absolute top-[10px] left-0 w-1 bg-gradient-to-b ${module.gradient} rounded-3xl opacity-60`}
                        style={{
                          height: '100%',
                          width: '151px',
                          background: 'none',
                          top: '0px',
                          borderLeft: '1px solid ',
                         }}
                      />
                      
                      <div className="relative z-10 pl-6">
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                            {module.title}
                          </h3>
                          <div className={`inline-block h-1 w-16 bg-gradient-to-r ${module.gradient} rounded-full mb-3`} />
                          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider">
                            {module.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Section */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900 to-black">
                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-5`} />
                    
                    {module.videoUrl ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src={module.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50">
                        <div className="text-center">
                          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-2xl shadow-purple-500/20`}>
                            <svg
                              className="w-10 h-10 text-white ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-400 text-sm font-medium">
                            Video placeholder
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;

