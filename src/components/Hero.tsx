import React from 'react';
import { ArrowRight, Shield, Star, Users, Award } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80"
          alt="Security professional"
          className="w-full h-full object-cover"
        />
        {/* Dark mode: dark overlay | Light mode: deep navy blue overlay like Nexo */}
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-dark-950/95 via-dark-900/90 to-dark-900/70'
            : ''
        }`}
          style={!isDark ? {
            background: 'linear-gradient(135deg, rgba(10, 25, 60, 0.95) 0%, rgba(15, 40, 85, 0.92) 30%, rgba(20, 55, 110, 0.85) 60%, rgba(25, 70, 135, 0.75) 100%)'
          } : undefined}
        />
        {/* Extra blue tint layer for day mode */}
        {!isDark && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(5, 15, 45, 0.6) 0%, rgba(10, 30, 80, 0.3) 50%, transparent 100%)'
            }}
          />
        )}
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle at 1px 1px, rgba(255,106,0,0.5) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className={`absolute top-32 right-20 w-[500px] h-[500px] rounded-full blur-[150px] ${
        isDark ? 'bg-primary/8' : 'bg-blue-400/10'
      }`} />
      <div className={`absolute bottom-20 left-10 w-80 h-80 rounded-full blur-[120px] ${
        isDark ? 'bg-primary/5' : 'bg-blue-300/8'
      }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 backdrop-blur-sm ${
              isDark
                ? 'bg-primary/10 border border-primary/20'
                : 'bg-white/15 border border-white/25'
            }`}>
              <Shield className={`w-4 h-4 ${isDark ? 'text-primary' : 'text-orange-400'}`} />
              <span className={`font-semibold font-body text-sm ${isDark ? 'text-primary' : 'text-orange-400'}`}>SIA Licensed & Trusted</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading leading-[1.1] text-white">
              Securing Your{' '}
              <span className="text-primary relative inline-block">
                Peace of Mind
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8C80 2 220 2 298 8"
                    stroke="#ff6a00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            <p className={`text-lg sm:text-xl max-w-xl leading-relaxed font-body ${
              isDark ? 'text-gray-400' : 'text-blue-100/80'
            }`}>
              At Starz Security we provide exceptional security services with SIA trained guards who operate with the highest degree of professionalism and trust. We are dedicated to keeping our clients safe and secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold font-body px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:shadow-primary/30 text-lg uppercase tracking-wider"
              >
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 border-2 font-bold font-body px-8 py-4 rounded-lg transition-all text-lg text-white ${
                  isDark
                    ? 'border-primary/40 hover:border-primary hover:bg-primary/5'
                    : 'border-white/30 hover:border-white/60 hover:bg-white/10'
                }`}
              >
                Request a Quote
              </a>
            </div>

            {/* Trust indicators */}
            <div className={`flex flex-wrap items-center gap-8 pt-6 border-t ${
              isDark ? 'border-white/5' : 'border-white/15'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-primary/10' : 'bg-white/10'
                }`}>
                  <Shield className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-orange-400'}`} />
                </div>
                <div>
                  <div className="font-bold font-body text-sm text-white">SIA Licensed</div>
                  <div className={`text-xs font-body ${isDark ? 'text-gray-500' : 'text-blue-200/60'}`}>All Guards</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-primary/10' : 'bg-white/10'
                }`}>
                  <Users className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-orange-400'}`} />
                </div>
                <div>
                  <div className="font-bold font-body text-sm text-white">Trusted Team</div>
                  <div className={`text-xs font-body ${isDark ? 'text-gray-500' : 'text-blue-200/60'}`}>Experienced Pros</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-primary/10' : 'bg-white/10'
                }`}>
                  <Award className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-orange-400'}`} />
                </div>
                <div>
                  <div className="font-bold font-body text-sm text-white">UK Wide</div>
                  <div className={`text-xs font-body ${isDark ? 'text-gray-500' : 'text-blue-200/60'}`}>Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Security team meeting"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-8 h-8 text-primary fill-primary" />
                  <div>
                    <div className="text-white font-bold font-heading text-xl">Starz Security</div>
                    <div className="text-primary text-sm font-body">Your Safety is Our Priority</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: 'Bodyguarding', status: 'Premium' },
                    { title: 'Event Security', status: 'Active' },
                    { title: 'Manned Guarding', status: '24/7' },
                    { title: 'Residential', status: 'Trusted' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-200 font-semibold font-body text-sm">{item.title}</span>
                      </div>
                      <span className="text-primary text-[10px] font-bold font-body bg-primary/20 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 bg-primary text-white font-bold font-body px-5 py-2.5 rounded-full text-sm shadow-lg shadow-primary/30">
              ★ Trusted Provider
            </div>
            <div className={`absolute -bottom-5 -left-5 border text-white font-bold font-body px-5 py-2.5 rounded-full text-sm flex items-center gap-2 ${
              isDark ? 'bg-dark-600 border-primary/30' : 'bg-blue-900/80 border-blue-400/30'
            }`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Operational 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
