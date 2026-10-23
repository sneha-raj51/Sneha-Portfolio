import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './SocialIcons';
import { personalData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          {/* Identity & Mission */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-white tracking-tight">
                {personalData.name}
              </span>
              <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                Full-Stack
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md">
              "{personalData.headline}" — B.Tech Computer Science & Engineering undergraduate at GNIOT (Class of 2028).
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#beyond-code" className="hover:text-white transition-colors">Beyond Code</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {CURRENT_YEAR} Sneha Rajput. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={personalData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={personalData.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
