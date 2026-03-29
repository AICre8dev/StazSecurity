import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface CTAProps {
  isDark: boolean;
}

export default function CTA({ isDark }: CTAProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
          alt="Professional security"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-dark-900/90'
            : 'bg-white/85'
        }`} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-primary fill-primary" />
          ))}
        </div>

        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Ready to Secure Your{' '}
          <span className="text-primary">Peace of Mind?</span>
        </h2>

        <p className={`text-lg font-body mt-6 max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Whether you need personal bodyguards, event security, or round-the-clock manned guarding, Starz Security has you covered. Get in touch today for a free consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold font-body px-10 py-4 rounded-lg transition-all hover:shadow-xl hover:shadow-primary/30 text-lg uppercase tracking-wider"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:mail@example.com"
            className={`inline-flex items-center justify-center gap-2 border-2 border-primary/40 hover:border-primary font-bold font-body px-10 py-4 rounded-lg transition-all hover:bg-primary/5 text-lg ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
