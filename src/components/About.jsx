import React from 'react';
import { Code, Cpu, Smartphone, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const { about } = personalData;

  const interestCards = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Building responsive, modern applications with React, Node.js, and clean architecture from frontend states to backend APIs."
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Building AI-integrated applications, including career preparation tools and interactive student support chatbots."
    },
    {
      icon: Smartphone,
      title: "Gadget & Tech Content",
      description: "Presenting on-camera smartphone breakdowns and hardware reviews for @yantra.labs, communicating technical features clearly."
    },
    {
      icon: GraduationCap,
      title: "Computer Science Foundation",
      description: "Undergraduate student at GNIOT (2024–2028), learning core CS principles, data structures, and software engineering practices."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="about-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <h2 
          id="about-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Engineering Craft & Visual Storytelling
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Connecting algorithmic thinking, modern web engineering, and accessible communication.
        </p>
      </div>

      {/* Main Grid: Narrative & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Narrative Block */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span>Developer. Undergraduate. Creator.</span>
          </h3>

          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-normal">
            {about.lead}
          </p>

          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              {p}
            </p>
          ))}

          {/* Current Objectives */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-3">
              Current Objectives:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Software Engineering Internships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Freelance Development Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open-Source & Web Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Technical Content & Knowledge Sharing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights / Pillar Card List */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {about.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400">
                  {item.label}
                </span>
                <p className="text-lg font-bold text-white mt-1">
                  {item.value}
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Area Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {interestCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
