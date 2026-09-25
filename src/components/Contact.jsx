import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto URL to launch default mail client
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-900 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Together</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans">
            I'm always interested in discussing software development, AI/ML, interesting projects, and new opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Social Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100">
                Contact Information
              </h3>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-brand-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Email</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-brand-cyan transition-colors">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-brand-purple/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-brand-purple transition-colors">
                      {personalInfo.contact.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Location</span>
                    <span className="text-sm font-medium text-slate-200">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Direct Connect Links
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-dark-900/90 border border-slate-800 hover:border-brand-cyan/40 hover:text-brand-cyan text-slate-300 text-xs font-semibold transition-all gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-brand-cyan" />
                    <span>Email Me</span>
                  </a>

                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-dark-900/90 border border-slate-800 hover:border-brand-cyan/40 hover:text-brand-cyan text-slate-300 text-xs font-semibold transition-all gap-1.5"
                  >
                    <Linkedin className="w-4 h-4 text-brand-blue" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-dark-900/90 border border-slate-800 hover:border-brand-cyan/40 hover:text-brand-cyan text-slate-300 text-xs font-semibold transition-all gap-1.5"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                Send Me a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Opening your mail client to send message to surajpatil2645@gmail.com!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
