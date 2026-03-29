import React, { useState } from 'react';
import {
  UserCheck,
  Shield,
  PartyPopper,
  ShoppingBag,
  Home,
  Users,
  Globe,
  Car,
  Building,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const services = [
  {
    icon: UserCheck,
    title: 'Bodyguarding Service',
    short: 'Personalized protection from highly trained security professionals.',
    full: 'Our bodyguarding services offer personalized protection from highly trained security professionals who assess risks and intervene to prevent conflicts. Our experienced team provides tailored solutions to meet unique client needs for high-profile public appearances, business trips, and other safety concerns. Trust us to provide exceptional service and peace of mind knowing you\'re in safe hands.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    icon: Shield,
    title: 'Security Guarding',
    short: 'SIA licensed guards ensuring all parts of your business are secure.',
    full: 'All our security staff are SIA licensed and trained to ensure all parts of your business are protected without causing disruption or interference. Our security teams will work to meet your specific business needs and preferences. Our security guards are focused on making your business environment as secure as could reasonably be expected, enabling you to build your business with no concerns over potential security risks.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
  },
  {
    icon: PartyPopper,
    title: 'Event Security',
    short: 'SIA trained guards for venues, concerts, and private events.',
    full: 'Here at Starz Security we are able to provide SIA trained guards to deal with any issues that may arise at your venues. While also maintaining the security of your venue, our guards assist with other tasks such as welcoming guests, ticket inspection, checking bags, directing guests to their seats, crowd management, performing first aid and parking management.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    icon: ShoppingBag,
    title: 'Retail Security',
    short: 'Safeguarding assets and ensuring a safe shopping environment.',
    full: 'In the realm of retail security, the role of security guard services has become increasingly vital for safeguarding assets and ensuring a safe shopping environment. Security guards not only deter potential shoplifters and vandalism but also enhance the overall customer experience by providing visible reassurance. These professionals are trained to handle various security challenges, from monitoring CCTV systems to managing crowd control during peak hours.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    icon: Home,
    title: 'Residential Security',
    short: 'Professional security enhancing safety and peace of mind at home.',
    full: 'Residential security is a paramount concern for homeowners, and the presence of a professional security guard service can greatly enhance the safety and peace of mind within a community. Trained security personnel not only monitor the premises but also deter potential threats through their visible presence. With expertise in handling various security scenarios, these guards provide regular patrols, access control, and immediate response to any disturbances.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Manned Guarding',
    short: 'Visible and effective presence to deter criminal activities.',
    full: 'Manned guarding plays a crucial role in the landscape of security services, providing a visible and effective presence to deter criminal activities and ensure the safety of individuals and property. Security guard services incorporating manned guarding employ trained professionals who not only monitor premises but also engage with the public, offering assistance and addressing issues proactively.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80',
  },
  {
    icon: Globe,
    title: 'International Security',
    short: 'Comprehensive security solutions for global operations.',
    full: 'International security plays a crucial role in the effectiveness of security guard services, particularly in an increasingly interconnected world. With the rise of global threats such as terrorism, cybercrime, and transnational crime, security guard services must adapt to a broader spectrum of challenges. By implementing comprehensive training programmes and employing advanced technology, security guards are better equipped to respond to international security concerns.',
    image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=600&q=80',
  },
  {
    icon: Car,
    title: 'Chauffeur Service',
    short: 'Luxurious transportation with heightened safety and security.',
    full: 'Chauffeur services are becoming increasingly popular as an integral part of security guard services in the UK. These services not only offer clients luxurious transportation but also ensure a heightened level of safety and security during travels. Trained chauffeurs are often well-versed in security protocols, enabling them to navigate potential risks while providing a seamless driving experience. Whether for corporate executives, VIPs, or high-profile individuals, our chauffeur service combines luxury with complete peace of mind.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
  },
  {
    icon: Building,
    title: 'Reception Security',
    short: 'Vigilant and approachable security at your front desk.',
    full: 'Reception security plays a pivotal role in the overall effectiveness of a security guard service, particularly in environments where safeguarding personnel and assets is paramount. The reception area often serves as the first point of contact for both visitors and employees, making it essential for security personnel to be vigilant and approachable.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

export default function Services({ isDark }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-dark-900' : 'bg-gray-50'
    }`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold font-body uppercase tracking-[0.2em] text-sm">
            What We Offer
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading mt-4 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className="text-primary">Services</span>
          </h2>
          <p className={`text-lg font-body mt-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We offer tailored security solutions to meet the unique needs of every client. From personal protection to large-scale event security, our SIA-trained professionals deliver excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl border ${
                  isDark
                    ? 'bg-gradient-to-b from-dark-600/80 to-dark-700/80 border-white/5 hover:border-primary/30 hover:shadow-primary/5'
                    : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-primary/10'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute top-4 right-4 text-white/40 font-black font-heading text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className={`text-xl font-bold font-heading leading-tight ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`font-body leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {isExpanded ? service.full : service.short}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className="inline-flex items-center gap-2 text-primary font-bold font-body text-sm hover:gap-3 transition-all"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
