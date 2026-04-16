import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mono-label mb-6"
          >
            Senior Software Engineer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-4xl sm:text-5xl lg:text-7xl text-white mb-8"
          >
            Building Enterprise
            <br />
            <span className="text-zinc-500">Systems That Scale</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          >
            6+ years of experience in full-stack development, API modernization,
            and leading high-performance teams to deliver scalable software
            solutions.
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
            className="flex flex-col items-center text-zinc-500 hover:text-white transition-colors"
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
