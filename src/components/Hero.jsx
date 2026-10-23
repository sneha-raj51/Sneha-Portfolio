import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './SocialIcons';
import { personalData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const portraitWrapperRef = useRef(null);
  const portraitImgRef = useRef(null);
  const canvasRef = useRef(null);
  const textGroupRef = useRef(null);

  useEffect(() => {
    // 1. Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (portraitWrapperRef.current) {
        portraitWrapperRef.current.style.opacity = '1';
        portraitWrapperRef.current.style.clipPath = 'inset(0% 0% 0% 0%)';
      }
      if (portraitImgRef.current) {
        portraitImgRef.current.style.transform = 'scale(1)';
        portraitImgRef.current.style.opacity = '1';
      }
      return;
    }

    // 2. Entrance Animation via GSAP Context
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Initial visual states
      gsap.set(portraitWrapperRef.current, {
        clipPath: 'inset(100% 0% 0% 0%)',
        opacity: 0,
        y: 35
      });

      gsap.set(portraitImgRef.current, {
        scale: 1.08
      });

      // Staggered Typography Entrance
      tl.from('.hero-badge-anim', {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 0.15
      })
      .from('.hero-title-anim', {
        opacity: 0,
        y: 28,
        duration: 1,
        stagger: 0.1
      }, '-=0.5')

      // Cinematic Portrait Reveal
      .to(portraitWrapperRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.inOut'
      }, '-=0.8')
      .to(portraitImgRef.current, {
        scale: 1,
        duration: 1.6,
        ease: 'power3.out'
      }, '<')

      // Supporting narrative & CTAs
      .from('.hero-lead-anim', {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, '-=0.9')
      .from('.hero-cta-anim', {
        opacity: 0,
        y: 15,
        duration: 0.7,
        stagger: 0.08
      }, '-=0.6')
      .from('.hero-footer-anim', {
        opacity: 0,
        y: 12,
        duration: 0.7
      }, '-=0.4');

    }, heroRef);

    // 3. Scroll-Linked Pixel-Disintegration Engine
    let scrollTriggerInstance = null;
    let tiles = [];
    let isDisintegrationReady = false;
    let cachedSource = null;

    const canvas = canvasRef.current;
    const imgElement = portraitImgRef.current;
    if (!canvas || !imgElement) return () => ctx.revert();

    // Source image object for high-performance canvas sampling
    const sourceImg = new Image();
    sourceImg.src = imgElement.src;

    const buildPixelGrid = () => {
      if (!canvas || !sourceImg.complete || sourceImg.naturalWidth === 0) return;

      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      // Match object-cover object-top sampling
      const naturalW = sourceImg.naturalWidth;
      const naturalH = sourceImg.naturalHeight;
      const containerRatio = rect.width / rect.height;
      const imgRatio = naturalW / naturalH;

      let renderW, renderH, cropX, cropY;
      if (imgRatio > containerRatio) {
        renderH = naturalH;
        renderW = naturalH * containerRatio;
        cropX = (naturalW - renderW) / 2;
        cropY = 0;
      } else {
        renderW = naturalW;
        renderH = naturalW / containerRatio;
        cropX = 0;
        cropY = 0;
      }

      // Tile sizing: slightly larger on mobile for maximum 60fps performance
      const isMobile = rect.width < 380;
      const tileSize = isMobile ? 18 : 13;
      const cols = Math.ceil(rect.width / tileSize);
      const rows = Math.ceil(rect.height / tileSize);

      tiles = [];
      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.45;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * tileSize;
          const y = r * tileSize;
          const w = Math.min(tileSize, rect.width - x);
          const h = Math.min(tileSize, rect.height - y);

          const sx = cropX + (x / rect.width) * renderW;
          const sy = cropY + (y / rect.height) * renderH;
          const sw = (w / rect.width) * renderW;
          const sh = (h / rect.height) * renderH;

          // Normalized coordinates for dispersion waves
          const normY = y / rect.height; // 0 (top) to 1 (bottom)
          const normDistX = Math.abs(x - centerX) / (rect.width * 0.5);

          // Deterministic pseudo-random seed to prevent re-render jumps
          const pseudoRandom = ((c * 23 + r * 47 + (c ^ r) * 13) % 100) / 100;
          
          // Organic disintegration threshold: bottom edges dissolve first, center face dissolves later
          const threshold = 0.04 + (1 - normY) * 0.42 + normDistX * 0.18 + pseudoRandom * 0.22;
          const duration = 0.28 + pseudoRandom * 0.12;

          // Outward radial & upward drifting trajectories
          const angle = Math.atan2(y - centerY, x - centerX) + (pseudoRandom - 0.5) * 0.8;
          const driftSpeed = 45 + pseudoRandom * 85;
          const vx = Math.cos(angle);
          const vy = Math.sin(angle);
          const floatY = -35 - pseudoRandom * 45; // Gentle upward drift
          const maxRot = (pseudoRandom - 0.5) * 1.4;

          tiles.push({
            x, y, w, h,
            sx, sy, sw, sh,
            threshold,
            duration,
            vx, vy,
            driftSpeed,
            floatY,
            maxRot
          });
        }
      }

      cachedSource = {
        dpr,
        width: rect.width,
        height: rect.height
      };

      isDisintegrationReady = true;
    };

    const drawFrame = (progress) => {
      if (!canvas || !isDisintegrationReady || !cachedSource) return;
      const ctx2d = canvas.getContext('2d');
      if (!ctx2d) return;

      const { dpr } = cachedSource;

      // Resting state at page top: show crisp static img, zero canvas overhead
      if (progress <= 0.005) {
        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.opacity = '0';
        if (imgElement) imgElement.style.opacity = '1';
        return;
      }

      // Fully dissolved at bottom of hero section: clean exit
      if (progress >= 0.96) {
        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.opacity = '0';
        if (imgElement) imgElement.style.opacity = '0';
        return;
      }

      // Active Disintegration State
      canvas.style.opacity = '1';
      // Seamlessly fade out base image during initial scroll transition
      if (imgElement) {
        imgElement.style.opacity = String(Math.max(0, 1 - (progress - 0.005) * 7));
      }

      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      ctx2d.save();
      ctx2d.scale(dpr, dpr);

      const totalTiles = tiles.length;
      for (let i = 0; i < totalTiles; i++) {
        const t = tiles[i];

        if (progress < t.threshold) {
          // Pixel tile is intact
          ctx2d.drawImage(sourceImg, t.sx, t.sy, t.sw, t.sh, t.x, t.y, t.w, t.h);
        } else {
          // Pixel tile is dispersing
          const localProgress = Math.min(1, (progress - t.threshold) / t.duration);
          
          if (localProgress < 1) {
            // Cubic ease-out dispersion
            const ease = 1 - Math.pow(1 - localProgress, 3);
            const curX = t.x + (t.vx * ease) * t.driftSpeed;
            const curY = t.y + (t.vy * ease) * t.driftSpeed + (t.floatY * ease);
            const scale = Math.max(0, 1 - ease * 0.85);
            const alpha = Math.max(0, 1 - ease * 1.05);
            const rot = t.maxRot * ease;

            ctx2d.save();
            ctx2d.globalAlpha = alpha;
            ctx2d.translate(curX + t.w / 2, curY + t.h / 2);
            if (rot !== 0) ctx2d.rotate(rot);
            if (scale !== 1) ctx2d.scale(scale, scale);
            ctx2d.drawImage(sourceImg, t.sx, t.sy, t.sw, t.sh, -t.w / 2, -t.h / 2, t.w, t.h);
            ctx2d.restore();
          }
        }
      }

      ctx2d.restore();
    };

    sourceImg.onload = () => {
      buildPixelGrid();

      // Connect with GSAP ScrollTrigger
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom 15%',
        scrub: 0.5,
        onUpdate: (self) => {
          drawFrame(self.progress);
        }
      });
    };

    sourceImg.onerror = () => {
      console.warn('Portrait asset could not be loaded into disintegration canvas.');
    };

    if (sourceImg.complete) {
      sourceImg.onload();
    }

    // Debounced resize handler for responsive recalibration
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildPixelGrid();
        if (scrollTriggerInstance) {
          scrollTriggerInstance.refresh();
          drawFrame(scrollTriggerInstance.progress);
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      ctx.revert();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Typography & Intent */}
        <div ref={textGroupRef} className="lg:col-span-7 flex flex-col text-left z-10">
          
          {/* Status Pill Badge */}
          <div className="hero-badge-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill border border-violet-500/20 text-xs font-medium text-zinc-300 mb-6 shadow-lg shadow-violet-950/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-zinc-200">
              {personalData.status}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-violet-400 font-mono text-[11px]">
              GNIOT
            </span>
          </div>

          {/* Kicker & Primary Title */}
          <div className="space-y-2 mb-5">
            <p className="hero-title-anim text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-violet-400 font-semibold">
              {personalData.name}
            </p>
            
            <h1 className="hero-title-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              {personalData.title}
            </h1>
          </div>

          {/* Supporting Headline */}
          <p className="hero-title-anim text-xl sm:text-2xl md:text-3xl font-medium text-zinc-200 tracking-tight leading-snug mb-5">
            "{personalData.headline}"
          </p>

          {/* Narrative Lead */}
          <p className="hero-lead-anim text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8 font-normal">
            Computer Science undergraduate at Greater Noida Institute of Technology (2028). 
            Engineering high-performance web applications, modern AI-assisted workflows, and interactive digital interfaces with clean code and refined aesthetics.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-cta-anim flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            <a 
              href="#projects" 
              className="btn-primary group"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="btn-secondary group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Profiles & Content Reference */}
          <div className="hero-cta-anim flex flex-wrap items-center gap-2.5 text-xs text-zinc-400 mb-8">
            <a 
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-violet-500/40 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5 text-violet-400" />
              <span>GitHub</span>
            </a>

            <a 
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-violet-500/40 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a 
              href={personalData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-violet-500/40 hover:text-white transition-all hover:-translate-y-0.5"
              title="On-camera tech content creation for brother's page @yantra.labs"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@yantra.labs Content</span>
            </a>
          </div>

          {/* Core Stack Strip */}
          <div className="hero-footer-anim pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="text-zinc-500 font-sans uppercase tracking-widest text-[10px] mr-1">Stack:</span>
            {['React', 'Node.js', 'Python', 'Tailwind CSS', 'RESTful APIs', 'Creative UI'].map((item) => (
              <span 
                key={item}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Large Editorial Portrait with Pixel Disintegration */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
          
          {/* Ambient violet aura behind the portrait */}
          <div 
            className="absolute inset-0 max-w-[380px] h-[480px] mx-auto lg:ml-auto lg:mr-0 bg-violet-600/20 rounded-full blur-[110px] pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Editorial Portrait Container */}
          <div 
            ref={portraitWrapperRef}
            className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-violet-950/30 group"
            style={{ willChange: 'transform, clip-path, opacity' }}
          >
            {/* Top metadata badge */}
            <div className="absolute top-3.5 left-3.5 z-30 font-mono text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-zinc-300 flex items-center gap-1.5 pointer-events-none">
              <span className="text-violet-400 font-bold">01</span>
              <span className="text-zinc-500">//</span>
              <span>PRESENCE</span>
            </div>

            {/* Bottom floating role tag */}
            <div className="absolute bottom-4 right-4 z-30 font-mono text-[10px] sm:text-[11px] bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-violet-500/30 text-zinc-200 flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Dev · CSE '28</span>
            </div>

            {/* Aspect Ratio Box with Image & Canvas Overlay */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img 
                ref={portraitImgRef}
                src="/images/sneha-portrait.png" 
                alt="Sneha Rajput — Full-Stack Developer and Computer Science undergraduate at GNIOT"
                width={782}
                height={1024}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700"
              />

              {/* High-Performance Canvas for Scroll-Linked Pixel Disintegration */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-300"
                style={{ opacity: 0 }}
                aria-hidden="true"
              />

              {/* Seamless feathering gradient overlay at bottom to melt softly into the dark charcoal canvas */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-85 pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Gentle side vignette for cinematic edge refinement */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 via-transparent to-[#09090b]/20 pointer-events-none z-20"
                aria-hidden="true"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
