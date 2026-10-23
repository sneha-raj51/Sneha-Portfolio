import React, { useState } from 'react';
import { Layout, Server, Cpu, GraduationCap, Code2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Cpu: Cpu,
  GraduationCap: GraduationCap
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(cat => cat.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="skills-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full mb-3">
          // 02 · TECHNICAL PROFICIENCY
        </span>
        <h2 
          id="skills-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Tools & Technical Foundations
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          A focused stack centered on modern web technologies, AI integrations, and computer science fundamentals.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            All Disciplines
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredCategories.map((group) => {
          const IconComponent = iconMap[group.icon] || Code2;
          return (
            <div 
              key={group.category}
              className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col justify-between group hover:border-violet-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-white/[0.04] border border-white/5 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{group.skills.length} Competencies</span>
                <span className="text-violet-400/80">Active Practice</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
