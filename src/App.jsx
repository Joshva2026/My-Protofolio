import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scrollspy & Scroll Reveal logic via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // IntersectionObserver for revealing sections on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -80px 0px' 
      }
    );
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#18181B] flex flex-col selection:bg-[#EEF2FF] selection:text-[#4F46E5] relative">
      {/* Decorative Floating Background Globs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-orb glow-orb-indigo -translate-y-12 translate-x-12"></div>
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] glow-orb glow-orb-teal -translate-x-24"></div>
      <div className="absolute bottom-[30%] right-0 w-[550px] h-[550px] glow-orb glow-orb-indigo translate-x-12"></div>
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] glow-orb glow-orb-teal -translate-y-12"></div>

      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        
        <div className="reveal-section">
          <About />
        </div>
        
        <div className="reveal-section">
          <Skills />
        </div>
        
        <div className="reveal-section">
          <Projects />
        </div>
        
        <div className="reveal-section">
          <Internship />
        </div>
        
        <div className="reveal-section">
          <Education />
        </div>
        
        <div className="reveal-section">
          <Certifications />
        </div>
        
        <div className="reveal-section">
          <CurrentFocus />
        </div>
        
        <div className="reveal-section">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
