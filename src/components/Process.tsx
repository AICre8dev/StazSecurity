import React from 'react';
import { ShieldCheck, Siren, Castle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: ShieldCheck,
      title: 'Peace of Mind',
      desc: 'Enjoy 24/7 surveillance and rapid-response protection, giving you confidence that your home or business is always under watch.',
    },
    {
      num: '02',
      icon: Siren,
      title: 'Threat Defense',
      desc: 'Our advanced security systems detect threats early and respond fast — from smart alarms to K9 dog handlers and guard services.',
    },
    {
      num: '03',
      icon: Castle,
      title: 'Digital Fortress',
      desc: 'With high-resolution IP cameras, cloud-based storage, and real-time alerts, we turn your property into a fully secured digital stronghold.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Work Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            How We <span className="text-primary">Secure Your Property</span> Across the UK
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            With expert teams based in London, Birmingham, Leeds, and Manchester, we deliver professional CCTV installation, smart surveillance, and rapid response security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              <div className="bg-dark-700/50 border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1 relative">
                <div className="absolute -top-5 -left-2 text-7xl font-black text-primary/10 select-none">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
