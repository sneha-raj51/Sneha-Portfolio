import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './SocialIcons';
import { personalData } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel shadow-2xl shadow-black/50 border-white/10' 
            : 'bg-black/20 backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Brand identity */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-full py-1 px-2"
          aria-label="Sneha Rajput Portfolio Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
            SR
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-violet-300 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium text-zinc-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action & Connect button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 text-zinc-400 border-r border-white/10 pr-3">
            <a 
              href={personalData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={personalData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#contact"
            className="btn-primary text-xs !py-2 !px-4"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm rounded-2xl glass-panel p-4 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <a 
                href={personalData.socials.github}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={personalData.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-xs !py-2 !px-3.5"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
