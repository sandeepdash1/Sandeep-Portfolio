import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="py-12 px-6 lg:px-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p
              className="text-white font-bold text-xl tracking-tight mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sandeep Dash
            </p>
            <p className="text-zinc-500 text-sm">
              Senior Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-github"
              className="w-10 h-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-linkedin"
              className="w-10 h-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-twitter"
              className="w-10 h-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
