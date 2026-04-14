import React, { useRef, useState, useEffect } from 'react';
import { whySwiipr, ctaData } from '../data/mockData';
import { Layers, Code, Link, ShieldCheck, ArrowRight } from 'lucide-react';

const iconMap = {
  layers: Layers,
  code: Code,
  link: Link,
  shield: ShieldCheck,
};

const BottomSections = () => {
  const ref = useRef(null);
  const ctaRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCtaVisible(true); },
      { threshold: 0.15 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setEmail(''); }, 3000);
    }
  };

  return (
    <>
      {/* Why Swiipr */}
      <section ref={ref} className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1434CB] mb-4">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A5E] mb-4 max-w-2xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
              {whySwiipr.headline}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{whySwiipr.description}</p>
            <a href="#about" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1434CB] hover:text-[#1029A8] transition-colors">
              About Us <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySwiipr.features.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl bg-[#F0F4FF] border border-gray-100 hover:border-[#1434CB]/20 hover:shadow-lg hover:shadow-[#1434CB]/5 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1434CB] flex items-center justify-center mb-4 group-hover:bg-[#1029A8] transition-colors">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-[#0B1A5E] mb-2 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  {feature.badge && (
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#1434CB]/10 text-[#1434CB] text-xs font-semibold">
                      {feature.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        id="book-demo"
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1434CB 0%, #1029A8 40%, #1840E0 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Transform airline <span className="text-white/80">disruption</span> payments
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                {ctaData.description}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-white text-[#1434CB] font-semibold text-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/15 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  {submitted ? 'Thank you!' : 'Book a Demo'}
                </button>
              </form>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl" />
              {/* Custom phone mockup */}
              <div className="relative w-64 mx-auto">
                <div className="bg-[#1130B8] rounded-[2rem] p-3 shadow-2xl shadow-black/50 border border-white/10">
                  <div className="bg-[#0E24A0] rounded-[1.5rem] p-5 min-h-[380px]">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                        </div>
                        <span className="text-white/80 text-sm font-semibold">Swiipr</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                    </div>
                    {/* Balance card */}
                    <div className="bg-white/10 rounded-xl p-4 border border-white/10 mb-4">
                      <p className="text-white/40 text-xs mb-1">Available Balance</p>
                      <p className="text-white text-2xl font-bold">&euro;1,250.00</p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Active</span>
                        <span className="text-[10px] text-white/30">Mastercard &bull;&bull;&bull;&bull; 4582</span>
                      </div>
                    </div>
                    {/* Transactions */}
                    <p className="text-white/40 text-xs font-medium mb-3">Recent Activity</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Airport Restaurant', amount: '-\u20AC32.50', type: 'spend' },
                        { label: 'Compensation Loaded', amount: '+\u20AC250.00', type: 'load' },
                        { label: 'Transport Voucher', amount: '-\u20AC15.00', type: 'spend' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${tx.type === 'load' ? 'bg-emerald-500/10' : 'bg-white/5'}`}>
                              <span className={`text-xs ${tx.type === 'load' ? 'text-emerald-400' : 'text-white/40'}`}>
                                {tx.type === 'load' ? '+' : '-'}
                              </span>
                            </div>
                            <span className="text-xs text-white/60">{tx.label}</span>
                          </div>
                          <span className={`text-xs font-medium ${tx.type === 'load' ? 'text-emerald-400' : 'text-white/50'}`}>{tx.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomSections;
