import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  const firstName = personalInfo.name.split(' ')[0];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#EAE8E1]/80 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] glow-orb glow-orb-teal -translate-x-32 translate-y-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Container */}
        <div className="bg-[#FAF9F5]/70 rounded-[32px] border border-[#EAE8E1] p-8 sm:p-12 lg:p-14 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden transition-spring hover:border-[#4F46E5]/10">
          
          {/* Left Column: CTA & Quick Contact Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" /> Let's Connect
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight leading-tight">
              Have an idea or opportunity? <br />
              <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">Let's build something meaningful.</span>
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed font-medium">
              I am actively seeking software engineering, AI/ML, and data analytics opportunities. Whether you have a project inquiry or just want to connect, my inbox is open!
            </p>

            {/* Email Card with Copy Action */}
            <div className="p-5 bg-white rounded-2xl border border-[#EAE8E1] shadow-2xs space-y-2.5 transition-spring hover:border-[#4F46E5]/15">
              <div className="text-[10px] text-[#6B7280] font-black uppercase tracking-wider">Direct Email</div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-[#18181B] font-mono break-all selection:bg-[#EEF2FF]">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF9F5] hover:bg-[#EEF2FF] border border-[#EAE8E1] text-xs font-bold text-[#4F46E5] transition-all duration-300 shrink-0 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#0D9488]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#EAE8E1] text-xs font-bold text-[#18181B] hover:border-[#4F46E5]/30 transition-all hover:shadow-subtle hover:-translate-y-0.5 active:scale-95 transition-spring shadow-2xs"
              >
                <Github className="w-4 h-4 text-[#4B5563]" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#EAE8E1] text-xs font-bold text-[#4F46E5] hover:border-[#4F46E5]/30 transition-all hover:shadow-subtle hover:-translate-y-0.5 active:scale-95 transition-spring shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Network</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 lg:p-10 shadow-xs relative z-10 transition-spring hover:shadow-sm">
              <h3 className="text-lg font-black text-[#18181B] mb-5 border-b border-[#EAE8E1] pb-3">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-8 bg-[#EEF2FF] border border-[#4F46E5]/20 rounded-2xl text-center space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#4F46E5] text-white flex items-center justify-center mx-auto font-black text-xl shadow-md">
                    ✓
                  </div>
                  <h4 className="text-base font-black text-[#18181B]">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed">
                    Thank you for reaching out. I'll respond to your message as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-[#18181B] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#EAE8E1] text-sm text-[#18181B] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 focus:bg-white transition-all duration-300 shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-black text-[#18181B] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#EAE8E1] text-sm text-[#18181B] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 focus:bg-white transition-all duration-300 shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black text-[#18181B] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows="3"
                      placeholder={`Hi ${firstName}, I'd like to talk about an opportunity...`}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#EAE8E1] text-sm text-[#18181B] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 focus:bg-white transition-all duration-300 resize-none shadow-inner"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98 cursor-pointer transition-spring"
                  >
                    <span>Send Message</span>
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
