import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="education-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full mb-3">
          // 05 · ACADEMIC FOUNDATION
        </span>
        <h2 
          id="education-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Education & Continuous Learning
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Grounding practical engineering capabilities in foundational computer science principles.
        </p>
      </div>

      {/* Main Education Showcase Card */}
      <div className="glass-panel rounded-3xl border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-violet-500/30 transition-all">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {educationData.degree} in {educationData.major}
                </h3>
                <p className="text-zinc-300 font-medium text-sm sm:text-base mt-1">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.timeline}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{educationData.location}</span>
              </span>
            </div>
          </div>

          {/* Description & Academic Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-violet-400" />
                <span>Program Trajectory</span>
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {educationData.description}
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Expected Graduation:</span>
                  <span className="font-mono text-violet-300 font-semibold">2028</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Current Status:</span>
                  <span className="font-mono text-emerald-400">Full-Time Undergraduate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Focus:</span>
                  <span className="font-mono text-zinc-200">Full-Stack & Intelligent Systems</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-300">
                Academic & Practical Milestones
              </h4>
              <div className="space-y-3">
                {educationData.highlights.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
