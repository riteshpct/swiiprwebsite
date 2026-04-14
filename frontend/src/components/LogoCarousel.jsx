import React, { useEffect, useRef, useState } from 'react';
import { clientLogos, stats } from '../data/mockData';

const AnimatedNumber = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const num = parseInt(target);
          const duration = 2000;
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-[#0C1B2A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        {count}<span className="text-[#D4A84B]">+</span>
      </div>
      <div className="text-sm font-medium text-gray-500 tracking-wide uppercase">{label}</div>
    </div>
  );
};

const LogoCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-10">
          Trusted by leading airlines worldwide
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-16 px-8 rounded-xl border border-gray-100 bg-white hover:border-[#D4A84B]/30 hover:shadow-md hover:shadow-[#D4A84B]/5 transition-all duration-300"
            >
              <span className="text-sm font-bold text-gray-400 whitespace-nowrap tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <AnimatedNumber key={stat.label} target={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
