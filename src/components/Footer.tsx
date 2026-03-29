import React from 'react';
import { Mail, MapPin, ArrowUp, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`border-t relative ${
      isDark ? 'bg-dark-950 border-dark-400/50' : 'bg-gray-900 border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="inline-block">
              <img
                src="/logo-horizontal-black_text.png"
                alt="Starz Security"
                style={{
                  height: '200px',
                  width: '200px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </a>
            <p className="text-gray-400 font-body leading-relaxed text-sm max-w-md">
              At Starz Security, our mission is to provide exceptional security services with a focus on professionalism, reliability, and trust. We offer tailored solutions that meet the unique needs of each client.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links + Services combined */}
          <div>
            <h4 className="text-white font-bold font-heading text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary font-semibold font-body transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold font-heading text-lg mb-5 mt-8">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Bodyguarding',
                'Security Guarding',
                'Event Security',
                'Retail Security',
                'Residential Security',
                'Manned Guarding',
                'International Security',
                'Chauffeur Service',
                'Reception Security',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary font-semibold font-body transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-heading text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:mail@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold font-body text-sm">mail@example.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold font-body text-sm">United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-body">
            © {new Date().getFullYear()} Starz Security. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
