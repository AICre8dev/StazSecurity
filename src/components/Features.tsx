import React from 'react';
import {
  Camera,
  Moon,
  RefreshCw,
  Radar,
  Activity,
  ShieldCheck,
  CloudRain,
  BatteryCharging,
} from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Camera, title: 'Smart IP Camera', desc: 'High-definition cameras with remote access and intelligent monitoring features.' },
    { icon: Moon, title: 'Night Vision Surveillance', desc: 'Crystal-clear footage even in complete darkness for 24/7 protection.' },
    { icon: RefreshCw, title: 'Real-Time Data Sync', desc: 'Instantly syncs footage to cloud or devices for seamless monitoring.' },
    { icon: Radar, title: '360° Motion Detection', desc: 'Detects and tracks movement in all directions with full area coverage.' },
    { icon: Activity, title: 'Advanced Motion Sensor', desc: 'Alerts you instantly to unusual movement with smart sensitivity controls.' },
    { icon: ShieldCheck, title: 'Verified Security Protocols', desc: 'Ensures secure access and data integrity through trusted systems.' },
    { icon: CloudRain, title: 'Weatherproof CCTV System', desc: 'Built to perform in rain, dust, and extreme conditions.' },
    { icon: BatteryCharging, title: 'Backup Power', desc: 'Keeps your security system running during power cuts or outages.' },
  ];

  return (
    <section id="features" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            Advanced CCTV Surveillance Systems for{' '}
            <span className="text-primary">24/7 Protection</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Trusted by homes and businesses in London, Manchester, and Birmingham. We use cutting-edge tools, expert staff, and advanced security systems to protect your property.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-dark-700/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:bg-dark-600/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
