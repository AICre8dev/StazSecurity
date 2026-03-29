import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

interface StatsProps {
  isDark: boolean;
}

export default function Stats({ isDark }: StatsProps) {
  const stats = [
    { icon: Shield, value: 'SIA', label: 'Licensed Guards' },
    { icon: Users, value: '100+', label: 'Clients Protected' },
    { icon: Clock, value: '24/7', label: 'Security Coverage' },
    { icon: Award, value: '9+', label: 'Service Categories' },
  ];

  return (
    <section className={`relative py-16 border-y ${
      isDark ? 'bg-dark-800 border-dark-400/50' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`font-semibold font-body mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
