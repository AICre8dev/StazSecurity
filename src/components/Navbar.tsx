import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        scrolled ? 'shadow-lg border-b border-gray-200' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: single row - logo left, nav + buttons right */}
        <div className="hidden lg:flex items-center justify-between" style={{ height: '100px' }}>
          <a href="#home" className="flex items-center group flex-shrink-0">
            <img
              src="/logo-horizontal-black_text.png"
              alt="Starz Security"
              style={{
                height: '280px',
                width: '280px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          <div className="flex items-center gap-6">
            {/* Nav links inline */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold font-body transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full hover:text-primary text-sm text-gray-700"
              >
                {link.label}
              </a>
            ))}

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-gray-100 hover:bg-gray-200 text-gray-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="mailto:mail@example.com"
              className="flex items-center gap-2 text-primary font-bold font-body hover:text-primary-light transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold font-body px-5 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 text-sm uppercase tracking-wider"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex lg:hidden items-center justify-between" style={{ height: '80px' }}>
          <a href="#home" className="flex items-center group flex-shrink-0">
            <img
              src="/logo-horizontal-black_text.png"
              alt="Starz Security"
              style={{
                height: '110px',
                width: '110px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-gray-100 hover:bg-gray-200 text-gray-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-semibold font-body text-lg transition-colors hover:text-primary text-gray-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-primary hover:bg-primary-dark text-white font-bold font-body px-6 py-3 rounded-lg transition-all mt-4 uppercase tracking-wider"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
