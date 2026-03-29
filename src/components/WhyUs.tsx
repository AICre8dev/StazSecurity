import React from 'react';
import { Shield, Eye, Zap, HeartHandshake, Lock, Headphones } from 'lucide-react';

interface WhyUsProps {
  isDark: boolean;
}

export default function WhyUs({ isDark }: WhyUsProps) {
  const reasons = [
    {
      icon: Shield,
      title: 'SIA Licensed',
      desc: 'All our security staff are fully SIA licensed and undergo rigorous training to meet the highest industry standards.',
    },
    {
      icon: Eye,
      title: 'Vigilant & Proactive',
      desc: 'Our guards don\'t just react — they anticipate threats and take proactive measures to prevent incidents before they occur.',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      desc: 'With teams positioned across the UK, we guarantee swift response times to any security situation or emergency.',
    },
    {
      icon: HeartHandshake,
      title: 'Tailored Solutions',
      desc: 'Every client is unique. We design bespoke security plans that align perfectly with your specific requirements and budget.',
    },
    {
      icon: Lock,
      title: 'Trusted & Reliable',
      desc: 'Built on a foundation of trust, our clients rely on us for consistent, dependable security services day and night.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      desc: 'Our operations centre is staffed around the clock, ensuring you always have access to expert security support when needed.',
    },
  ];

  return (
    <section id="why-us" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-dark-900' : 'bg-gray-50'
    }`}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold font-body uppercase tracking-[0.2em] text-sm">
            Why Choose Us
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading mt-4 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Your Safety is Our{' '}
            <span className="text-primary">Priority</span>
          </h2>
          <p className={`text-lg font-body mt-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We go above and beyond to ensure every client receives world-class security services backed by experience, training, and unwavering dedication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl text-center border ${
                isDark
                  ? 'bg-dark-700/50 border-white/5 hover:border-primary/30 hover:shadow-black/20'
                  : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-primary/10'
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className={`font-bold font-heading text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {reason.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
