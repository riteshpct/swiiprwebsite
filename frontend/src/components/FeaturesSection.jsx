import React, { useRef, useState, useEffect } from 'react';
import { featuresSections, integrationData } from '../data/mockData';
import { CheckCircle2, CreditCard, Smartphone, BarChart3, Globe, Zap, FileText, ArrowRight, TrendingUp, Users, Wallet, PieChart } from 'lucide-react';

const featureIcons = [
  [Zap, FileText, BarChart3],
  [Smartphone, Globe, CreditCard],
];

/* Custom dashboard visual for the "Future-proof payments" section */
const DashboardVisual = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-[#1434CB]/5 rounded-3xl blur-2xl" />
    <div className="relative bg-white rounded-2xl shadow-xl shadow-black/8 border border-gray-100 overflow-hidden">
      {/* Top Nav Bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#F6F8FF] border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#1434CB] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
          </div>
          <span className="text-[#0B1A5E] text-xs font-bold">SwiiprX</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-gray-400 font-medium">Live</span>
        </div>
      </div>

      <div className="p-5">
        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#F6F8FF] rounded-xl p-3 border border-[#1434CB]/8">
            <div className="flex items-center justify-between mb-2">
              <Wallet size={14} className="text-[#1434CB]" />
              <span className="text-[9px] text-emerald-500 font-bold flex items-center gap-0.5"><TrendingUp size={8} /> 12%</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-0.5">Cards Issued</p>
            <p className="text-[#0B1A5E] text-base font-bold">24,780</p>
          </div>
          <div className="bg-[#F6F8FF] rounded-xl p-3 border border-[#1434CB]/8">
            <div className="flex items-center justify-between mb-2">
              <Users size={14} className="text-[#1434CB]" />
              <span className="text-[9px] text-emerald-500 font-bold flex items-center gap-0.5"><TrendingUp size={8} /> 8%</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-0.5">Passengers</p>
            <p className="text-[#0B1A5E] text-base font-bold">15,220</p>
          </div>
          <div className="bg-[#F6F8FF] rounded-xl p-3 border border-[#1434CB]/8">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 size={14} className="text-[#1434CB]" />
              <span className="text-[9px] text-emerald-500 font-bold flex items-center gap-0.5"><TrendingUp size={8} /> 23%</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-0.5">Loaded Value</p>
            <p className="text-[#0B1A5E] text-base font-bold">$224,807</p>
          </div>
        </div>

        {/* Chart + Sidebar */}
        <div className="grid grid-cols-5 gap-3">
          {/* Bar Chart */}
          <div className="col-span-3 bg-[#F6F8FF] rounded-xl p-4 border border-[#1434CB]/8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] text-gray-500 font-semibold">Monthly Payouts</p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[8px] text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-[#1434CB]" />Issued</span>
                <span className="flex items-center gap-1 text-[8px] text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-[#1434CB]/30" />Redeemed</span>
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-28">
              {[
                { h1: 45, h2: 30 }, { h1: 60, h2: 42 }, { h1: 38, h2: 25 },
                { h1: 72, h2: 55 }, { h1: 55, h2: 38 }, { h1: 68, h2: 50 },
                { h1: 42, h2: 30 }, { h1: 85, h2: 62 }, { h1: 65, h2: 48 },
                { h1: 78, h2: 58 }, { h1: 50, h2: 35 }, { h1: 90, h2: 70 },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex gap-0.5">
                  <div className="flex-1 rounded-t-sm" style={{ height: `${bar.h1}%`, backgroundColor: i === 11 ? '#1434CB' : '#1434CB', opacity: i === 11 ? 1 : 0.7 }} />
                  <div className="flex-1 rounded-t-sm" style={{ height: `${bar.h2}%`, backgroundColor: '#1434CB', opacity: 0.2 }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                <span key={m} className="text-[7px] text-gray-300 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Donut + breakdown */}
          <div className="col-span-2 bg-[#F6F8FF] rounded-xl p-4 border border-[#1434CB]/8">
            <p className="text-[10px] text-gray-500 font-semibold mb-3">By Category</p>
            {/* Simple donut representation */}
            <div className="flex items-center justify-center mb-3">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E8EDFF" strokeWidth="4" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#1434CB" strokeWidth="4" strokeDasharray="48 40" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#6B8AFF" strokeWidth="4" strokeDasharray="22 66" strokeDashoffset="-48" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#A5B8FF" strokeWidth="4" strokeDasharray="14 74" strokeDashoffset="-70" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#0B1A5E] text-xs font-bold">87%</p>
                    <p className="text-[7px] text-gray-400">Redeemed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Meals & F&B', pct: '54%', color: 'bg-[#1434CB]' },
                { label: 'Transport', pct: '25%', color: 'bg-[#6B8AFF]' },
                { label: 'Hotel', pct: '16%', color: 'bg-[#A5B8FF]' },
                { label: 'Other', pct: '5%', color: 'bg-[#E8EDFF]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-[9px] text-gray-500">{item.label}</span>
                  </div>
                  <span className="text-[9px] text-[#0B1A5E] font-bold">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row - recent transactions */}
        <div className="mt-3 bg-[#F6F8FF] rounded-xl p-3 border border-[#1434CB]/8">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-gray-500 font-semibold">Recent Payouts</p>
            <span className="text-[9px] text-[#1434CB] font-semibold cursor-pointer">View all</span>
          </div>
          <div className="space-y-1.5">
            {[
              { flight: 'BA2490', amount: '€12,450', cards: '83', status: 'Completed', statusColor: 'text-emerald-500 bg-emerald-50' },
              { flight: 'IB3201', amount: '€8,320', cards: '56', status: 'Processing', statusColor: 'text-[#1434CB] bg-[#EBF0FF]' },
              { flight: 'VY1840', amount: '€5,680', cards: '38', status: 'Completed', statusColor: 'text-emerald-500 bg-emerald-50' },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#1434CB]/8 flex items-center justify-center">
                    <CreditCard size={10} className="text-[#1434CB]" />
                  </div>
                  <div>
                    <p className="text-[9px] text-[#0B1A5E] font-semibold">Flight {tx.flight}</p>
                    <p className="text-[8px] text-gray-400">{tx.cards} cards issued</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-[9px] text-[#0B1A5E] font-bold">{tx.amount}</span>
                  <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${tx.statusColor}`}>{tx.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureBlock = ({ section, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = section.imagePosition === 'left';

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Visual Block */}
      <div className={`relative ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        {index === 0 ? (
          <DashboardVisual />
        ) : (
          <>
            <div className="absolute inset-0 bg-[#1434CB]/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[420px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center h-[420px] bg-gradient-to-br from-[#1434CB] to-[#1840E0]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                    <Smartphone size={28} className="text-white" />
                  </div>
                  <p className="text-white/60 text-sm max-w-xs">{section.title}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="text-2xl md:text-3xl font-bold text-[#0B1A5E] mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          {section.title}
        </h3>
        <div className="space-y-6">
          {section.features.map((feature, i) => {
            const Icon = featureIcons[index]?.[i] || CheckCircle2;
            return (
              <div key={i} className="group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1434CB]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1434CB]/20 transition-colors">
                    <Icon size={16} className="text-[#1434CB]" />
                  </div>
                  <h4 className="font-semibold text-[#0B1A5E] pt-1">{feature.title}</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed ml-11">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* $4.5B Stat Banner */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1434CB 0%, #1029A8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Industry Insight</span>
            <div className="h-px w-12 bg-white/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-yellow-300">$4.5 billion</span> is lost in inefficient{' '}
            pay-out processes every year
          </h2>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">
          {featuresSections.map((section, i) => (
            <FeatureBlock key={i} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section ref={ref} className="py-24 bg-[#F0F4FF]">
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1434CB] mb-4">Integration</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A5E] mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            {integrationData.title}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
            {integrationData.description}
          </p>
          
          {/* Integration visual */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-[#1434CB]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-gray-100">
              <div className="grid grid-cols-3 gap-6">
                {['Your Airline Systems', 'SwiiprX Platform', 'Payment Networks'].map((label, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center ${
                      i === 1 ? 'bg-[#1434CB]/15' : 'bg-[#0B1A5E]/5'
                    }`}>
                      {i === 0 && <BarChart3 size={24} className="text-[#0B1A5E]/60" />}
                      {i === 1 && <Zap size={24} className="text-[#1434CB]" />}
                      {i === 2 && <Globe size={24} className="text-[#0B1A5E]/60" />}
                    </div>
                    <p className="text-sm font-semibold text-[#0B1A5E]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1434CB]/30 to-transparent" />
                <span className="text-xs text-[#1434CB] font-semibold px-3 py-1 rounded-full bg-[#1434CB]/10">API Connected</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1434CB]/30 to-transparent" />
              </div>
              <div className="grid grid-cols-4 gap-3 mt-6">
                {['REST APIs', 'Webhooks', 'SDKs', 'Plug & Play'].map((tech, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg bg-[#F0F4FF] border border-gray-100 text-xs text-gray-500 font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
