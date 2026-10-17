import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Let’s make something <em className="italic text-[#4A4640] font-normal">together.</em>
            </h2>
          </div>

          <div className="text-sm font-sans font-medium text-[#8A847B]">
            Inquiries &amp; Collaborations
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details & Direct Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-relaxed">
              I am open to entry-level software development, full-stack, or AI/ML roles and internships. If you have an opportunity or simply want to connect, send a note — I'll reply promptly.
            </p>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/10 shadow-sm space-y-3">
              <div className="font-sans text-xs font-semibold text-[#8A847B] uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#1A1814] hover:text-[#68529B] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF9FC] hover:bg-[#ECE7F4] border border-[#1A1814]/10 text-xs font-sans font-semibold text-[#68529B] transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#33D770]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Status Checklist Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#1A1814]/10">
                <div className="font-sans text-[11px] text-[#8A847B] font-semibold uppercase">Availability</div>
                <div className="font-sans text-xs font-bold text-[#1A1814] mt-1">{personalInfo.availabilityTag}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1A1814]/10">
                <div className="font-sans text-[11px] text-[#8A847B] font-semibold uppercase">Based In</div>
                <div className="font-sans text-xs font-bold text-[#1A1814] mt-1">{personalInfo.location}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1A1814]/10">
                <div className="font-sans text-[11px] text-[#8A847B] font-semibold uppercase">Response</div>
                <div className="font-sans text-xs font-bold text-[#1A1814] mt-1">{personalInfo.responseTime}</div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <div className="font-sans text-xs text-[#8A847B] font-semibold uppercase tracking-wider mb-3">
                Or reach me directly
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:bg-[#FAF9FC] transition-all text-xs font-sans font-semibold text-[#1A1814] shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:bg-[#FAF9FC] transition-all text-xs font-sans font-semibold text-[#68529B] shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#1A1814]/10 shadow-lg relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="font-sans font-bold text-xl text-[#1A1814]">
                  Send a quick note &mdash; <span className="font-serif italic font-normal text-[#68529B]">I'll reply soon.</span>
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#ECE7F4] border border-[#68529B]/20 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#68529B] text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-base text-[#1A1814]">Message sent successfully!</h4>
                  <p className="font-sans text-xs text-[#4A4640]">
                    Thank you for reaching out. I will get back to you shortly at {formState.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-sans text-xs font-semibold text-[#1A1814]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9FC] border border-[#1A1814]/10 focus:border-[#68529B] focus:bg-white focus:outline-hidden text-sm font-sans text-[#1A1814] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-sans text-xs font-semibold text-[#1A1814]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9FC] border border-[#1A1814]/10 focus:border-[#68529B] focus:bg-white focus:outline-hidden text-sm font-sans text-[#1A1814] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-sans text-xs font-semibold text-[#1A1814]">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Entry-Level Role Inquiry / Project Discussion"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9FC] border border-[#1A1814]/10 focus:border-[#68529B] focus:bg-white focus:outline-hidden text-sm font-sans text-[#1A1814] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-sans text-xs font-semibold text-[#1A1814]">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      required
                      placeholder="Tell me about your team, project, or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9FC] border border-[#1A1814]/10 focus:border-[#68529B] focus:bg-white focus:outline-hidden text-sm font-sans text-[#1A1814] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#68529B] hover:bg-[#584485] text-white font-sans font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Send message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
