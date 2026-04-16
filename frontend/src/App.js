import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        handleAnchorClick(e);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Grain overlay (hidden in light mode) */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Header />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
