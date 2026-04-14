import React, { useRef, useState, useEffect } from 'react';
import { howItWorks } from '../data/mockData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const StepItem = ({ step, index, isActive, onClick }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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
      onClick={onClick}
      className={`cursor-pointer transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex gap-5 p-5 rounded-2xl transition-all duration-300 ${
        isActive ? 'bg-white shadow-lg shadow-black/5 border border-[#D4A84B]/20' : 'hover:bg-white/50'
      }`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
          isActive ? 'bg-[#D4A84B] text-[#0C1B2A]' : 'bg-[#0C1B2A]/10 text-[#0C1B2A]'
        }`}>
          {step.number}
        </div>
        <div>
          <h4 className="font-bold text-[#0C1B2A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            {step.title}
          </h4>
          <ul className="space-y-2">
            {step.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={14} className={`flex-shrink-0 ${isActive ? 'text-[#D4A84B]' : 'text-gray-300'}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A84B] mb-4">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B2A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {howItWorks.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-4">{howItWorks.subheadline}</p>
          <a href="#book-demo" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A84B] text-[#0C1B2A] font-semibold text-sm transition-all duration-300 hover:bg-[#E0BA5E] hover:shadow-lg hover:shadow-[#D4A84B]/25">
            Book a Demo <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Steps List */}
          <div className="space-y-3">
            {howItWorks.steps.map((step, i) => (
              <StepItem
                key={step.number}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>

          {/* Active Step Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4A84B]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100">
              <img
                src={howItWorks.steps[activeStep].image}
                alt={howItWorks.steps[activeStep].title}
                className="w-full rounded-xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
