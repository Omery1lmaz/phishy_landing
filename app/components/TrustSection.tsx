'use client';

import React, { useRef } from 'react';

const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const trustPoints = [
    {
      title: 'Tailored Simulations',
      description: 'Ortaya çıkan tehditleri taklit eden özelleştirilebilir phishing simülasyonları',
      icon: '🎯',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Şirketleri siber güvenlik savunmalarının ön saflarında tutan gelişmiş araçlar',
      icon: '⚡',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Strategic Insights',
      description: 'Güvenlik stratejilerini bilgilendiren veri odaklı içgörüler',
      icon: '📊',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Scalable Solutions',
      description: 'İşletmeyle büyüyen esnek ve ölçeklenebilir güvenlik çözümleri',
      icon: '📈',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Expert Partnerships',
      description: 'Güvenlik ekibinin güvenilir uzantısı, uzman rehberlik ve destek',
      icon: '🤝',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Intuitive Interface',
      description: 'Her teknik seviyedeki ekip için erişilebilir, kullanıcı dostu platform',
      icon: '🎨',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: 'Rapid Support',
      description: 'Hızlı ve proaktif destek',
      icon: '🚀',
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'Seamless Integration',
      description: 'Mevcut sistemlerle sorunsuz entegrasyon',
      icon: '🔗',
      gradient: 'from-cyan-600 to-blue-600',
    },
  ];

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-0" />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/15 to-secondary-600/15 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 z-0" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,61,255,0.1),transparent_70%)] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 mb-6 backdrop-blur-sm transition-all duration-500 hover:from-primary-600/40 hover:to-secondary-600/40 hover:border-primary-500/60 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse group-hover:bg-primary-400 group-hover:animate-none group-hover:scale-150 transition-all duration-300" />
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider group-hover:text-primary-300 transition-colors duration-300">
              Why Trust Us
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Enterprises <span className="gradient-text">Trust Phishy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What sets us apart
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div 
                className="trust-card relative backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 h-full"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                  opacity: 1
                }}
              >
                {/* Gradient Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${point.gradient} rounded-t-3xl opacity-60`} />
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${point.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 mb-4`}>
                      <span className="text-3xl">{point.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {point.title}
                  </h3>
                  
                  <div className={`h-1 w-12 bg-gradient-to-r ${point.gradient} rounded-full mb-4`} />
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

