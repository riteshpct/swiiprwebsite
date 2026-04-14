import React, { useEffect, useState } from 'react';
import { heroData, partnerLogos } from '../data/mockData';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0C1B2A 0%, #162544 40%, #1E3A5F 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D4A84B]/5 blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-[#D4A84B]/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(212,168,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,75,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D4A84B] animate-pulse" />
              <span className="text-[#D4A84B] text-xs font-medium tracking-wide uppercase">Airline Payment Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Transform airline{' '}
              <span className="text-[#D4A84B]">disruption</span>{' '}
              payments
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#book-demo"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D4A84B] text-[#0C1B2A] font-semibold text-sm transition-all duration-300 hover:bg-[#E0BA5E] hover:shadow-lg hover:shadow-[#D4A84B]/25 hover:-translate-y-0.5"
              >
                {heroData.ctaPrimary}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <Play size={14} className="fill-white" />
                {heroData.ctaSecondary}
              </a>
            </div>

            {/* Partner Logos */}
            <div>
              <p className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4">Backed by</p>
              <div className="flex items-center gap-6">
                {partnerLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className="text-white/30 text-sm font-semibold tracking-wide hover:text-white/50 transition-colors duration-300"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Product Mockups */}
          <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Glow behind mockups */}
              <div className="absolute inset-0 bg-[#D4A84B]/5 rounded-3xl blur-3xl" />
              
              {/* Main dashboard mockup */}
              <div className="relative z-10 bg-[#0F2035] rounded-2xl p-4 shadow-2xl shadow-black/40 border border-white/5">
                <div className="bg-[#0A1828] rounded-xl p-6">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#D4A84B" opacity="0.9"/>
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm font-semibold">SwiiprX</span>
                    </div>
                    <span className="text-[#D4A84B] text-xs font-medium">Dashboard</span>
                  </div>
                  
                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-[#162544]/50 rounded-lg p-3 border border-white/5">
                      <p className="text-white/40 text-[10px] mb-1">Issued Cards</p>
                      <p className="text-white text-lg font-bold">24,780</p>
                      <div className="w-full h-1 bg-white/5 rounded mt-2"><div className="w-3/4 h-full bg-[#D4A84B]/60 rounded" /></div>
                    </div>
                    <div className="bg-[#162544]/50 rounded-lg p-3 border border-white/5">
                      <p className="text-white/40 text-[10px] mb-1">Stock Cards</p>
                      <p className="text-white text-lg font-bold">15,220</p>
                      <div className="w-full h-1 bg-white/5 rounded mt-2"><div className="w-1/2 h-full bg-emerald-500/60 rounded" /></div>
                    </div>
                    <div className="bg-[#162544]/50 rounded-lg p-3 border border-white/5">
                      <p className="text-white/40 text-[10px] mb-1">Loaded Value</p>
                      <p className="text-white text-lg font-bold">$224,807</p>
                      <div className="w-full h-1 bg-white/5 rounded mt-2"><div className="w-2/3 h-full bg-blue-500/60 rounded" /></div>
                    </div>
                  </div>
                  
                  {/* Chart area */}
                  <div className="bg-[#162544]/30 rounded-lg p-4 border border-white/5">
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 35, 80, 55, 70, 45, 90, 60, 75, 50, 85].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 7 ? '#D4A84B' : 'rgba(212,168,75,0.2)' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone mockup */}
              <div className="absolute -bottom-6 -right-2 z-20 w-32 md:w-40">
                <div className="bg-[#0F2035] rounded-2xl p-2 shadow-2xl shadow-black/50 border border-white/5">
                  <div className="bg-[#0A1828] rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-5 h-5 rounded bg-[#D4A84B]/20 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#D4A84B"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                      </div>
                      <span className="text-white/60 text-[8px] font-semibold">Swiipr</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-[#162544]/50 rounded p-2 border border-white/5">
                        <p className="text-[8px] text-white/40">Balance</p>
                        <p className="text-white text-xs font-bold">€250.00</p>
                      </div>
                      <div className="bg-emerald-500/10 rounded p-1.5 border border-emerald-500/20">
                        <p className="text-[8px] text-emerald-400">+ €150.00 loaded</p>
                      </div>
                      <div className="bg-[#162544]/50 rounded p-1.5 border border-white/5">
                        <p className="text-[8px] text-white/40">- €32.50 Restaurant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card mockup */}
              <div className="absolute -bottom-3 -left-4 z-20 w-36 md:w-44">
                <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0C1B2A] rounded-xl p-4 shadow-2xl shadow-black/50 border border-[#D4A84B]/20">
                  <div className="flex items-center justify-between mb-6">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#D4A84B" opacity="0.8"/>
                      <circle cx="16" cy="8" r="8" fill="#D4A84B" opacity="0.4"/>
                    </svg>
                    <span className="text-white/50 text-[8px] font-semibold">swiipr</span>
                  </div>
                  <p className="text-white/50 text-[8px] tracking-widest mb-1">•••• •••• •••• 4582</p>
                  <p className="text-white/30 text-[7px]">CARDHOLDER NAME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 30V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
