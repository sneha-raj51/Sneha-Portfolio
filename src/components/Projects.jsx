import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="projects-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full mb-3">
          // 03 · SELECTED WORKS
        </span>
        <h2 
          id="projects-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Featured Engineering Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Full-stack web applications, AI-powered platforms, and interactive user interfaces built with modern tools.
        </p>
      </div>

      {/* Projects Showcase - Stacked Large Cards */}
      <div className="space-y-12 sm:space-y-16">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article 
              key={project.id}
              className="glass-panel rounded-3xl border-white/10 overflow-hidden hover:border-violet-500/30 transition-all duration-300 shadow-xl shadow-black/40 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Project Image Preview with subtle overlay */}
                <div className={`lg:col-span-7 relative overflow-hidden bg-zinc-950 flex items-center justify-center min-h-[300px] sm:min-h-[380px] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview Interface`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top floating index pill */}
                  <div className="absolute top-4 left-4 font-mono text-xs bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-zinc-300 flex items-center gap-1.5">
                    <span className="text-violet-400 font-bold">0{index + 1}</span>
                    <span className="text-zinc-500">//</span>
                    <span>PROJECT</span>
                  </div>

                  {/* Live status badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Demo</span>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-medium">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3 group-hover:text-violet-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Authentic Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        Key Capabilities:
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                        {project.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/5 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
                      aria-label={`Open live preview of ${project.title}`}
                    >
                      <span>Launch Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs !py-2.5 !px-4 inline-flex items-center gap-2"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Codebase</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
