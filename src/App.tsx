import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`font-body transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <Stats isDark={isDark} />
      <Services isDark={isDark} />
      <About isDark={isDark} />
      <WhyUs isDark={isDark} />
      <CTA isDark={isDark} />
      <ContactForm isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
