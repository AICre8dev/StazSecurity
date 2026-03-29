import React from 'react';
import { Cloud, Bell, Fingerprint, ArrowRight } from 'lucide-react';

export default function CloudStorage() {
  const items = [
    {
      icon: Cloud,
      title: 'Cloud CCTV Storage',
      desc: 'Store your CCTV footage in secure, encrypted cloud servers — accessible anytime via mobile or desktop. Popular in London, Manchester & Sheffield.',
    },
    {
      icon: Bell,
      title: 'Smart Alarm Integration',
      desc: 'Seamlessly link CCTV and smart alarm systems with instant alerts. Ideal for homes and commercial sites in Birmingham, Bristol, and Glasgow.',
    },
    {
      icon: Fingerprint,
      title: 'Access Control Systems',
      desc: 'Manage entry with keyless access, facial recognition & mobile unlocking — trusted by businesses in Leeds, Liverpool, and Edinburgh.',
    },
  ];

  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Storage & Smart Security
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            Protecting Homes & Businesses with{' '}
            <span className="text-primary">Advanced Surveillance</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            We provide integrated CCTV systems, cloud storage, and access control to clients across London, Birmingham, Manchester, Leeds, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group text-center bg-dark-700/50 border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
