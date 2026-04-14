import React, { useRef, useState, useEffect } from 'react';
import { solutions } from '../data/mockData';
import { CheckCircle2, ArrowRight, Utensils, Luggage, Users } from 'lucide-react';

const iconMap = {
  0: Utensils,
  1: Luggage,
  2: Users,
};

const SolutionCard = ({ solution, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = iconMap[index];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-700 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card Header */}
      <div className="relative h-44 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0C1B2A 0%, #1E3A5F 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-[#D4A84B]/30" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full border border-[#D4A84B]/20" />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
          <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/15 flex items-center justify-center mb-3">
            <Icon size={24} className="text-[#D4A84B]" />
          </div>
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            {solution.title}
          </h3>
          <p className="text-white/50 text-sm mt-1">{solution.subtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <ul className="space-y-4 mb-6">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#D4A84B] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={solution.href}
          className="group/btn inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full bg-[#0C1B2A] text-[#D4A84B] font-semibold text-sm transition-all duration-300 hover:bg-[#162544] hover:shadow-lg hover:shadow-[#0C1B2A]/20"
        >
          Learn more
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A84B] mb-4">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Disruption solutions built with airlines,{' '}
            <span className="text-[#D4A84B]">for airlines</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
