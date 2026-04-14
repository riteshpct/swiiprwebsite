import React from 'react';
import { footerData } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0C1A8A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Logo & Badge */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                swiipr
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <ShieldBadge />
              <span className="text-xs text-white/50 font-medium">ISO 27001 Certified</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerData.columns.map((col, i) => (
            <div key={i}>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards Row */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* App Store Badges */}
            <div className="flex items-center gap-4">
              <a href="#" className="group">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="white" opacity="0.7"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="white" opacity="0.5"/>
                    <path d="M21.4 10.74C21.75 10.99 22 11.39 22 12C22 12.61 21.75 13.01 21.4 13.26L18.78 14.76L16.28 12.26L18.78 9.76L21.4 10.74Z" fill="white" opacity="0.3"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/30">GET IT ON</p>
                    <p className="text-xs text-white/70 font-semibold">Google Play</p>
                  </div>
                </div>
              </a>
              <a href="#" className="group">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-all">
                  <svg width="18" height="20" viewBox="0 0 18 22" fill="white" opacity="0.7">
                    <path d="M14.94 0C15.06 1.3 14.5 2.59 13.66 3.52C12.84 4.45 11.62 5.16 10.44 5.07C10.3 3.8 10.96 2.46 11.74 1.59C12.58 0.64 13.88 0.06 14.94 0ZM17.91 15.03C17.32 16.35 17.01 16.93 16.24 18.1C15.18 19.73 13.7 21.76 11.88 21.78C10.24 21.8 9.82 20.72 7.69 20.73C5.56 20.74 5.1 21.81 3.46 21.79C1.64 21.77 0.23 19.94 0 18.31C0 18.31 0 18.31 0 18.31C-0.62 15.17 0.56 11.44 2.72 9.18C3.67 8.18 5.04 7.47 6.41 7.44C7.89 7.41 8.72 8.52 10.41 8.52C12.1 8.52 12.7 7.44 14.38 7.47C15.77 7.5 17.04 8.24 17.96 9.37C14.77 11.14 15.3 15.63 17.91 15.03Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/30">Download on the</p>
                    <p className="text-xs text-white/70 font-semibold">App Store</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Payment badges */}
            <div className="flex items-center gap-4">
              <div className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 font-semibold">Google Pay</span>
              </div>
              <div className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 font-semibold">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            {footerData.copyright}
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Book a demo <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const ShieldBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default Footer;
