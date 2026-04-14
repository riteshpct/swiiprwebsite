import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-gradient-to-br from-[#1434CB] to-[#1029A8]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill={scrolled ? '#1434CB' : 'white'} opacity="0.9"/>
                <path d="M2 17l10 5 10-5" stroke={scrolled ? '#1434CB' : 'white'} strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M2 12l10 5 10-5" stroke={scrolled ? '#1434CB' : 'white'} strokeWidth="2" fill="none" opacity="0.8"/>
              </svg>
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-[#1434CB]' : 'text-white'
            }`} style={{ fontFamily: 'Playfair Display, serif' }}>
              swiipr
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    scrolled
                      ? 'text-[#374151] hover:text-[#1434CB] hover:bg-[#EBF0FF]'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />}
                </a>
                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50 animate-fadeIn">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-gray-600 hover:text-[#1434CB] hover:bg-[#EBF0FF] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#book-demo"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 bg-[#1434CB] text-white hover:bg-[#1029A8] hover:shadow-lg hover:shadow-[#1434CB]/20 hover:-translate-y-0.5"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1434CB]' : 'text-white'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-[#1434CB] hover:bg-[#EBF0FF] rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.hasDropdown && link.dropdownItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-8 py-2.5 text-gray-500 hover:text-[#1434CB] hover:bg-[#EBF0FF] rounded-lg transition-colors text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </React.Fragment>
            ))}
            <div className="pt-3">
              <a
                href="#book-demo"
                className="block text-center px-6 py-3 text-sm font-semibold rounded-full bg-[#1434CB] text-white"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
