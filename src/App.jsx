import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ByTheNumbers from './components/ByTheNumbers';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scrollspy via IntersectionObserver
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
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll reveal animation observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.08, 
        rootMargin: '0px 0px -60px 0px' 
      }
    );
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#1A1814] flex flex-col relative selection:bg-[#ECE7F4] selection:text-[#68529B]">
      
      {/* Delicate Framer grid background overlay */}
      <div className="fixed inset-0 framer-grid-bg pointer-events-none z-0 opacity-80"></div>

      {/* Floating Capsule Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        
        <div className="reveal-on-scroll">
          <About />
        </div>
        
        <div className="reveal-on-scroll">
          <ByTheNumbers />
        </div>
        
        <div className="reveal-on-scroll">
          <Experience />
        </div>
        
        <div className="reveal-on-scroll">
          <Projects />
        </div>
        
        <div className="reveal-on-scroll">
          <Education />
        </div>
        
        <div className="reveal-on-scroll">
          <Skills />
        </div>

        <div className="reveal-on-scroll">
          <Reviews />
        </div>

        <div className="reveal-on-scroll">
          <Faq />
        </div>
        
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
