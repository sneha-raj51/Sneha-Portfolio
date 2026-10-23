import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Smooth client feedback
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="contact-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full mb-3">
          // 06 · INITIATE CONTACT
        </span>
        <h2 
          id="contact-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Let's Build Something Meaningful
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Currently open to software engineering internships, collaborative freelance development, and technical dialogues.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Reach Out Directly
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Whether you have an internship opening, a project idea, or would like to discuss full-stack engineering, feel free to drop a message.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] font-mono uppercase text-zinc-500">Email Address</p>
                  <p className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                    {personalData.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Timezone */}
            <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Greater Noida / Delhi NCR, India (IST · UTC+5:30)</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Verified Profiles
            </span>
            <div className="grid grid-cols-1 gap-2 pt-1">
              <a 
                href={personalData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-violet-500/30 transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5 text-zinc-300 group-hover:text-white">
                  <Github className="w-4 h-4 text-violet-400" />
                  <span className="font-mono">github.com/sneha-raj51</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href={personalData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-violet-500/30 transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5 text-zinc-300 group-hover:text-white">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-mono">linkedin.com/in/sneha-rajput</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href={personalData.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-violet-500/30 transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5 text-zinc-300 group-hover:text-white">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="font-mono">instagram.com/yantra.labs</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-white/10 relative">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Message Prepared!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>! You can also connect directly via email at <span className="text-violet-300 font-mono">{personalData.email}</span>.
              </p>
              <div className="pt-4 flex gap-3">
                <a
                  href={`mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sneha,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                  className="btn-primary text-xs !py-2.5 !px-5"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary text-xs !py-2.5 !px-4"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Note
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Subject / Opportunity Type
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Internship Opportunity / Freelance Project / Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your team, project requirements, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">
                  Respects your privacy. Response within 24–48 hours.
                </span>
                <button
                  type="submit"
                  className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
                >
                  <span>Submit Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
