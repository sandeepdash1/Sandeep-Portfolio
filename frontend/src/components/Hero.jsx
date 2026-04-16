import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 hero-gradient"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mono-label mb-6 text-blue-600"
          >
            Senior Software Engineer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-4xl sm:text-5xl lg:text-7xl text-slate-900 mb-8"
          >
            Crafting Scalable
            <br />
            <span className="text-blue-600">Software Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed"
          >
            6+ years of experience in full-stack development, API modernization,
            and leading high-performance teams to deliver enterprise-grade
            software solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              data-testid="hero-cta-primary"
              className="btn-primary text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-secondary"
              className="btn-secondary text-center"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <a
            href="#about"
            data-testid="scroll-indicator"
            className="flex flex-col items-center text-slate-400 hover:text-blue-600 transition-colors"
          >
            <span className="mono-label mb-2">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
