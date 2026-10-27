import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight, MessageSquare, Loader2, AlertCircle, Info } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from './SocialIcons';
import { personalData } from '../data/portfolioData';
import { sendContactMessage, validateContactForm, createMailtoUrl, getContactConfig } from '../services/contactService';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: false
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'unconfigured' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalData.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personalData.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error as user types
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage('');

    // Validate inputs
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }
    setFieldErrors({});

    // Check if delivery service is configured
    const config = getContactConfig();
    if (!config.isConfigured) {
      setSubmitStatus('unconfigured');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(formData);
      if (result.success) {
        setSubmitStatus('success');
      } else if (result.notConfigured) {
        setSubmitStatus('unconfigured');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to deliver message. You can send it directly via email below.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'An unexpected network error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      aria-labelledby="contact-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <h2 
          id="contact-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Let's Build Something Meaningful
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Currently open to software engineering internships, junior developer roles, and collaborative projects.
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

            {/* Email Copy & Display Box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono uppercase text-zinc-500">Email Address</p>
                  <a
                    href={`mailto:${personalData.email}`}
                    title={`Send email to ${personalData.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-violet-300 transition-colors font-medium select-all break-all sm:break-normal block"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="self-end sm:self-center px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
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
              Online Profiles
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
          {submitStatus === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Message Delivered!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>! Your message has been sent directly to my inbox. I will review it and reply within 24–48 hours.
              </p>
              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
                  }}
                  className="btn-primary text-xs !py-2.5 !px-5"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : submitStatus === 'unconfigured' ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 flex items-center justify-center">
                <Info className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Email Delivery Awaiting Access Key
              </h3>
              <p className="text-zinc-300 text-sm max-w-md leading-relaxed">
                An email delivery key (like free <span className="text-violet-300 font-mono">Web3Forms</span>) has not yet been set in <span className="font-mono text-zinc-200">.env.local</span>.
              </p>
              
              {/* Preserved message preview */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left max-w-md w-full text-xs text-zinc-300 space-y-1.5">
                <p className="font-semibold text-white">Your message is preserved:</p>
                <p className="text-zinc-400 font-mono text-[11px] truncate">
                  <span className="text-zinc-500">Subject:</span> {formData.subject || 'Portfolio Inquiry'}
                </p>
                <p className="text-zinc-300 text-xs italic line-clamp-3 bg-black/30 p-2 rounded border border-white/5">
                  "{formData.message}"
                </p>
              </div>

              <p className="text-xs text-zinc-400 max-w-md">
                You can send this message right now via your default email application with one click:
              </p>

              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={createMailtoUrl(formData)}
                  className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-secondary text-xs !py-2.5 !px-4"
                >
                  Edit Message
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 text-left text-[11px] text-zinc-400 max-w-md w-full space-y-1 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <p className="text-violet-300 font-medium">To enable automatic inbox delivery:</p>
                <p>1. Get a free access key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">web3forms.com</a> (using your Gmail).</p>
                <p>2. Create a <span className="font-mono text-zinc-200">.env.local</span> file and set <span className="font-mono text-zinc-200">VITE_WEB3FORMS_ACCESS_KEY=your_key</span>.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                  <h3 className="text-lg font-bold text-white">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  * Required fields
                </span>
              </div>

              {/* Error banner */}
              {submitStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                  <div className="flex items-center justify-end pt-1">
                    <a
                      href={createMailtoUrl(formData)}
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-rose-500/20 hover:bg-rose-500/30 px-3 py-1 rounded-lg transition-colors font-mono"
                    >
                      <span>Send via Email Client Instead</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Honeypot field for bot protection (hidden) */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                checked={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-white placeholder-zinc-500 text-sm focus:outline-none transition-all ${
                      fieldErrors.name
                        ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-white placeholder-zinc-500 text-sm focus:outline-none transition-all ${
                      fieldErrors.email
                        ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Subject / Opportunity Type
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="e.g. Internship Opportunity / Freelance Project / Inquiry"
                  value={formData.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Message <span className="text-violet-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="Tell me about your team, project requirements, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-white placeholder-zinc-500 text-sm focus:outline-none transition-all resize-none ${
                    fieldErrors.message
                      ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                  }`}
                />
                {fieldErrors.message && (
                  <p className="text-[11px] font-mono text-rose-400 mt-1">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-[11px] text-zinc-500">
                  Direct delivery to inbox · Response within 24–48 hours
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed self-end sm:self-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
