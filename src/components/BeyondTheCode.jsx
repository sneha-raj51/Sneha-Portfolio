import React from 'react';
import { Video, ExternalLink } from 'lucide-react';
import { InstagramIcon as Instagram } from './SocialIcons';
import { contentCreationData } from '../data/portfolioData';

export default function BeyondTheCode() {
  return (
    <section 
      id="beyond-code" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="beyond-code-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full mb-3">
          // 04 · BEYOND THE CODE
        </span>
        <h2 
          id="beyond-code-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Tech & Gadget Content Creation
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Communicating modern hardware, smartphone innovations, and developer tools on camera for <span className="text-violet-300 font-semibold">{contentCreationData.handle}</span>.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="glass-panel rounded-3xl border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Studio Imagery */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/5] bg-zinc-950 border border-white/10 group">
            <img 
              src={contentCreationData.image} 
              alt="Tech Studio & Gadget Creation Setup" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            
            {/* Tag over image */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-mono font-medium text-white tracking-wide">
                  On-Camera Tech Stories
                </span>
              </div>
              <p className="text-[11px] text-zinc-300">
                Studio reviews, phone cameras, and creator hardware
              </p>
            </div>
          </div>

          {/* Details & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono mb-3">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Tech Reference</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {contentCreationData.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                {contentCreationData.relationshipNote}
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Creating on-camera tech content gives me a sharp, user-first perspective on how people adopt technology. Testing new smartphone processors, camera optics, and dev tools keeps me attuned to consumer experience and ergonomic design.
              </p>
            </div>

            {/* Content Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {contentCreationData.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-colors"
                >
                  <h4 className="text-xs font-bold text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Channel Link Card */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-600 to-purple-500 flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contentCreationData.handle}
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    Tech, Gadgets & Hardware Analysis
                  </p>
                </div>
              </div>

              <a 
                href={contentCreationData.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
                aria-label="View Instagram page @yantra.labs"
              >
                <span>View Channel Content</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
