import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Instagram,
  Sparkles
} from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactProps {
  onOpenWhatsApp: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New App Development Inquiry',
    message: '',
    budget: 'Rs. 25,000 - 50,000'
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mayankchakradhari355@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toLocaleTimeString()
    };

    // Save to localStorage for demo persistence
    const existing = JSON.parse(localStorage.getItem('mayank_contact_messages') || '[]');
    localStorage.setItem('mayank_contact_messages', JSON.stringify([newMessage, ...existing]));

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: 'New App Development Inquiry',
      message: '',
      budget: 'Rs. 25,000 - 50,000'
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-section" className="relative py-16 md:py-24 bg-slate-900/90 text-slate-100 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Build Your Flutter App
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Have a project idea or need a full-stack Flutter developer? Get in touch for fast, affordable, high-quality development.
          </p>
        </motion.div>

        {/* Grid: Form on Left, Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl"
          >
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center space-y-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-emerald-200"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-emerald-600/30">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Thank You! Message Sent.</h3>
                <p className="text-sm text-slate-300">
                  Mayank Kumar received your message and will reply within 2-4 hours. You can also chat directly on WhatsApp for instant response!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Direct Chat</span>
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                <h3 className="text-lg font-bold text-white mb-2">
                  Send a Direct Project Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                    >
                      <option value="Rs. 15,000 - 25,000">Rs. 15,000 - 25,000 (Basic MVP)</option>
                      <option value="Rs. 25,000 - 50,000">Rs. 25,000 - 50,000 (Standard App)</option>
                      <option value="Rs. 50,000+">Rs. 50,000+ (Full E-Commerce/Enterprise)</option>
                      <option value="Hourly / Consultation">Hourly / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Project Requirements / Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your app idea, key features needed, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="btn-submit-contact-form"
                  className="w-full py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/20"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message to Mayank</span>
                </motion.button>

              </form>
            )}

          </motion.div>

          {/* Right: Direct Information & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            
            {/* Quick Contact Box */}
            <div className="bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-white">
                Direct Contact Details
              </h3>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Direct Email</div>
                    <div className="text-sm font-bold text-white">mayankchakradhari355@gmail.com</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Call / Chat */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenWhatsApp}
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-400 uppercase">WhatsApp Instant Chat</div>
                    <div className="text-sm font-bold text-white">+91 80057 56597</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 underline">Chat Now →</span>
              </motion.div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-bold text-white">Sanganer, Jaipur, Rajasthan, India</div>
                </div>
              </div>

              {/* Social Profiles */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Social Media:
                </h4>
                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/MayankKumar355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-2 text-xs font-bold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/mayank-kumar355/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-blue-600/20"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com/mayankflutterdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-2xl bg-pink-600 text-white hover:bg-pink-500 transition-colors flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-pink-600/20"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </motion.a>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

