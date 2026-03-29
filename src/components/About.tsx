import React from 'react';
import {
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const highlights = [
    { icon: Shield, text: 'SIA Licensed & Trained Guards' },
    { icon: Users, text: 'Tailored Solutions for Every Client' },
    { icon: Award, text: 'Highest Degree of Professionalism' },
    { icon: Clock, text: '24/7 Availability & Rapid Response' },
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-dark-800' : 'bg-white'
    }`}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=500&q=80"
                    alt="Security professional on duty"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80"
                    alt="Security team coordination"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                    alt="Professional security staff"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={`rounded-2xl p-6 text-center border ${
                  isDark
                    ? 'bg-gradient-to-br from-dark-600 to-dark-700 border-white/5'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                }`}>
                  <Star className="w-10 h-10 text-primary fill-primary mx-auto mb-3" />
                  <div className={`text-3xl font-black font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>9+</div>
                  <div className={`text-sm font-body font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Security Services</div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 border rounded-2xl p-4 shadow-2xl ${
              isDark ? 'bg-dark-600 border-primary/20' : 'bg-white border-primary/20 shadow-primary/10'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className={`font-bold font-body text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Always On Duty</div>
                  <div className={`text-xs font-body ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Protecting clients now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold font-body uppercase tracking-[0.2em] text-sm">
                About Us
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading mt-4 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Protecting with{' '}
                <span className="text-primary">Professionalism</span> and Trust
              </h2>
            </div>

            <p className={`text-lg font-body leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              At Starz Security, our mission is to provide exceptional security services to our clients with a focus on professionalism, reliability, and trust. We strive to be the leading provider of bodyguard and security guard services, offering tailored solutions that meet the unique needs of each client.
            </p>

            <p className={`font-body leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our highly trained and experienced security personnel are dedicated to keeping our clients safe and secure. Whether you need personal protection, event security, or comprehensive manned guarding, we deliver with the highest standards of excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`font-semibold font-body text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold font-body px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 uppercase tracking-wider"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
