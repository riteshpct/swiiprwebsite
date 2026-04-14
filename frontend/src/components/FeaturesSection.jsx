import React, { useRef, useState, useEffect } from 'react';
import { featuresSections, integrationData } from '../data/mockData';
import { CheckCircle2, CreditCard, Smartphone, BarChart3, Globe, Zap, FileText, ArrowRight } from 'lucide-react';

const featureIcons = [
  [Zap, FileText, BarChart3],
  [Smartphone, Globe, CreditCard],
];

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
        <div className="absolute inset-0 bg-[#1434CB]/5 rounded-3xl blur-2xl" />
        <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden items-center justify-center h-80 bg-gradient-to-br from-[#1434CB] to-[#1840E0]">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#1434CB]/15 flex items-center justify-center mx-auto mb-4">
                {index === 0 ? <BarChart3 size={28} className="text-[#1434CB]" /> : <Smartphone size={28} className="text-[#1434CB]" />}
              </div>
              <p className="text-white/60 text-sm max-w-xs">{section.title}</p>
            </div>
          </div>
        </div>
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
            <div className="h-px w-12 bg-[#1434CB]/40" />
            <span className="text-[#1434CB] text-xs font-semibold tracking-[0.2em] uppercase">Industry Insight</span>
            <div className="h-px w-12 bg-[#1434CB]/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-[#1434CB]">$4.5 billion</span> is lost in inefficient{' '}
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
